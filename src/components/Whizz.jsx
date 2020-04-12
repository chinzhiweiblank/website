import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Whizz from "../Images/Whizz.jpg";
import Kubes from "../Images/Kubes.png";
import KMS from "../Images/KMS.jpeg";
import CloudBuild from "../Images/CloudBuild.png";
import Nginx from "../Images/Nginx.png";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "5% 5% 5%",
    height: "auto",
  },
  img: {
    margin: "auto",
    display: "block",
    maxHeight: "150px",
  },
  frameworkImage: {
    margin: "auto",
    padding: "2%",
    display: "block",
    height: "100%",
    width: "100%",
    minHeight: "100px",
    minWidth: "100px",
    maxHeight: "200px",
    maxWidth: "200px",
  },
  listItems: {
    marginTop: "2%",
    marginBottom: "2%",
  },
  paperList: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

export default function WhizzPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={Whizz} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={4}>
                <Grid item xs style={{ textAlign: "left" }}>
                  <Typography gutterBottom variant="h2">
                    Whizz Mobility
                  </Typography>
                  <Typography variant="h2" gutterBottom>
                    June 2019 - Present
                  </Typography>
                  <Typography variant="h5" gutterBottom color="textSecondary">
                    I joined Whizz Mobility to learn more about Devops and work
                    on its backend server for remote controlling its delivery
                    robots. I learnt about deployments, services, container orchestration
                     and Ingress on Kubernetes and Cloudbuild using Github Webhooks.
                    Also, on system design and architecture and security measures
                    such as Git-secret and SOPs using Google Cloud KMS.
                  </Typography>
                  <Typography variant="h5" gutterBottom color="textSecondary">
                    Here's a list of what I did:
                  </Typography>
                  <Paper className={classes.paperList}>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      className={classes.listItems}
                    >
                      1. Implemented a module builder which automatically
                      generates a dependency graph, topologically sorts it,
                      builds necessary modules linearly
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      className={classes.listItems}
                    >
                      2. Deployed services on Kubernetes Cluster on GKE
                      including Nginx Ingress and Redis
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      className={classes.listItems}
                    >
                      3. Implemented Let’s Encrypt SSL certificate generation in
                      K8 Cluster with HTTP-01 Challenge
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      className={classes.listItems}
                    >
                      4. Enabled creation of K8 Cluster on both Minikube for
                      local development and GKE for deployment in a single
                      script. Added checking of GKE context to prevent
                      accidental deployment from testing into production
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      className={classes.listItems}
                    >
                      5. Deployed updated services onto Kubernetes using Cloudbuild
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item>
                  <Typography variant="h3" gutterBottom color="textPrimary">
                    Acknowledgements
                  </Typography>
                  <Typography variant="h5" gutterBottom color="textSecondary">
                    I would like to thank the founder Melvin for allowing me to
                    work on this and Heok Hong for his immense guidance and
                    enlightenment with regards to software engineering, Devops
                    and network security.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid item xs container direction="column" spacing={4}>
                <Typography
                  variant="h2"
                  color="textSecondary"
                  style={{ margin: "2% 0% 2%" }}
                >
                  Frameworks
                </Typography>
                <img
                  className={classes.frameworkImage}
                  alt="Kubernetes"
                  src={Kubes}
                />
                <img
                  className={classes.frameworkImage}
                  alt="KMS"
                  src={KMS}
                />
                <img
                  className={classes.frameworkImage}
                  alt="Nginx"
                  src={Nginx}
                />
                <img
                  className={classes.frameworkImage}
                  alt="CloudBuild"
                  src={CloudBuild}
                />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
