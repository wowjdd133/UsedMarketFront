import { storiesOf } from '@storybook/react-native';
import React from 'react';

import IntroOrganism from './index';

storiesOf('Intro', module)
    .add('intro-organism', () => <IntroOrganism
        description={`호박마켓은 동네 직거래 마켓이에요.\n 내 동네를 설정하고 시작해보세요!
        `}
        subTitle='우리 동네 중고 직거래 호박마켓'
        title= '호박마켓'
    />)