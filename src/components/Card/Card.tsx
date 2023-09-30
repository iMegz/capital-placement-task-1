import style from "./Card.module.css";
import { Card as AntCard, CardProps } from "antd";

const Card: React.FC<CardProps> = (props) => {
    const className = `${style.card} ${
        props.className ? props.className : ""
    }`.trimEnd();
    return <AntCard {...props} className={className} />;
};

export default Card;
