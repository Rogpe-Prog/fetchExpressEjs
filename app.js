const express = require('express')
const app = express()

const fetch = require('node-fetch')

app.set('view engine', 'ejs')

app.get('/', async(req,res)=>{

    await fetch('https://randomuser.me/api/?results=3&nat=br')
    .then(res => res.json())
    .then(json => dados = json.results)

    res.render('home', { dados })
})

app.listen(3000, ()=> {
    console.log('Express online!!!')
})