import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native'
import { SizeType } from '../../../styles/theme';
import WrapperComponent from '../../common/Wrapper';

export interface TextStyleProps {
    size: SizeType;
    color: string;
    center?: boolean;
    weight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
    underline?: boolean;
}

export interface TextExportType {
    text: string | React.ReactNode;
    onPress?: () => void;
}

export interface TextExportStyleType {
    textStyle?: TextStyleProps; 
    wrapperStyle?: StyleProp<ViewStyle> 
}

export interface TextAtomProps {
    text: string | React.ReactNode;
    onPress?: () => void;
    style: {
        textStyle: TextStyleProps;
        wrapperStyle?: StyleProp<ViewStyle> 
    }
}

const TextAtom = ({text, style, onPress}:TextAtomProps) => {
    return(
        <WrapperComponent
            style={style.wrapperStyle}
            isTouchable={onPress ? true : false}
            onPress={onPress}
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
        else if(props.size === 'moreSmall') return props.theme.fontSizes.subParagraph
    }};

    ${(props) => props.center ? 'text-align: center;' : ''}
    ${(props) => props.underline ? 'text-decoration-line: underline;' : ''}

    color: ${props => props.color};

    font-weight: ${props => props.weight ? props.weight : 'normal'}
`

export default React.memo(TextAtom);