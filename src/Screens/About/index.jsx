import React from 'react'
import { makeStyles } from "@mui/styles";
import { Typography } from '@mui/material';

const useStyles = makeStyles({
  mainDiv: {
    width: "50%",
    height: "auto",
    margin: "15rem 35rem",
  },
});
function About(){
    const classes= useStyles();
    return(
        <div className={classes.mainDiv}>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti harum repellendus nostrum iste facere! Iure rem officiis fugit esse nobis saepe ullam nesciunt, non veritatis consequuntur est assumenda. Explicabo, ad!</Typography>
        </div>
    )
}
export default About;