import { useAdditionalContext } from "../../context/AdditionalContext";
import Card from "../Card/Card";
import Questions from "../Questions/Questions";

const CustomisedQuestions = () => {
    const context = useAdditionalContext();

    return (
        <Card title="Additional questions">
            <Questions context={context} />
        </Card>
    );
};

export default CustomisedQuestions;
