const {Sequelize, sequelize} = require('../db');

// TODO - define the Song model
let Song;

Song = sequelize.define("song",{
    title: Sequelize.STRING, 
    year: Sequelize.NUMBER,
    length: Sequelize.NUMBER
});

module.exports = {
    Song
};