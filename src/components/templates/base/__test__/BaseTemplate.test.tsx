import ReactDOM from "react-dom";
import BaseTemplate from "..";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Base } from "../BaseTemplate.stories";

afterEach(cleanup);
it("Renders correctly without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BaseTemplate sampleTextProp="nothing"></BaseTemplate>,
        div
    );
});

it("renders BaseTemplate correctly", () => {
    const { getByTestId } = render(
        <BaseTemplate sampleTextProp="things"></BaseTemplate>
    );
    expect(getByTestId("BaseTemplate")).toHaveTextContent("things");
});

it("matches snapshot", () => {
    const tree = renderer
        .create(<BaseTemplate sampleTextProp="test"></BaseTemplate>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
