const answer = require('../models/answer');

exports.homepage = (req, res) => {
    res.render('homepage', {titlepage: "Bem Promotora - Responda nossas pesquisas e nos permita te conhecer melhor!"});
};

exports.erro404 = (req, res) => {
    res.render('404', { titlepage: "Error - 404" });
}