import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

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
  },
  chipGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  chip: {
    height: '4px',
    width: '30px',
    margin: '5px',
    background: "#FB8333"
  },
  chipStepped: {
    height: '6px',
    width: '50px',
    margin: '5px',
    background: "#FB8333"
  }
}));


export default function OnboardingHeader(props) {

  const classes = useStyles();

  const steppedChipStyles = (step) => {
    return props.onboardingStep === step ? classes.chipStepped : classes.chip
  }
  
  return (
    <Grid container spacing={3}>
      <Grid item sm={4} lg={4}>
        <Button className={classes.backBtn} onClick={props.backAction}>
          {"< Back"}
        </Button>        
      </Grid>
      <Grid item sm={8} lg={8} className={classes.chipGroup}>
        <Chip size="small" className={steppedChipStyles(1)} />
        <Chip size="small" className={steppedChipStyles(2)}/>
        <Chip size="small" className={steppedChipStyles(3)}/>
      </Grid>
      <Grid item sm={12} lg={12}>
        <h3>{props.title}</h3>
      </Grid>      
    </Grid>
  );
}
