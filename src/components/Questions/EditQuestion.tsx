import { useState } from "react";
import { Select, Input, Checkbox, InputNumber } from "antd";
import {
    UnorderedListOutlined,
    PlusOutlined,
    CloseOutlined,
} from "@ant-design/icons";
import { QuestionTemplate, QuestionType } from "../../Types";
import style from "./Questions.module.css";
import { QuestionProps } from "./Question";

type EditQuestion = React.FC<QuestionProps>;

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface setState {
    (upadate: Partial<QuestionTemplate>): void;
}

interface Types {
    value: QuestionType;
    label: string;
}

const types: Types[] = [
    { value: "Paragraph", label: "Paragraph" },
    { value: "ShortAnswer", label: "Short answer" },
    { value: "YesNo", label: "Yes/No" },
    { value: "Dropdown", label: "Dropdown" },
    { value: "MultipleChoice", label: "Multiple choice" },
    { value: "Date", label: "Date" },
    { value: "Number", label: "Number" },
    { value: "FileUpload", label: "File upload" },
    { value: "Video", label: "Video" },
];

const EditQuestion: EditQuestion = ({ question, onDelete, onSave }) => {
    const [q, setQ] = useState(question);
    const setState: setState = (upadate) => {
        setQ((state) => {
            return { ...state, ...upadate };
        });
    };

    function handleSave() {
        if (q.type && q.question) onSave(q);
        else alert("Invalid type or question");
    }

    // Setters
    function setType(type: QuestionType) {
        let state: QuestionTemplate = { type, question: "" };
        switch (type) {
            case "MultipleChoice":
                state = { ...state, choices: [""], other: false, maxChoice: 0 };
                break;
            case "Dropdown":
                state = { ...state, choices: [""], other: false };
                break;
            case "YesNo":
                state = { ...state, disqualify: false };
                break;
            case "Video":
                state = { ...state, additionalInfo: "" };
                break;
            case "FileUpload":
                // I Suppose we will need things like maxSize and fileType
                // but nothing was mentioned
                break;
            default: // Date, Number, Paragraph, and ShortAnswer
                break;
        }
        setState(state);
    }

    function setQuestion({ target }: InputChangeEvent) {
        setState({ question: target.value });
    }

    function setAddChoice() {
        setQ((state) => {
            return { ...state, choices: [...state.choices!, ""] };
        });
    }

    function setChoice(i: number) {
        return ({ target }: InputChangeEvent) => {
            setQ((state) => {
                const choices = state.choices;
                choices![i] = target.value;
                return { ...state, choices };
            });
        };
    }

    function setDisqualify({ target }: any) {
        setState({ disqualify: target.checked });
    }

    function setAdditionalInfo({ target }: InputChangeEvent) {
        setState({ additionalInfo: target.value });
    }

    function setMaxDuration(maxDuration: any) {
        setState({ maxDuration });
    }

    function setMaxDurationUnit(maxDurationUnit: "min" | "sec") {
        setState({ maxDurationUnit });
    }

    function setOther({ target }: any) {
        setState({ other: target.checked });
    }

    function setMaxChoice(maxChoice: any) {
        setState({ maxChoice });
    }

    // Renderers
    function renderTypeSelect() {
        if (!question.type) {
            return (
                <div className="input-group">
                    <label htmlFor="type">Type</label>
                    <Select
                        id="type"
                        className="select"
                        onChange={setType}
                        options={types}
                    />
                </div>
            );
        }
    }

    function renderChoices() {
        return q.choices?.map((choice, i) => {
            return (
                <div key={i} className={style.choice}>
                    <UnorderedListOutlined />
                    <Input
                        className="form-control"
                        placeholder="Type here"
                        onChange={setChoice(i)}
                        value={choice}
                    />
                    {i === q.choices!.length - 1 ? (
                        <PlusOutlined onClick={setAddChoice} />
                    ) : (
                        ""
                    )}
                </div>
            );
        });
    }

    function renderExtraFields() {
        switch (q.type) {
            case "YesNo":
                return (
                    <Checkbox checked={q.disqualify} onChange={setDisqualify}>
                        Disqualify candidate if the answer is no
                    </Checkbox>
                );
            case "Video":
                return (
                    <>
                        <Input
                            value={q.additionalInfo}
                            className="form-control"
                            placeholder="Additional information"
                            onChange={setAdditionalInfo}
                        />
                        <div className={style["inputs-row-2"]}>
                            <InputNumber
                                value={q.maxDuration}
                                className="form-control"
                                placeholder="Max duration of video"
                                onChange={setMaxDuration}
                            />
                            <Select
                                value={q.maxDurationUnit}
                                placeholder="in (sec/min)"
                                className="select"
                                onChange={setMaxDurationUnit}
                                options={[
                                    { value: "sec", label: "Seconds" },
                                    { value: "min", label: "Minutes" },
                                ]}
                            />
                        </div>
                    </>
                );
            case "Dropdown":
            case "MultipleChoice":
                return (
                    <>
                        {renderChoices()}
                        <Checkbox checked={q.other} onChange={setOther}>
                            Enable "Other" option
                        </Checkbox>

                        {/* Max choice allowed in case of MultipleChoice*/}
                        {q.type === "MultipleChoice" ? (
                            <div className="input-group">
                                <label htmlFor="maxChoice">
                                    Max choice allowed
                                </label>
                                <InputNumber
                                    id="maxChoice"
                                    className="form-control"
                                    onChange={setMaxChoice}
                                    value={q.maxChoice}
                                    min={0}
                                    max={q.choices?.length}
                                    style={{ width: "100%" }}
                                />
                            </div>
                        ) : (
                            ""
                        )}
                    </>
                );
            default:
                return "";
        }
    }

    return (
        <div className={`field ${style["question-edit"]}`}>
            {renderTypeSelect()}
            <div className="input-group">
                <label htmlFor="question">Question</label>
                <Input
                    id="question"
                    className="form-control"
                    placeholder="Type here"
                    value={q.question}
                    onChange={setQuestion}
                />
            </div>
            {renderExtraFields()}
            <div className={style["question-footer"]}>
                <button className={style["btn-del"]} onClick={onDelete}>
                    <CloseOutlined /> Delete question
                </button>
                {/* Alert */}
                <button className={style["btn-filled"]} onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default EditQuestion;
