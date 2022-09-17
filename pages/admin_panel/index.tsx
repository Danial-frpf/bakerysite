import { NextPage } from "next";
import Link from "next/link";
import AddAdminFeatures from "../../src/hoc/AddAdminFeatures";
import styles from "../../styles/AdminPanel.module.css";

const AdminPanel: NextPage = () => {
    return (
        <div className={styles.container}>
            <h1>Admin Panel</h1>
            <div className={styles.panel}>
                <Link href="admin_panel/add_category">
                    <a>Add Category</a>
                </Link>
                <Link href="admin_panel/add_product">
                    <a>Add Product</a>
                </Link>
                <Link href="admin_panel/update_category">
                    <a>Update Category</a>
                </Link>
                <Link href="admin_panel/update_product">
                    <a>Update Product</a>
                </Link>
            </div>
        </div>
    );
};

export default AddAdminFeatures(AdminPanel);
