const fs = require("fs").promises;

const Parser = require('rss-parser');

const PRUEBA_MD = '%{{prueba.prueba}}%';

const parser = new Parser();

(async ()=>{

  const markdownTemplate =  await fs.readFile('./README.md.tpl',
{
    encoding: 'UTF-8'
});

const date = Date().toString();

 const a =markdownTemplate.replace(PRUEBA_MD, date)
console.log(a)

fs.writeFile('README.md',a);


})();

