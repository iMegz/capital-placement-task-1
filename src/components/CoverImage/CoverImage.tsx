import { ChangeEvent } from "react";
import { UploadOutlined, DeleteFilled } from "@ant-design/icons";
import Card from "../Card/Card";
import style from "./CoverImage.module.css";
import { useAdditionalContext } from "../../context/AdditionalContext";

const CoverImage: React.FC = () => {
    const { state, dispatch } = useAdditionalContext();

    // Handlers
    function handleOnChange({ target }: ChangeEvent<HTMLInputElement>) {
        const file = target?.files?.[0];
        if (file) {
            const maxSize = 1024 * 1024; // 1MB

            if (file.size > maxSize) {
                alert("File size exceeds 1MB. Please choose a smaller file.");
                target.value = ""; // Reset the input
                return;
            }

            // Check if the file is an image
            if (!file.type.startsWith("image/")) {
                alert("Please select an image file.");
                target.value = ""; // Reset the input
                return;
            }

            // Read the image file and display a preview
            const reader = new FileReader();
            reader.onload = () => {
                dispatch({
                    type: "SET_COVER_IMAGE",
                    payload: reader.result as string,
                });
            };
            reader.readAsDataURL(file);
        }
    }

    function handleOnClickDelete() {
        dispatch({ type: "SET_COVER_IMAGE", payload: "" });
    }

    // Renderers
    function renderUploadButton() {
        return (
            <label htmlFor="file" className={style["file-upload"]}>
                <UploadOutlined className={style["upload-icon"]} />
                <span className={style["upload-title"]}>
                    Upload cover image
                </span>
                <span className={style["upload-info"]}>
                    16:9 ratio is recommended. Max image size 1mb
                </span>
                <input
                    onChange={handleOnChange}
                    id="file"
                    type="file"
                    accept="image/*"
                />
            </label>
        );
    }

    function renderPreview() {
        return (
            <div className={style.preview}>
                <img src={state.coverImage} alt="cover image" />
                <button
                    className={style["delete-image"]}
                    onClick={handleOnClickDelete}
                >
                    <DeleteFilled />
                </button>
            </div>
        );
    }

    return (
        <Card title="Upload cover image">
            {state.coverImage ? renderPreview() : renderUploadButton()}
        </Card>
    );
};

export default CoverImage;
