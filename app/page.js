"use client";
import { Content } from "@/blogsUI/blogUI";
import Navbar from "./navbar/navbar"
import { BlogCard, BlogCardDesc, BlogCardTitle, BlogAuthor } from "@/blogsUI/blogUI";
export default function Home() {
  return (
    <>
    <Navbar/>
    {/* Here comes all the blogs */}
    <Content className="gap-x-20 gap-y-20">
      <BlogCard src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt='some' href="./junior-devs-cant-code">
          <BlogCardTitle minsread="2-mins">
            This is the heading
          </BlogCardTitle>
          <BlogCardDesc>
          Creating a bizzare AI robot from zero
          </BlogCardDesc>
          <BlogAuthor>
            Baltej
          </BlogAuthor>
      </BlogCard>

      <BlogCard src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt='some' href="./junior-devs-cant-code">
          <BlogCardTitle minsread="2-mins">
            This is the heading
          </BlogCardTitle>
          <BlogCardDesc>
          Creating a bizzare AI robot from zero
          </BlogCardDesc>
          <BlogAuthor>
            Baltej
          </BlogAuthor>
      </BlogCard>

      <BlogCard src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt='some' href="./junior-devs-cant-code">
          <BlogCardTitle minsread="2-mins">
            This is the heading
          </BlogCardTitle>
          <BlogCardDesc>
          Creating a bizzare AI robot from zero
          </BlogCardDesc>
          <BlogAuthor>
            Baltej
          </BlogAuthor>
      </BlogCard>
    </Content>
    </>
  );
}
