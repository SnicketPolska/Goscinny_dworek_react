const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

let tables = require('./data/tables.json');
let langEn = require('./data/lang/en.json');
let langPl = require('./data/lang/pl.json');


app.use('/admin',express.static(path.join(__dirname,'/admin/build')))
app.use(express.static(path.join(__dirname, '/main/build')));
app.use(express.json());

app.get('/data/lang/pl',(req,res)=>{
    res.json(langPl);
});

app.get('/data/lang/en',(req,res)=>{
    res.json(langEn);
});

app.get('/data/tables',(req,res) => {
    res.json(tables);
});

app.put('/data/tables',(req,res) =>{
const table = req.body;
if(!table.hasOwnProperty('Cottages')|| !table.hasOwnProperty('Rooms')){
    return res.status(422).json({'error':'Missing property'});
}else{
    tables = sanitizeTable(table) !== undefined ? sanitizeTable(table) : tables; 
    let data = JSON.stringify(tables);
    fs.writeFileSync('./data/tables.json', data);
    res.json(table);
}
});

app.get('/admin*', (req,res) => {
    res.sendFile(path.join(__dirname+'/admin/build/index.html'));
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/main/build/index.html'));
});

const port = process.env.PORT || 3010;
app.listen(port);

console.log('App is listening on port ' + port);

const sanitizeTable = ({Rooms,Cottages}) =>{
    Rooms[0] = Rooms[0].map(date =>{
        return date.match(/\d\d\.\d\d\s*-\s*\d\d\.\d\d/g).join('\n')
    })
    for(const date in Rooms[0]){
        if(date === null) return undefined;
    }
    for(let i = 1; i < Rooms.length;i++){
        for(const price in Rooms[i]){
            if(isNaN(price)) return undefined;
        }
    }
    Cottages[0] = Cottages[0].map(date =>{
        return date.match(/\d\d\.\d\d\s*-\s*\d\d\.\d\d/g).join('\n')
    })
    for(const date in Cottages[0]){
        if(date === null) return undefined;
    }
    for(let i = 1; i < Cottages.length;i++){
        for(const price in Cottages[i]){
            if(isNaN(price)) return undefined;
        }
    }
    return {Rooms,Cottages};
}