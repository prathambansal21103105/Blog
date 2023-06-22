//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var lodash=require("lodash");
var st1="";

const homeStartingContent = "Welcome to our vibrant and insightful blog, your go-to destination for engaging content and thought-provoking articles. Here at METALOGS, we strive to bring you a diverse range of topics, covering everything from technology and lifestyle to health and wellness. Whether you're seeking inspiration, seeking answers, or simply looking to expand your knowledge, our dedicated team of writers is committed to delivering captivating and informative pieces that will captivate your mind.We believe that knowledge is power, and through our carefully crafted blog posts, we aim to empower you with valuable insights, practical tips, and fascinating perspectives. Our team of expert writers, industry professionals, and passionate enthusiasts work tirelessly to curate a collection of articles that will both entertain and enlighten you. Immerse yourself in a world of captivating storytelling, discover the latest trends, explore innovative ideas, and join the conversation as we delve into the issues that matter most. Our blog fosters a vibrant and inclusive community, where readers from all walks of life can come together to share their experiences, opinions, and expertise. Whether you're a seasoned reader or a curious newcomer, we invite you to embark on this journey with us. Stay tuned for regular updates, as we uncover hidden gems, unveil insider tips, and dive deep into the fascinating realms of knowledge. Join us as we explore, learn, and connect through the power of words. Get ready to be inspired, informed, and entertained. Welcome to METALOGS where curiosity finds its home.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
const posts=[];

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("home",{homeStartingContent:homeStartingContent,posts:posts});
});

app.get("/contact",function(req,res){
  res.render("contact",{contactContent:contactContent});
});

app.get("/about",function(req,res){
  res.render("about",{aboutContent:aboutContent});
});

app.get("/compose",function(req,res){
  res.render("compose");
});

app.post("/compose",function(req,res){
  const post= {
    title:req.body.title,
    postbody:req.body.post
  };
  posts.push(post);
  res.redirect("/");
});

app.get("/posts/:postName",function(req,res){
  st1=lodash.lowerCase(req.params.postName);
  posts.forEach(function(element){
    var st2=lodash.lowerCase(element.title);
    if(st1===st2){
      res.render("post",{element:element});
    }
  });
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});