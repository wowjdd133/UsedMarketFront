import React from 'react';
import { storiesOf } from '@storybook/react-native';
import ErrorBox from './index';

storiesOf('ErrorBox', module)
    .add('error-box-home', () => <ErrorBox
        iconName="home"
        errorText={`현재 위치로 동네를 받아오지 못했어요.\n내 동네 이름으로 검색해보세요`}
        touchableText="내 동네 이름 검색하기"
        onPressText={() => {}}
    />)
    .add('error-box-document', () => <ErrorBox
        iconName="find-document"
        errorText={`검색 결과가 없어요.\n동네 이름을 다시 확인해주세요!`}
        touchableText="동네 이름 다시 검색하기"
        onPressText={() => {}}
    />)