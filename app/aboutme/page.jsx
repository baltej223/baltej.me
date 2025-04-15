"use client";
import { Content, Heading, Text, Image } from "@/blogsUI/blogUI"
import Navbar from "@/app/blog/navbar/navbar";
import Footer from "@/app/blog/footer/footer";
import Marquee from "react-fast-marquee";

export default function Home(){
    return(
        <>
        <Navbar/>
        <Content className="flex-col gap-y-10">
            <div className="flex md:flex-row flex-col-reverse flex-col width:[40%]">
                <div className="flex flex-col gap-y-10 md:w-2/3 w-[3/4] pl-[10%] pr-[10%] md:p-0 pt-10 md:pt-0">
                    <Heading type="1">
                        Hi, I am Baltej Singh.
                    </Heading>
                    <Text size="xl" variations={["italic"]}>
                    A passionate Fullstack Developer from India, Currently pursuing CS in Thapar Institute, Patiala, India, With over 4+ years of experience.
                    </Text>
                    <div >
                        <ul className="flex flex-col gap-y-5">
                            <li>
                                <Text size="sm">• Curretly, I am pursuing CSE at Thapar Institute, Patiala</Text>
                            </li>

                            <li>
                                <Text size="sm">•  I’m interested in actual coding [not chatgpt guided coding], coding challenges, coding projects and networking</Text>
                            </li>

                            <li>
                                <Text size="sm">• I’m currently learning DevOps, AI/ML, Cybersecurity and WebDev</Text>
                            </li>

                            <li>
                                <Text size="sm">• Ask me about React, Next, JS, python, web developement, Aurdino</Text>
                            </li>

                            <li>
                                <Text size="sm">• Connect with me : </Text>
                                <Text size="sm">• <a href="https://www.linkedin.com/in/baltej-singh-7789b4313">Linkdin</a> </Text>
                                <Text size="sm">• <a href="https://www.instagram.com/baltej_223">Instagram</a> </Text>
                                <Text size="sm">• <a href="mailto:baltej963@gmail.com">baltej963@gmail.com</a> </Text>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center items-center block">
                    <Image src="https://avatars.githubusercontent.com/u/73211864?v=4" className="rounded-4xl ml-[10%] mr-[10%] md:m-0"/>
                </div>
            </div>
            <Marquee_local/>
        </Content>
        <Footer/>   
        </>
    )
}
function Marquee_local(){
    let skills = {
        "Arduino": {
          "website_url": "https://www.arduino.cc/",
          "image_url": "https://cdn.worldvectorlogo.com/logos/arduino-1.svg"
        },
        "Bash": {
          "website_url": "https://www.gnu.org/software/bash/",
          "image_url": "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"
        },
        "Bootstrap": {
          "website_url": "https://getbootstrap.com",
          "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
        },
        "C": {
          "website_url": "https://www.cprogramming.com/",
          "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
        },
        "CSS3": {
          "website_url": "https://www.w3schools.com/css/",
          "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
        },
        "Docker": {
          "website_url": "https://www.docker.com/",
          "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
        },
        "Express": {
          "website_url": "https://expressjs.com",
          "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
        },
        "Flask": {
          "website_url": "https://flask.palletsprojects.com/",
          "image_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
        },
        "Git": {
          "website_url": "https://git-scm.com/",
          "image_url": "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
        },
        "Go": {
          "website_url": "https://golang.org",
          "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg"
        },
        "HTML5": {
          "website_url": "https://www.w3.org/html/",
          "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
        },
        "JavaScript": {
          "website_url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        },
        "Next.js": {
          "website_url": "https://nextjs.org/",
          "image_url": "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
        },
        "Node.js": {
          "website_url": "https://nodejs.org/",
          "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
        },
        "React": {
          "website_url": "https://reactjs.org/",
          "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
        },
        "Python": {
          "website_url": "https://www.python.org/",
          "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
        },
        "Pandas": {
          "website_url": "https://pandas.pydata.org/",
          "image_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
        },
        "Supabase": {
          "website_url": "https://supabase.com/",
          "image_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
        },
        "TypeScript": {
          "website_url": "https://www.typescriptlang.org/",
          "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
        },
        "MongoDB": {
          "website_url": "https://www.mongodb.com/",
          "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
        },
        "MySQL": {
          "website_url": "https://www.mysql.com/",
          "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
        },
        "PostgreSQL": {
          "website_url": "https://www.postgresql.org/",
          "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
        }
      };

      function Icon({image_url,website_url,name}){
        return (
            <>
                <img 
                    lazyload="true" 
                    src={image_url} 
                    onClick={()=>{
                        window.location.href = website_url;
                    }}
                    alt = {name}
                    title={name}
                    // style={{width:"50px", height:"auto"}}
                    className="w-[50px] h-auto ml-7"
                />
            </>
        );
      }
    return(
        <>
            <div className="w-full pt-3 pb-2"
            >
            <Marquee autoFill={true} className="gap-x-30">
                {Object.entries(skills).map(([name, { image_url, website_url }]) => (
                    <Icon key={name} image_url={image_url} website_url={website_url} name={name} />
                ))}
            </Marquee>
            </div>
        </>
    );
}