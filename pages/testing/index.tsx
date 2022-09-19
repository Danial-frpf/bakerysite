import { NextPage } from "next";
import React from "react";
import ProductCard from "../../src/components/ProductCard";

const Testing: NextPage = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <ProductCard label="test" image="/cupcake.png" size="lg" />
                <ProductCard
                    label="test"
                    image="/cupcake.png"
                    size="lg"
                    selected
                />
                <ProductCard label="test" image="/cupcake.png" size="lg" />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <ProductCard label="test" image="/cupcake.png" size="md" />
                <ProductCard
                    label="test"
                    image="/cupcake.png"
                    size="md"
                    selected
                />
                <ProductCard label="test" image="/cupcake.png" size="md" />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <ProductCard label="test" image="/cupcake.png" size="sm" />
                <ProductCard
                    label="test"
                    image="/cupcake.png"
                    size="sm"
                    selected
                />
                <ProductCard label="test" image="/cupcake.png" size="sm" />
            </div>
        </>
    );
};

export default Testing;
