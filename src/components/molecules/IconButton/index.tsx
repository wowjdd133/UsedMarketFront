import React from 'react';

import styled from 'styled-components/native';
import { colors } from '../../../styles/theme';
import ButtonAtom, { ButtonExportStyleType, ButtonExportType } from '../../atom/Button/index';
import IconAtom, { IconExportStypeType, IconExportType } from '../../atom/Icon/index';
import TextAtom, { TextExportStyleType, TextExportType } from '../../atom/Text/index';
import WrapperComponent from '../../common/Wrapper';
import { ViewStyle, StyleProp } from 'react-native';

interface IconButtonType {
    button: ButtonExportType & ButtonExportStyleType;
    icon: IconExportType & IconExportStypeType;
    text: TextExportType & TextExportStyleType;
    isIconRight?: boolean;
    wrapperStyle: StyleProp<ViewStyle>;
}

const IconButtonMolecules = ({button, icon, text, isIconRight = false, wrapperStyle}:IconButtonType) => (
    <WrapperComponent
        style={wrapperStyle}
    >
        <ButtonAtom
            style={{
                buttonStyle: button.buttonStyle,
            }} 
            {...button}
        >
            <IconAtom
                {...icon}
                style={{
                    wrapperStyle: isIconRight ? {
                        marginLeft: 10
                    } : {
                        marginRight: 10
                    },
                    iconStyle: icon.iconStyle ?? {
                        width: 20,
                        height: 20
                    }
                }}
            />

            <TextAtom
                text={text.text}
                style={{
                    textStyle: text.textStyle
                }}
            />
        </ButtonAtom>    
    </WrapperComponent>
)

export default IconButtonMolecules;