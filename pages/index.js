import Head from 'next/head'
import Nav from '../components/Nav'
import { useState } from 'react'

export default function Home() {
   const [isFollow, setIsFollow] = useState('false')
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
            <div className="left">
               <div className="bloc">
                  <h2>submission guidelines</h2>
                  <p>Client-side, server-side, it doesn't matter. This tag should be used for anything JavaScript focused. If the topic is about a JavaScript framework or library, just remember to include the framework's tag as well.</p>
                  <button>Create Post</button>
               </div>
               <div className="bloc">
                  <h2>about #javascript</h2>
                  <p>How should the tag be written? All lower-case letters for the tag:<br /> <span>javascript</span>.</p>
               </div>
               <div className="bloc">
                 <h2>tag moderators</h2>
                 <ul>
                   <li><img src="/assets/mod-1.jpeg" alt="Moderateur profil picture" /></li>
                   <li><img src="/assets/mod-2.png" alt="Moderateur profil picture" /></li>
                   <li><img src="/assets/mod-3.png" alt="Moderateur profil picture" /></li>
                   <li><img src="/assets/mod-4.jpeg" alt="Moderateur profil picture" /></li>
                   <li><img src="/assets/mod-5.jpeg" alt="Moderateur profil picture" /></li>
                 </ul>
               </div>
               <p className="end">51634 Posts Published</p>
            </div>
            <div className="post"></div>
            <div className="right"></div>
         </main>

         <footer>
            {/* <p>DEV Community – A constructive and inclusive social network for software developers. With you every step of your journey.</p>
            <p>Made by @Myself (Code on my GitHub, Open source). Layout is from the real DEV.to website an datas are from their API.</p> */}
         </footer>
      </>
   )
}
