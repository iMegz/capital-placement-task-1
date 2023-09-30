import { Checkbox, Switch } from "antd";
import { usePersonalInformationContext } from "../../context/PersonalInformationContext";
import { Field } from "./PersonalInformation";

type PersonalInformationField = React.FC<FieldProps>;

interface FieldProps {
    field: Field;
}

const PersonalInformationField: PersonalInformationField = ({ field }) => {
    const { state, dispatch } = usePersonalInformationContext();
    const { internalUse, show } = state[field.value];

    // Setters
    function setInternal({ target }: any) {
        const value: boolean = target.checked;
        dispatch({
            type: "SET_INTERNAL",
            payload: { field: field.value, value },
        });
    }

    function setShow(value: boolean) {
        dispatch({ type: "SET_SHOW", payload: { field: field.value, value } });
    }

    // Renderers
    function renderInfo() {
        if (field.info) {
            return <span className="field-info">({field.info})</span>;
        }
    }

    function renderOptions() {
        if (field.editable) {
            return (
                <div className="field-options">
                    <Checkbox checked={internalUse} onChange={setInternal}>
                        Internal
                    </Checkbox>
                    <Switch onChange={setShow} checked={show} /> Show
                </div>
            );
        }
    }

    return (
        <div className="field">
            <span className="field-title">
                {field.label}
                {renderInfo()}
            </span>
            {renderOptions()}
        </div>
    );
};

export default PersonalInformationField;
