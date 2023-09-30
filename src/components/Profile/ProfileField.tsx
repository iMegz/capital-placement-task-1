import { useProfileContext } from "../../context/ProfileContext";
import { Checkbox, Switch } from "antd";
import { ProfileFieldKey } from "../../Types";

type ProfileField = React.FC<FieldProps>;

interface FieldProps {
    field: ProfileFieldKey;
}

const ProfileField: ProfileField = ({ field }) => {
    const { state, dispatch } = useProfileContext();
    const { mandatory, show } = state[field];

    // Setters
    function setMandatory({ target }: any) {
        const value: boolean = target.checked;
        dispatch({ type: "SET_MANDATORY", payload: { field, value } });
    }

    function setShow(value: boolean) {
        dispatch({ type: "SET_SHOW", payload: { field, value } });
    }

    return (
        <div className="field">
            <span className="field-title">{field}</span>
            <div className="field-options">
                <Checkbox checked={mandatory} onChange={setMandatory}>
                    Mandatory
                </Checkbox>
                <Switch onChange={setShow} checked={show} /> Show
            </div>
        </div>
    );
};

export default ProfileField;
