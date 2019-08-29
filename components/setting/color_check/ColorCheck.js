import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    width: '3rem',
    height: '3rem',
    position: 'relative'
  },
  button: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    color: '#fff'
  }
});

export default function ColorCheck({ checked, color, onColorChecked }) {

  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{ backgroundColor: color }}>
      <IconButton
        onClick={() => onColorChecked(color)}
        className={classes.button}>
        {
          checked && <CheckIcon/>
        }
      </IconButton>
    </div>
  );
}
ColorCheck.defaultProps = {
  checked: false,
  onColorChecked: () => {
  }
};

ColorCheck.propTypes = {
  checked: PropTypes.bool,
  color: PropTypes.string.isRequired,
  onColorChecked: PropTypes.func
};