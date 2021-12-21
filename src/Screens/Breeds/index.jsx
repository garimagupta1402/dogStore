import React,{useState, useEffect} from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import axios from "axios";

const useStyles = makeStyles({
  mainDiv: {
    width: "50%",
    height: "auto",
    margin: "15rem 35rem",
  },
});
const getApi = "https://dog.ceo/api/breeds/image/random";
function About() {
  const classes = useStyles();
   const [img, setImage] = useState(null);

    const apiData = async () => {
      const res = await axios.get(getApi);
      console.log(res);
      setImage(res.data.message);
    };
    useEffect(() => {
      apiData();
    }, []);
  return (
    <div className={classes.mainDiv}>
       <Grid  xs={12} sm={6} md={6} className={classes.imgGrid}>
        <img className={classes.apiImg} src={img} alt="img" />
      </Grid>
      </div>
  );
}
export default About;
