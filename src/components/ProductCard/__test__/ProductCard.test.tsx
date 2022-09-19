import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import ProductCard from "..";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders correctly without crashing", () => {
    const div = document.createElement("div");
    act(() => {
        createRoot(div!).render(
            <ProductCard label="test" image="/cupcake.png"></ProductCard>
        );
    });
});

it("renders ProductCard correctly", () => {
    const { getByTestId } = render(
        <ProductCard label="test" image="/cupcake.png"></ProductCard>
    );
    expect(getByTestId("ProductCard")).toHaveTextContent("test");
});

it("matches snapshot", () => {
    const tree = renderer
        .create(<ProductCard label="test" image="/cupcake.png"></ProductCard>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
