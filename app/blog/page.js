"use client";
import { Content, MainPageFlex } from "@/blogsUI/blogUI";
import Navbar from "@/app/navbar/navbar";
import {
  BlogCard,
  BlogCardDesc,
  BlogCardTitle,
  BlogAuthor,
} from "@/blogsUI/blogUI";
import Footer from "@/app/footer/footer";

export default function Home() {
  return (
    <MainPageFlex>
      <Navbar title="baltej.blogs" />
      {/* Here comes all the blogs */}
      <Content className="gap-x-20 gap-y-20 justify-center flex-1">
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
          className="mt-7"
        >
          <BlogCardTitle minsread="5-mins" publishDate="19 March 2025">
            Using Mongoose with NextJS serverless
          </BlogCardTitle>
          <BlogCardDesc>How is it diffrent from express</BlogCardDesc>
          <BlogAuthor>Baltej</BlogAuthor>
        </BlogCard>
      </Content>
      <Footer />
    </MainPageFlex>
  );
}
