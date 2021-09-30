import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "b2e837a8ee444ae08fdb35f574ff6713";

 let url=''
    if(props.search){
      url=`https://newsapi.org/v2/everything?q=${props.search.q}&from=${props.search.from}&to=${props.search.to}&language=${props.search.lang}&sortBy=${props.search.sortBy}&apiKey=${apiKey}`
    }
    else{
      url= `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    }
    
  useEffect(() => {

    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [url]);

  return (
   
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
