import React from "react";
import ReactDOM  from "react-dom";
import Welcome from "./Welcome";
import "./index.css";

function App(){
    return(
        <div>
<Welcome />

        </div>
        
    )
}

ReactDOM.render(<App />, document.getElementById("root"))