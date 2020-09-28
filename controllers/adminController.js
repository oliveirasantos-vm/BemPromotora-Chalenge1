const answer = require('../models/answer');

exports.data = async (req, res) => {
    try{
        const answers = await answer.find({});
        return res.render('adminpage', {titlepage: "Bem Promotora - Página do Administrador", answers: answers});
    } catch (err){
        return res.status(400).render('error', {titlepage: "Ops...", err: err});
    }
};
