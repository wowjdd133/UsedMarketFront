import styled from 'styled-components/native';

export const fontSizes:FontSizesType = {
    title: '22px',
    subtitle: '15px',
    paragraph: '11px'
}

export const colors:ColorsType = {
    black: '#000000',
    grey: '#999999',
    green: '#3cb46e',
    blue: '#000080',
    orange: '#EF6405'
}

export const commons:CommonsType = {
    center: `
        justify-contents: center;
        align-items: center;
    `
}

export interface FontSizesType {
    title: string;
    subtitle: string;
    paragraph: string;
}

export interface ColorsType {
    black: string;
    grey: string;
    green: string;
    blue: string;
    orange: string
}

export interface CommonsType {
    center: string;
}

interface Theme {
    fontSizes: FontSizesType;
    colors: ColorsType;
    commons: CommonsType;
}

const theme:Theme = {
    fontSizes,
    colors,
    commons,
}

export default theme;