import React from 'react';
import styled from 'styled-components/native';
import DistrictListOrganism, { DistrictListOrganismDataType, DistrictListOrganismType } from '../../organism/districtList/index';
import LoadingCommon from '../../common/Loading';
import WrapperComponent from '../../common/Wrapper';
import HeaderOrganism from '../../organism/header/index';
import SearchbarMoleCules from '../../molecules/Searchbar/index';
import IconButtonMolecules from '../../molecules/IconButton/index';
import { colors, SizeType } from '../../../styles/theme';
import { Dimensions, TextInput } from 'react-native';
import { ErrorTypeEnum } from '../../../enums/Error.type.enum';
import ErrorBox from '../../organism/ErrorBox/index';
import { sortAndDeduplicateDiagnostics } from 'typescript';

interface DistrictListTemplateType extends DistrictListOrganismType {
    isLoading?: boolean
    isGeoloNotFound?: boolean;
    onPressButton: () => void;
    errorType?: ErrorTypeEnum;
    onPressErrorText?: () => void;
    focus?: boolean;
    input: {
        onChangeText: (text:string) => void;
        value: string;    
    }
}

const DistrictListTemplate = ({isLoading, errorType, onPressErrorText, onPressButton, isGeoloNotFound = false, focus = false, input, ...organismData}:DistrictListTemplateType) => {

    let errorBox = null;
    

        if(errorType) {
            if(errorType === ErrorTypeEnum.NOT_FOUND) {
                errorBox = (
                    <ErrorBox
                        wrapperStyle={{
                            flex:1,
                            alignItems:'center',
                            marginTop: 60
                        }}
                        iconName="find-document"
                        errorText={`검색 결과가 없어요.\n동네 이름을 다시 확인해주세요!`}
                        touchableText="동네 이름 다시 검색하기"
                        onPressText={onPressErrorText}
                    />
                )
            }
    
            if(errorType === ErrorTypeEnum.PERMISSION_NOT_GRANTED) {
                errorBox = (
                   <ErrorBox
                        wrapperStyle={{
                            flex:1,
                            alignItems:'center',
                            marginTop: 60
                        }}
                        iconName="home"
                        errorText={`현재 위치로 동네를 받아오지 못했어요.\n내 동네 이름으로 검색해보세요`}
                        touchableText="내 동네 이름 검색하기"
                        onPressText={onPressErrorText}
                    />
                )
            }
        }

    return (
        <WrapperComponent
            style={{
                flex: 1,
                backgroundColor:colors.white
            }}
            isCenter
            isSafeArea
        >
            <WrapperComponent
                style={{flex: 1, width:'100%'}}
            >
                <WrapperComponent
                    style={{width:'95%', alignSelf:'center'}}
                >
                    <HeaderOrganism
                        headerRgiht={
                            <SearchbarMoleCules
                                icon={{
                                    name: 'search'
                                }}
                                input={{
                                    onChange: input.onChangeText,
                                    value: input.value,
                                    placeholder:"검색어를 입력하세요",
                                    focus: focus
                                }}
                            />
                        }
                    />
                </WrapperComponent>
                <IconButtonMolecules
                    button={{
                        onPress:onPressButton,
                        buttonStyle: {
                            borderStyle: {
                                radius: 5
                            },
                            color: colors.orange,
                            paddingHorizontal: '26px',
                            paddingVertical: '7px',
                        },
                        disabled:false,
                    }}
                    icon={{
                        name: errorType ? 'target-question-mark' : 'target',
                        iconStyle: {
                            width: 15,
                            height: 15
                        }
                    }}
                    text={{
                        textStyle: {
                            size: SizeType.MORE_SMALL,
                            color: colors.white,
                            weight: 'bold'
                        },
                        text:"현재위치로 찾기",
                    }}
                    wrapperStyle={{
                        width:'100%',
                        paddingTop: 15
                    }}
                />
            </WrapperComponent>
            
            <WrapperComponent
                style={{flex: 7, width:'100%'}}
            >
                {
                    errorBox ?? (
                        <>
                        {
                            isLoading ? <LoadingCommon/> : null
                        }
                        <DistrictListOrganism
                            {...organismData}
                        />
                        </>
                    )
                }
            </WrapperComponent>
        </WrapperComponent>
    );
}

export default DistrictListTemplate;