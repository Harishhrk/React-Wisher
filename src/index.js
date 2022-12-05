import React from "react";
import ReactDom from "react-dom";
import './index.css';
const date = new Date();
const date1 = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()
let min = date.getMinutes()
let sec = date.getSeconds()
let hour = date.getHours()

const cssStyle = { };
var state = "";
if(hour>=4 && hour<12){
    state = "Good Morning"
    cssStyle.color = "green";
}
else if( hour >=12 && hour <17){
    state = " Good Afternoon"
    cssStyle.color = "yellow"
}
else {
    state="Good Evening"
    cssStyle.color = "Blue"
}
ReactDom.render(
    <>
    <div>
    <h1>Hello Sir, <span style={cssStyle}>{state}</span></h1>
    </div>
    
    
    </>
    

, document.getElementById("root"));