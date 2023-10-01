import { useEffect, useRef } from "react";
import useData from "../../hooks/useData";
import CoverImage from "../CoverImage/CoverImage";
import CustomisedQuestions from "../CustomisedQuestions/CustomisedQuestions";
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import Profile from "../Profile/Profile";
import style from "./ApplicationFormAttributes.module.css";
import { ApplicationForm } from "../../Types";
import axios from "axios";

const API =
    "http://127.0.0.1:4010/api/555.3728820990012/programs/omnis/application-form";

async function updateServer(data: ApplicationForm) {
    try {
        const response = await axios.put(API, data);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

const ApplicationFormAttributes = () => {
    const initialMount = useRef(true);
    const applicationForm = useData();

    useEffect(() => {
        if (initialMount.current) initialMount.current = false;
        else updateServer(applicationForm);
        console.log(applicationForm);
    }, [applicationForm]);

    return (
        <div className={style["form-attributes"]}>
            <CoverImage />
            <Profile />
            <PersonalInformation />
            <CustomisedQuestions />
        </div>
    );
};

export default ApplicationFormAttributes;
