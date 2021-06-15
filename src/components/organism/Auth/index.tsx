import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { colors, SizeType } from '../../../styles/theme';
import Icon, { IconExportStypeType, IconExportType, ImageName } from '../../atom/Icon';
import { TextExportStyleType, TextExportType } from '../../atom/Text';
import WrapperComponent from '../../common/Wrapper';
import Card from '../../molecules/Card/index';
import Submit, { SubmitMoleculesExportType } from '../../molecules/Submit/index';

export interface AuthOrganismType {
    card?: {
        iconName: ImageName;
        text: string | React.ReactNode;
    }
    submit: {
        input: {
            placeholder: string;
            value: any;
            onChange: (text:string) => void;
        }
        button: {
            onPress: () => void;
            disabled: boolean;
            text: string;
        }
        text?: string | React.ReactNode;
    };
    wrapperStyle?: StyleProp<ViewStyle>
}

const AuthOrganism = ({card, wrapperStyle, submit}:AuthOrganismType) => {
    return (
        <WrapperComponent
            style={ wrapperStyle ?? {
                flex:1,
                width: '90%',
                alignSelf:'center'
            }}
        >
            {
                card ? (
                    <WrapperComponent
                        style={{
                            alignItems:'flex-start'
                        }}
                    >
                        <Card
                            rightWrapperStyle={{
                                marginLeft:10
                            }}
                            icon={{
                                name: card.iconName
                            }}
                            text={{
                                textStyle: {
                                    color: colors.black,
                                    size: SizeType.SMALL
                                },
                                text: card.text
                            }}
                        />
                    </WrapperComponent>
                ) : null
            }
            <Submit
                wrapperStyle={{
                    marginTop: card ? 20 : 0
                }}
                input={{
                    ...submit.input,
                    wrapperStyle: {
                        width:'100%',
                        height: 42,
                        borderWidth: 0.5,
                        borderRadius: 4,
                        borderColor: colors.grey,
                        paddingLeft: 7
                    },
                }}
                button={{
                    ...submit.button,
                    textStyle: {
                        color: colors.white,
                        size: SizeType.MEDIUM,
                        weight: 'bold'
                    },
                    buttonStyle: {
                        color: colors.orange,
                        paddingVertical: '10px',
                        borderStyle: {
                            color: 'transparent',
                            radius: 4
                        },
                        paddingHorizontal: '6px',
                    },
                }}
                text={ submit.text ? {
                    text: submit.text,
                    textStyle: {
                        color: colors.black,
                        size: SizeType.MEDIUM
                    }
                } : undefined}
            />
        </WrapperComponent>
    )
}

export default AuthOrganism;