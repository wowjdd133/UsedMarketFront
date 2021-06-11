import React from 'react';
import styled from 'styled-components/native';
import InputAtom, { InputExportStyleType, InputExportType } from '../../atom/Input/index';
import IconAtom, { IconExportStypeType, IconExportType }  from '../../atom/Icon/index';
import WrapperComponent from '../../common/Wrapper';
import { ViewStyle, StyleProp } from 'react-native';
import { colors } from '../../../styles/theme';

interface SearchbarProps {
    input: InputExportType & InputExportStyleType;
    icon: IconExportType & IconExportStypeType;
    wrapperStyle?: StyleProp<ViewStyle>
}

const SearchbarMoleCules = ({icon, input, wrapperStyle}:SearchbarProps) => {
    return (
        <WrapperComponent
            style={wrapperStyle ?? {
                width: '95%',
                alignSelf:'center',
                // justifyContent:'space-evenly',
                flexDirection:'row',
                height: 36,
                borderBottomWidth:1,
                borderBottomColor: colors.grey,
            }}
        >
            <IconAtom
                name={icon.name}
                style={{
                    iconStyle: icon.iconStyle ?? {
                        width: 15,
                        height: 15,
                        marginLeft: 7
                    },
                    wrapperStyle: {
                        justifyContent:'center',
                        alignItems:'center',
                    }
                }}
            />

            <InputAtom
                {...input}
                wrapperStyle={input.wrapperStyle ?? {
                    flex:1,
                    alignSelf:'center',
                    marginLeft:6
                }}
            />

        </WrapperComponent>
    )
}

export default SearchbarMoleCules;