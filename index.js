const express = require('express');
const app = express();
const port = 8000;
//calling static fun for assets
app.use(express.static('./assets')); 
//use layouts
const expressLayouts = require('express-ejs-layouts');
//importing database
const db = require('./config/mongoose');

app.use(expressLayouts);
//extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//use express router
app.use('/',require('./routes'));
//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`server is runnning on port: ${port}`);
});
//actually when i wrote the layout then it is giving error