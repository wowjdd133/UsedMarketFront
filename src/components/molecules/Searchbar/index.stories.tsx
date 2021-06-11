import React from 'react';
import { storiesOf } from '@storybook/react-native';
import SearchbarMoleCules from './index';


storiesOf('Searchbar', module)
    .add('searchbar', () => <SearchbarMoleCules
        icon={{
            name:"search",
        }}
        input={{
            placeholder:"동명(읍, 면)으로 검색 (ex. 서초동)",
            value: '',
            onChange:(text:string) => {
                console.log(text);
            }
        }}
    />)