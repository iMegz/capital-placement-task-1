import { ProfileFieldKey } from "../../Types";
import Card from "../Card/Card";
import ProfileField from "./ProfileField";

const fields: ProfileFieldKey[] = ["education", "experience", "resume"];

const Profile: React.FC = () => {
    return (
        <Card title="Profile">
            <div className="fields">
                {fields.map((field: ProfileFieldKey) => {
                    return <ProfileField key={field} field={field} />;
                })}
            </div>
        </Card>
    );
};

export default Profile;
