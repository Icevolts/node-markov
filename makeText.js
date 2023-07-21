/** Command-line tool to generate Markov text. */

const fs = require('fs');
const markov = require('./markov');
const axios = require('axios');
const process = require('process');

function generateText(text) {
    let mm = new markov.MarkovMachine(text);
    console.log(mm.makeText());
}

function makeText(path){
    fs.readFile(path,'utf8',function cb(err,data){
        if (err){
            console.error(`Can't read file: ${path}: ${err}`);
            process.exit(1);
        } else {
            generateText(data);
        }
    });
}

async function makeURLText(url){
    let res;
    try{
        res = await axios.get(url);
    } catch(err){
        console.error(`Can't read URL: ${path}: ${err}`);
        process.exit(1);
    }
    generateText(res.data);
}

let [method, path] = process.argv.slice(2);

if(method === 'file'){
    makeText(path);
}else if(method === 'url'){
    makeURLText(path);
}else{
    console.error(`ERROR: Unknown Method: ${method}`);
    process.exit(1);
}