import React from "react";
import { shallow, mount, render } from "enzyme";

import InputText from "../index";

describe("<InputText />", () => {
    let props;
    beforeEach(() => {
        props = {
            hintText: "Name",
            type: "text",
            onSubmit: function() {}
        };
    });

    it("should render a <div", () => {
        const renderedComponent = shallow(<InputText {...props} />);
        expect(renderedComponent.find("div").length).toBe(1);
    });

    it("should render a <input", () => {
        const renderedComponent = shallow(<InputText {...props} />);
        expect(renderedComponent.find("input").length).toBe(1);
    });

    it("should render a <label", () => {
        const renderedComponent = shallow(<InputText {...props} />);
        expect(renderedComponent.find("label").length).toBe(1);
    });

    it("should render a <span", () => {
        const renderedComponent = shallow(<InputText {...props} />);
        expect(renderedComponent.find("span").length).toBe(1);
    });

    it("onBlur event should apply is-dirty class", () => {
        const renderedComponent = shallow(<InputText {...props} />);
        expect(renderedComponent.find(".is-dirty").length).toBe(0);
        renderedComponent.find("input").simulate("blur");
        expect(renderedComponent.find(".is-dirty").length).toEqual(1);
    });

    it('onChange event should update "value" state', () => {
        const renderedComponent = shallow(<InputText {...props} />);
        renderedComponent.find("input").simulate("change", { target: { value: "hello world" } });
        expect(renderedComponent.state().value).toBe("hello world");
    });

    it("input type equals passworld should have minlength = 6 attr", () => {
        const renderedComponent = shallow(<InputText hintText="Passworld" type="password" />);
        expect(renderedComponent.find("input").prop("minlength") === 6);
    });
});
