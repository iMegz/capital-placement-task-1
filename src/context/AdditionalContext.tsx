import { v4 as uuidv4 } from "uuid";
import { createContext, useContext, Dispatch, useReducer } from "react";
import {
    Action,
    Provider,
    QuestionActions,
    QuestionTemplate,
    Reducer,
} from "../Types";

interface AdditionalState {
    coverImage?: string;
    customisedQuestions?: QuestionTemplate[];
}

export interface AdditionalContext {
    state: AdditionalState;
    dispatch: Dispatch<Action<AdditionalActions>>;
}

type AdditionalContextProps = AdditionalContext | undefined;

type AdditionalReducer = Reducer<AdditionalState, AdditionalActions>;

// Possible reducer actions
type AdditionalActions = "SET_COVER_IMAGE" | QuestionActions;

// Initial state
const initState: AdditionalState = {
    coverImage: "",
    customisedQuestions: [],
};

// Reducer
const reducer: AdditionalReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_COVER_IMAGE": {
            // payload: string
            return { ...state, coverImage: payload };
        }

        case "ADD_QUESTION": {
            // payload: {}
            const id = uuidv4();
            const newState = { ...state };
            newState.customisedQuestions = [
                ...newState.customisedQuestions!,
                { question: "", type: null, id },
            ];
            return newState;
        }

        case "DEL_QUESTION": {
            // payload: string (id)
            const newState = { ...state };
            newState.customisedQuestions = newState.customisedQuestions?.filter(
                ({ id }) => id !== payload
            );
            return newState;
        }

        case "SAVE_QUESTION": {
            // payload: {id:string, question:QuestionTemplate}
            const newState = { ...state };
            newState.customisedQuestions = newState.customisedQuestions?.map(
                (question) => {
                    if (question.id === payload.id) return payload.question;
                    else return question;
                }
            );
            return newState;
        }
    }
    return state;
};

// Context creation
const AdditionalContext = createContext<AdditionalContextProps>(undefined);

// Context provider
export const AdditionalProvider: Provider = (props) => {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <AdditionalContext.Provider value={{ state: state, dispatch }}>
            {props.children}
        </AdditionalContext.Provider>
    );
};

// Context
export function useAdditionalContext() {
    const context = useContext(AdditionalContext);
    if (!context) {
        throw Error("Context error");
    }
    return context;
}
