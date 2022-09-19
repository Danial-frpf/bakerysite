import { NextPage } from "next";
import styles from "../../../styles/AddCategory.module.css";
import AddAdminFeatures from "../../../src/hoc/AddAdminFeatures";
import InputField from "../../../src/components/InputField";
import Button from "../../../src/components/Button";
import { useRef, useState } from "react";
import getBase64 from "../../../lib/helpers/base64Converter";
import createCategory from "../../../lib/axios/createCategory";

const AddCategory: NextPage = () => {
    // Page states for errors and category image
    const [error, setError] = useState("");
    const [image, setImage] = useState<string | ArrayBuffer | null>();
    const [loading, setLoading] = useState(false);

    // Page refs
    // To handle the opening of file browser to select image
    // through a button
    const inputRef: React.LegacyRef<HTMLInputElement> | undefined =
        useRef(null);

    // Handlers
    // Form submit handler
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        const category = e.currentTarget.category.value;
        if (category && image) {
            try {
                const { message } = await createCategory(category, image);
                setError(message);
            } catch (e) {
                setError("Network Error");
            }
        } else {
            setError("Category and image are required");
        }
        setLoading(false);
    };

    // Handle code when user add or changes the image
    const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const imageFile = e.currentTarget.files![0];
        getBase64(imageFile, setImage);
    };

    // Opens image selection browser when add image button is pressed
    const imageButtonHandler = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        inputRef.current?.click();
    };

    // Page jsx
    return (
        <div className={styles.container}>
            <h1>Add Category</h1>
            <form className={styles.form} onSubmit={submitHandler}>
                <InputField label="Category: " name="category" />
                <input
                    type="file"
                    name="imageFile"
                    ref={inputRef}
                    onChange={imageChangeHandler}
                />
                <p>{error}</p>
                <div className={styles.buttonContainer}>
                    <Button
                        label="Add Image"
                        props={{ onClick: imageButtonHandler }}
                    />
                    <Button label="Preview" />
                    {loading ? (
                        <Button label="Processing..." />
                    ) : (
                        <Button label="Create" type="submit" />
                    )}
                </div>
            </form>
        </div>
    );
};

export default AddAdminFeatures(AddCategory);
