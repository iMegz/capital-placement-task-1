import { useProfileContext } from "../../context/ProfileContext";
import { Checkbox, Switch } from "antd";
import { Profile, ProfileTemplate } from "../../Types";
import style from "./Profile.module.css";

type ProfileField = React.FC<FieldProps>;

interface FieldProps {
    title: string;
}

const ProfileField: ProfileField = ({ title }) => {
    const { profile, dispatch } = useProfileContext();
    const field = title as keyof Profile;
    const { mandatory, show } = profile[field] as ProfileTemplate;

    // Setters
    function setMandatory({ target }: any) {
        const value: boolean = target.checked;
        dispatch({ type: "SET_MANDATORY", payload: { field, value } });
    }

    function setShow(value: boolean) {
        dispatch({ type: "SET_SHOW", payload: { field, value } });
    }

    return (
        <div className={style.field}>
            <span className={style["field-title"]}>{field}</span>
            <div className={style["field-options"]}>
                <Checkbox checked={mandatory} onChange={setMandatory}>
                    Mandatory
                </Checkbox>
                <Switch onChange={setShow} checked={show} /> Show
            </div>
        </div>
    );
};

export default ProfileField;
