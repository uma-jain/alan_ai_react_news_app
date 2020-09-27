import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActions
} from "@material-ui/core";

function App({ article: {} }) {
  return (
    <Card>
      <CardActions disableSpacing>
        <CardMedia />
        <div>
          <Typography variant="">Method:</Typography>
          <Typography paragraph>Method:</Typography>
        </div>
      </CardActions>
    </Card>
  );
}
export default App;
