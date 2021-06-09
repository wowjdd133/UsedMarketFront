import React from 'react';
import WrapperComponent from '../../common/Wrapper';
import TextComponent from '../../atom/Text'
import LottieView from '../../atom/LottieView';
import styled from 'styled-components/native';
import {colors} from '../../../styles/theme';

export interface IntroOrganismType {
    title: string;
    subTitle: string;
    description: string;
}

const IntroOrganism = ({ title, description, subTitle }:IntroOrganismType) => {
    return (
        <WrapperComponent
            style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <ContentWrapper>
                <TextComponent
                    style={{
                        textStyle: {
                            color: colors.orange,
                            size: 'big',
                            weight: 'bold'
                        },
                    }}
                    text={title}
                />
                <LottieView
                    name="location-on-pin"
                    style={{
                        lottieStyle: {
                            width: '80%',
                        }
                    }}
                />
                <TextComponent
                    style={{
                        textStyle: {
                            color: colors.black,
                            size: 'medium',
                            weight: '600'
                        }
                    }}
                    text={subTitle}
                />
                <TextComponent
                    style={{
                        textStyle: {
                            color: colors.black,
                            size: 'small',
                            weight: '300'
                        },
                        wrapperStyle: {
                            marginTop: 15
                        }
                    }}
                    text={description}
                />
            </ContentWrapper>
        </WrapperComponent>
    )
}

const ContentWrapper = styled.View`
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 100%;
`

export default IntroOrganism;