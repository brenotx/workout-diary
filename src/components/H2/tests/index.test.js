import React from "react";
import { shallow } from "enzyme";

import H2 from "../index";

describe("<H2 />", () => {
    it("should render two <h2", () => {
        const wrapper = shallow(<H2 />);
        expect(wrapper.find("h2").length).toBe(1);
    });

    it("should render its text", () => {
        const children = "Text";
        const renderedComponent = shallow(<H2>{children}</H2>);
        expect(renderedComponent.contains(children)).toBe(true);
    });
});
