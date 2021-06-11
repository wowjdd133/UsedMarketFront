import * as React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import IconAtom from '../../atom/Icon/index';
import { TextExportType } from '../../atom/Text';
import TextAtom, { TextExportStyleType } from '../../atom/Text/index';

interface HeaderType {
    headerLeft?: React.ReactNode;
    headerRgiht?: React.ReactNode;
    title?: TextExportType & TextExportStyleType;
}

const HeaderOrganism = ({
    headerLeft,
    headerRgiht,
    title
}:HeaderType) => {

    // const navigation = useNavigation();

    const handlePressLeftButton = React.useCallback(() => {
        console.log(1);
        // navigation.goBack();
    // }, [navigation])
    }, [])

    return (
        <Header>
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
                        textStyle:title.textStyle,
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

const Header = styled.View`
    flex-direction: row;
    align-items: center;
    align-self: center;
    width: 95%
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
    justify-content: flex-start;
    flex: 1;

`

export default HeaderOrganism;