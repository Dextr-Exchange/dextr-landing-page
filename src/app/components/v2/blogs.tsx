import React, { useEffect, useState, useRef } from 'react';
import { MdOutlineExpandMore } from "react-icons/md";
import './index.css';
import axios from 'axios';
import ToText from '@/app/utils/toText';

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const scrollContainerRef = useRef(null);

  const getPostData = async() => {
    await axios
      .get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dextr-ex")
      .then((res) => {
        setPosts(res.data.items);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  };

  useEffect(() => {
    getPostData();
  }, []);

  const handleMouseEnter = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.classList.add('slow');
    }
  };

  const handleMouseLeave = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.classList.remove('slow');
    }
  };

  return (
    <div className="text-white mt-5 md:mx-10 mx-5 md:p-6 p-2">
      <div className="mx-auto px-4">
        <h2 className="text-6xl max-md:text-4xl max-sm:text-2xl font-primary text-center mb-4">Ready to start trading?</h2>
        <p className="text-center text-lg max-sm:text-base text-gray-300 mb-8">Join the test-net BETA and start creating your markets.</p>
        <div className="flex justify-center mb-8">
          <a 
            href='https://forms.zohopublic.com/brainchain/form/DextrBetaProgram1/formperma/jwTVjPwh8O2gVFb0TZSSjuBkc-IluEevhgOxTLzDqeY?utm_source=landing' 
            rel='noopener noreferrer' 
            target='_blank' 
            className="flex items-center gap-1 bg-neutral-300 text-black px-6 py-3 rounded-full"
          >
            Join Waitlist
            {/* <MdOutlineExpandMore className="text-xl" /> */}
          </a>
        </div>
        <div
          className="overflow-hidden relative h-64 mb-16"
        //   onMouseEnter={handleMouseEnter}
        //   onMouseLeave={handleMouseLeave}
        >
          <div className="animate-scroll flex absolute left-0 top-0" ref={scrollContainerRef}>
            {posts.concat(posts).map((post, index) => (
              <a href={post?.link} key={index} className="bg-gray-950 p-4 rounded m-2 min-w-[300px] w-72">
                <p className="font-bold">{post?.title.substring(0, 100)}</p>
                <p className="mt-2 break-words text-gray-400">{`${ToText(post?.content.substring(0, 1000))}...`}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
