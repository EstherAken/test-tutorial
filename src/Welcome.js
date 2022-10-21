import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import "./index.css";

export default function Welcome(){

    const myStyle= {padding:"10px", color:"black"};
    return(
        <div className="About--container">
<div className="about--text">
<h1>ABOUT ME</h1>
        <p>
<span>Hello World! My name is Aken Esther , A front-end web developer from Nigeria. </span>
<span>Having to find my purpose was the one thing i struggled with the most. i transitioned from theatre arts;
from </span>

<span>writing scripts to writing lines of codes.</span>

<span>I have extensive programming skills and i'm comfortable developing the front-end path.
I primarily use Reactjs but picking up a new framework or language isn't a problem. </span>
<span>
I enjoy creating and occasionally designing reponsive websites that run across all devices and latest technologies.</span>

<span>When it comes to web development/design, i am committed to satisfying you and conveying your message.</span> 

<span>You can see some of the projects i've worked on on my GitHub profile below and alternatively, you can find me on any 
of the social media platforms below.  </span>

<span>if you are interested, please do not hesitate to get in touch with me. i'd be honoured to help you.</span>

<span>Cheers!</span>

        </p>
</div>

<div className="about--icons">
<FaGithub size="3rem" style={myStyle} />
<AiOutlineTwitter size="3rem" style={myStyle}  />
<BsInstagram  size="3rem" style={myStyle}  />
<SiGmail size="3rem" style={myStyle}  />
</div>

        </div>
      
        
    )
}