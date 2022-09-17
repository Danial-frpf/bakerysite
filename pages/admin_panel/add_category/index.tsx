import { NextPage } from "next";
import styles from "../../../styles/AddCategory.module.css";
import AddAdminFeatures from "../../../src/hoc/AddAdminFeatures";
import InputField from "../../../src/components/InputField";
import Button from "../../../src/components/Button";
import { useRef } from "react";

const AddCategory: NextPage = () => {
    const inputRef: React.LegacyRef<HTMLInputElement> | undefined =
        useRef(null);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const category = e.currentTarget.category.value;
        console.log("%c Add_Category", "color: yellow;");
        console.log(category);
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
            <form className={styles.form} onSubmit={submitHandler}>
                <InputField label="Category Name: " name="category" />
                <input
                    type="file"
                    name="imageFile"
                    ref={inputRef}
                    onChange={imageInputHandler}
                />
                <Button
                    label="Add Image"
                    size="md"
                    props={{ onClick: imageButtonHandler }}
                />
                <Button label="Create Category" size="md" type="submit" />
            </form>
        </div>
    );
};

export default AddAdminFeatures(AddCategory);
