import Profile from "./components/Profile/Profile";
import { ProfileProvider } from "./context/ProfileContext";

function App() {
    return (
        <>
            <ProfileProvider>
                <Profile />
            </ProfileProvider>
        </>
    );
}

export default App;
