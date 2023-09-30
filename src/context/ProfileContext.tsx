import { createContext, useContext, Dispatch, useReducer } from "react";
import { Action, Profile, ProfileTemplate, Provider, Reducer } from "../Types";

type ProfileContextProps = ProfileContext | undefined;

interface ProfileContext {
    profile: Profile;
    dispatch: Dispatch<Action<ProfileActions>>;
}

type ProfileReducer = Reducer<Profile, ProfileActions>;

type ProfileActions =
    | "SET_MANDATORY"
    | "SET_SHOW"
    | "ADD_QUESTION"
    | "DEL_QUESTION"
    | "EDIT_QUESTION";

const initState = {
    education: { mandatory: true, show: true },
    experience: { mandatory: true, show: true },
    resume: { mandatory: true, show: true },
    profileQuestions: [],
};

const reducer: ProfileReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_MANDATORY": {
            // payload: {field:keyOfProfile, value:boolean}
            const field = payload.field as keyof Profile;
            const value: boolean = payload.value;
            const newState = { ...state };
            if (newState) {
                (newState[field] as ProfileTemplate).mandatory = value;
            }
            return newState;
        }

        case "SET_SHOW": {
            // payload: {field:keyOfProfile, value:boolean}
            const field = payload.field as keyof Profile;
            const value: boolean = payload.value;
            const newState = { ...state };
            if (newState) {
                (newState[field] as ProfileTemplate).show = value;
            }
            return newState;
        }
    }
    return state;
};

export const ProfileProvider: Provider = (props) => {
    const [profile, dispatch] = useReducer(reducer, initState);

    return (
        <ProfileContext.Provider value={{ profile, dispatch }}>
            {props.children}
        </ProfileContext.Provider>
    );
};

export function useProfileContext() {
    const context = useContext(ProfileContext);
    if (!context) {
        throw Error("Context error");
    }
    return context;
}

export const ProfileContext = createContext<ProfileContextProps>(undefined);
