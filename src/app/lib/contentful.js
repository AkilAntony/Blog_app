import {createClient} from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
    space:process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export const getAllPosts = async()=>{
   try{
    const posts = await client.getEntries({
        content_type:"blogPost",
        order: '-fields.date'
    });
    return posts.items
   }
   catch(err){
    console.log(err)
   }
}

 