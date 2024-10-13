import React from 'react'
import Image from 'next/image'
interface  CardProps{
  title:string;
  date: string;
  imageUrl:any

}

const Card : React.FC<CardProps> = ({title,date,imageUrl}) => {
 
  // formate data
  const postDate = new Date(date);
  const options : Intl.DateTimeFormatOptions ={
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  const formatedDate = new Intl.DateTimeFormat('en-us',options).format(postDate)
  return (
    <div  className='md:max-w-96 mt-8 bg-white rounded-lg hover:shadow-md
            border object-contain hover:cursor-pointer relative '>
      <Image
        src={imageUrl}
        alt="Image"
        width= {500}
        height={500}
        className='h-48 rounded-t-md'
      />
      <div className='p-3 min-h-36'>
        <h2 className='text-xl font-bold hover:text-blue-600 ml-1'>
          {title}</h2>
          <p className='ml-1 text-xs'>{formatedDate}</p>
      </div>
    </div>
  )
}

export default Card
