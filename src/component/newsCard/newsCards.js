import React, { useEffect, useState } from "react";
import NewsCard from "./newsCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: "0"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "45vh",
    padding: "10%",
    borderRadius: 10,
    color: "white"
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  }
});
const infoCards = [
  { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info:
      "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news"
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5"
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN"
  }
];
import { Grid, Typography, Grow } from "@material-ui/core";

function App({ articles }) {
  const classes = useStyles();
  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          container
          className={classes.container}
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                container
                alignItems="stretch"
                className={classes.infoCard}
              >
                <div
                  className={classes.card}
                  style={{ backgroundColor: infoCard.color }}
                >
                  <Typography variant="h5" component="h5">
                    {infoCard.title}
                  </Typography>{" "}
                  {infoCard.info ? (
                    <Typography variant="h6">
                      <strong>
                        {infoCard.title.split(" ")[2]}:
                        <br />
                        {infoCard.info}
                      </strong>
                    </Typography>
                  ) : null}
                  <Typography variant="h6" component="h6">
                    Try saying: <br /> <i>{infoCard.text}</i>
                  </Typography>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Grow>
    );
  }
  return (
    <Grow in>
      <Grid
        container
        className={classes.container}
        alignItems="stretch"
        spacing={3}
      >
        {articles.length &&
          articles.map((article, i) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                style={{ display: "flex" }}
              >
                <NewsCard article={article} i={i} />
              </Grid>
            );
          })}
      </Grid>
    </Grow>
  );
}
export default App;
