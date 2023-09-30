import Card from "../Card/Card";
import style from "./Profile.module.css";
import ProfileField from "./ProfileField";

const fields = ["education", "experience", "resume"];
const Profile: React.FC = () => {
    return (
        <Card title="Profile">
            <div className={style.profile}>
                {fields.map((field) => {
                    return <ProfileField key={field} title={field} />;
                })}
            </div>
        </Card>
    );
};

export default Profile;
