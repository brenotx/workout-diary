import React from "react";
import { shallow } from "enzyme";

import Button from "../index";

describe("<Button />", () => {
    it("should render a <button", () => {
        const wrapper = shallow(<Button />);
        const button = wrapper.find("button");
        expect(button.length).toBe(1);
    });

    it("clicks events should change isClicked state value", () => {
        const wrapper = shallow(<Button />);
        const button = wrapper.find("button");
        button.simulate("mouseDown");
        expect(wrapper.state().isClicked).toBe(true);
    });

    it("clicks events should change isClicked state value", () => {
        const wrapper = shallow(<Button />);
        const button = wrapper.find("button");
        button.simulate("mouseDown");
        expect(wrapper.state().isClicked).toBe(true);
        button.simulate("mouseUp");
        expect(wrapper.state().isClicked).toBe(false);
    });
});
