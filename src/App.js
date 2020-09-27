import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./styles.css";
import NewsCards from "./component/newsCard/newsCards";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  logoContainer: {
    padding: "0 5%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      textAlign: "center"
    }
  },
  alanLogo: {
    height: "27vmin",
    borderRadius: "15%",
    padding: "0 5%",
    margin: "3% 0",
    [theme.breakpoints.down("sm")]: {
      height: "35vmin"
    }
  }
}));

function App() {
  const classes = useStyles();
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
      <div>
        <img
          src="https://alan.app/voice/images/previews/preview.jpg"
          className={classes.alanLogo}
          alt="logo"
        />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
}
export default App;
