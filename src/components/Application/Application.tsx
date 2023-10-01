import { useEffect, useRef } from "react";
import useData from "../../hooks/useData";
import CoverImage from "../CoverImage/CoverImage";
import CustomisedQuestions from "../CustomisedQuestions/CustomisedQuestions";
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import Profile from "../Profile/Profile";
import style from "./Application.module.css";
import { ApplicationForm } from "../../Types";
import axios from "axios";
import { useProfileContext } from "../../context/ProfileContext";
import { usePersonalInformationContext } from "../../context/PersonalInformationContext";
import { useAdditionalContext } from "../../context/AdditionalContext";

const API =
    "http://127.0.0.1:4010/api/555.3728820990012/programs/omnis/application-form";

async function updateServer(data: ApplicationForm) {
    try {
        const response = await axios.put(API, data);
        console.log("Success", response.data);
    } catch (error) {
        console.log(error);
    }
}

async function getData(callback: (data: ApplicationForm) => void) {
    try {
        const response = await axios.get(API);
        callback(response.data);
    } catch (error) {
        console.log(error);
    }
}

const Application = () => {
    const initialMount = useRef(true);
    useData(updateServer, !initialMount.current);

    const { dispatch: profileDispatch } = useProfileContext();
    const { dispatch: personalInfoDispatch } = usePersonalInformationContext();
    const { dispatch: additionalDispatch } = useAdditionalContext();

    useEffect(() => {
        getData(({ data }) => {
            initialMount.current = false;
            const attributes = data.attributes;
            profileDispatch({ type: "INIT", payload: attributes.profile });
            attributes.coverImage;
            personalInfoDispatch({
                type: "INIT",
                payload: attributes.personalInformation,
            });
            additionalDispatch({
                type: "INIT",
                payload: {
                    customisedQuestions: attributes.customisedQuestions,
                    coverImage: attributes.coverImage,
                },
            });
        });
    }, []);

    return (
        <div className={style["form-attributes"]}>
            <CoverImage />
            <Profile />
            <PersonalInformation />
            <CustomisedQuestions />
        </div>
    );
};

export default Application;
