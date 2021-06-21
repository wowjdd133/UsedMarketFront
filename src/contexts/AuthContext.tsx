import React, { createContext, Dispatch, useContext, useReducer } from 'react';

type State = {
    isSignIn: boolean;
    districtId: number;
    userId: number;
    districtName: string;
}

type Action = {
    type: 'SIGN_IN';
    state?: State
} | {
    type: 'SIGN_OUT'
}

type AuthDispatch = Dispatch<Action>

const AuthStateContext = createContext<State | null>(null);
const AuthDispatchContext = createContext<AuthDispatch | null>(null);

const reducer = (state: State, action: Action):State => {
    switch(action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                ...action.state,
                isSignIn: true
            }
        case 'SIGN_OUT':
            return {
                districtId: 0,
                userId: 0,
                districtName: '',
                isSignIn: false
            }
    }
}

export const AuthProvider = ({children}: {children:React.ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, {
        isSignIn: false,
        districtId: 0,
        userId: 0,
        districtName: ''
    });

    return (
        <AuthStateContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    )
}

export function useAuthState() {
    const state = useContext(AuthStateContext);
    if(!state) throw new Error('authProvider not find')
    return state;
}

export function useAuthDispatch() {
    const dispatch = useContext(AuthDispatchContext);
    if(!dispatch) throw new Error('authProvider not find');
    return dispatch;
}