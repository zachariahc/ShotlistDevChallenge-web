import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    contactCard: {
      width: "100%",
      height: "50px",
      backgroundColor: "rgb(255,252,250)",
      borderRadius: "8px",
      border: "1px solid rgba(0, 0, 0, 0.23)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "10px"
    },
    contactName: {
        marginLeft: "10px",
    },
    icon: {
        marginRight: "10px",
        color: "grey"
    }
  }));

export default function ContactCard({ contacts, handleDelete }) {
    const classes = useStyles();

   return contacts.map((contact, i) => (
    <div className={classes.contactCard} key={i}>
        <p className={classes.contactName}>{contact.name}</p>
        {i === contacts.length - 1}
        <CloseIcon className={classes.icon} onClick={() => handleDelete(i)}/>
    </div>
    ))
}
