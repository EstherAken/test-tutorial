import React from "react";
import ReactDOM  from "react-dom";
import Welcome from "./Welcome";
import "./index.css";

function App(){
    return(
        <div>
            <div>
                <img src="./images/Nka.png" alt="Esther Aken" />
            </div>
<Welcome />

        </div>
        
    )
}

ReactDOM.render(<App />, document.getElementById("root"))