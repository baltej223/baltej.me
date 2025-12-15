"use client";
import { Content } from "@/blogsUI/blogUI";
import Navbar from "./navbar/navbar";
import {
  BlogCard,
  BlogCardDesc,
  BlogCardTitle,
  BlogAuthor,
} from "@/blogsUI/blogUI";
import Footer from "@/app/blog/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar title="baltej.blogs" />
      {/* Here comes all the blogs */}
      <Content className="gap-x-20 gap-y-20">
        {/* <BlogCard src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt='some' href="./blog/junior-devs-cant-code">
          <BlogCardTitle minsread="2-mins">
            This is the heading
          </BlogCardTitle>
          <BlogCardDesc>
          Creating a bizzare AI robot from zero
          </BlogCardDesc>
          <BlogAuthor>
            Baltej
          </BlogAuthor>
      </BlogCard> */}

        <BlogCard
          src="https://avatars.githubusercontent.com/u/7552965?s=200&v=4"
          alt="some"
          href="./blog/connecting-to-mongo-using-mongoose-nextjs"
        >
          <BlogCardTitle minsread="5-mins">
            Using Mongoose with NextJS serverless
          </BlogCardTitle>
          <BlogCardDesc>How is it diffrent from express</BlogCardDesc>
          <BlogAuthor>Baltej</BlogAuthor>
        </BlogCard>
      </Content>
      <Footer />
    </>
  );
}
