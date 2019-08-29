import { observable, computed, toJS } from 'mobx';
import { createMuiTheme } from '@material-ui/core/styles';
import { setCookie } from "../lib/utils/cookies";

const defaultPalette = {
  type: 'light',
  primary: {
    main: "#9c27b0",
  },
  secondary: {
    main: "#d500f9",
  }
};

class ThemeStore {
  @observable theme = null;

  @observable palette = defaultPalette;

  constructor(initialState) {
    if (initialState) {
      this.palette = initialState.palette;
    }
    this.createTheme();
  }

  @computed get isDarkTheme() {
    return this.palette.type === 'dark';
  }

  set isDarkTheme(value) {
    this.palette.type = value === true ? 'dark' : 'light';
  }

  createTheme = () => {
    this.theme = createMuiTheme({ palette: this.palette });
  };

  changeThemeType = (_, checked) => {
    this.isDarkTheme = checked;
    this.createTheme();
  };

  changePrimaryColor = (color) => {
    this.palette.primary.main = color;
    this.createTheme();
  };

  saveConfig = () => {
    let originObject = toJS(this.palette);
    let paletteStr = JSON.stringify(originObject);
    setCookie('palette', paletteStr, 365);
  };

  resetConfig = (palette) => {
    this.palette = palette ? palette : defaultPalette;
    this.createTheme();
    this.saveConfig();
  };

}

export default ThemeStore;