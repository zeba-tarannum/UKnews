import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsCard from "./NewsCard";


function News(props) {
  const { data } = useContext(NewsContext);


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
