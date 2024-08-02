 
import React from 'react'
import {getAllPosts} from '../../lib/contentful'
import Card from '../Card/Card'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, } from '@contentful/rich-text-types';
import { Node as ContentfulNode } from '@contentful/rich-text-types';

interface BlogPostsProps{
  blogPosts:Posts[]
}
interface Posts{
  sys:{
    id:string;
    
  },
  fields:{
    title: string;
    date: Date;
    coverImage:{

    };
    content: any;
  }
 
}

const options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node: ContentfulNode, children:React.ReactNode) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node: ContentfulNode, children:React.ReactNode) => <h3>{children}</h3>,
    [BLOCKS.PARAGRAPH]: (node: ContentfulNode, children:React.ReactNode) => <p>{children}</p>,
    [BLOCKS.OL_LIST]: (node: ContentfulNode, children:React.ReactNode) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node: ContentfulNode, children:React.ReactNode) => <li>{children}</li>,
    [INLINES.HYPERLINK]: (node: ContentfulNode, children:React.ReactNode) => (
      <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};
const BlogPost: React.FC<BlogPostsProps> = ({ blogPosts }) => {
  // console.log('Inside compo',blogPosts )
  // blogPosts.map((post) => console.log('contnetn', post.fields.content))
  // console.log(blogPosts)
  //  blogPosts.map(fields=>console.log('image',fields.fields.coverImage.fields.file.url))
  return (
    <div className='flex items-center justify-center'>
      {blogPosts.map((post,index) => (
          <Card key={post.sys.id}
            title = { post.fields.title }
            content = { documentToReactComponents(post.fields.content,options) }
          imageUrl={`https:${post.fields.coverImage.fields.file.url}`}
          />
      ))}
    </div> 
  )
}

export default BlogPost




