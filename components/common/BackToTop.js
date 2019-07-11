import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import ArrowUp from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles(({
  root: {
    position: 'fixed',
    bottom: '2rem',
    right: '1rem',
    zIndex: '999'
  }
}));

export default function BackToTop(props) {
  const classes = useStyles();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      const { top, height } = scroll();
      setDisplay(top / height >= 0.2)
    })
  });

  function scroll() {
    let docEle = document.documentElement;
    return {
      top: docEle.scrollTop,
      height: docEle.scrollHeight
    }
  }

  function scrollToTop() {
    let { top, height } = scroll();
    top -= height / 10;
    document.documentElement.scrollTop = top <= 0 ? 0 : top;
    if (top > 0) {
      window.requestAnimationFrame(scrollToTop);
    } else {
      props.finished && props.finished()
    }
  }

  return (
    <Zoom in={display} className={classes.root} onClick={scrollToTop}>
      <Fab color="primary" aria-label="Add">
        <ArrowUp/>
      </Fab>
    </Zoom>
  )
}
