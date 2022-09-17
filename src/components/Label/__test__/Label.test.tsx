import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import Label from "..";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders correctly without crashing", () => {
    const div = document.createElement("div");
    act(() => {
        createRoot(div!).render(<Label label="test"></Label>);
    });
});

it("renders correctly without crashing", () => {
    const div = document.createElement("div");
    act(() => {
        createRoot(div!).render(<Label label="test" size="sm"></Label>);
    });
});

it("renders correctly without crashing", () => {
    const div = document.createElement("div");
    act(() => {
        createRoot(div!).render(<Label label="test" size="lg"></Label>);
    });
});

it("renders correctly without crashing", () => {
    const div = document.createElement("div");
    act(() => {
        createRoot(div!).render(<Label label="test" size="xl"></Label>);
    });
});

it("renders Label correctly", () => {
    const { getByTestId } = render(<Label label="test"></Label>);
    expect(getByTestId("Label")).toHaveTextContent("test");
});

it("renders Label correctly", () => {
    const { getByTestId } = render(<Label label="test" size="sm"></Label>);
    expect(getByTestId("Label")).toHaveTextContent("test");
});

it("renders Label correctly", () => {
    const { getByTestId } = render(<Label label="test" size="lg"></Label>);
    expect(getByTestId("Label")).toHaveTextContent("test");
});

it("renders Label correctly", () => {
    const { getByTestId } = render(<Label label="test" size="xl"></Label>);
    expect(getByTestId("Label")).toHaveTextContent("test");
});

it("matches snapshot", () => {
    const tree = renderer.create(<Label label="test"></Label>).toJSON();
    expect(tree).toMatchSnapshot();
});

it("matches snapshot", () => {
    const tree = renderer
        .create(<Label label="test" size="sm"></Label>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("matches snapshot", () => {
    const tree = renderer
        .create(<Label label="test" size="lg"></Label>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("matches snapshot", () => {
    const tree = renderer
        .create(<Label label="test" size="xl"></Label>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
