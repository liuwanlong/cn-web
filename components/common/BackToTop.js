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

  // 返回一个函数，在unMount中执行，第二个参数为空数组，意为只在didMount中执行
  useEffect(() => {
    window.addEventListener('scroll', handleScrollDisplay);

    return () => {
      window.removeEventListener('scroll', handleScrollDisplay);
    };
  }, []);

  function handleScrollDisplay() {
    let top = CompatibleDocument.getDocumentTop();
    setDisplay(top >= 100);
  }

  function scrollToTop() {
    let top = CompatibleDocument.getDocumentTop();
    let height = CompatibleDocument.getDocumentTop();
    top -= height / 10;
    CompatibleDocument.scrollToTop(top <= 0 ? 0 : top);
    if (top > 0) {
      window.requestAnimationFrame(scrollToTop);
    } else {
      props.finished && props.finished();
    }
  }

  return (
    <Zoom in={display} className={classes.root} onClick={scrollToTop}>
      <Fab color="primary" aria-label="Add">
        <ArrowUp/>
      </Fab>
    </Zoom>
  );
}
