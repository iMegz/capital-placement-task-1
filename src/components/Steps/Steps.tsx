import { useState } from "react";
import style from "./Steps.module.css";

const Steps: React.FC = () => {
    const [active, setActive] = useState(2);

    const steps = [
        "Program Details",
        "Application Form",
        "Workflow",
        "Preview",
    ];

    return (
        <div className={style.steps}>
            {steps.map((step, i) => (
                <div
                    key={i}
                    className={`${style.step} ${
                        i === active ? style.active : ""
                    }`}
                >
                    {step}
                </div>
            ))}
        </div>
    );
};

export default Steps;
