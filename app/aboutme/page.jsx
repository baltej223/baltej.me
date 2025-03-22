import { Content, Heading, Text, Section, Image } from "@/blogsUI/blogUI"
import Navbar from "@/app/blog/navbar/navbar"
import Footer from "../blog/footer/footer"
export default function Home(){
    return(
        <>
        <Navbar/>
        <Content className="flex-col gap-y-10">
            <div className="flex flex-row">
                <div className="flex flex-col gap-y-10 w-2/3">
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
                <div className="flex justify-center items-center hidden md:block">
                    <Image src="https://avatars.githubusercontent.com/u/73211864?v=4" className="rounded-4xl"/>
                </div>
            </div>
        </Content>
        <Footer/>   
        </>
    )
}