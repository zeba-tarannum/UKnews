import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <h1 className="news__title">{data.title}</h1>
      {/* <img src={data.urlToImage}/> */}
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
    </div>
  );
}

export default NewsArticle;
