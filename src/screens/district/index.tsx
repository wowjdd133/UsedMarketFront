import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import DistrictListTemplate from '../../components/template/districtList/index';

const DistrictScreen = () => {
    const navigation = useNavigation();

    return (
        <DistrictListTemplate
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
            }]}
            onPress={() => {}}
            onPressButton={() => {}} 
        />
    )
}

export default DistrictScreen;