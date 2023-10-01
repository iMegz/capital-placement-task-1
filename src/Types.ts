export type Provider = React.FC<ProviderProps>;

export interface ProviderProps {
    children: React.ReactNode;
    data?: Profile | PersonalInformation | AdditionalState;
}

export type QuestionType =
    | "Paragraph"
    | "ShortAnswer"
    | "YesNo"
    | "Dropdown"
    | "MultipleChoice"
    | "Date"
    | "Number"
    | "FileUpload"
    | "Video";

export type QuestionActions = "ADD_QUESTION" | "DEL_QUESTION" | "SAVE_QUESTION";

export type ExcludeField<T, key> = Exclude<keyof T, key>;

export type ProfileFieldKey = ExcludeField<Profile, "profileQuestions">;

export type PersonalInformationFieldKey = ExcludeField<
    PersonalInformation,
    "personalQuestions"
>;

export interface Action<ActionType> {
    type: ActionType;
    payload?: any;
}

export interface Reducer<StateType, ActionType> {
    (state: StateType, action: Action<ActionType>): StateType;
}

export interface ApplicationForm {
    data: {
        id: string;
        type: string;
        attributes: ApplicationFormAttributes;
    };
}

export interface ApplicationFormAttributes {
    coverImage?: string;
    personalInformation: PersonalInformation;
    profile?: Profile;
    customisedQuestions?: QuestionTemplate[];
}

export interface PersonalInformationFields {}

export interface PersonalInformation {
    firstName: PersonalInformationTemplate;
    lastName: PersonalInformationTemplate;
    emailId: PersonalInformationTemplate;
    phoneNumber: PersonalInformationTemplate;
    nationality: PersonalInformationTemplate;
    currentResidence: PersonalInformationTemplate;
    idNumber: PersonalInformationTemplate;
    dateOfBirth: PersonalInformationTemplate;
    gender: PersonalInformationTemplate;
    personalQuestions?: QuestionTemplate[];
}

export interface Profile {
    education: ProfileTemplate;
    experience: ProfileTemplate;
    resume: ProfileTemplate;
    profileQuestions?: QuestionTemplate[];
}

export interface PersonalInformationTemplate {
    internalUse: boolean;
    show: boolean;
}

export interface ProfileTemplate {
    mandatory: boolean;
    show: boolean;
}

export interface QuestionTemplate {
    id?: string;
    type: QuestionType | null;
    question: string;
    choices?: string[];
    maxChoice?: number;
    disqualify?: boolean;
    other?: boolean;
    additionalInfo?: string;
    maxDuration?: number;
    maxDurationUnit?: "min" | "sec";
}

export interface AdditionalState {
    coverImage?: string;
    customisedQuestions?: QuestionTemplate[];
}
