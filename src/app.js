const { hasSubscribers } = require('diagnostics_channel');
const express =require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();
const port=8000;
//public static path

const staticpath=path.join(__dirname,"../public");
app.set('view engine', 'hbs');
const template_path=path.join(__dirname,"../templates/views");
app.set('views',template_path);

const partials_path=path.join(__dirname,"../templates/partials");
hbs.registerPartials(partials_path);


app.use(express.static(staticpath))


//routing
app.get("",(req,res)=>{
    res.render('index');
})

app.get("/about",(req,res)=>{
    res.render('about');
})

app.get("/weather",(req,res)=>{
    res.render('weather');
})

app.get("*",(req,res)=>{
    res.render('404error',{
        errormsg: 'opps! Page Not Found'
    });
})

app.listen(port, ()=>{
    console.log(`working ${port}`);
})