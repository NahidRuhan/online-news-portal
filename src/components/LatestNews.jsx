import React, { use } from "react";
import FastMarquee from "react-fast-marquee";

// Safely unwrap the component if Vite serves the raw module object instead of the default export
const Marquee = FastMarquee.default || FastMarquee;

const newsPromise = fetch('/news.json').then(res=>res.json())

const LatestNews = () => {
    const data = use(newsPromise)
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      <Marquee className="flex" pauseOnHover={true} speed={60}>
        {
            data.map(news=><p className="font-bold px-5" key={news.id}>{news.title}</p>)
        }
      </Marquee>
    </div>
  );
};

export default LatestNews;