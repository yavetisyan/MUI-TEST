import React from "react";
import Grid from "@mui/material/Grid";
import NotificationBell from "../../components/common/NotificationBell/NotificationBell";
//import CommonButton from "../../components/common/CommonButton/CommonButton";

const Authentification = () => {
  // const buttonStyle = {
  //   fontSize: '0.875rem',
  //   fontWeight: 600,
  //   borderRadius: 2.5,
  //   '&.MuiButton-contained': {
  //     backgroundColor: '#009be5',
  //     color: '#fff',
  //     '&:hover': {
  //       backgroundColor: '#006db3'
  //     }
  //   },
  //   '&.MuiButton-outlined': {
  //     color: '#fff',
  //     backgroundColor: 'transparent',
  //     '&:hover': {
  //       backgroundColor: '#009be5'
  //     }
  //   }
  //
  // }
  return (
    <Grid item xs={8}>
      <h1> This is authentification</h1>
      <NotificationBell iconColor='primary' badgeContent={0}/>

    </Grid>
  );
};

export default Authentification;
