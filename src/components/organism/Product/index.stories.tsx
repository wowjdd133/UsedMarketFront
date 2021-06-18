import React from 'react';
import { storiesOf } from '@storybook/react-native';
import ProductOrganism from './index';
import WrapperComponent from '../../common/Wrapper';

storiesOf('Product', module)
    .add('product-list-item', () => 
    <WrapperComponent
        style={{
            width:'90%',
            alignSelf:'center'
        }}
    >
        <ProductOrganism
            price={9000}
            tags={['마포구', '9분전']}
            title="에어팟 2세대"
            url="https://lh3.googleusercontent.com/proxy/aCKwXYTfL84wV2DIXBPc4Sx5LS7285JJ9mbmSvOAyprwPlvLBYyQ7CYXUHwz6rV-TZJYFgQnhjMUaUArF7JinG-h1uMJRKqO8czJ0shxl_Zg"
            counts={[{
                count: 1,
                name: 'chat'
            }, {
                count: 2,
                name: 'heart'
            }]}
        />
    </WrapperComponent>
    )