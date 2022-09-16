import { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/AdminPanel.module.css";

const AdminPanel: NextPage = () => {
    return (
        <div className={styles.container}>
            <h1>Admin Panel</h1>
            <div className={styles.panel}>
                <Link href="/adminpanel">
                    <a>Add Category</a>
                </Link>
                <Link href="/adminpanel">
                    <a>Add Product</a>
                </Link>
                <Link href="/adminpanel">
                    <a>Update Category</a>
                </Link>
                <Link href="/adminpanel">
                    <a>Update Product</a>
                </Link>
            </div>
        </div>
    );
};

export default AdminPanel;
