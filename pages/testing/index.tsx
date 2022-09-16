import { NextPage } from "next";
import React from "react";
import Button from "../../src/components/Button";
import InputField from "../../src/components/InputField";

const Testing: NextPage = () => {
    return (
        <>
            <Button label="button" size="sm" />
            <Button label="button" />
            <Button label="button" size="lg" />
            <Button label="button" size="xl" />
            <InputField label="User:" name="user" size="sm" />
            <InputField label="User:" name="user" size="md" />
            <InputField label="User:" name="user" size="lg" />
            <InputField label="User:" name="user" size="xl" />
        </>
    );
};

export default Testing;
