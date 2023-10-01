import { v4 as uuidv4 } from "uuid";
import { useProfileContext } from "../context/ProfileContext";
import { usePersonalInformationContext } from "../context/PersonalInformationContext";
import { useAdditionalContext } from "../context/AdditionalContext";
import { ApplicationForm, ApplicationFormAttributes } from "../Types";

const useData = () => {
    const { state: profile } = useProfileContext();
    const { state: personalInformation } = usePersonalInformationContext();
    const { state: additional } = useAdditionalContext();

    const coverImage = additional.coverImage;
    const attributes: ApplicationFormAttributes = {
        personalInformation,
        profile,
        customisedQuestions: additional.customisedQuestions,
        ...(coverImage ? { coverImage } : {}),
    };

    const applicationForm: ApplicationForm = {
        data: { attributes, id: uuidv4(), type: "applicationForm" },
    };

    return applicationForm;
};

export default useData;
