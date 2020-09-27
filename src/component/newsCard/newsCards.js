import React, { useEffect, useState } from "react";
import NewsCard from "./newsCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: "0"
  }
});
import { Grid, Typography, Grow } from "@material-ui/core";

function App({ articles }) {
  const classes = useStyles();
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
