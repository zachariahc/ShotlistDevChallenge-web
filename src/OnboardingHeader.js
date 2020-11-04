import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  headerText: {
    fontFamily: "Avenir",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "20px",
    lineHeight: "28px",
  },
  backBtn: {
    color: "rgb(175,175,175)",
    fontSize: "16px",
  }
}));


export default function OnboardingHeader(props) {
  const classes = useStyles();
  
  return (
    <Grid container spacing={3}>
      <Grid item lg={4}>
        <Button className={classes.backBtn} onClick={props.backAction}>
          {"< Back"}
        </Button>        
      </Grid>
      <Grid item lg={8}>
        Progress Bar...
      </Grid>
      <Grid item lg={12}>
        <h3>{props.title}</h3>
      </Grid>      
    </Grid>
  );
}
