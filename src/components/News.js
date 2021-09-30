import React, { useContext, useEffect } from "react";
import { NewsContext } from "../NewsContext";
import NewsCard from "./NewsCard";
import Header from "./Header"

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data,"data in news");
  useEffect(()=>{
    console.log(data,"in news")
  },[data])

  return (
    <div>
      {/* <Header/> */}
      {/* <h1 className="head__text">UK News App </h1> */}
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsCard data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;
