import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import ArrowUp from '@material-ui/icons/KeyboardArrowUp';
import CompatibleDocument from "../../lib/utils/CompatibleDocument";

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
    window.addEventListener('scroll', () => {
      let top = CompatibleDocument.scrollTop();
      let height = CompatibleDocument.scrollTop();
      setDisplay(top / height >= 0.2)
    })
  });

  function scrollToTop() {
    let top = CompatibleDocument.scrollTop();
    let height = CompatibleDocument.scrollTop();
    top -= height / 7;
    CompatibleDocument.scrollToTop(top <= 0 ? 0 : top);
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
