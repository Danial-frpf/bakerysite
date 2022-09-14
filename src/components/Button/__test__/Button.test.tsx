import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import Button from "..";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders correctly without crashing", () => {
    const div = document.createElement("div");
    act(() => {
        createRoot(div!).render(<Button label="Button"></Button>);
    });
});

it("renders correctly without crashing", () => {
    const div = document.createElement("div");
    act(() => {
        createRoot(div!).render(<Button label="Button" size="lg"></Button>);
    });
});

it("renders correctly without crashing", () => {
    const div = document.createElement("div");
    act(() => {
        createRoot(div!).render(<Button label="Button" size="sm"></Button>);
    });
});

it("renders Button correctly", () => {
    const { getByTestId } = render(<Button label="Button"></Button>);
    expect(getByTestId("Button")).toHaveTextContent("Button");
});

it("renders Button correctly", () => {
    const { getByTestId } = render(<Button label="Button" size="lg"></Button>);
    expect(getByTestId("Button")).toHaveTextContent("Button");
});

it("renders Button correctly", () => {
    const { getByTestId } = render(<Button label="Button" size="sm"></Button>);
    expect(getByTestId("Button")).toHaveTextContent("Button");
});

it("matches snapshot", () => {
    const tree = renderer.create(<Button label="Button"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
});

it("matches snapshot", () => {
    const tree = renderer
        .create(<Button label="Button" size="lg"></Button>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("matches snapshot", () => {
    const tree = renderer
        .create(<Button label="Button" size="sm"></Button>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
