// import React from 'react';
// import { getAllPosts } from '../../lib/contentful';
// import { GetStaticProps } from 'next';
// import { GetStaticPaths } from 'next';
// import { headers } from 'next/headers';

// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import { BLOCKS, INLINES } from '@contentful/rich-text-types';


// // interface BlogPostProps {
// //   post: {
// //     sys: {
// //       id: string;
// //     };
// //     fields: {
// //       title: string;
// //       date: string;
// //       slug: string;
// //       content: any;
// //       coverImage: {
// //         fields: {
// //           file: {
// //             url: string;
// //           };
// //         };
// //       };
// //     };
// //   };
// // }

// interface Sys {
//   id: string;
//   type: string;
//   createdAt: string;
//   updatedAt: string;
//   revision: number;
//   locale: string;
//   space: object;  // Add more detail if needed
//   environment: object;
//   contentType: object;
// }

// interface CoverImage {
//   fields: {
//     file: {
//       url: string;
//     };
//   };
// }

// interface Blog {
//   sys: Sys;
//   fields: {
//     title: string;
//     slug: string;
//     date: string;
//     content: any;  // You can define this more if you know the structure
//     coverImage: CoverImage;
//   };
// }
// const BlogDetails = async({ params }: { params: { slug: string } }) => {
//    const {slug} = params
//   // console.log('pathname', slug);
//   const blogs:Blog[] = (await getAllPosts()) || []
//   console.log(blogs, 'blogs')
 
//   const options = {
//     renderNode: {
//       [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => <h3>{children}</h3>,
//       [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => <p>{children}</p>,
//       // [BLOCKS.UNORDERED_LIST]: (node: any, children: React.ReactNode) => <ul>{children}</ul>,
//       [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => <li>{children}</li>,
//       [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
//         <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
//           {children}
//         </a>
//       ),
//     },
//     const blogDetils:Blog[]= blogs?.filter((blog) => slug == blog.fields.slug);
 
//   const demo = blogDetils?.map((data)=>console.log(data.fields.content))
//   // console.log(demo,'demo')
//   console.log('blogDetils',blogDetils)
//   return (
//     <div className='md:flex items-center justify-center gap-3 mx-5'>
//       {blogDetils &&
//         blogDetils.map((result:any,index:number)=>(
//            <div key={index}>
//             <h1>{result?.fields.title}</h1>
//             <p> </p>
//           </div>
//   )) 
//       }
//       <h1>Blog Details</h1>
    

//     </div>
//   );
// };

// // export const getStaticPaths: GetStaticPaths = async () => {
// //   const res = await getAllPosts();
// //   console.log(res)
// //   const paths = res.map((post) => ({
// //     params: { slug: post.fields.slug },
// //   }));

// //   return {
// //     paths,
// //     fallback: false,
// //   };
// // };

// export default BlogDetails;



import React from 'react';
import { getAllPosts } from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

interface Sys {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  revision: number;
  locale: string;
  space: object;  // Add more detail if needed
  environment: object;
  contentType: object;
}

interface CoverImage {
  fields: {
    file: {
      url: string;
    };
  };
}

interface Blog {
  sys: Sys;
  fields: {
    title: string;
    slug: string;
    date: string;
    content: any;
    coverImage: CoverImage;
  };
}

const BlogDetails = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const blogs:any = (await getAllPosts()) || [];
  const blogDetails: Blog[] = blogs.filter((blog:any) => blog.fields.slug === slug);

  const options = {
    renderNode: {
      [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => <h3>{children}</h3>,
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => <p>{children}</p>,
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => <li>{children}</li>,
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  };

  return (
    <div className="md:flex items-center justify-center gap-3 mx-5 blogDetails">
      {blogDetails.map((result: Blog, index: number) => (
        <div key={index}>
          <h1>{result.fields.title}</h1>
          <div>
            {/* Render the rich text content */}
            {documentToReactComponents(result.fields.content, options)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
