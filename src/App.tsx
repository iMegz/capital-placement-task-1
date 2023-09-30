import PersonalInformation from "./components/PersonalInformation/PersonalInformation";
import Profile from "./components/Profile/Profile";
import { PersonalInformationProvider } from "./context/PersonalInformationContext";
import { ProfileProvider } from "./context/ProfileContext";

function App() {
    return (
        <>
            <ProfileProvider>
                <Profile />
            </ProfileProvider>
            <PersonalInformationProvider>
                <PersonalInformation />
            </PersonalInformationProvider>
        </>
    );
}

export default App;
