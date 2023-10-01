import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import style from "./Questions.module.css";
import { QuestionTemplate } from "../../Types";
import EditQuestion from "./EditQuestion";

type Question = React.FC<QuestionProps>;

export interface QuestionProps {
    question: QuestionTemplate;
    onSave: (question: QuestionTemplate) => void;
    onDelete: () => void;
}

const Question: Question = (props) => {
    const [editMode, setEditMode] = useState(!props.question.type);

    function handleSave(question: QuestionTemplate) {
        props.onSave(question);
        setEditMode(false);
    }

    function renderQuestion() {
        if (editMode) return <EditQuestion {...props} onSave={handleSave} />;
        else {
            return (
                <div className={style["saved-question"]}>
                    <span className={style.type}>{props.question.type}</span>
                    <div className={style.question}>
                        <span>{props.question.question}</span>
                        <EditOutlined onClick={() => setEditMode(true)} />
                    </div>
                </div>
            );
        }
    }

    return <>{renderQuestion()}</>;
};

export default Question;
