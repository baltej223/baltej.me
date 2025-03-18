import {Code, Content, Section} from "@/blogsUI/blogUI"
import Navbar from "@/app/blog/navbar/navbar";
import { Heading, Text, Image } from "@/blogsUI/blogUI";

export default function MongoDB(){
    return (
    <>
    <Navbar/>
        <Content className="pl-3 pr-3 flex flex-col gap-y-3">
            <Heading type="1" variations={["bold"]}>
                Connecting to MongoDB using mongoose in NextJS serverless
            </Heading>
            <Text className="pt-5" size="xl" variations={["italic"]}>
                How can you connect to MongoDB using mongoose.js in Next JS, in serverless and How is it diffrent from Express.js
            </Text>
            <div className="flex w-full justify-center">
                <Image src="https://avatars.githubusercontent.com/u/7552965?s=200&v=4" alt="none" width="300px" className="pt-10" desc="https://avatars.githubusercontent.com/u/7552965?s=200&v=4"/>
            </div>
            <Heading type="3" className="pt-5">About Mongoose</Heading>
            <Text size="md">
                Mongoose is a popular Object Data Modeling (ODM) library for MongoDB. 
                You must have prior knowledge of mongoose before starting, If you are new to mongoose then then the absoluete basics of mongoose can be found down. 
            </Text>
            <Text variations={["italic", "bold"]}>
                Make sure that Mongo and Node are already installed in your device.
            </Text>
            <Heading type="3">
                Installation
            </Heading>
            <Text size="md">
                Since its a Javascipt package, you can install it from node package manager (npm) by executing 
            </Text>
            <Code lang="bash">
                    npm install mongoose --save
            </Code>
            <Heading type="3">
                Connecting To DB
            </Heading>
            <Code lang="Javascript">
                {`/* This code should be enough to connect to mongoDB */
                const mongoose = require('mongoose');
                main().catch(err => console.log(err));
                async function main() {
                await mongoose.connect('mongodb://127.0.0.1:27017/test');
                // use await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test'); 
                // if your database has auth enabled
                }`}
            </Code>
            <Text>
            OR the way I preffer is 
            </Text>
            <Code lang="JS">
                {`import mogoose from "mongoose";
                mongoose.connect("mongodb://127.0.0.1:27017/test").
                then(()=>{
                    console.log("Connection Success")
                    })
                .catch((e)=>{
                    console.log("Connection failed, Error:", e);
                    handleError(e);
                });`}
            </Code>

            <Code lang="js">
                {`import mongoose from "mongoose";
                mongoose.connect() // Its the main function which does the job
                // in the parameter the this function comes the connection URI
                // The connection URI tells mongoose where to connect for DB
                // mongoose.connect("mongodb://thisisconnectionURI:27017/collectionName")`}
            </Code>
            <Text>
                I hope you are already familiar with mongo terminology, The "test" in the end of the connection uri represents the collection name where connection is to be made.
            </Text>
            <Text>
                Treat it as a thumb rule, never to use mongoose.connect alone, Let me explane
            </Text>
            <Code lang="js">
                {`import mongoose from "mongoose";
                mongoose.connect("connectionURI");`}
            </Code>
            <Text>
                Above written code will do the job, But is very dangerous. Never use it in production, Not even In testing.
                This code <i>"says"</i> to connect to DB, But it doesn't says anything about what if connection fails.
                For this always use try catch or catch method like how I use in previous example.
            </Text>
            {/* <Text size="md">
            For a more deep dive, checkout docs of <a href="https://mongoosejs.com/docs/">mongoose</a>
            </Text> */}
            <Text>
                This was basically How to connect to mongoDB using mongoose.
            </Text>
        </Content>
    </>
    );
} 