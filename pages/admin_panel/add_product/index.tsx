import { NextPage } from "next";
import styles from "../../../styles/AddProduct.module.css";
import AddAdminFeatures from "../../../src/hoc/AddAdminFeatures";
import InputField from "../../../src/components/InputField";
import Button from "../../../src/components/Button";
import { useRef, useState } from "react";
import getBase64 from "../../../lib/helpers/base64Converter";
import TextField from "../../../src/components/TextField";
import createProduct from "../../../lib/axios/createProduct";

const AddProduct: NextPage = () => {
    const [image, setImage] = useState<string | ArrayBuffer | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Page refs
    // To handle the opening of file browser to select image
    // through a button
    const inputRef: React.LegacyRef<HTMLInputElement> | undefined =
        useRef(null);

    // Handlers
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        const name = e.currentTarget.productName.value;
        const category = e.currentTarget.category.value;
        const info = e.currentTarget.info.value;
        const about = e.currentTarget.about.value;
        if (name && category && info && about) {
            if (image) {
                const { message } = await createProduct(
                    name,
                    category,
                    info,
                    about,
                    image
                );
                setError(message);
            } else {
                setError("Image is required");
            }
        } else {
            setError("Please fill all the fields");
        }
        setLoading(false);
    };

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

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Add Product</h1>
            <form className={styles.form} onSubmit={submitHandler}>
                <InputField label="Name: " name="productName" />
                <InputField label="Category: " name="category" />
                <TextField label="Info Section: " name="info" rows={2} />
                <TextField label="About Section: " name="about" rows={16} />
                <input
                    ref={inputRef}
                    type="file"
                    name="imageFile"
                    onChange={imageChangeHandler}
                />
                <p className={styles.error}>{error}</p>
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

export default AddAdminFeatures(AddProduct);
