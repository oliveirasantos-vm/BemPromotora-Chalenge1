const answer = require('../models/answer');

exports.homepage = (req, res) => {
    res.render('homepage', {titlepage: "Bem Promotora - Responda nossas pesquisas e nos permita te conhecer melhor!"});
};

exports.send = async (req, res) => {
    try{
        const _answer = await answer.create(req.body);
        res.status = 302
        return res.redirect('/obrigado');
    } catch (err){
        return res.status(400).render('error', {titlepage: "Ops...", err: err});
    }
};

exports.thankyou = (req, res) => {
    res.render('thankyoupage', {titlepage: "Obrigado por contribuir para o nosso projeto!"});
};

exports.error404 = (req, res) => {
    res.render('404', { titlepage: "Error - 404" });
};