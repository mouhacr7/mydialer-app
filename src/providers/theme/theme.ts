import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Color from 'color';

const defaults = {
  primary: '#3880ff',
  secondary: '#0cd1e8',
  tertiary: '#7044ff',
  success: '#10dc60',
  warning: '#ffce00',
  danger: '#f04141',
  dark: '#222428',
  medium: '#989aa2',
  light: '#f4f5f8'
};
/*
  Generated class for the ThemeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ThemeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ThemeProvider Provider');
  }
  contrast(color, ratio = 0.8) {
    color = Color(color);
    return color.isDark() ? color.lighten(ratio) : color.darken(ratio);
  }
  
CSSTextGenerator(colors) {
    colors = { ...defaults, ...colors };
  
    const {
      primary,
      secondary,
      tertiary,
      success,
      warning,
      danger,
      dark,
      medium,
      light
    } = colors;
  
    const shadeRatio = 0.1;
    const tintRatio = 0.1;
  
    return `
      --ion-color-base: ${light};
      --ion-color-contrast: ${dark};
  
      --ion-color-primary: ${primary};
      --ion-color-primary-rgb: 56,128,255;
      --ion-color-primary-contrast: ${this.contrast(primary)};
      --ion-color-primary-contrast-rgb: 255,255,255;
      --ion-color-primary-shade:  ${Color(primary).darken(shadeRatio)};
  
      // omitted other styles, see full source code
  `;
  }

}
