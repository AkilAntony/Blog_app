 
import React from 'react'
import {getAllPosts} from '../../lib/contentful'
import Card from '../Card/Card'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, } from '@contentful/rich-text-types';
import { Node as ContentfulNode } from '@contentful/rich-text-types';
import Link from 'next/link'
 
interface BlogPostsProps{
  blogPosts:Posts[]
}
interface Posts{
  sys:{
    id:string;
    
  },
  fields:{
    title: string;
    date: string;
    slug:string;
    coverImage:{
      fields:{
        file:{
          url:string
        }
      }
    };
  }
}


const BlogPost: React.FC<BlogPostsProps> = ({ blogPosts }) => {
//  console.log(blogPosts)
  return (
    <div className='flex items-center justify-center gap-3 flex-wrap mx-5'>
      {blogPosts.map((post) => (
        <Link href={`/blog/${post.fields.slug}`}>
          <Card key={post.sys.id}
            title = { post.fields.title }
            date = {post.fields.date}
            imageUrl={`https:${post.fields.coverImage.fields.file.url}`}
          />
        </Link>
      ))}
    </div> 
  )
}

export default BlogPost




