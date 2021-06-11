import React from 'react';
import { storiesOf } from '@storybook/react-native';
import HeaderOrganism from './index';
import { colors, SizeType } from '../../../styles/theme';
import SearchbarMoleCules from '../../molecules/Searchbar/index';

storiesOf('Header', module)
    .add('header', () => <HeaderOrganism
        title={{
            text: '타이틀',
            textStyle: {
                color: colors.black,
                size: SizeType.MEDIUM,
                weight: '300'
            }
        }}
    />)
    .add('header-searchbar', () => <HeaderOrganism
        headerRgiht={
            <SearchbarMoleCules
                icon={{
                    name: 'search'
                }}
                input={{
                    onChange:(text:string) => {},
                    value:"",
                    placeholder:"검색어를 입력하세요",
                }}
            />
        }
    />)