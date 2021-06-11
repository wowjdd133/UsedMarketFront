import React from 'react';
import { storiesOf } from '@storybook/react-native';

import DistrictListOrganism from './index';

storiesOf('DistrictList', module)
    .add('district-list', () => <DistrictListOrganism
        data={[{
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
        }]}
        onPress={(item) => {
            console.log(item);
        }}
    />)