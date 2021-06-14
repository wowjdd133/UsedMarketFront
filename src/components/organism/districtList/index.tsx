import React from 'react';
import styled from 'styled-components/native';
import WrapperComponent from '../../common/Wrapper';
import FlatListAtom from '../../atom/Flatlist/index';
import TextAtom from '../../atom/Text/index';
import { colors, SizeType } from '../../../styles/theme';
import { css } from 'styled-components/native';

export interface DistrictListOrganismDataType {
    id: number;
    name: string;
}

export interface DistrictListOrganismType {
    data?: DistrictListOrganismDataType[];
    onPress: (item:DistrictListOrganismDataType | any) => void;
    text?: string;
}

interface DistrictListItemType {
    data: DistrictListOrganismDataType;
    onPress: (item:DistrictListOrganismDataType | any) => void;
    text?: string;
}

const DistrictListItem = ({data, onPress}:DistrictListItemType) => {
    return (
        <ItemBox
            onPress={onPress}
        >
            <TextAtom
                style={{
                    textStyle: {
                        color: colors.black,
                        size: SizeType.SMALL,
                        weight: '200'
                    } 
                }}
                text={data.name}
            />
        </ItemBox>
    )
}

const DistrictListHeaderComponent = ({text}:any) => {
    return (
        <Box>
            <TextAtom
                style={{
                    textStyle: {
                        color: colors.black,
                        size: SizeType.MORE_SMALL,
                        weight: 'bold'
                    } 
                }}
                text={text ?? "근처 동네"}
            />
        </Box>
    )
}

const DistrictListOrganism = ({
    data,
    onPress,
    text
}:DistrictListOrganismType) => {
    return (
        <WrapperComponent
            style={{flex:1}}
            isCenter
        >
            <FlatListAtom
                data={data}
                wrapperStyle={{
                    width:'90%',
                    flexGrow: 0
                }}
                renderItem={({item}) => (
                    <DistrictListItem
                        data={item}
                        onPress={onPress}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={<DistrictListHeaderComponent
                    text={text}
                />}
            />
        </WrapperComponent>
    )
}

const boxStyle = css`
    height: 42px;
    justify-content: center;
`

const Box = styled.View`
    ${boxStyle}
`

const ItemBox = styled.TouchableOpacity`
    border-bottom-width: 1px;
    border-bottom-color: #cccccc;
    ${boxStyle}
`



export default DistrictListOrganism;