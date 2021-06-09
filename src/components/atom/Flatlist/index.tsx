import React from 'react';
import { FlatList, ListRenderItem, StyleProp, ViewProps } from 'react-native';
import WrapperComponent from '../../common/Wrapper';

interface FlatListAtomType {
    wrapperStyle: StyleProp<ViewProps>
    data: any[] | undefined;
    keyExtractor?: ((item: any, index: number) => string) | undefined
    renderItem: ListRenderItem<any> | null | undefined;
}

const FlatListAtom = ({ wrapperStyle, data, renderItem, keyExtractor }:FlatListAtomType) => {
    return (
        <WrapperComponent
            style={wrapperStyle}
        >
            <FlatList
                style={{
                    width:'100%',
                    height: '100%'
                }}
                data={data}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        </WrapperComponent>
        
    )
}

export default FlatListAtom;