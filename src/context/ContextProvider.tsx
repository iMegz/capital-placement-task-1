import { ApplicationFormAttributes } from "../Types";
import { AdditionalProvider } from "./AdditionalContext";
import { PersonalInformationProvider } from "./PersonalInformationContext";
import { ProfileProvider } from "./ProfileContext";

type ContextProvider = React.FC<ContextProviderProps>;

interface ContextProviderProps {
    children: React.ReactNode;
    data?: ApplicationFormAttributes;
}

const ContextProvider: ContextProvider = ({ children, data }) => {
    const addtionalProviderValue = {
        coverImage: data?.coverImage,
        customisedQuestions: data?.customisedQuestions,
    };

    return (
        <AdditionalProvider data={addtionalProviderValue}>
            <ProfileProvider data={data?.profile}>
                <PersonalInformationProvider data={data?.personalInformation}>
                    {children}
                </PersonalInformationProvider>
            </ProfileProvider>
        </AdditionalProvider>
    );
};

export default ContextProvider;
