import { createContext, useContext, Dispatch, useReducer } from "react";
import { Action, Profile, ProfileFieldKey, Provider, Reducer } from "../Types";

export interface ProfileContext {
    state: Profile;
    dispatch: Dispatch<Action<ProfileActions>>;
}

type ProfileContextProps = ProfileContext | undefined;

type ProfileReducer = Reducer<Profile, ProfileActions>;

// Possible reducer actions
type ProfileActions =
    | "SET_MANDATORY"
    | "SET_SHOW"
    | "ADD_QUESTION"
    | "DEL_QUESTION"
    | "EDIT_QUESTION";

// Initial state
const initState: Profile = {
    education: { mandatory: true, show: true },
    experience: { mandatory: true, show: true },
    resume: { mandatory: true, show: true },
    profileQuestions: [],
};

// Reducer
const reducer: ProfileReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_MANDATORY": {
            // payload: {field:keyOfProfile, value:boolean}
            const field: ProfileFieldKey = payload.field;
            const value: boolean = payload.value;
            const newState = { ...state };
            newState[field].mandatory = value;
            return newState;
        }

        case "SET_SHOW": {
            // payload: {field:keyOfProfile, value:boolean}
            const field: ProfileFieldKey = payload.field;
            const value: boolean = payload.value;
            const newState = { ...state };
            newState[field].show = value;
            return newState;
        }
    }
    return state;
};

// Context creation
const ProfileContext = createContext<ProfileContextProps>(undefined);

// Context provider
export const ProfileProvider: Provider = (props) => {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <ProfileContext.Provider value={{ state: state, dispatch }}>
            {props.children}
        </ProfileContext.Provider>
    );
};

// Context
export function useProfileContext() {
    const context = useContext(ProfileContext);
    if (!context) {
        throw Error("Context error");
    }
    return context;
}
