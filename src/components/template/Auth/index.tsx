import React from 'react';
import AuthOrganism, { AuthOrganismType } from '../../organism/Auth/index';
import WrapperComponent from '../../common/Wrapper';
import { StyleProp, ViewStyle } from 'react-native';
import HeaderOrganism from '../../organism/header/index';
import LoadingCommon from '../../common/Loading';

interface AuthTemplateType {
    authOrganism: AuthOrganismType;
    header: {
        title: string;
    }
    wrapperStyle?: StyleProp<ViewStyle>
    isLoading?: boolean;
}

const AuthTemplate = ({
    authOrganism,
    wrapperStyle,
    header,
    isLoading
}:AuthTemplateType) => {
    return (
        <>
            {
                isLoading ? (
                    <LoadingCommon/>
                ) : null
            }
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
        </>
    )
}

export default AuthTemplate;