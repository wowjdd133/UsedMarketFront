import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import DistrictListTemplate from '../../components/template/districtList/index';
import Geolocation from 'react-native-geolocation-service';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { Platform } from 'react-native';

const DistrictScreen = () => {

    const navigation = useNavigation();

    // const [geoloNotFound, setGeoloNotFound]

    const getCurrentPosition = React.useCallback(() => {
        if(askGeoloPermission()) {
            
            Geolocation.getCurrentPosition(
                (position) => {
                    console.log(position)
                },
                (error) => {
                    console.log({
                        code: error.code, 
                        message: error.message
                    });
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
            )
        } else {

        }
    }, []);

    const askGeoloPermission = React.useCallback(async () => {
        try {
            if(Platform.OS === 'ios') {
                try {
                    Geolocation.requestAuthorization('always')
                } catch (err) {
                    console.log({
                        err
                    });
                }
            } else {
                const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            
                if(result === RESULTS.GRANTED) {
                    return true;
                }
                
                return false;
            }
        } catch (err) {
            console.log({
                err
            });
            return false;
        }
    }, []);

    React.useEffect(() => {
        getCurrentPosition();
    }, []);

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
            onPressButton={() => {
                getCurrentPosition()
            }} 
        />
    )
}

export default DistrictScreen;