import CoverImage from "./components/CoverImage/CoverImage";
import CustomisedQuestions from "./components/CustomisedQuestions/CustomisedQuestions";
import PersonalInformation from "./components/PersonalInformation/PersonalInformation";
import Profile from "./components/Profile/Profile";
import { AdditionalProvider } from "./context/AdditionalContext";
import { PersonalInformationProvider } from "./context/PersonalInformationContext";
import { ProfileProvider } from "./context/ProfileContext";

function App() {
    return (
        <>
            {/* Cover image */}
            <AdditionalProvider>
                <CoverImage />
            </AdditionalProvider>

            {/* Profile */}
            <ProfileProvider>
                <Profile />
            </ProfileProvider>

            {/* Personal Information */}
            <PersonalInformationProvider>
                <PersonalInformation />
            </PersonalInformationProvider>

            {/* Customized Questions */}
            <AdditionalProvider>
                <CustomisedQuestions />
            </AdditionalProvider>
        </>
    );
}

export default App;
