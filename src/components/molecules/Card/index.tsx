import React from 'react';
import WrapperComponent from '../../common/Wrapper';
import IconAtom, { IconExportStypeType } from '../../atom/Icon';
import TextAtom from '../../atom/Text';
import { IconExportType } from '../../atom/Icon/index';
import { TextExportType } from '../../atom/Text';
import { TextExportStyleType } from '../../atom/Text/index';
import { StyleProp, ViewStyle } from 'react-native';

interface CardMoleculesType {
    icon: IconExportType & IconExportStypeType;
    text: TextExportType & TextExportStyleType
    leftWrapperStyle?: StyleProp<ViewStyle>
    rightWrapperStyle?: StyleProp<ViewStyle>
    wrapperStyle?: StyleProp<ViewStyle>
}

const CardMolecules = ({ icon, text, wrapperStyle,leftWrapperStyle, rightWrapperStyle }:CardMoleculesType) => {
    return (
        <WrapperComponent
            style= {
                    wrapperStyle ?? {
                    flexDirection:'row'
                }
            }
        >
            <IconAtom
                {...icon}
                style={{
                    iconStyle: icon.iconStyle ?? {
                        width: 60,
                        height: 60
                    },
                    wrapperStyle: leftWrapperStyle ?? {}
                }}
            />
            <TextAtom
                {...text}
                style={{
                    textStyle: text.textStyle!,
                    wrapperStyle: rightWrapperStyle ?? {}
                }}
            />
        </WrapperComponent>
    )
}

export default CardMolecules;