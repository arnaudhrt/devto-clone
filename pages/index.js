import { useState, useEffect } from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Articles from '../components/Articles'
import New from '../components/new'

export const getStaticProps = async () => {
   const req = await fetch('https://dev.to/api/articles?per_page=20&tag=javascript')
   const data = await req.json()
   return {
      props: {
         data
      }
   }
}

export default function Home(props) {
   // Toggle page new article
   const [isNewToggle, setisNewToggle] = useState(false)
   const toggleNewArticle = () => {
      setisNewToggle(!isNewToggle)
   }
   // Infinite scroll
   const [fistArticles, setFistArticles] = useState(props.data)
   let moreArticles = props.data
   useEffect(() => {
      const addArticles = () => {
         setFistArticles([...fistArticles, ...moreArticles])
      }
      const getScroll = () => {
         const scrollPos = Math.round(((window.innerHeight + window.scrollY) * 100) / document.body.offsetHeight)
         if (scrollPos >= 85) {
            addArticles()
         }
      }
      window.addEventListener('scroll', getScroll)
      return function cleanupListener() {
         window.removeEventListener('scroll', getScroll)
      }
   }, [fistArticles])
   // Add new articles
   const pushNewArticle = (data) => {
      setFistArticles([data, ...fistArticles])
   }

   return (
      <>
         <Head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="" />
            <title>Dev.to clone with Next.js</title>
            <link rel="icon" href="#" type="image/x-icon" />
         </Head>
         {isNewToggle && (
            <>
               <New pushNewArticle={pushNewArticle} toggleNewArticle={toggleNewArticle} />
               <button className="close" onClick={() => toggleNewArticle()}>
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path>
                  </svg>
               </button>
            </>
         )}
         {isNewToggle === false && (
            <>
               <Nav toggleNewArticle={toggleNewArticle} />
               <Header />
               <main>
                  <div className="left-col">
                     <div className="bloc">
                        <h2>submission guidelines</h2>
                        <p>
                           Client-side, server-side, it doesn&apos;t matter. This tag should be used for anything JavaScript focused. If the topic is about a <i style={{ fontWeight: "700" }}>JavaScript</i> <i>framework</i> or <i>library</i>, just remember to include the framework&apos;s tag as well.
                        </p>
                        <button onClick={() => toggleNewArticle()}>Create Post</button>
                     </div>
                     <div className="bloc">
                        <h2>about #javascript</h2>
                        <p>
                           How should the tag be written? All lower-case letters for the tag:
                           <br /> <span style={{ background: 'rgba(0,0,0,0.1)', padding: '0 5px', borderRadius: '50px' }}>javascript</span>.
                        </p>
                     </div>
                     <div className="bloc">
                        <h2>tag moderators</h2>
                        <ul>
                           <li>
                              <img src="/assets/mod-1.jpeg" alt="Moderateur profil picture" />
                           </li>
                           <li>
                              <img src="/assets/mod-2.png" alt="Moderateur profil picture" />
                           </li>
                           <li>
                              <img src="/assets/mod-3.png" alt="Moderateur profil picture" />
                           </li>
                           <li>
                              <img src="/assets/mod-4.jpeg" alt="Moderateur profil picture" />
                           </li>
                           <li>
                              <img src="/assets/mod-5.jpeg" alt="Moderateur profil picture" />
                           </li>
                        </ul>
                     </div>
                     <p className="end">51634 Posts Published</p>
                  </div>

                  <div className="middle">
                     <div className="top-line">
                        <h2 className="active">Relevant</h2>
                     </div>
                     <div className="articles">
                        <Articles data={fistArticles} />
                     </div>
                  </div>

                  <div className="right-col">
                     <h2>#discuss</h2>
                     <div className="discuss-wp">
                        <div className="discuss-item">
                           <h3>Mongodb-native over mongoose?</h3>
                           <p>47 comments</p>
                        </div>
                        <div className="discuss-item">
                           <h3>How to Add BUY ME A COFFEE Button in DEV.TO Blog</h3>
                           <p>6 comments</p>
                        </div>
                        <div className="discuss-item">
                           <h3>Do you still work with jQuery?</h3>
                           <p>67 comments</p>
                        </div>
                        <div className="discuss-item">
                           <h3>JavaScript is DEAD 💀</h3>
                           <p>40 comments</p>
                        </div>
                     </div>
                  </div>
               </main>
            </>
         )}
      </>
   )
}
