import React from "react";
import ReactDOM  from "react-dom";
import Welcome from "./Welcome";
import "./index.css";

function App(){
    return(
        <div className="app--container">
            <div className="app--img">
                <img src="./images/Nka.png" alt="Esther Aken" />
            </div>
            <div>
            <Welcome />
            </div>


        </div>
        
    )
}

ReactDOM.render(<App />, document.getElementById("root"))