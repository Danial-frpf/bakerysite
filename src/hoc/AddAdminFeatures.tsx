import { NextPage } from "next";
import Router from "next/router";
import { useContext, useEffect } from "react";
import { isValidAdmin } from "../../lib/auth/admin";
import { NextPageWithLayout } from "../../pages/page";
import { AdminContext } from "../context";
import ContextLayout from "../layouts/ContextLayout";

const AddAdminFeatures = (OriginalPage: NextPage) => {
    const NewComponent: NextPageWithLayout = (props) => {
        const adminContext = useContext(AdminContext);
        useEffect(() => {
            if (!isValidAdmin(adminContext?.jwtAdmin)) Router.push("/login");
        }, [adminContext]);
        return <OriginalPage {...props} />;
    };

    NewComponent.getLayout = (page) => {
        return <ContextLayout>{page}</ContextLayout>;
    };

    return NewComponent;
};

export default AddAdminFeatures;
