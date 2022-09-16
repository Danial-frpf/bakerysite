import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import ContextLayout from "..";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders correctly without crashing", () => {
    const div = document.createElement("div");
    act(() => {
        createRoot(div!).render(<ContextLayout></ContextLayout>);
    });
});

it("matches snapshot", () => {
    const tree = renderer.create(<ContextLayout></ContextLayout>).toJSON();
    expect(tree).toMatchSnapshot();
});
