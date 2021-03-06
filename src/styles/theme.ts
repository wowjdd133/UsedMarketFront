import styled from 'styled-components/native';

export const fontSizes:FontSizesType = {
    title: '32px',
    subtitle: '20px',
    paragraph: '16px',
    subParagraph: '13px'
}

export const colors = {
    black: '#000000',
    grey: '#999999',
    grey_light: '#c8c8c8',
    green: '#3cb46e',
    blue: '#000080',
    orange: '#FF8A3C',
    white: '#FFFFFF',
    red: '#ff0000'
}

export const commons:CommonsType = {
    center: `
        justify-contents: center;
        align-items: center;
    `
}

export enum SizeType {
    SMALL = 'small',
    MEDIUM = 'medium',
    BIG = 'big',
    MORE_SMALL = 'moreSmall'
}

export interface FontSizesType {
    title: string;
    subtitle: string;
    paragraph: string;
    subParagraph: string;
}

export interface ColorsType {
    black: string;
    grey: string;
    grey_light: string;
    green: string;
    blue: string;
    orange: string;
    white: string;
    red: string;
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