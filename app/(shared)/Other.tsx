import React from 'react'
import Card from './Card'

type Props = {}

function Other({}: Props) {
  return (
    <section className='pt-4 mb-16'>
        <hr className="border-1"/>
        {/*HEADER*/}
        <p className="font-bold text-2xl my-8 uppercase">Other Trending Posts</p>
        <div className="sm:grid grid-cols-2 gap-16">
            <Card className='bg-wh-500 mt-5 sm:mt-0'
                imageHeight='h-96'
                />
            <Card className='bg-wh-500 mt-5 sm:mt-0'
             imageHeight='h-96'
            />
            <Card className='bg-wh-500 mt-5 sm:mt-0'
                imageHeight='h-96'
            />
            <Card className='bg-wh-500 mt-5 sm:mt-0'
                imageHeight='h-96'
            />
        </div>
    </section>
  )
}

export default Other