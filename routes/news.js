const express = require('express')
const axios = require('axios')
const newsr=express.Router()
const moment = require('moment')
const math = require('math')

newsr.get('/',async(req,res)=>{
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
        'country=in&' +
        'apiKey={d7e93a41ae3e4aea8b8bc37406aa1f2e}';

        const news_get =await axios.get(d7e93a41ae3e4aea8b8bc37406aa1f2e)
        res.render('news',{articles:news_get.data.articles})

    } catch (error) {
        if(error.repsonse){
            console.log(error)
        }
    }
})

newsr.post('/search', async(req,res)=>{
    const search=req.body.search
        // console.log(req.body.search)

    try {
        var url = 'http://newsapi.org/v2/everything?q=${search}&apiKey={d7e93a41ae3e4aea8b8bc37406aa1f2e}'
        
        const news_get =await axios.get(d7e93a41ae3e4aea8b8bc37406aa1f2e)
        res.render('news',{articles:news_get.data.articles})


    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

module.exports=newsr