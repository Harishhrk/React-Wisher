import React from "react";

function App(){
    const date = new Date();


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
    return(
<>
    <div>
    <h1>Hello Sir, <span style={cssStyle}>{state}</span></h1>
    </div>
    
    
    </>
    )
}

export default App;