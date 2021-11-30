import React from 'react'
import Nav from '../components/Nav'
import Head from 'next/dist/shared/lib/head'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import Articles from '../components/Articles'

export default function Search() {
   const router = useRouter()
   const queryParams = router.query.req
   const [articles, setArticles] = useState([])
   useEffect(() => {
      if (!router.isReady) return
      const fetchData = async () => {
         const req = await fetch('https://dev.to/api/articles?per_page=500&tag=javascript')
         const data = await req.json()
         return setArticles(
            data.filter((el) => {
               return el.title.toLowerCase().includes(queryParams.toLocaleLowerCase())
            })
         )
      }
      fetchData()
   }, [router.isReady, queryParams])

   return (
      <>
         <Head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="" />
            <title>Dev.to clone with Next.js</title>
            <link rel="icon" href="#" type="image/x-icon" />
         </Head>
         <Nav />
         <div className="result-wp">
            <h1>Search results for {queryParams}</h1>
            <div className="content">
               <div className="left">
                  <p className="active">Post</p>
                  <p>Podcasts</p>
                  <p>People</p>
                  <p>Comments</p>
                  <p>My posts only</p>
               </div>
               <div className="right">
                  <Articles data={articles} />
               </div>
            </div>
         </div>
      </>
   )
}
