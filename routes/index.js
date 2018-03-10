const express = require("express");
const router = express.Router();
const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio")

router.get("/scrape", function (req, res) {

    axios.get('https://www.nytimes.com/')
        .then(function (response) {

            const $ = cheerio.load(response.data);
            $("article").each(function (i, element) {
                let title = $(this).children(".story-heading").children("a").text().trim();
                let link = $(this).children(".story-heading").children("a").attr("href");
                let description = $(this).children(".summary").text().trim();
                console.log(link);
                console.log(title);
                console.log(description);
                

            });

            res.redirect("/");

        })
        .catch(function (error) {
            console.log(error);
        });


});


let data = [5, 7, 2, 4];
router.get("/", function (req, res) {
    res.render("home", {
        article: data
    })
});






module.exports = router;