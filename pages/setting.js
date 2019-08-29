import React from 'react';
import { observer, inject } from "mobx-react";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Palette from "../components/setting/palette/Palette";
import SaveIcon from "@material-ui/icons/Save";
import RedoIcon from "@material-ui/icons/Redo";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    padding: theme.spacing(1)
  }
});

// const ButtonGroup = Button.

@inject('themeStore')
@observer
class Setting extends React.Component {

  static getInitialProps = ({ req }) => {
    // console.log(req.headers);
    return {};
  };

  onColorChecked = (color) => {
    const { themeStore } = this.props;
    themeStore.changePrimaryColor(color);
  };

  render() {
    const { themeStore, classes } = this.props;
    const { palette, isDarkTheme, changeThemeType, saveConfig, resetConfig } = themeStore;
    // const colors = [];
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7',
      '#8B0206', '#694F91', '#7FC7F3', '#F1F9FF', '#04A24F', '#5D9094',
      '#F70004', '#B1E347', '#2345B9', '#FC5191', '#F98603', '#4DF5FF'];

    return (
      <div children={classes.root}>
        黑暗模式：
        <Switch
          onChange={changeThemeType}
          checked={isDarkTheme}
          color="primary"/>
        <Palette
          colors={colors}
          value={palette.primary.main}
          onColorChecked={this.onColorChecked}/>

        <ButtonGroup>
          <Button
            onClick={saveConfig}
            variant="contained">
            <SaveIcon/>
            保存
          </Button>

          <Button
            onClick={() => resetConfig()}
            variant="contained">
            <RedoIcon/>
            重置
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}



export default withStyles(styles)(Setting);