import Link from "../models/Links";
import express from "express";

const redirectRouter = express.Router();

redirectRouter.get('/:shortUrl', async (req, res) => {
    try {
        const selectLink = await Link.findOne({shortUrl: req.params.shortUrl});
        if (selectLink === null) {
            res.status(404).send({error: 'Link not found!'});
        } else {
            res.status(301).redirect(selectLink.originalUrl);
        }
    } catch (e) {
        return res.sendStatus(500);
    }
});

export default redirectRouter;