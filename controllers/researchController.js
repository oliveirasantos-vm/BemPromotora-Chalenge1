const answer = require('../models/answer');

exports.homepage = (req, res) => {
    res.render('homepage', {titlepage: "Bem Promotora - Responda nossas pesquisas e nos permita te conhecer melhor!"});
};

exports.send = async (req, res) => {
    try{
        const _answer = await answer.create(req.body);
        return res.send(_answer);
    } catch (err){
        return res.status(400).send({error: "Falha ao enviar os dados."});
    }
};

exports.thankyou = (req, res) => {

};

exports.error404 = (req, res) => {
    res.render('404', { titlepage: "Error - 404" });
};