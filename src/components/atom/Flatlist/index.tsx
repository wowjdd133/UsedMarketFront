import React from 'react';
import { FlatList, ListRenderItem, StyleProp, ViewStyle } from 'react-native';
import WrapperComponent from '../../common/Wrapper';

interface FlatListAtomType {
    wrapperStyle: StyleProp<ViewStyle>
    data: any[] | undefined;
    keyExtractor?: ((item: any, index: number) => string) | undefined
    renderItem: ListRenderItem<any> | null | undefined;
    ListHeaderComponent?: React.ComponentType<any> | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined;
}

const FlatListAtom = ({ wrapperStyle, data, renderItem, keyExtractor, ListHeaderComponent }:FlatListAtomType) => {
    return (
        <WrapperComponent
            style={wrapperStyle}
        >
            <FlatList
                style={{
                    height: '100%',
                }}
                contentContainerStyle={{
                    flexGrow: 1 
                }}
                data={data}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                ListHeaderComponent={ListHeaderComponent}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        </WrapperComponent>
        
    )
}

export default FlatListAtom;