import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native'
import WrapperComponent from '../../common/Wrapper';

interface TextStyleProps {
    size: 'small' | 'medium' | 'big'
    color: string;
    weight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
}

interface TextProps {
    text: string;
    style: {
        textStyle: TextStyleProps;
        wrapperStyle?: StyleProp<ViewStyle> 
    }
}

const TextComponent = ({text, style}:TextProps) => {
    return(
        <WrapperComponent
            style={style.wrapperStyle}
        >
            <Text 
            {...style.textStyle}>{text}</Text>
        </WrapperComponent>
    )
}

const Text = styled.Text<TextStyleProps>`
    font-size: ${(props) => {
        if(props.size === 'small') return props.theme.fontSizes.paragraph
        else if(props.size === 'medium') return props.theme.fontSizes.subtitle
        else if(props.size === 'big') return props.theme.fontSizes.title
    }};

    color: ${props => props.color};

    font-weight: ${props => props.weight ? props.weight : 'normal'}
`

export default TextComponent;