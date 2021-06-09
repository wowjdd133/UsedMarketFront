import React from 'react';
import WrapperComponent from '../../common/Wrapper';
import IntroOrganism from '../../organism/Intro'
import ButtonComponent from '../../atom/Button';
import { IntroOrganismType } from '../../organism/Intro';
import { colors, SizeType } from '../../../styles/theme';

import styled from 'styled-components/native';

interface IntroTemplateType {
    introOrganism: IntroOrganismType,
    onPress: (props:any) => void;
    disabled?: boolean;
    text: string;
}

const IntroTemplate = ({introOrganism, onPress, disabled = false, text}:IntroTemplateType) => {
    return (
        <WrapperComponent
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.white,
            }}
        >
            <IntroOrganism
                {...introOrganism}
            />
            <ButtonComponent
                disabled={disabled}
                onPress={onPress}
                style={{
                    wrapperStyle: {
                        marginBottom: 50,
                        width: '90%', 
                    },
                    buttonStyle: {
                        color: colors.orange,
                        paddingHorizontal: '0px',
                        paddingVertical: '11px',
                        borderStyle: {
                            radius: 6.5
                        },
                    },
                    textStyle: {
                        color: colors.white,
                        size: SizeType.MEDIUM,
                        weight: 'bold'
                    }
                }}
                text={text}
            />
        </WrapperComponent>
    )
}

export default IntroTemplate;
