import React, { useEffect, useState, useCallback } from "react";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { Grid, Typography, TextField, Autocomplete } from "@mui/material";
import HomeSkeleton from "./homeSkeleton";
import { dogApi } from "../../Redux/Actions/actions";
import debounce from "lodash.debounce";
import {Dogstore} from "../../Redux/Actions/actions"


const useStyles = makeStyles({
  mainDiv: {
    display: "flex",
    width: "100%",
    marginTop: "2% !important",
  },
  apiImg: {
    width: "95%",
    padding: " 5% 5% !important",
    height: "100%",
  },
  searchBar: {
    fontSize: "76px !important",
    fontStyle: "italic",
    width: "80% !important",
  },

  gridDiv2: {
    marginTop: "8% !important",
  },
  text: {
    marginTop: "2% !important",
  },
});

const searchApi = "https://dog.ceo/api/breeds/list/all";

const getApi = "https://dog.ceo/api/breeds/image/random";
function Home() {

  const classes = useStyles();
  const [img, setImage] = useState(null);
  const [data, setData] = useState([]);
  const [value, setValue] = useState();

  const apiData = async () => {
    const res = await axios.get(getApi);
    console.log(res);
    setImage(res.data.message);
  };
  const changeHandler = (event) => {
    value(event.target.value);
  };

  const debouncedChangeHandler = useCallback(debounce(changeHandler, 300), []);

  useEffect(() => {
    axios.get(searchApi).then((response) => {
      setData(Object.keys(response.data.message));
    });
  }, []);

  useEffect(() => {
    apiData();
    // dogApi(value);
  }, []);
  console.log(value);

  return (
    <>
      {img && data ? (
        <Grid container className={classes.mainDiv} spacing={2}>
          <Grid item xs={12} sm={6} md={6} className={classes.imgGrid}>
            <img className={classes.apiImg} src={img} alt="img" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} className={classes.gridDiv2}>
            <Typography className={classes.searchBar}>
              Get your Pet Dog Today!
            </Typography>

            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              className={classes.searchBar}
              options={data.map((option) => option)}
              renderInput={(params) => {
                return (
                  <TextField
                    className={classes.text}
                    {...params}
                    label="Search input"
                    
                    InputProps={{ 
                      onChange: { debouncedChangeHandler },
                      ...params.InputProps,
                      type: "search",
                      onSelect: (e) => {
                        setValue(e.target.value);
                         // console.log(value.setValue);
                        // console.log(e.target.value);
                      },
                      //  onClick:(e)=> {
                      //    dispatch:({
                      //       type: Redux.Action.action,
                      //       payload: breed,
                      //    })
                      //  }                    
                    }}
                  />
                );
              }}
            />
          </Grid>
        </Grid>
      ) : (
        <HomeSkeleton />
      )}
    </>
  );
}
export default Home;
