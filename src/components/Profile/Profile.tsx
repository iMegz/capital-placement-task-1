import { ProfileFieldKey } from "../../Types";
import { useProfileContext } from "../../context/ProfileContext";
import Card from "../Card/Card";
import Questions from "../CustomQuestions/Questions";
import ProfileField from "./ProfileField";

const fields: ProfileFieldKey[] = ["education", "experience", "resume"];

const Profile: React.FC = () => {
    const context = useProfileContext();

    return (
        <Card title="Profile">
            <div className="fields">
                {fields.map((field: ProfileFieldKey) => {
                    return <ProfileField key={field} field={field} />;
                })}
            </div>
            <Questions context={context} />
        </Card>
    );
};

export default Profile;
