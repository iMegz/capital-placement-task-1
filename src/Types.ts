export type Provider = React.FC<React.PropsWithChildren>;

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
    type: QuestionType;
    question: string;
    choices?: string[];
    maxChoice?: number;
    disqualify?: boolean;
    other?: boolean;
    additionalInfo?: string;
    maxDuration?: number;
    maxDurationUnit?: "min" | "sec";
}
