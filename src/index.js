var React = require('react');
var ReactDOM = require("react-dom");
//import React from 'react';
//import ReactDOM from 'react-Dom';

const fname="Deepali";
const lname="Sharma";
const curdate=new Date().toLocaleDateString();
const image="https://picsum.photos/id/1/200/300";

const curtime=new Date().toLocaleTimeString();
ReactDOM.render(
<div>
<h1>netflix top channels</h1>
<p>here is our top channels  </p>
<ol>
  <li> dark</li>
  <li> extra curricular</li>
  <li> my people</li>
  <li>first-2 </li>
  <li> Mr -Robot </li>
</ol>
<h1> Hello my name is {`${fname}  ${lname}`}</h1>
<h1> And my age is {18/4} </h1>
<h2> Think Differently {Math.random()} </h2>
<h2> todays current date is ={curdate}</h2>
  <h2> todays current Time is ={curtime}</h2>
<h3 contenteditable ="true">Now this text became editable.....</h3>
<img scr= "image" alt="random Images"/>
</div>
, document.getElementById("root")
);

