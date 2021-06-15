import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import DistrictListTemplate from '../../components/template/districtList/index';
import Geolocation from 'react-native-geolocation-service';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { Alert, Linking, Platform } from 'react-native';
import { ErrorTypeEnum } from '../../enums/Error.type.enum';
import { useQuery } from 'react-query';
import axios from 'axios';

interface Coords {
    lng: number;
    lat: number;
}

interface QueryData {
    id: number;
    sig_kor_name: string;
    sig_eng_name: string;
}

const DistrictScreen = () => {

    const navigation = useNavigation();
    const [coords, setCoords] = React.useState<Coords>();
    const [errorType, setErrorType] = React.useState<ErrorTypeEnum>();
    const [skip, setSkip] = React.useState<number>(0);
    const [focus, setFocus] = React.useState<boolean>(false);
    const [text, setText] = React.useState<string>('');
    const [districtList, setDistrictList] = React.useState<{
        id: number;
        name: string;
    }[] | undefined>();

    const { isLoading , error, data, refetch } = useQuery("districtData", async ():Promise<QueryData[]> => {
        const data = await axios.get("http://localhost:3000/districts/near", {
            params: {
                skip: skip,
                limit: 30,
                lat: coords?.lat,
                lng: coords?.lng,
            }
        })

        return data.data;
    }, {
        enabled: false,
    });

    const { isLoading: isSearchLoading, error: searchError, data: searchData, refetch:searchRefetch } = useQuery("districtSearchData", async ():Promise<QueryData[]> => {
        const data = await axios.get("http://localhost:3000/districts/search", {
            params: {
                skip: skip,
                limit: 30,
                text: text
            }
        })

        return data.data;
    }, {
        enabled: false
    })

    React.useEffect(() => {
        getCurrentPosition();
    }, []);

    React.useEffect(() => {
        if(text && text.length !== 0) {
            searchRefetch();
        } else {
            if(coords) {
                refetch();
            }
        }
    }, [coords, text])

    React.useLayoutEffect(() => {
        if(searchData) {
            console.log(searchData);
            if(searchData.length === 0) {
                setErrorType(ErrorTypeEnum.NOT_FOUND);
            } else {
                setErrorType(undefined);
            }
            
            setDistrictList(searchData.map((i) => {
                return {
                  id: i.id,
                  name: i.sig_kor_name  
                }
            }))
        } else if(data) {
            console.log(data);
            if(data.length === 0) {
                setErrorType(ErrorTypeEnum.NOT_FOUND);
            } else {
                setErrorType(undefined);
            }
            setDistrictList(data.map((i) => {
                return {
                  id: i.id,
                  name: i.sig_kor_name  
                }
            }))
        }
    }, [data, searchData])

    React.useLayoutEffect(() => {
        if(error || searchError) {
            //에러시 상단 stickbar 추가.
            setErrorType(ErrorTypeEnum.NOT_FOUND);
        }
    }, [error, searchError])

    const getCurrentPosition = React.useCallback(() => {
        if(askGeoloPermission()) {
            Geolocation.getCurrentPosition(
                (position) => {
                    setCoords({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error) => {
                    console.log({
                        code: error.code, 
                        message: error.message
                    });
                    setErrorType(ErrorTypeEnum.PERMISSION_NOT_GRANTED);
                },
                { enableHighAccuracy: true, timeout: 50000, maximumAge: 10000}
            )
        } else {
            setErrorType(ErrorTypeEnum.PERMISSION_NOT_GRANTED);
        }
    }, [errorType]);

    const handlePressDistrictItem = React.useCallback((id:number) => {
        navigation.navigate('PhoneAuth', {
            districtId: id
        });
    }, [navigation])

    const askGeoloPermission = React.useCallback(async () => {
        try {
            if(Platform.OS === 'ios') {
                if(errorType) {
                    showAccessAlert()
                }
                try {
                    Geolocation.requestAuthorization('always')
                } catch (err) {
                    console.log({
                        err
                    });
                }
            } else {
                const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

                console.log({
                    result
                });
            
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
    }, [errorType, setErrorType]);

    const showAccessAlert = React.useCallback(() => {
        Alert.alert(
            "위치정보 이용에 대한 엑세스 권한이 없어요",
            "앱 설정으로 가서 액세스 권한을 수정 할 수 있어요. 이동하시겠어요?",
            [
                {
                    text: '취소',
                },{
                    text: '설정하기',
                    onPress: () => {
                        if(Platform.OS === 'ios') {
                            Linking.openURL('App-Prefs:root')
                        } else {
                            // 나중에.
                        }
                    }
                }
            ]
        )
    }, [])

    const handleChangeText = React.useCallback((data:string) => {
        setText(data);
    }, [])

    const handlePressErrorText = React.useCallback(() => {
        setFocus(true);
    }, []);

    return (
        <DistrictListTemplate
            data={districtList}
            onPress={handlePressDistrictItem}
            onPressButton={() => {
                getCurrentPosition()
            }} 
            input={{
                onChangeText: handleChangeText,
                value: text
            }}
            text={text ? `'${text}' 검색 결과` : undefined}
            isLoading={isLoading || isSearchLoading}
            errorType={errorType}
            focus={focus}
            onPressErrorText={handlePressErrorText}
        />
    )
}

export default DistrictScreen;