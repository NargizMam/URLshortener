import express from "express";
import Link from '../models/Links';
import {ApiLink} from "../types";


const linksRouter = express.Router();
linksRouter.get('/:shortUrl', async (req, res) => {
    console.log(req.params)
    try {
        const selectLink = await Link.findOne({shortUrl: req.params.shortUrl});
        console.log(selectLink);
        if (selectLink === null) {
            res.status(404).send({error: 'Link not found!'});
        } else {
            res.status(301).redirect(selectLink.originalUrl);
        }

    } catch (e) {
        return res.sendStatus(500);
    }
});
linksRouter.post('/', async (req, res) => {
    let length = '6';

    const generateUniqueUrl = (length: string) => {
        let uniqueUrl: string = '';

        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        for (let i = 0; i < parseInt(length); i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            uniqueUrl += chars.charAt(randomIndex);
        }
        return uniqueUrl;
    }

    try {
        const baseUrl = 'http://localhost:8000/';
        const code = generateUniqueUrl(length);
        const originalLink = req.body.originalUrl;
        const generatedLink: string = baseUrl + code;
        const linkData: ApiLink = {
            originalUrl: originalLink,
            shortUrl: code,
        }
        const link = new Link(linkData);
        await link.save();
        return res.send({
            originalUrl: originalLink,
            shortUrl: generatedLink,
        });
    } catch (e) {
        return res.status(400).send('Error');
    }

});

export default linksRouter;