var express = require('express');


var app = express();
const handlebars = require('express-handlebars').create({ defaultLayout: "main" });
var path = require('path')


app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.set('port', 31133);



app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

//Home page
app.get('/',function (req,res) {
    res.render('home');
  });

//About me page
app.get('/aboutme',function(req,res){
  res.render('aboutme')
});


var commentData = []

//Contact page
app.get('/contact',function(req,res){
    // copy queryData list
  var getParam = commentData;
  // add data to getParam list
  for (var name in req.query){
    var username
    if (name == "comment"){
      getParam.push({'name':username, 'value':req.query[name]})
    }
    else if(name == "username"){
      username = req.query[name]
    }
  }
  var context = {};
  context.dataList = getParam;
  res.render('contact', context);
  commentData = getParam
});


//Portfolio page
app.get('/portfolio',function(req,res){
  res.render('portfolio');
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
  
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://flip3.engr.oregonstate.edu/' + app.get('port') + '; press Ctrl-C to terminate.');
});