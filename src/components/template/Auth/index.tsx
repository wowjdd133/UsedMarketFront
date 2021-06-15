import React from 'react';
import AuthOrganism, { AuthOrganismType } from '../../organism/Auth/index';
import WrapperComponent from '../../common/Wrapper';
import { StyleProp, ViewStyle } from 'react-native';
import HeaderOrganism from '../../organism/header/index';

interface AuthTemplateType {
    authOrganism: AuthOrganismType;
    header: {
        title: string;
    }
    wrapperStyle?: StyleProp<ViewStyle>
}

const AuthTemplate = ({
    authOrganism,
    wrapperStyle,
    header
}:AuthTemplateType) => {
    return (
        <WrapperComponent
            style={wrapperStyle ?? {

            }}
        >
            <HeaderOrganism
                title={{
                    text: header.title
                }}
            />
            <AuthOrganism
                wrapperStyle={{
                    marginTop: 25,
                    width: '90%',
                    alignSelf: 'center'
                }}
                {...authOrganism}
            />
        </WrapperComponent>
    )
}

export default AuthTemplate;