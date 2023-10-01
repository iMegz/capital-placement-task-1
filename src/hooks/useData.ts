import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useProfileContext } from "../context/ProfileContext";
import { usePersonalInformationContext } from "../context/PersonalInformationContext";
import { useAdditionalContext } from "../context/AdditionalContext";
import { ApplicationForm, ApplicationFormAttributes } from "../Types";

interface UseData {
    (updateServer: (data: ApplicationForm) => void, condtion?: boolean): void;
}

const useData: UseData = (updateServer, condtion = true) => {
    const { state: profile } = useProfileContext();
    const { state: personalInformation } = usePersonalInformationContext();
    const { state: additional } = useAdditionalContext();

    const coverImage = additional.coverImage;

    // Don't send new questions that are not saved yet
    const personalQuestions = personalInformation.personalQuestions?.filter(
        (q) => q.type
    );
    const profileQuestions = profile.profileQuestions?.filter((q) => q.type);

    const customisedQuestions = additional.customisedQuestions?.filter(
        (q) => q.type
    );

    // ApplicationFormAttributes merged
    const attributes: ApplicationFormAttributes = {
        personalInformation: { ...personalInformation, personalQuestions },
        profile: { ...profile, profileQuestions },
        customisedQuestions,
        ...(coverImage ? { coverImage } : {}), // Don't send empty images
    };

    const applicationForm: ApplicationForm = {
        data: { attributes, id: uuidv4(), type: "applicationForm" },
    };

    useEffect(() => {
        if (condtion) updateServer(applicationForm);
    }, [applicationForm]);
};

export default useData;
