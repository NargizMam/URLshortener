import express from "express";
import Link from '../models/Links';
import {ApiLink} from "../types";


const linksRouter = express.Router();
linksRouter.get('/:shortUrl', async (req, res) => {
    try{
        const selectLink = await Link.findOne({shortUrl: req.params.shortUrl});
        if(selectLink === null) {
            res.status(404).send({error:'Link not found!'});
        }else{
            res.status(301).redirect(selectLink.originalUrl);
        }

    }catch (e) {
        return res.sendStatus(500);
    }
});
linksRouter.post('/', async (req, res) => {
    let length = '6';
    let uniqueUrl: string = '';
    const uniqueUrlSet = new Set();

    function generateUniqueUrl(length:string) {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        for (let i = 0; i < parseInt(length); i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            uniqueUrl += chars.charAt(randomIndex);
        }
        return uniqueUrl;
    }
    function isUniqueIdUnique(uniqueId:string) {
        return !uniqueUrlSet.has(uniqueId);
    }
    while (!isUniqueIdUnique(uniqueUrl)) {
        uniqueUrl = generateUniqueUrl(length);
    }
    uniqueUrlSet.add(uniqueUrl);
    try{
    const baseUrl = 'httsp://localhost/';
    const originalLink = req.body.originalUrl;
    const generatedLink: string = baseUrl+uniqueUrl;
    const linkData: ApiLink = {
        originalUrl: originalLink,
        shortUrl: generatedLink,
    }
        const link = new Link(linkData);
        await link.save();
        return res.send(linkData);
    } catch (e) {
        return res.status(400).send('Error');
    }

});

export default linksRouter;