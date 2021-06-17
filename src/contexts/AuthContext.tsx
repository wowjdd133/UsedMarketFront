import React, { createContext, Dispatch, useContext, useReducer } from 'react';

type State = {
    isSignIn: boolean;
}

type Action = {
    type: 'SIGN_IN';
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
                isSignIn: true
            }
        case 'SIGN_OUT':
            return {
                isSignIn: false
            }
    }
}

export const AuthProvider = ({children}: {children:React.ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, {
        isSignIn: false
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
    if(!dispatch) throw new Error('authProvider not find')
    return dispatch;
}