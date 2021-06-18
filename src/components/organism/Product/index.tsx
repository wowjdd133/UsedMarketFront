import React from 'react';
import WrapperComponent from '../../common/Wrapper';
import ImageAtom from '../../atom/Image/index';
import TextAtom from '../../atom/Text/index';
import { Priority } from 'react-native-fast-image';
import { colors, SizeType } from '../../../styles/theme';
import { addCommaToPrice } from '../../../utils/string';
import IconButtonMolecules from '../../molecules/IconButton/index';
import { ImageName } from '../../atom/Icon';

interface IconType {
    count: number;
    name: ImageName;
}

interface ProductOrganismType {
    url: string;
    priority?: Priority;
    title: string;
    price: number;
    tags: string[];
    counts?: IconType[] 
}


//로직은 스크린으로 옮기기
const ProductOrganism = ({ price, tags, title, url, counts, priority }:ProductOrganismType) => {
    return (
        <WrapperComponent
            style={{
                flexDirection: 'row',
                borderBottomWidth:0.25,
                borderBottomColor: colors.grey,
                paddingVertical:15,
            }}
        >   
            <ImageAtom
                wrapperStyle={{
                    width: 100,
                    height: 100,
                }}
                borderRadius={10}
                url={url}
                priority={priority}
            />
                <WrapperComponent
                    style={{
                        marginLeft: 7,
                        flex:1
                    }}
                >
                    <TextAtom
                        style={{
                            textStyle: {
                                color: colors.black,
                                size: SizeType.SMALL,
                            }
                        }}
                        text={title}
                    />
                    <TextAtom
                        style={{
                            textStyle: {
                                color: colors.grey,
                                size: SizeType.MORE_SMALL,
                            },
                            wrapperStyle: {
                                marginTop: 4
                            }
                        }}
                        text={tags.join(' • ')}
                    />
                    <TextAtom
                        style={{
                            textStyle: {
                                color: colors.black,
                                size: SizeType.SMALL,
                                weight: '600'
                            },
                            wrapperStyle: {
                                marginTop: 5
                            }
                        }}
                        text={`${addCommaToPrice(price)}원`}
                    />
                    <WrapperComponent
                        style={{
                            flex:1,
                            justifyContent:'flex-end'
                        }}
                    >
                        <WrapperComponent
                            style={{
                                flexDirection:'row',
                                alignSelf:'flex-end',
                                justifyContent:'flex-end',
                            }}
                        >
                            {
                                counts ? counts.map((i, index) => (
                                    <IconButtonMolecules
                                        button={{
                                            buttonStyle: {
                                                color: 'white',
                                                paddingHorizontal:'0px',
                                                paddingVertical: '0px',
                                            },
                                        }}
                                        icon={{
                                            name:i.name,
                                            iconStyle: {
                                                width: 17.5,
                                                height: 17.5,
                                                backgroundColor:'white',
                                                marginRight:-6
                                            }, 
                                        }}
                                        text={{
                                            text: i.count,
                                            textStyle: {
                                                color:colors.black,
                                                size: SizeType.MORE_SMALL
                                            }
                                        }}
                                        wrapperStyle={{
                                            backgroundColor:colors.white,
                                            marginRight: index !== counts.length ? 4 : 0
                                        }}
                                    />
                                )) : null
                            }
                            
                        </WrapperComponent>
                    </WrapperComponent>
                </WrapperComponent>

        </WrapperComponent>
    )
}

export default ProductOrganism;