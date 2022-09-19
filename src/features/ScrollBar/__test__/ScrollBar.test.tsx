import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import ScrollBar from "..";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders correctly without crashing", () => {
    const div = document.createElement("div");
    act(() => {
        createRoot(div!).render(<ScrollBar sampleTextProp="test"></ScrollBar>);
    });
});

it("renders ScrollBar correctly", () => {
    const { getByTestId } = render(
        <ScrollBar sampleTextProp="test"></ScrollBar>
    );
    expect(getByTestId("ScrollBar")).toHaveTextContent("test");
});

it("matches snapshot", () => {
    const tree = renderer
        .create(<ScrollBar sampleTextProp="test"></ScrollBar>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
