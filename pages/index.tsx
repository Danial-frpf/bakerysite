import { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Link href="/testing">testing</Link>
            <br />
            <Link href="/login">Login</Link>
            <br />
            <Link href="/admin_panel">admin_panel</Link>
        </div>
    );
};

export default Home;
