import ContextProvider from "../../context/ContextProvider";
import ApplicationFormAttributes from "../ApplicationFormAttributes/ApplicationFormAttributes";

const Application = () => {
    return (
        <ContextProvider>
            <ApplicationFormAttributes />
        </ContextProvider>
    );
};

export default Application;
