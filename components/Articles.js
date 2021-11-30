import { v4 as uuidv4 } from 'uuid';

export default function Articles(props) {
   const dataArticles = props.data
   return (
      <>
         {dataArticles.map((el) => (
            <div className="article" key={uuidv4()}>
               <div className="top-row">
                  <img src={el.user.profile_image_90} alt="" />
                  <div className="user-info">
                     <p>{el.user.name}</p>
                     <span>{el.readable_publish_date}</span>
                  </div>
               </div>
               <div className="middle-row">
                  <h2 onClick={() => window.open(el.url, '_self')}>{el.title}</h2>
                  <div className="tags">
                     {el.tag_list.map((el, key) => (
                        <span key={key}>#{el}</span>
                     ))}
                  </div>
               </div>
               <div className="bottom-row">
                  <div className="left">
                     <div className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                           <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                        </svg>
                        <p>{el.positive_reactions_count} reactions</p>
                     </div>
                     <div className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                           <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                        </svg>
                        <p>{el.comments_count != 0 ? el.comments_count : 'Add'} Comment</p>
                     </div>
                  </div>
                  <div className="right">
                     <p>{el.reading_time_minutes} min read</p>
                     <button type="button">Save</button>
                  </div>
               </div>
            </div>
         ))}
      </>
   )
}
