import { PersonalInformationFieldKey } from "../../Types";
import { usePersonalInformationContext } from "../../context/PersonalInformationContext";
import Card from "../Card/Card";
import Questions from "../CustomQuestions/Questions";
import PersonalInformationField from "./PersonalInformationField";

export interface Field {
    label: string;
    info?: string;
    editable: boolean;
    value: PersonalInformationFieldKey;
}

const fields: Field[] = [
    { value: "firstName", label: "First Name", editable: false },
    { value: "lastName", label: "Last Name", editable: false },
    { value: "emailId", label: "Email", editable: false },
    {
        value: "phoneNumber",
        label: "Phone",
        info: "without dial code",
        editable: true,
    },
    { value: "nationality", label: "Nationality", editable: true },
    { value: "currentResidence", label: "Current Residence ", editable: true },
    { value: "idNumber", label: "ID Number", editable: true },
    { value: "dateOfBirth", label: "Date of Birth", editable: true },
    { value: "gender", label: "Gender", editable: true },
];

const PersonalInformation: React.FC = () => {
    const context = usePersonalInformationContext();

    return (
        <Card title="Personal Information">
            <div className="fields">
                {fields.map((field) => {
                    return (
                        <PersonalInformationField
                            key={field.value}
                            field={field}
                        />
                    );
                })}
            </div>

            <Questions context={context} />
        </Card>
    );
};

export default PersonalInformation;
