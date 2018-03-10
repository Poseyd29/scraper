const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio")

function scrapeArticles() {

    axios.get('https://www.nytimes.com/')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });


}