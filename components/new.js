import React, { useState } from 'react'
import Error from './Error'

export default function New(props) {
   const date = new Date().toLocaleDateString('en-EN', {
      month: 'short',
      day: 'numeric'
   })
   const title = ''
   const tag1 = ''
   const tag2 = ''
   const tag3 = ''
   const tag4 = ''
   const sendData = () => {
      const articleData = {
         title: title,
         readable_publish_date: date,
         tag_list: [tag1, tag2, tag3, tag4],
         user: {
            profile_image_90: 'https://api-private.atlassian.com/users/e8b393c8eaa0583d8d12aff9f18ced75/avatar',
            name: 'Arnaud'
         },
         positive_reactions_count: 0,
         comments_count: 0,
         reading_time_minutes: 1
      }
      props.pushNewArticle(articleData)
      props.toggleNewArticle()
   }
   const [isClicked1, setIsClicked1] = useState(false)
   const [isClicked2, setIsClicked2] = useState(false)
   const removeError1 = () => {
      setTimeout(() => {
         setIsClicked1(!isClicked1)
      }, 3000)
   }
   const removeError2 = () => {
      setTimeout(() => {
         setIsClicked2(!isClicked2)
      }, 3000)
   }
   return (
      <div className="new-article">
         <div className="header">
            <div className="logo">
               <svg className="logo" width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="40" rx="3"></rect>
                  <path
                     d="M19.099 23.508c0 1.31-.423 2.388-1.27 3.234-.838.839-1.942 1.258-3.312 1.258h-4.403V12.277h4.492c1.31 0 2.385.423 3.224 1.27.846.838 1.269 1.912 1.269 3.223v6.738zm-2.808 0V16.77c0-.562-.187-.981-.562-1.258-.374-.285-.748-.427-1.122-.427h-1.685v10.107h1.684c.375 0 .75-.138 1.123-.415.375-.285.562-.708.562-1.27zM28.185 28h-5.896c-.562 0-1.03-.187-1.404-.561-.375-.375-.562-.843-.562-1.404V14.243c0-.562.187-1.03.562-1.404.374-.375.842-.562 1.404-.562h5.896v2.808H23.13v3.65h3.088v2.808h-3.088v3.65h5.054V28zm7.12 0c-.936 0-1.684-.655-2.246-1.965l-3.65-13.758h3.089l2.807 10.804 2.808-10.804H41.2l-3.65 13.758C36.99 27.345 36.241 28 35.305 28z"
                     style={{ fill: '#fff' }}
                  ></path>
               </svg>
            </div>
            <h2>Create Post</h2>
         </div>

         <div className="form">
            <form>
               <div className="form-head">
                  <div className="cover" onClick={() => setIsClicked1(!isClicked1)}>
                     Add a cover image
                     {isClicked1 && <Error />}
                     {isClicked1 && removeError1()}
                  </div>
                  <input className="title" type="text" placeholder="New post title here..." onChange={(e) => (title = e.target.value)} />
                  <div className="tags-wp">
                     <input className="tags" type="text" placeholder="tag 1" onChange={(e) => (tag1 = e.target.value)} />
                     <input className="tags" type="text" placeholder="tag 2" onChange={(e) => (tag2 = e.target.value)} />
                     <input className="tags" type="text" placeholder="tag 3" onChange={(e) => (tag3 = e.target.value)} />
                     <input className="tags" type="text" placeholder="tag 4" onChange={(e) => (tag4 = e.target.value)} />
                  </div>
               </div>
               <img src="/assets/tools-post.png" alt="tools post" />
               <textarea placeholder="Write your post content here..."></textarea>
            </form>
            <div className="form-action">
               <button className="publish" onClick={() => sendData()}>
                  Publish
               </button>
               <button className="draft" onClick={() => setIsClicked2(!isClicked2)}>
                  Save draft
                  {isClicked2 && <Error />}
                  {isClicked2 && removeError2()}
               </button>
            </div>
         </div>
      </div>
   )
}
