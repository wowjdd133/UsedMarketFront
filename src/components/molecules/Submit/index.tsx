import React from 'react';
import WrapperComponent from '../../common/Wrapper';
import InputAtom, { InputExportStyleType, InputExportType } from '../../atom/Input';
import ButtonAtom, { ButtonExportStyleType, ButtonExportType } from '../../atom/Button/index';
import TextAtom, { TextExportStyleType, TextExportType } from '../../atom/Text/index';


import { StyleProp, ViewStyle } from 'react-native';

interface SubmitMoleculesType {
    input: InputExportStyleType & InputExportType;
    button: ButtonExportType & ButtonExportStyleType
    text: TextExportType & TextExportStyleType;
    wrapperStyle?: StyleProp<ViewStyle>
}

const SubmitMolecules = ({input, button, wrapperStyle, text}:SubmitMoleculesType) => {
    return (
        <WrapperComponent
            style={wrapperStyle ?? {width:'100%'}}
            isCenter
        >
            <InputAtom
                {...input}
            />
            <ButtonAtom
                {...button}
                style={{
                    buttonStyle: button.buttonStyle,
                    textStyle: button.textStyle,
                    wrapperStyle: {
                        marginTop: 10,
                        flex: 1,
                        width:'100%'
                    }
                }}
            />

            {
                text ? (
                    <TextAtom
                        {...text}
                        style={{
                            textStyle: text.textStyle
                        }}
                    />
                ) : null
            }
            
           
        </WrapperComponent>
    )
}

export default SubmitMolecules;