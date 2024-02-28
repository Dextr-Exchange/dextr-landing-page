"use client"; // This is a client component 👈🏽

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import c from "./blogs.module.css";
import ToText from "../utils/ToText";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const getPostData = async() => {
      await axios
        .get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dextr-ex")
        .then((res) => {
          setPosts(res.data.items);
          console.log(res.data)
        })
        .catch((error) => {
          console.error("Error fetching blog posts:", error);
        });
    };

    useEffect(() => {
      getPostData();
    }, []);

    return (
        <div className="pb-12 xl:py-28 px-20">
          <div className='text-center flex justify-center mx-3 mb-10 xl:mx-20 flex-col gap-3'>
            <h1 className='text-3xl xl:text-6xl font-primary font-bold'>Blogs</h1>
          </div>
          <div className="flex w-full overflow-x-scroll overflow-y-hidden">
          {
            posts && posts?.map((item) => {
              return(
                <div key={item} className="mx-3 my-4 max-w-sm min-w-[300px] h-[320px] border-[#01C3F1] rounded-lg shadow dark:bg-gray-900">
                  <div className="p-5">
                      <a href={item?.link} className="">
                          <h5 className="text-ellipsis mb-2 h-[80px] text-lg font-bold tracking-tight text-gray-900 dark:text-white">{item?.title.substring(0, 100)}</h5>
                      </a>
                      <p className="text-ellipsis overflow-hidden max-h-32 font-normal text-[#5a6169]">{`${ToText(
                        item.content.substring(0, 1000)
                      )}...`}</p>
                      <br />                      
                      <a href={item?.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Read more
                          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </a>
                  </div>
                </div>


                // <div key={item} className={`col-md-4 col-sm-6 col-xs-12 w-[450px] min-w-[300px] h-max ${c.grid}`}>
                //   <div className={c.cardsmall}>
                //     <div
                //       className={c.cardpost__image}
                //       style={{ backgroundImage: `url(${item.thumbnail})` }}
                //     >

                //       <div className={c.authorimg}>
                //         <a
                //           href={item.link}
                //           rel="noopener noreferrer"
                //           target="_blank"
                //           style={{ backgroundImage: `url(${item.avtar})` }}
                //         >
                //           Written By Mehul
                //         </a>
                //       </div>
                //     </div>

                //     <div className="card-body">
                //       <h5 className="card-title">
                        
                //         <a
                //           href={item.title}
                //           className={c.textfiordblue}

                //         >
                //           {item.title}
                //         </a>
                //       </h5>

                //       <p className={c.cardText}>{`${ToText(
                //         item.description.substring(0, 1000)
                //       )}...`}</p>
                //       <br />

                //       <span className="text-dark">
                //         <svg
                //           aria-hidden="true"
                //           focusable="false"
                //           data-prefix="fas"
                //           data-icon="user"

                //           role="img"
                //           xmlns="http://www.w3.org/2000/svg"
                //           viewBox="0 0 448 512"
                //         >
                //           <path
                //             fill="currentColor"
                //             d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                //           ></path>
                //         </svg>
                //         {item.author}
                //       </span>

                //       <br />
                //       <span className="text-muted">
                //         <svg
                //           aria-hidden="true"
                //           focusable="false"
                //           data-prefix="fas"
                //           data-icon="calendar-alt"

                //           role="img"
                //           xmlns="http://www.w3.org/2000/svg"
                //           viewBox="0 0 448 512"
                //         >
                //           <path
                //             fill="currentColor"
                //             d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                //           ></path>
                //         </svg>
                //         {/* {moment(item.pubDate).format("MMM DD, YYYY hh:mm")} */}
                //       </span>
                //     </div>
                //   </div>
                // </div>

            )
          })}
          
          </div>

        </div>
    );
  };
  export default Blog;