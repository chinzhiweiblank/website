import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Firevisor from "../Images/firevisor.jpeg";
import Whizz from "../Images/Whizz.jpg";
import BackgroundImg from "../Images/watchDogsBackground.jpg";
import Card from "./Card";
import Button from "@material-ui/core/Button";
import "./typewriter.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    alignContent: "center",
    color: theme.palette.text.secondary,
  },
  imgPaper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: "100%",
    marginLeft: "5%"
  },
  mainPaperTitle: {
    textAlign: "center",
    margin: "1% 0% 2%",
    color: theme.palette.text.primary,
  },
  mainPaper: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  img: {
    margin: "5% auto 20px",
    display: "block",
    minWidth: "200px",
    minHeight: "300px",
    maxWidth: "100%",
    maxHeight: "300px",
  },
  titlepaper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
  image: {
    width: 128,
    height: 128,
  },
}));

export default function ProjectPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}><img src={BackgroundImg} alt="backgroundImg" style={{ zIndex: "-1", position: "absolute", height: "25vw", width: "100vw"}}/>
          <Typography variant="h2" className={classes.mainPaperTitle}>
            <div className="typewriter">
              <h1>My Projects</h1>
            </div>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.mainPaper}>
            <Typography variant="h4" style={{ margin: "0 0 2%" }}>
              This is a list of my projects since the start of my journey, which would not have been possible without
              the help of my peers, mentors and online resources.
            </Typography>
            <Typography variant="h4">
              It's been a fun journey digging through documentation, tutorials and concepts provided by those who paved
              the path ahead.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.imgPaper}>
            <img src={Firevisor} alt="firevisor" className={classes.img}/>
            <Button
              variant="contained"
              size="large"
              color="primary"
              href="/firevisor"
            >
              Learn More
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <img src={Whizz} alt="Whizz" className={classes.img} />
            <Button
              variant="contained"
              size="large"
              color="primary"
              href="/whizz"
            >
              Learn More
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
