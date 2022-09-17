import { NextPage } from "next";
import styles from "../../../styles/AddProduct.module.css";
import AddAdminFeatures from "../../../src/hoc/AddAdminFeatures";
import InputField from "../../../src/components/InputField";
import Button from "../../../src/components/Button";

const AddProduct: NextPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Add Product</h1>
            <form className={styles.form}>
                <InputField label="Name: " name="productName" />
                <InputField label="Category: " name="category" />
                <h3>Info Section</h3>
                <textarea name="info" rows={2}></textarea>
                <h3>About Section</h3>
                <textarea name="about" rows={16}></textarea>
                <input type="file" name="imageFile" />
            </form>
            <div className={styles.buttonContainer}>
                <Button label="Add Image" />
                <Button label="Preview" />
                <Button label="Create" type="submit" />
            </div>
        </div>
    );
};

export default AddAdminFeatures(AddProduct);
