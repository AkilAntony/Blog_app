
import { useState } from "react";
import Navbar from "./Navbar";
import BlogPost from './Components/BlogPosts/BlogPost'
import {getAllPosts} from './lib/contentful'

interface Posts{
  title:string;
  content:string;
  image:string
}

const HomePage = async()=>{

  const blogPosts :Posts[] = await getAllPosts();
 
  return (
    <main className=" ">
    <Navbar />
 
    <BlogPost blogPosts={blogPosts}/>
    </main>
  );
}

export default HomePage