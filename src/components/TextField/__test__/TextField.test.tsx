import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import TextField from "..";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders correctly without crashing", () => {
    const div = document.createElement("div");
    act(() => {
        createRoot(div!).render(
            <TextField label="test" name="test"></TextField>
        );
    });
});

it("renders TextField correctly", () => {
    const { getByTestId } = render(
        <TextField label="test" name="test"></TextField>
    );
    expect(getByTestId("TextField")).toHaveTextContent("test");
});

it("matches snapshot", () => {
    const tree = renderer
        .create(<TextField label="test" name="test"></TextField>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
