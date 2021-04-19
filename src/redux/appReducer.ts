import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./reduxStore";
import { getAuthUserData } from "./authReducer";

type initialStateT = {
    initialized: boolean;
};

type SetInitializedAT = ReturnType<typeof initializedSuccess>;

type ActionsType = SetInitializedAT;

const initialState = {
    initialized: false
};

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

export const appReducer = (state: initialStateT = initialState, action: ActionsType): initialStateT => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            };
        }
        default: {
            return state;
        }
    }
};

// * AC
const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    } as const;
};

//* TC
type appReducerThunkT<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType>;

export const initializeApp = (): appReducerThunkT => (dispatch, getState) => {
    const promise = dispatch(getAuthUserData());

    Promise.all([promise]).then((res) => {
        dispatch(initializedSuccess());
    });
};

