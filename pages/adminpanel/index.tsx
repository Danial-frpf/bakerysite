import Link from "next/link";
import Router from "next/router";
import { useContext } from "react";
import { isValidAdmin } from "../../lib/auth/admin";
import { AdminContext } from "../../src/context";
import ContextLayout from "../../src/layouts/ContextLayout";
import styles from "../../styles/AdminPanel.module.css";
import { NextPageWithLayout } from "../page";

const AdminPanel: NextPageWithLayout = () => {
    const adminContext = useContext(AdminContext);
    if (!isValidAdmin(adminContext?.jwtAdmin)) Router.push("/login");

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

AdminPanel.getLayout = (page) => {
    return <ContextLayout>{page}</ContextLayout>;
};
