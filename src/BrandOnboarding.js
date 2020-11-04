import React, { useState } from 'react';
import signup2 from './signup-2.jpg';
import signup3 from './signup-3.jpg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddCircle from '@material-ui/icons/AddCircle';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import SimplePopover from './SimplePopover';
import OnboardingHeader from './OnboardingHeader';
import OnboardingFooter from './OnboardingFooter';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiTextField-root': {
      width: '100%',
    },
    '& .MuiButton-root': {
      textTransform: "none"
    },
  },
  formBtn: {
    width: "100%",
    height: "50px",
    backgroundColor: "rgb(255,252,250)",
    borderRadius: "8px"
  },
  paper: {
    margin: "auto",
    width: 500,
    padding: theme.spacing(2),
    textAlign: "left",
  },
  vertical: {
    display: "flex",
    height: "100%"
  },
  uploadBox: {
    width: 130,
    height: 100,
    backgroundColor: "rgb(246,246,246)",
    borderRadius: "16px"
  },
  addIcon: {
    paddingLeft: "49px",
    paddingTop: "34px",
    fill: "#FB8333"
  },
  logo: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  }
}));

export default function BrandOnboarding() {
  var [ onboardingState, setOnboardingState ] = useState(1);
  const classes = useStyles(); 

  function incrementOnboarding() {
    if (onboardingState < 3) {
      setOnboardingState(onboardingState => onboardingState + 1)
    }
  }

  function decrementOnboarding() {
    if (onboardingState > 1) {
      setOnboardingState(onboardingState => onboardingState - 1)
    }
  }

  function handleFinishOnboarding() {}
   
  function handleAccessLocation() {}

  function industryForm() {
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item sm={8}>
            <div className={classes.vertical}>
              <Paper elevation={0} className={classes.paper}>
                <OnboardingHeader
                  title="What industry are you in?"
                  backAction={decrementOnboarding}
                />
                <form className={classes.root} noValidate autoComplete="off">
                  <Grid container spacing={3}>
                    <Grid item sm={12}>
                      <TextField id="industry" label="Type Here..." variant="outlined" />
                    </Grid>
                    <Grid item sm={12}>
                      <Button className={classes.formBtn} variant="outlined">Creative</Button>
                    </Grid>
                    <Grid item sm={12}>
                      <Button className={classes.formBtn} variant="outlined">IT/Software</Button>
                    </Grid>
                    <Grid item sm={12}>
                      <Button className={classes.formBtn} variant="outlined">Hospitality and Tourism</Button>
                    </Grid>
                    <Grid item sm={12}>
                      <Button className={classes.formBtn} variant="outlined">Business</Button>
                    </Grid>
                    <Grid item sm={12}>
                      <Button className={classes.formBtn} variant="outlined">Real Estate</Button>
                    </Grid>
                    <Grid item sm={12}>
                      <Button className={classes.formBtn} variant="outlined">Healthcare</Button>
                    </Grid>
                    <OnboardingFooter
                      laterAction={handleFinishOnboarding}
                      nextAction={incrementOnboarding}
                    />
                  </Grid>
                </form>
              </Paper>
            </div>
          </Grid>
          <Grid item sm={4}>
            <img src={signup2} className={classes.logo} alt="logo"/> 
          </Grid>
        </Grid>
      </div>
    );
  }

  function profileForm() {
    return (
      <Grid container spacing={3}>
        <Grid item sm={8}>
          <div className={classes.vertical}>
            <Paper elevation={0} className={classes.paper}>
              <OnboardingHeader
                  title="What industry are you in?"
                  backAction={decrementOnboarding}
              />
              <form className={classes.root} noValidate autoComplete="off">
                <Grid container spacing={3}>
                  <p>Upload the brand's profile picture</p>
                  <Grid item sm={6}>
                    <Paper elevation={0} className={classes.uploadBox}>
                      <AddCircle className={classes.addIcon}/>
                    </Paper>
                  </Grid>
                  <Grid item sm={6}>
                    <h3>{}</h3>
                  </Grid>
                  <Grid item sm={12}>
                    <p>Add a brief bio</p>
                    <TextField id="industry" label="Type Here..." variant="outlined" />
                  </Grid>
                  <Grid item sm={12}>
                    <p>Add/Link portfolio</p>
                    <TextField id="industry" label="Type Here..." variant="outlined" />
                  </Grid>
                 <OnboardingFooter
                      laterAction={handleFinishOnboarding}
                      nextAction={incrementOnboarding}
                  />
                </Grid>
              </form>
            </Paper>
          </div>
        </Grid>
        <Grid item sm={4}>
          <img src={signup2} className={classes.logo} alt="logo"/> 
        </Grid>
      </Grid>
    );
  }

  function teamForm() {
    return (
      <Grid container spacing={3}>
        <Grid item sm={8}>
          <div className={classes.vertical}>
            <Paper elevation={0} className={classes.paper}>
              <OnboardingHeader
                  title="Add your team"
                  backAction={decrementOnboarding}
              />
              <form className={classes.root} noValidate autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item sm={12}>
                    <p>Select location</p>
                    <SimplePopover 
                      className={classes.popover}
                      label="Type or select location" 
                    />
                  </Grid>
                  <Grid item sm={8}>
                    <span>Allow access to my current location</span>
                  </Grid>
                  <Grid item sm={4}>
                    <Switch
                      defaultChecked
                      onChange={handleAccessLocation}
                      name="locationAccess"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <p>Enter business email(s)</p>
                    <TextField id="email" label="Type Here..." variant="outlined" />
                  </Grid>
                  <Grid item sm={12}>
                    <Button className={classes.formBtn} variant="outlined">Invite from Contacts</Button>
                  </Grid>
                  <Grid item sm={12}>
                    <Button className={classes.formBtn} variant="outlined">Invite from Google Contacts</Button>
                  </Grid>
                  <Grid item sm={12}>
                    <Button className={classes.formBtn} variant="outlined">Create invite link</Button>
                  </Grid>
                  <OnboardingFooter
                      laterAction={handleFinishOnboarding}
                      nextAction={incrementOnboarding}
                  />
                </Grid>
              </form>
            </Paper>
          </div>
        </Grid>
        <Grid item sm={4}>
          <img src={signup3} className={classes.logo} alt="logo"/> 
        </Grid>
      </Grid>
    );
  }


  return ( 
   <div className={classes.root}>
    {
      {
        1: industryForm(),
        2: profileForm(),
        3: teamForm()
      }[onboardingState]
    }
    </div> 
  );
}
