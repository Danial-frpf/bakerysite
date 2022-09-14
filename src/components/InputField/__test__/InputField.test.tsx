import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import InputField from "..";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders correctly without crashing", () => {
    const div = document.createElement("div");
    act(() => {
        createRoot(div!).render(
            <InputField label="username" name="username"></InputField>
        );
    });
});

it("renders correctly without crashing", () => {
    const div = document.createElement("div");
    act(() => {
        createRoot(div!).render(
            <InputField label="username" name="username" size="sm"></InputField>
        );
    });
});

it("renders correctly without crashing", () => {
    const div = document.createElement("div");
    act(() => {
        createRoot(div!).render(
            <InputField label="username" name="username" size="lg"></InputField>
        );
    });
});

it("renders InputField correctly", () => {
    const { getByTestId } = render(
        <InputField label="username" name="username"></InputField>
    );
    expect(getByTestId("InputField")).toHaveTextContent("username");
});

it("renders InputField correctly", () => {
    const { getByTestId } = render(
        <InputField label="username" name="username" size="sm"></InputField>
    );
    expect(getByTestId("InputField")).toHaveTextContent("username");
});

it("renders InputField correctly", () => {
    const { getByTestId } = render(
        <InputField label="username" name="username" size="lg"></InputField>
    );
    expect(getByTestId("InputField")).toHaveTextContent("username");
});

it("matches snapshot", () => {
    const tree = renderer
        .create(<InputField label="username" name="username"></InputField>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("matches snapshot", () => {
    const tree = renderer
        .create(
            <InputField label="username" name="username" size="sm"></InputField>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("matches snapshot", () => {
    const tree = renderer
        .create(
            <InputField label="username" name="username" size="lg"></InputField>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
