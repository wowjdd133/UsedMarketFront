import React from 'react';
import WrapperComponent from '../../common/Wrapper';
import InputAtom, { InputExportStyleType, InputExportType } from '../../atom/Input';

import ButtonAtom, { ButtonExportStyleType, ButtonExportType } from '../../atom/Button/index';
import { StyleProp, ViewStyle } from 'react-native';

interface SubmitMoleculesType {
    input: InputExportStyleType & InputExportType;
    button: ButtonExportType & ButtonExportStyleType
    wrapperStyle?: StyleProp<ViewStyle>
}

const SubmitMolecules = ({input, button, wrapperStyle}:SubmitMoleculesType) => {
    return (
        <WrapperComponent
            style={wrapperStyle ?? {width:'100%'}}
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
                    }
                }}
            />
        </WrapperComponent>
    )
}

export default SubmitMolecules;