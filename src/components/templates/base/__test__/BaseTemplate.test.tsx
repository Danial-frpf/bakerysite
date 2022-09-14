import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import BaseTemplate from "..";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders correctly without crashing", () => {
    const div = document.createElement("div");
    act(() => {
        createRoot(div!).render(
            <BaseTemplate sampleTextProp="test"></BaseTemplate>
        );
    });
});

it("renders BaseTemplate correctly", () => {
    const { getByTestId } = render(
        <BaseTemplate sampleTextProp="test"></BaseTemplate>
    );
    expect(getByTestId("BaseTemplate")).toHaveTextContent("test");
});

it("matches snapshot", () => {
    const tree = renderer
        .create(<BaseTemplate sampleTextProp="test"></BaseTemplate>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
