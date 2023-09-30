import CoverImage from "./components/CoverImage/CoverImage";
import PersonalInformation from "./components/PersonalInformation/PersonalInformation";
import Profile from "./components/Profile/Profile";
import { PersonalInformationProvider } from "./context/PersonalInformationContext";
import { ProfileProvider } from "./context/ProfileContext";

function App() {
    return (
        <>
            {/* Cover image */}
            <CoverImage />

            {/* Profile */}
            <ProfileProvider>
                <Profile />
            </ProfileProvider>

            {/* Personal Information */}
            <PersonalInformationProvider>
                <PersonalInformation />
            </PersonalInformationProvider>

            {/* Customized Questions */}
        </>
    );
}

export default App;
