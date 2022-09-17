import { NextPage } from "next";
import styles from "../../../styles/AddCategory.module.css";
import AddAdminFeatures from "../../../src/hoc/AddAdminFeatures";
import InputField from "../../../src/components/InputField";
import Button from "../../../src/components/Button";
import { useRef, useState } from "react";

const AddCategory: NextPage = () => {
    const [error, setError] = useState("");
    const inputRef: React.LegacyRef<HTMLInputElement> | undefined =
        useRef(null);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const category = e.currentTarget.category.value;
        const imageFile = e.currentTarget.imageFile.value;
        if (category && imageFile) {
            console.log("%c Add_Category", "color: yellow;");
            setError("");
            console.log(category);
            console.log(imageFile);
        } else {
            setError("Category and image are required");
        }
    };
    const imageInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const imageFile = e.currentTarget.value;
        console.log(imageFile);
    };

    const imageButtonHandler = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        console.log(inputRef.current?.click());
    };
    return (
        <div className={styles.container}>
            <h1>Add Category</h1>
            <form className={styles.form} onSubmit={submitHandler}>
                <InputField label="Category: " name="category" />
                <input
                    type="file"
                    name="imageFile"
                    ref={inputRef}
                    onChange={imageInputHandler}
                />
                <p>{error}</p>
                <div className={styles.buttonContainer}>
                    <Button
                        label="Add Image"
                        props={{ onClick: imageButtonHandler }}
                    />
                    <Button label="Preview" />
                    <Button label="Create" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddAdminFeatures(AddCategory);
