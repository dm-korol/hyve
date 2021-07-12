import { createMuiTheme } from '@material-ui/core/styles';
import { Theme, ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { Color } from '@material-ui/core';
import {
  Palette,
  PaletteColorOptions,
  PaletteOptions,
} from '@material-ui/core/styles/createPalette';
import {
  Typography,
  TypographyOptions,
  TypographyStyleOptions,
  TypographyStyle,
} from '@material-ui/core/styles/createTypography';
import 'cf-gotham-fonts/gotham-font.css';
import GothamHTF from 'cf-gotham-fonts/gotham-font.css';

interface IPalette extends Palette {
  _grey: Color;
  indigo: Color;
  amber: Color;
  blue: Color;
  green: Color;
  statuses: any;
  gradientDarkBlue: string;
  gradientLightBlue: string;
  gradientOrange: string;
}

interface IPaletteOptions extends PaletteOptions {
  _grey?: PaletteColorOptions;
  indigo?: PaletteColorOptions;
  amber?: PaletteColorOptions;
  blue?: PaletteColorOptions;
  green?: PaletteColorOptions;
  statuses?: any;
  gradientDarkBlue?: string;
  gradientLightBlue?: string;
  gradientOrange?: string;
}

/**
 *  hr - header
 *  L - large
 *  S - small
 *  _m - medium
 *  _r - regular
 **/
interface ITypography extends Typography {
  hr1: TypographyStyle;
  hr2: TypographyStyle;
  hr3: TypographyStyle;
  hr4: TypographyStyle;
  hr5: TypographyStyle;
  hr6: TypographyStyle;
  paragraph_r: TypographyStyle;
  paragraph_m: TypographyStyle;
  bodyL_r: TypographyStyle;
  bodyL_m: TypographyStyle;
  bodyS_r: TypographyStyle;
  bodyS_m: TypographyStyle;
  overlineS: TypographyStyle;
  overlineL: TypographyStyle;
  captionL_r: TypographyStyle;
  captionL_m: TypographyStyle;
  captionS_r: TypographyStyle;
  captionS_m: TypographyStyle;
  buttonL: TypographyStyle;
  buttonS: TypographyStyle;
  link: TypographyStyle;
}

interface ITypographyOptions extends TypographyOptions {
  hr1?: TypographyStyleOptions;
  hr2?: TypographyStyleOptions;
  hr3?: TypographyStyleOptions;
  hr4?: TypographyStyleOptions;
  hr5?: TypographyStyleOptions;
  hr6?: TypographyStyleOptions;
  paragraph_r?: TypographyStyleOptions;
  paragraph_m?: TypographyStyleOptions;
  bodyL_r?: TypographyStyleOptions;
  bodyL_m?: TypographyStyleOptions;
  bodyS_r?: TypographyStyleOptions;
  bodyS_m?: TypographyStyleOptions;
  overlineS?: TypographyStyleOptions;
  overlineL?: TypographyStyleOptions;
  captionL_r?: TypographyStyleOptions;
  captionL_m?: TypographyStyleOptions;
  captionS_r?: TypographyStyleOptions;
  captionS_m?: TypographyStyleOptions;
  buttonL?: TypographyStyleOptions;
  buttonS?: TypographyStyleOptions;
  link?: TypographyStyleOptions;
}

export interface ITheme extends Theme {
  palette: IPalette;
  typography: ITypography;
}

interface IThemeOptions extends ThemeOptions {
  palette: IPaletteOptions;
  typography: ITypographyOptions;
}

const commonOptions = {
  typography: {
    fontFamily: ['GothamHTF', 'sans-serif'].join(','),
    hr1: {
      fontWeight: 700,
      fontSize: '96px',
      lineHeight: '105px',
    },
    hr2: {
      fontWeight: 700,
      fontSize: '60px',
      lineHeight: '90px',
    },
    hr3: {
      fontWeight: 700,
      fontSize: '48px',
      lineHeight: '62px',
    },
    hr4: {
      fontWeight: 700,
      fontSize: '34px',
      lineHeight: '40px',
    },
    hr5: {
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '34px',
    },
    hr6: {
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '28px',
    },
    paragraph_r: {
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '28px',
    },
    paragraph_m: {
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '28px',
    },
    bodyL_r: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '22px',
    },
    bodyL_m: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '22px',
    },
    overlineL: {
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '17px',
      textTransform: 'uppercase',
    },
    overlineS: {
      fontWeight: 500,
      fontSize: '10px',
      lineHeight: '14px',
      textTransform: 'uppercase',
    },
    captionL_m: {
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '17px',
    },
    captionL_r: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '17px',
    },
    captionS_m: {
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '17px',
    },
    captionS_r: {
      fontWeight: 400,
      fontSize: '10px',
      lineHeight: '14px',
    },
    buttonL: {
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '24px',
    },
    buttonS: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '24px',
    },
    link: {
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'inherit',
    },
  },
  palette: {
    _grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#5D5D5D',
      800: '#333333',
      900: '#1F1F1F',
    },
    indigo: {
      50: '#FAFAFF',
      100: '#F0F1FF',
      200: '#CFD3FF',
      300: '#AEB5FF',
      400: '#8E97FF',
      500: '#6D78FF',
      600: '#5762E3',
      700: '#424CC1',
      800: '#2F389F',
      900: '#20277D',
    },
    amber: {
      50: '#FFFAF8',
      100: '#FEE7D5',
      200: '#FFA262',
      300: '#FF8532',
      400: '#FF6B00',
    },
    blue: {
      100: '#233D53',
      200: '#3A3C5A',
      300: '#32324C',
      400: '#2F3047',
      500: '#202032',
      600: '#1C1C28',
    },
    green: {
      500: '#019998',
    },
    statuses: {
      new: 'gold',
      active: 'green',
      funded: 'blue',
      canceled: 'red',
    },
    gradientDarkBlue: 'linear-gradient(180deg, #16002A 0%, #3C53DD 100%), #2F369F',
    gradientLightBlue: 'linear-gradient(180deg, #EAEAFF -12.07%, #3C53DD 223.28%), #2F369F',
    gradientOrange: 'linear-gradient(48.01deg, #DB4A17 2.37%, #FF8532 97.63%)',
  },
};

export enum Mode {
  light,
  dark,
}

const lightTheme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#1C1C28', //change it on stylising stage or remove
      },
      background: {
        default: '#F0F1FF',
      },
      text: {
        primary: '#1C1C28',
      },
    },
  },
  commonOptions as IThemeOptions
);

const darkTheme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#F0F1FF', //change it on stylising stage or remove
      },
      background: {
        default: '#1C1C28',
      },
      text: {
        primary: '#F0F1FF',
      },
    },
  },
  commonOptions as IThemeOptions
);

export const theme: any = {
  [Mode.light]: lightTheme,
  [Mode.dark]: darkTheme,
};
