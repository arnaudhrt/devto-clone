import React from 'react'
import { useState } from 'react'

export default function Header() {
  const [isFollow, setIsFollow] = useState(false)
   return (
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
               Once relegated to the browser as one of the 3 core technologies of the web, JavaScript can now be found almost anywhere you find code. JavaScript developers move fast and push software development forward; they can be as opinionated as the frameworks they use, so let's keep it clean
               here and make it a place to learn from each other!
            </p>
         </div>
      </header>
   )
}
