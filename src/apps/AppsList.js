import React from "react";
import PostData from "../data/apps.json";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

function AppsList() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.card}>
      <CardContent>
        {PostData.map((listDetail, index) => {
          return (
            <div>
              <h1>{listDetail.name}</h1>
              <p>{listDetail.description}</p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

export default AppsList;
