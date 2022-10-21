import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export default function Welcome(){
    return(
        <div>
<div>
<h1>ABOUT ME</h1>
        <p>
Hello World! My name is Aken Esther , A front-end web developer from Nigeria. 
Having to find my purpose was the one thing i struggled with the most. i transitioned from theatre arts;
from writing scripts to writing lines of codes.

I have extensive programming skills and i'm comfortable developing the front-end path.
I primarily use Reactjs but picking up a new framework or language isn't a problem. 
I enjoy creating and occasionally designing reponsive websites that run across all devices and latest technologies. When it 
comes to web development/design, i am committed to satisfying you and conveying your message.

You can see some of the projects i've worked on on my GitHub account below and alternatively, you can find me on any 
of the social media platforms below.  

if you are interested, don't hesitate to get in touch with me. i'd be honoured to help you.
Cheers!

        </p>
</div>

<div>
<FaGithub />
<AiOutlineTwitter />
<BsInstagram />
<SiGmail />
</div>

        </div>
      
        
    )
}