import {Code, Content, Section} from "@/blogsUI/blogUI"
import Navbar from "@/app/blog/navbar/navbar";
import { Heading, Text, Image } from "@/blogsUI/blogUI";
import Footer from "@/app/blog/footer/footer";

export default function MongoDB(){
    return (
    <>
    <Navbar/>
        <Content className="pl-3 pr-3 flex flex-col gap-y-3 justify-center items-center md:items-start pt-10">
            <Heading type="1" variations={["bold"]}>
                Connecting to MongoDB using mongoose in NextJS serverless
            </Heading>
            <Text className="pt-5" size="xl" variations={["italic"]}>
                How can you connect to MongoDB using mongoose.js in NextJS serverless, and How does it differ from connecting in Express.js!
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
                Connecting To DB in express.js
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
            <Code lang="JS" whitespace={"                "}>
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
            <Code lang="js" whitespace="                ">
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
                This was basics of connecting to MongoDB using mongoose.
            </Text>
            <Section>
                <Text size="lg" className="pl-10">
                    But If you try to connect using the above way in <b>NEXTJS</b> then It wont work!!
                </Text>
            </Section>
            <Text className="pl-10">
                    Lets understand Why.
                </Text>
            <Heading type="3">
                Connecting to MongoDB in NextJS
            </Heading>
            <Text>
                First make sure that mongoose is installed, if not that install it by 
                "<i>npm intall mongoose</i>"
            </Text>
            <Code lang="Javascript" whitespace="                    ">
                
                    {`import mongoose from "mongoose";
                    const MONGOURI = "mongoDB://connectingURI:27017/"

                    let cached = global.mongoose; 

                    if (!cached) {
                        cached = global.mongoose = { conn: null, promise: null };
                    }
                    
                    export default async function connectDB(){
                        cached.promise = mongoose.connect(MONGODB_URI, {
                            useNewUrlParser: true,
                            useUnifiedTopology: true,
                        }).then((mongoose) => mongoose);

                        cached.conn = await cached.promise;
                        return cached.conn;
                    }`}                    
            </Code>
            
            <Text>
                If you see clearly, We have cached mongoose connection, caching is very much required cause
                NextJS is serverless, means that, the function execute on demand, 
                means that the server is not always running and only runs whenever any request is received.
                A new instance of function is created whenever a request is received
            </Text>
            <Text size="lg">
            If connection is not cached then each request creates a new MongoDB connection, leading to connection overflow and performance issues.
            </Text>
            <Text>
                Here if database is cached then connectDB will return the cached connection otherwise will try to establish a new connection and will return it.
            </Text>
            
            <Text>
                This above code can be pasted in database.js and then can be imported in your NextJS application like
            </Text>
            <Code>
                {
                    `
                    // app/api/route.jsx

                    import connectDB from "@/database.js"

                    export default function POST(){
                    connectDB(); // should be used inside of request handler function
                    .
                    . 

                    `
                }
            </Code>
            <Heading type="4" variations={["italic"]}>
                Why to use connectDB inside of handler function?
            </Heading>
            <Text>
                If connectDB is called outside of handler function then it will run every time the API file is imported, even if the request is not made.
                This can lead to multiple connections being created unnecessarily.
            </Text>
            <Text>
                Calling connectDB() inside the function ensures the connection is only established when a request is received.
            </Text>
            <Heading type="2">
                How It Differs from Express.js
            </Heading>
            <Heading type="3">Connection Persistence</Heading>

            <Text>NextJS is, Serverless. So function run per request, so connections need caching.</Text>
            <Text>Express runs as a long-lived server, keeping connections persistent.</Text>

            <Heading type="4">Where to Connect?</Heading>
            <Text>
            In Next.js, connections should be established inside API routes using a cached function.
            This prevents multiple new connections per request.
            </Text>
            <Text>
            In Express, the database connection is typically established once at server startup 
            and reused for all incoming requests.
            </Text>

            <Heading type="4">Performance</Heading>
            <Text>
            In Next.js, frequent API function invocations may lead to excessive database 
            connections if caching is not used properly.
            </Text>
            <Text>
            In Express, a single persistent connection is maintained, reducing overhead and improving performance.
            </Text>

            <Heading type="4">Lifecycle</Heading>
            <Text>
            Next.js API routes are ephemeral, meaning a new function instance may be created 
            for every request, requiring efficient connection handling.
            </Text>
            <Text>
            Express runs continuously, keeping database connections alive throughout the 
            application's lifecycle without requiring reconnections.
            </Text>

        </Content>
        <Footer/>
    </>
    );
} 
