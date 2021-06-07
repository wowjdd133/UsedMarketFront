import styled from 'styled-components/native';

const fontSizes = {
    title: '22px',
    subtitle: '15px',
    paragraph: '11px'
}

const colors = {
    black: '#000000',
    grey: '#999999',
    green: '#3cb46e',
    blue: '#000080',
    orange: '#EF6405'
}

const commons = {
    center: `
        justify-contents: center;
        align-items: center;
    `
}

const theme = {
    fontSizes,
    colors,
    commons,
}

export default theme;