import {Content, Section} from "@/blogsUI/blogUI"
import Navbar from "@/app/blog/navbar/navbar";
import { Heading, Text, Image } from "@/blogsUI/blogUI";
export default function JuniorDevs(){
    return (
    <>
    <Navbar/>
        <Content className="pl-10">
            <Heading type="1" variations={["bold"]}>
                Junior Devs can't code without AI
            </Heading>
            <Text className="pt-5" size="xl" variations={["italic"]}>
                "If we didn't learn't to use AI tools, then we will leave behind.", They say, subconcious asking to be in their confort zone.
            </Text>
            <Image src="/images/AI_humanoid_sidepose.png" alt="none" width="500px" hight="700px" className="pt-10" desc="Image by co-pilot"/>

            <Section>
                This works
            </Section>
        </Content>
    </>
    );
} 