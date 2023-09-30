import {
    createContext,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
} from "react";
import { Profile, Provider } from "../Types";

type ProfileContextProps = ProfileContext | undefined;

interface ProfileContext {
    profile: Profile;
    setProfile: Dispatch<SetStateAction<Profile>>;
}

const initState = {
    education: { mandatory: true, show: true },
    experience: { mandatory: true, show: true },
    resume: { mandatory: true, show: true },
    profileQuestions: [],
};

export const ProfileProvider: Provider = (props) => {
    const [profile, setProfile] = useState<Profile>(initState);

    return (
        <ProfileContext.Provider value={{ profile, setProfile: setProfile }}>
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
