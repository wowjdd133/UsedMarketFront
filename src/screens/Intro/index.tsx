import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import IntroTemplate from '../../components/template/Intro/index';

const IntroScreen = () => {

    const navigation = useNavigation();

    const handlePressButton = React.useCallback(() => {
        navigation.navigate('districtScreen');
    },[navigation]);

    return(
        <IntroTemplate
            introOrganism={{
                description: `호박마켓은 동네 직거래 마켓이에요.\n 내 동네를 설정하고 시작해보세요!
                `,
                subTitle: `우리 동네 중고 직거래 호박마켓`,
                title: `호박마켓`
            }}
            onPress={handlePressButton}
            text="내 동네 설정하고 시작하기"
        />
    )
}

export default IntroScreen;