const colors = require('./colors.json');

const color = ({fun, comt, text, imp, title, para, link, border}) => {
    let txt = "";
    if (imp)  txt += colors.red+ imp+ colors.reset;
    if (title)txt += colors.yellow+ title+ colors.reset;
    if (text) txt += colors.white+ text+ colors.reset;
    if (para) txt += colors.black+ para+ colors.reset;
    if (link) txt += colors.blue+ link+ colors.reset;
    if (fun) txt += colors.blue+ fun+ colors.reset;
    if (comt) txt += colors.green+ comt+ colors.reset;
    if (border) txt += colors.magenta+ border+ colors.reset;
    console.log(txt);
}

module.exports = color