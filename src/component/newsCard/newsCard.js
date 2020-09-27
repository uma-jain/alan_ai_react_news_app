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

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  media: {
    height: 250
  },
  border: {
    border: "solid"
  },
  fullHeightCard: {
    height: "100%"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "10px solid white"
  },
  activeCard: {
    borderBottom: "10px solid #22289a"
  },
  grid: {
    display: "flex"
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px"
  },
  title: {
    padding: "0 16px"
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between"
  }
});

function App({
  article: { title, description, url, urlToImage, publishedAt, source },
  i
}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.media}
          image={
            urlToImage ||
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAA+VBMVEUidYX///9Hxv8ec4RJiZdExf9MyP8/ufQswf8AaXtAuvY/tvEhcoFAvPf3/f/8//+j3/8AaHq+6P/i9P2r4v/f7PSS2/+g3f+90NwgbXwGbn8AYnVbkp49rOLy9/iq4v8cYW9nzv88odRqmKPn7/EaWWWbusG+0teEq7Q/sOdKzP8WTlUqmc0aWGN0oavd6OrO3eCnwsg6f43O7v9Pi5gxk7McZ3JHu+0pfZWI1//Y8f8rhqqNsbnG2Ny3zdIAWG0mfJI6o8w+r940nMIwjKl5xuuSz+9duN6u1ehyyvUwkbldqdFFnssvkL2dzenK4vF8sc+Ru9IjcIp3cHOgAAAN5UlEQVR4nO2dC3uayhaGWU5QJ1EJSU57HAi1Ae8VkKSai5pLs2/d7ek+/f8/5qwZQFFRk3af3Wbge540I4xE3n5rzZoBVdnL9WQpJNeTpeTKlStXrly5cuXKlStXrly5cmVAhFRQdSHeyldFNohwSqNR/e7y8T3q8fGO8IdI7Ee/sp9NhIMij/fjQi+hwvjh/Z0A9qNf388j9NRohKAQT1GoMFex2FMf3leQV+4vLoy+0d19MeK0AksA6xUfHnN7KSL+Ro/jXhLVKizBq/ChPsq6u0JUxeJ2VmFA3tczHYykMrpcQ7UBFuIqvB/VM0sLR8CHdVQbYRUKvfFdRmMRbfVYTGO1GRbiusdM/6Nf+T8vZHWfimorrEJxTLJHC0MwJVvtZFVQC4XHUcZoVep36aR2wlILvffZooWj4EZWu2Cpau9Dlmghqw0huIuVgKVims8MrUo9nVVhF6mIVZZoVepkg592+iqGlZlIJPX6BlMVU7kI8cS+tLGXjTGxMhqnwOIAqmp1g9SCukqweJeBeiu1Fh3/cnS8Ree/jsfCW0tek99aqcn9t3/BDlm/jNWV0Cw+SE+rMlqPwd9qu1ihfh1XV/JY71HyNYi0IHywnsAK4LeuiMUMBWL9bj0If38SK7DOusuw1KLc1VbaSDjWngYL/lqj1SP1H31G/z9V6o9rxir8wUEcH53zf46uz49Q57Uj8Rjw9zGcHF4f8z5f3p11V6ovmXN8mrHUV8I2R2Wkc3QFWuEcjotwpAL/BUev4O0xXJ3wLv96d7ZKqyfv4laKsXCAC2FpV2UNjQTw9hw0NFK5Bif486YGZYDaqxjW6TItia2VZqwYVu3o8C3GIcK6Br7l7REcoqGwWcQttTms05KY+8ytVZc1a9VJypWcGNYJFE+Es14hNYCTq+Pz87dwiJ57VS4eL2BxWokBUdYJdfqi+wJWrXwdOuuIZ3wV81T5HHM8uurq7QJWt1tKOEvaWiuteC8kYGGSD2GJB2Xc/gem+OuTMNUvYHWryTi8lDPFp80K4wSvneCgB1dHUCscHh9jwoKrcHSE4/K59vpoCVaSVkHOwhSjMMVZEaza+TV31DFcX1+fn19j6B1r4jGG4fmJSFkLWAcHC1qSxmH6Olac4J+ghbOStOSs4uujlPT+TbAODhK0ijJeGCMpU50FLDHL2aI1WHNaUtalldGHLbCuytulJWAdHCRpFcYNCWE1HtJYRbCOXm3VFazDimn1GvIlrUpjLb+HlyCenbMOlmkV76RbMK3UB70UVPM6a4dSYYW0io/SlaWV5cEwcXlQwHq7I2fVUmEJWoWP0mX4SmIWvXwtNYSlbr0KnYR1cLBMqyDfXDq+BLaOYhcsdQXWCi2c8Eg3HHJY6Sx2wFK3wiqhtySENfo2WOpWWCVUVb6q9O+DtcKqtH8mn7M2hKG6HZa6DVYphPVJPmfV777BWeoarEQUliJYMpYO9efDUrfBillJCavxbFjqNlgxq1L1RkJYg/RbIDfDUrfBmrMqVS9lhDVOpRVPd9RVpU93IlgLVqVqXTpYpD643wKrtkPzifQaq/3qQLqJtFJvfEyvHZ63RNNdZbXflRDWpqo0WlZ+fbhNr6MwPE3CCllVPzUlhFUfbIH1+mlLNElYIav96o2MK6X1wUNa0gphXZ9s1xKsJVblhnT5XRRa7zfDemLOWsCKWUmZsniGN9LiMM5ZW/Uq6SwOas6q+lHClMWt1R//LTkr6av9st6QE1YzrXiInHX4ZpsOl521YFXt9iVMWSJpNTfCek7OSviqWr2RMgrFeJhSxM+d9eQ6ixsrZlUdSBmFwlopyzTflrMiVvsfpRwLFT49HPXXS63IWW/SqqvUnJVkVW1Kaixhra9r1np2zkqwktdY3FqNdWtFzkov3N8cp8Ca56v9fVkzFhdaa2W9VFXVq2056zwB68s7sZyFg+F+yKp8M5D2NniRtQbve0lS+DMOK/j0UTDprN9DWAel2FfdvsTGEtbqhwum8/tn1e7T3m4I8Ge4nCXWZTirstGUsiCNhdZqNnrLy8elX5+c38+iAj5kdSNzxuJCaw1uVmidfXkSrE+f4sFQsKqeyh2EiviIv0b/vrgEa3x2vRuV9ufnswhWyKo0kLfGilWpj3j9sESr++4/u97N+uVTxOogZLVfNeRnFc6nB8tv362O333+6/d/b9Z/P37+HN1Bw43F10e/yp6wQnFazeR7BtVqdXx69m6bzs7Eu+dCYwlW/UYmPs+Op61BCq3tOo18xYus/fIlJvcssBKf3NMYDKrFJVpVpHF2GnPhP6uas6pW0VeZCEIunuQH/YelCkLQ2qBuN3x300EGWYW0mv0PveW30ncjKimKr9mLheTmgLOS7Y0CmxXSulz5cJmDJJoVibtHed3+qZ8xVuLetgam+Ydlc22idCDuw+KpvfS132xk7gPPBa1m/0aN87xYgyitYgqvTYRzZ26rAbdVdvJVLCJCcTD40JsPi8irtIQqZlXl08Fq+dRAW2WRlTI3V+O+V1y85bm0dv+VEEf1lWerzH6IPv+OAY6r+UGd5y5BK4XVGaIKbZWtdLUQEeZCXP3Lh2Lkr0JpmRVfPu7eNGNU2bRVqBjXoD+4vK/2enwVNaIV5nT01E2jH6GS7l2Yz1UlwoW8+s3Lj/fdaq8s1mCqpe7Z5xujH5LCZJXdCExIfDmR4MWBcTiNMDZ5c9DkpLirclSheDAKXoIY1hNcvMW3jASpHNVCJPyGsFFIbK7RKPrWsB/9+n42kflXqiVVyT21SeG30C2Ufwtdrly5cuXKlespIiwvGhSOgcUg2KIZPwxFiA0T9mNe388k5gNA1Gxh053T0he3gbjMdDo5LNQEoCVA6BZYwWK7Dr5p+mDaE3ArhMasyPwfZbmVBTEbLEvHBjHBwQajyIVQSnV/wmgbDBZ4Nm4kfCMPSQxKHprhk/EhmzfkB4fpqAUmniedWjOLMt9Cdm7NsTo6U1gbkCOlM8uaMFuzhhiplhk4ADOKz6UzAG3CW1MMVn9PeloIy7SmeMIMWlOLkgsLzIoyhBmPyBCWQvaGGKqBq4HvTtCIQ9cHzGF0Ci2zjS3qQcdswVT6tIaw7BagiSbAPIvyNG8TxCCyUQSLxyrmNcNyDKYjR53p4FGM26HBDIxdBm2jYvh+FmB1CBYGuuUbHJaiwJRSZMF3xrCIgEUt3Mo6mO8V6jiUDdFPNo4BjFo4itJs5KyO4VvGBdi6w2FRH6gLYaWwHVY7qiwICTwAr0N/7Jn8A+KwMMr22pZOBSzigjuF0CbbYc0grjSoHnR8mGUiDDEG20iDOqKG0KEN7ag0WIKlr8DCAozxGYDCpjZjhhf2lVnoqg7lxbtCMFcbaCjMRaKWQOlYZ5GwU0snhuXphCIsil0dgzDNChBZh+g8zQWaI3scYiwBH9nwdC94/rGx+AzACj1C+ZZOJepk8kcBnx5NA968YFhmWLz+xzSHDe1C9gxP9kzTvCDkIiAKtsyAz2BgGEYhibfwTqbYr1zw/mETS3m31QmwL93rtNwsjIZcYo4XtwxM3GSxc9GJrIhvj+Y9mZjsrIu4M5jKnnz+LmF+mn6nS17w1UWysqa3S+x7S3HychduiNtC2U+rF4mp8bqUeXxU/FaxdvulVqfEdLzWUKwriPAIs3mUnsU/SryZu9Cs8Xxl1GwWdSDxs6Lgip+4tHtxKP4riAr7xDOjv/LTi06HOmMQVIiLBALbVgKzcmGbhAWdPUZMm5gB4ft47Wnbmlio0rDFeOXAbCwskLiNNQPjp84PguVDZS+omPYeFg8uYmAmVhDENpl5gXvtcGGL2S4yxOPYAdvrKHaw44X+DGLTIVbcsBeA71nkAhzaAqMDbb0DU2jRIXiOGWi+41HqW1MxPcRZoDO1PKMFM12sXGFR7089C1nzjsYEhoYzNabgkprvY3UKHrbpFPy2NtMn4SSROZ4Pe7QNvkPwT31XZP9jYtO2afuO4c8Mw5sZw5nheC4Fima7DYAaTsug/vD2VrNNoLorwpDWOroOruFM9KHPq3neMsDVRUfXsEzF0YyOZ3SsW2Nok/at0ULYEFAFAn3GYbGhZ+hDjxpg8kPp9GXAaju+P8T5m03YxNFNi9U6bdfTTbSUB4RaboVqDjY7eL5kHoYECdKJg2j4nWuil+MaouOEzoaTmW9PcXLtOMOAsWDY9vicKSC61aECFvVaGMeAoAKcP1FFfxmwpkMD62yKZ80Qhw6tGYNZi12AEmAqDmF1sEmGq7Aw1dkgClTRy3J10ZEPGr45mWmY6/SLIZgBTPaGy7AIw6cvYOkvBJbeHvLzZW3f0K0WY1OMCw/PgELHoCYxHJeJfZidQTFalqFwNi2DcStiDhJlAO+FP7roSBRdw6k2ODpxPePWG7rare57OgHT2BNhqCt7bGLpxnTKbkERfyp4CbBYCzRxNZl4ljZlSqUDOmvhufKaqtbW22Dh2XuW5fCLNc4UPB5DWtuBNlVwPBAjG5b1lil6io7o1imjHlrnwuKPiQNOG0yGuRxa+kTTOmhIOtX4MXEXqdhgvYgEv3iFNFBYcgPWDgqb7+OLB0wJWFgkhY8U6lorC3phRxIfB48humJA4sGAH3F+fCaOEig4K2e6cgsvYQXnO14iunLDVfs5rWTvSXhpe/0Pkguv5cm+NMiGz7nDgQ1bw/T/GaJMZq2XOgV6stizzpBt7E4278qVK1euXLly5cqVK1euXLly5cqVK1euXLn+If0PqS45IC3+HskAAAAASUVORK5CYII="
          }
        />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography variant="h5" gutterBottom className={title}>
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography color="textSecondary" component="h5">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
}
export default App;
