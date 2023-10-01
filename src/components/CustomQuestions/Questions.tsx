import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import style from "./Questions.module.css";
import { ProfileContext } from "../../context/ProfileContext";
import { PersonalInformationContext } from "../../context/PersonalInformationContext";
import { QuestionTemplate } from "../../Types";
import Question from "./Question";

type Questions = React.FC<QuestionsProps>;

interface QuestionsProps {
    context: ProfileContext | PersonalInformationContext;
}

const Questions: Questions = ({ context }) => {
    const { state, dispatch } = context;
    let questions: QuestionTemplate[] = [];
    if ("personalQuestions" in state) questions = state.personalQuestions!;
    else if ("profileQuestions" in state) questions = state.profileQuestions!;

    // Handlers
    function handleAddQuestion() {
        dispatch({ type: "ADD_QUESTION" });
    }

    function handleDeleteQuestion(id: string) {
        return () => {
            dispatch({ type: "DEL_QUESTION", payload: id });
        };
    }

    function handleSave(id: string) {
        return (question: QuestionTemplate) => {
            dispatch({ type: "SAVE_QUESTION", payload: { id, question } });
        };
    }

    return (
        <>
            <div className="fields">
                {questions.map((question, i) => {
                    return (
                        <Question
                            key={question.id || i}
                            question={question}
                            onDelete={handleDeleteQuestion(question.id!)}
                            onSave={handleSave(question.id!)}
                        />
                    );
                })}
            </div>
            <button className={style["btn-add"]} onClick={handleAddQuestion}>
                <PlusOutlined /> Add a question
            </button>
        </>
    );
};

export default Questions;
