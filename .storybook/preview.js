import React from "react";
import { muiTheme } from 'storybook-addon-material-ui'
import {theme, Mode} from "../src/theme/config";
import "antd/dist/antd.css";


export const parameters = {
  controls: { expanded: true }
};

export const decorators = [
  muiTheme([theme[Mode.light], theme[Mode.dark]]),
  (storyFn) => <div style={{ padding: "16px" }}>{storyFn()}</div>,
];