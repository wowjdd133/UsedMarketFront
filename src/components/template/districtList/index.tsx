import React from 'react';
import styled from 'styled-components/native';
import DistrictListOrganism, { DistrictListOrganismDataType, DistrictListOrganismType } from '../../organism/districtList/index';
import LoadingCommon from '../../common/Loading';
import WrapperComponent from '../../common/Wrapper';
import HeaderOrganism from '../../organism/header/index';
import SearchbarMoleCules from '../../molecules/Searchbar/index';
import IconButtonMolecules from '../../molecules/IconButton/index';
import { colors, SizeType } from '../../../styles/theme';
import { Dimensions } from 'react-native';

interface DistrictListTemplateType extends DistrictListOrganismType {
    isLoading?: boolean
    onPressButton: () => void;
}

const DistrictListTemplate = ({isLoading, onPressButton, ...organismData}:DistrictListTemplateType) => {

    let ScreenHeight = Dimensions.get("window").height;
    
    return (
        <WrapperComponent
            style={{
                flex: 1
            }}
            isCenter
            isSafeArea
        >
            <WrapperComponent
                style={{flex: 1, width:'100%'}}
            >
                <HeaderOrganism
                    headerRgiht={
                        <SearchbarMoleCules
                            icon={{
                                name: 'search'
                            }}
                            input={{
                                onChange:(text:string) => {},
                                value:"",
                                placeholder:"검색어를 입력하세요",
                            }}
                        />
                    }
                />
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
                        name:'target',
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
                    isLoading ? <LoadingCommon/> : null
                }
                <DistrictListOrganism
                    {...organismData}
                />
            </WrapperComponent>
        </WrapperComponent>
    );
}

export default DistrictListTemplate;