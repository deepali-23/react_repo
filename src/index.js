
import "./index.css";
var React = require('react');
var ReactDOM = require("react-dom");
//import React from 'react';
//import ReactDOM from 'react-Dom';


const fname="Deepali";
const lname="Sharma";
const curdate=new Date().toLocaleDateString();
const image="https://picsum.photos/id/1/206/300";
const image1="https://picsum.photos/id/1/206/300";
const image2="https://picsum.photos/id/1/209/300";
const links="https://picsum.photos/images";

const curtime=new Date().toLocaleTimeString();

const heading = {
  color : '#fa9191',
 textTransform :'capitalize',
 textAlign:'center',
 fontWeight: 'bold' ,
 fontFamily : 'Josefin Sans',sansSerif
};




ReactDOM.render(
<div>
{/*<h1>netflix top channels</h1>
<p>here is our top channels  </p>
<ol>
  <li> dark</li>
  <li> extra curricular</li>
  <li> my people</li>
  <li>first-2 </li>
  <li> Mr -Robot </li>
</ol>*/}

<h1 className = "heading"> Hi there i am deepali</h1>


<h1 style={heading}> My styling color </h1>

<h1> Hello my name is {`${fname}  ${lname}`}</h1>
<h1> And my age is {18/4} </h1>
//<h2> Think Differently {Math.random()} </h2>
///<h2> todays current date is ={curdate}</h2>
  //<h2> todays current Time is ={curtime}</h2>
///<h3 contenteditable ="true">Now this text became editable.....</h3>
//<img src= {image} alt="random Images"/>
//<img src= {image1} alt="random Images"/>
<img src= {image2} alt="random Images"/>

<a href= {links} target="_deepali">
  <img src={image} alt="random images"/>
</a>
</div>
, document.getElementById("root")
);

