import React from "react";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import Header from "./components/Header"
import "./app.css";


function App() {
  
  return (
    <>
    <Header/>
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
 </>
  );
}

export default App;
