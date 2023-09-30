import { createContext, useContext, Dispatch, useReducer } from "react";
import {
    Action,
    PersonalInformation,
    PersonalInformationFieldKey,
    Provider,
    Reducer,
} from "../Types";

export interface PersonalInformationContext {
    state: PersonalInformation;
    dispatch: Dispatch<Action<PersonalInformationActions>>;
}

type PersonalInformationContextProps = PersonalInformationContext | undefined;

type PersonalInformationReducer = Reducer<
    PersonalInformation,
    PersonalInformationActions
>;

// Possible reducer actions
type PersonalInformationActions =
    | "SET_INTERNAL"
    | "SET_SHOW"
    | "ADD_QUESTION"
    | "DEL_QUESTION"
    | "EDIT_QUESTION";

// Initial state
const initState: PersonalInformation = {
    firstName: { internalUse: false, show: true },
    lastName: { internalUse: false, show: true },
    emailId: { internalUse: false, show: true },
    phoneNumber: { internalUse: false, show: true },
    nationality: { internalUse: false, show: true },
    currentResidence: { internalUse: false, show: true },
    idNumber: { internalUse: false, show: true },
    dateOfBirth: { internalUse: false, show: true },
    gender: { internalUse: false, show: true },
    personalQuestions: [],
};

// Reducer
const reducer: PersonalInformationReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_INTERNAL": {
            // payload: {field:keyOfPersonalInformation, value:boolean}
            const field: PersonalInformationFieldKey = payload.field;
            const value: boolean = payload.value;
            const newState = { ...state };
            newState[field].internalUse = value;
            return newState;
        }

        case "SET_SHOW": {
            // payload: {field:keyOfPersonalInformation, value:boolean}
            const field: PersonalInformationFieldKey = payload.field;
            const value: boolean = payload.value;
            const newState = { ...state };
            console.log(newState, payload);
            newState[field].show = value;
            return newState;
        }
    }
    return state;
};

// Context creation
const PersonalInformationContext =
    createContext<PersonalInformationContextProps>(undefined);

// Context provider
export const PersonalInformationProvider: Provider = (props) => {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <PersonalInformationContext.Provider value={{ state: state, dispatch }}>
            {props.children}
        </PersonalInformationContext.Provider>
    );
};

// Context
export function usePersonalInformationContext() {
    const context = useContext(PersonalInformationContext);
    if (!context) {
        throw Error("Context error");
    }
    return context;
}
