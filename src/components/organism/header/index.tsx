import * as React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import IconAtom from '../../atom/Icon/index';
import { TextExportType } from '../../atom/Text';
import TextAtom, { TextExportStyleType } from '../../atom/Text/index';
import { colors, SizeType } from '../../../styles/theme';

interface HeaderType {
    headerLeft?: React.ReactNode;
    headerRgiht?: React.ReactNode;
    title?: TextExportType & TextExportStyleType;
    borderBottom?: number;
    paddingBottom?: number;
}

const HeaderOrganism = ({
    headerLeft,
    headerRgiht,
    title,
    borderBottom,
    paddingBottom
}:HeaderType) => {

    // const navigation = useNavigation();

    const handlePressLeftButton = React.useCallback(() => {
        console.log(1);
        // navigation.goBack();
    // }, [navigation])
    }, [])

    return (
        <Header
            borderBottom={borderBottom}
            paddingBottom={paddingBottom}
        >
            <HeaderLeft
                isTitleExist={title ? true : false}
            >
            {
                headerLeft ? headerLeft : 
                    <IconAtom
                        name="left-arrow"
                        style={{ 
                            wrapperStyle: {
                            }
                        }}
                        onPress={handlePressLeftButton}
                    />
            }
            </HeaderLeft>
            {
                title ? <TextAtom
                    style={{
                        textStyle:title.textStyle ?? {
                            color: colors.black,
                            size: SizeType.SMALL,
                            weight: 'bold'
                        },
                        wrapperStyle: {
                            justifyContent:'center',
                            alignItems:'center',
                            flex:1
                        }
                    }}
                    text={title.text}
                /> : null
            }
            <HeaderRight
                isTitle={title ? true : false}
            >
            {
                headerRgiht ? headerRgiht : null
            }
            </HeaderRight>
        </Header>
    )
}

const Header = styled.View<{
    borderBottom?: number
    paddingBottom?: number
}>`
    flex-direction: row;
    align-items: center;
    align-self: center;
    width: 100%;
    ${props => props.borderBottom ? `
        border-bottom-width: ${props.borderBottom}px;
        border-bottom-color: ${props.theme.colors.grey_light};
    ` : ''}
    ${props => props.paddingBottom ? `
        padding-bottom: ${props.paddingBottom}px;
    ` : ''}
`

const HeaderLeft = styled.View<{
    isTitleExist: boolean
    
}>`
    justify-content: flex-start;
    ${props => props.isTitleExist ? 'flex:1' : ''}
`

const HeaderRight = styled.View<{
    isTitle: boolean
}>`
    justify-content: center;
    align-items: flex-end;
    flex: 1;

`

export default HeaderOrganism;