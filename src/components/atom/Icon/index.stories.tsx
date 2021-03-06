import React from 'react';
import {storiesOf} from '@storybook/react-native'

import IconComponent from './index';

storiesOf("Icon", module)
    .add("user-profile", () => <IconComponent name="user-profile" style={{
        iconStyle: {
            width: 40,
            height: 40
        },
        wrapperStyle: {
            flex: 1,
            justifyContent:'center',
            alignItems:'center'
        }
    }} />)
    .add("search", () => <IconComponent name="search" style={{
        iconStyle: {
            width: 40,
            height: 40
        },
        wrapperStyle: {
            flex: 1,
            justifyContent:'center',
            alignItems:'center'
        }
    }} />)
    .add("left-arrow", () => <IconComponent name="left-arrow" style={{
        iconStyle: {
            width: 40,
            height: 40
        },
        wrapperStyle: {
            flex: 1,
            justifyContent:'center',
            alignItems:'center'
        }
    }} />)
    .add("target", () => <IconComponent name="target" style={{
        iconStyle: {
            width: 40,
            height: 40
        },
        wrapperStyle: {
            flex: 1,
            justifyContent:'center',
            alignItems:'center'
        }
    }} />)
    .add("target-question-mark", () => <IconComponent name="target-question-mark" style={{
        iconStyle: {
            width: 40,
            height: 40
        },
        wrapperStyle: {
            flex: 1,
            justifyContent:'center',
            alignItems:'center'
        }
    }} />)
    .add("lock", () => <IconComponent name="lock" style={{
        iconStyle: {
            width: 40,
            height: 40
        },
        wrapperStyle: {
            flex: 1,
            justifyContent:'center',
            alignItems:'center'
        }
    }} />)
    .add("heart", () => <IconComponent name="heart" style={{
        iconStyle: {
            width: 40,
            height: 40
        },
        wrapperStyle: {
            flex: 1,
            justifyContent:'center',
            alignItems:'center'
        }
    }} />)
    .add("chat", () => <IconComponent name="chat" style={{
        iconStyle: {
            width: 40,
            height: 40
        },
        wrapperStyle: {
            flex: 1,
            justifyContent:'center',
            alignItems:'center'
        }
    }} />)