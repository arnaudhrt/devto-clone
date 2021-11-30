import Head from 'next/head'
import Nav from '../components/Nav'
import { useState, useEffect } from 'react'
import Articles from '../components/Articles'

export const getStaticProps = async () => {
   const req = await fetch('https://dev.to/api/articles?per_page=15&tag=javascript')
   const data = await req.json()
   return {
      props: {
         data
      }
   }
}

export default function Home(props) {
   const [isFollow, setIsFollow] = useState('false')
   const [fistArticles, setFistArticles] = useState(props.data)
   let moreArticles = props.data

   const addArticles = () => {
      setFistArticles([...fistArticles, ...moreArticles])
   }

   useEffect(() => {
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
         <header>
            <img className="logo" src="/assets/js-badge.png" alt="Javascript logo" />
            <div className="text">
               <div className="row-top">
                  <h1>JavaScript</h1>
                  <button className={isFollow ? '' : 'active'} type="button" onClick={() => setIsFollow(!isFollow)}>
                     {isFollow ? 'Follow' : 'Following'}
                  </button>
               </div>
               <p>
                  Once relegated to the browser as one of the 3 core technologies of the web, JavaScript can now be found almost anywhere you find code. JavaScript developers move fast and push software development forward; they can be as opinionated as the frameworks they use, so let's keep it
                  clean here and make it a place to learn from each other!
               </p>
            </div>
         </header>
         <main>
            <div className="left-col">
               <div className="bloc">
                  <h2>submission guidelines</h2>
                  <p>
                     Client-side, server-side, it doesn't matter. This tag should be used for anything JavaScript focused. If the topic is about a <i style={{ fontWeight: '700' }}>JavaScript</i> <i>framework</i> or <i>library</i>, just remember to include the framework's tag as well.
                  </p>
                  <button>Create Post</button>
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
                  <h2>Latest</h2>
                  <h2>Top</h2>
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

         <footer>
            {/* <p>DEV Community – A constructive and inclusive social network for software developers. With you every step of your journey.</p>
            <p>Made by @Myself (Code on my GitHub, Open source). Layout is from the real DEV.to website an datas are from their API.</p> */}
         </footer>
      </>
   )
}
