"use client";
import Snowfall from 'react-snowfall'
import Navbar from '@/app/blog/navbar/navbar';

export default function Home() {
    return (
        <>
        <><Snowfall/></>
        <Navbar/>
      <div className="height-cooking-something w-full flex flex-row justify-center items-center">
        <main className="flex flex-col gap-5 md:gap-8 justify-center" style={{fontFamily:"monospace !important"}}>
          <div className="text-4xl w-full flex justify-center">
            <h1 className="cooking text-white dark:text-[var(--foreground)]">Cooking Something</h1>
            </div>
          <p className="pr-5 flex w-full justify-center md:justify-end"><a style={{opacity:0.5}} href="./github">@baltej223</a></p>
        </main>
      </div>
      </>
    );
  }