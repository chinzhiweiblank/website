import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Firevisor from "../Images/firevisor.jpeg";
import CircleCI from "../Images/CircleCI.png";
import GitLab from "../Images/GitLab.png";
import GitLabRunner from "../Images/GitLabRunner.png";
import Nginx from "../Images/Nginx.png";
import Elastic from "../Images/Elastic.png";
import ReactJS from "../Images/React.png";

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
    maxHeight: "auto",
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

export default function FirevisorPage() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={Firevisor} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={4}>
                <Grid item xs style={{ textAlign: "left" }}>
                  <Typography gutterBottom variant="h2">
                    FireVisor Systems
                  </Typography>
                  <Typography variant="h2" gutterBottom>
                    December 2019 - May 2020
                  </Typography>
                  <Typography variant="h5" gutterBottom color="textSecondary">
                    I joined FireVisor Systems as a Summation Apprentice. I was
                    fortunate to be given the chance and freedom to work and
                    deploy projects for FireVisor's multiple clients.
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
                      1. Redesigned deployment of Nameko services by
                      automatically importing services for a controller and
                      running them
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      className={classes.listItems}
                    >
                      2. Sped up visualization of heatmaps by 20 times by
                      writing a Python library with Pandas and Pycocotools
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      className={classes.listItems}
                    >
                      3. Implemented mask erosion, flagging of labelling errors
                      and polygon reconstruction through OpenCV and Scipy
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      className={classes.listItems}
                    >
                      4. Implemented a health monitor for checks including GPU
                      usage, systemd services. Wrote a UI with ReactJS and
                      Semantic UI for clients to check health of services
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      className={classes.listItems}
                    >
                      5. Implemented a pipeline using Elasticsearch, Kibana and
                      Logstash to send Slack alerts from health monitor with a
                      list of failing services
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      className={classes.listItems}
                    >
                      6. Integrated UI with Elastic pipeline to run concurrently
                      with threads. Created a feature to include and exclude
                      categories of checks from the UI
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      className={classes.listItems}
                    >
                      7. Deployed a ReactJS App for business side to evaluate
                      client’s Industry 4.0 Readiness with Nginx
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      className={classes.listItems}
                    >
                      8. Deployed Review Apps for GitLab. Used a Google Compute
                      Instance instead of an expensive GKE Cluster. Deployed
                      using Nginx and GitLab Runner for Angular Apps
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item>
                    <Typography variant="h3" gutterBottom color="textPrimary">
                        Acknowledgements
                    </Typography>
                  <Typography variant="h5" gutterBottom color="textSecondary">
                    I learnt a lot about automating testing, deployments, building
                    applications, good coding practices, system arhictecture and
                    networks. I would like to thank my technical mentor Long
                    Hoang, colleagues (Tin, Pooja, Girish, Nicco) for their guidance
                    and willingness to help me. I would also like to thank the CEO Surbhi for 
                    taking a chance on me and Gabriel for introducing the business aspect
                    of the startup to me.
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
                  alt="GitLab"
                  src={GitLab}
                />
                <img
                  className={classes.frameworkImage}
                  alt="complex"
                  src={GitLabRunner}
                />
                <img
                  className={classes.frameworkImage}
                  alt="complex"
                  src={Nginx}
                />
                <img
                  className={classes.frameworkImage}
                  alt="CircleCI"
                  src={CircleCI}
                />
                <img
                  className={classes.frameworkImage}
                  alt="CircleCI"
                  src={Elastic}
                />
                <img
                  className={classes.frameworkImage}
                  alt="CircleCI"
                  src={ReactJS}
                />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
