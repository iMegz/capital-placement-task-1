import { PlusOutlined } from "@ant-design/icons";
import style from "./CustomQuestions.module.css";
import { ProfileContext } from "../../context/ProfileContext";

type CustomQuestions = React.FC<CustomQuestionsProps>;

interface CustomQuestionsProps {
    context: ProfileContext;
}

const CustomQuestions: CustomQuestions = ({ context }) => {
    // const {state, dispatch} = context
    return <div className={style["custom-questions"]}></div>;
};

export default CustomQuestions;
