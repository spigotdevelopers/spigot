import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import LoaderContainer from "../../containers/LoaderContainer";
// import Mehdi from "../../assets/images/Mehdi";

const useStyles = makeStyles((theme) => ({
  // head: {
  // col,
  // },
}));

const Loader = () => {
  const classes = useStyles();
  const controls = useAnimation();
  return (
    <LoaderContainer>
      <Typography
        component={motion.div}
        animate={controls}
        className={classes.head}
        custom={5}
        variant="h1"
        color="primary"
      >
        SPIGOT DEVELOPER
      </Typography>
    </LoaderContainer>
  );
};

export default Loader;
