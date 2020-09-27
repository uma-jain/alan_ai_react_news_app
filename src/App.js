import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./styles.css";
import NewsCards from "./component/newsCard/newsCards";

function App() {
  const [newsArticles, setnewsArticles] = useState({});
  useEffect(() => {
    alanBtn({
      key:
        "5fd302e713da743e931b234bc34a19322e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setnewsArticles(articles);
        }
      }
    });
  }, []);
  return (
    <div className="App">
      <h1>Hello alan here</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
}
export default App;
