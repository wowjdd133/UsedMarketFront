import React from 'react';
import { storiesOf } from '@storybook/react-native';
import DistrictListTemplate from './index';

const data=[{
    id: 1,
    name: "서울 마포구 노고산동"
}, {
    id: 2,
    name: "서울 마포구 대흥동"
}, {
    id: 3,
    name: "서울 마포구 노고산동"
}, {
    id: 4,
    name: "서울 마포구 대흥동"
}, {
    id: 5,
    name: "서울 마포구 노고산동"
}, {
    id: 6,
    name: "서울 마포구 대흥동"
},{
    id: 7,
    name: "서울 마포구 노고산동"
}, {
    id: 8,
    name: "서울 마포구 대흥동"
}, {
    id: 9,
    name: "서울 마포구 노고산동"
}, {
    id: 10,
    name: "서울 마포구 대흥동"
}, {
    id: 11,
    name: "서울 마포구 노고산동"
}, {
    id: 12,
    name: "서울 마포구 대흥동"
}, {
    id: 13,
    name: "서울 마포구 노고산동"
}, {
    id: 14,
    name: "서울 마포구 대흥동"
},{
    id: 15,
    name: "서울 마포구 노고산동"
}, {
    id: 16,
    name: "서울 마포구 대흥동"
}]

storiesOf('DistrictList', module)
    .add('district-list-template', () => <DistrictListTemplate
        data={data}
        onPress={(item) => {
            console.log(item);
        }}
        onPressButton={() => {
            console.log(1);
        }}
    />)
    .add('district-list-template-loading', () => <DistrictListTemplate
        data={data}
        onPress={(item) => {
            console.log(item);
        }}
        onPressButton={() => {
            console.log(1);
        }}
        isLoading={true}
    />)