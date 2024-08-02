import React from 'react'
import Image from 'next/image'
interface  CardProps{
  title:string;
  content: any;
  imageUrl:any
  key:string;
}

const Card : React.FC<CardProps> = ({title,content,imageUrl}) => {
  return (
    <div  className='w-64 h-64 mt-8 bg-white rounded border'>
      <img src={imageUrl} alt={title} />
      <Image
        src={imageUrl} // Can be a local path or a remote URL
        alt="Image description"
        width={500} // Specify width and height for optimal performance
        height={300}
      />
      <h2>{title}</h2>
    </div>
  )
}

export default Card
