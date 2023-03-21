import React, { useEffect, useState } from 'react'
import { Loader, Card, FormField } from '../components'

const RenderCards = ({data, title}) => {
  if(data?.length > 0){
    return data.map((post) => 
    <Card key={post.id}{...post}
    />)
  }
  return <h2 className='mt-5 font-bold text-[#6469ff] text-x1-uppercase'>{title}</h2>
}


const home = () => {
  const [loading, setloading] = useState(false)
  const [allPosts, setallPosts] = useState([null])
  const [searchText, setsearchText] = useState('abc')
  return (
    <section className="max-w-7xl mx-auto text-left">
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
          Community Showcase
        </h1>
        <p className='mt-2 text-[#666e75] max-w[500px]'>
          Browse through a collection of imaginative and visually stunning logos generated by MidTrek AI
        </p>
      </div>
      
      <div className='mt-16'>
        <FormField></FormField>
      </div>

      <div className='mt-10'>
        {
          loading ? 
            <div className='flex justify-center items-center'>
              <Loader />
            </div>
          : 
            <>
              <div className='grid lg:grid-cols-4 sm:grid-cols-3  xs:grid-cols-2 col-gap-3'>
                {
                  searchText ? (
                    <RenderCards
                      data={[]}
                      title='No Search Result'
                    />
                  )
                  : (
                    <RenderCards
                      data={[]}
                      title='No Posts Found'
                    />
                  )
                }
              </div>
            </>
        }
      </div>
    </section>
  )
}

export default home