import styled from 'styled-components/native';

export const fontSizes:FontSizesType = {
    title: '32px',
    subtitle: '20px',
    paragraph: '16px',
    subParagraph: '13px'
}

export const colors:ColorsType = {
    black: '#000000',
    grey: '#999999',
    green: '#3cb46e',
    blue: '#000080',
    orange: '#FF8A3C',
    white: '#FFFFFF'
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
    green: string;
    blue: string;
    orange: string;
    white: string;
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