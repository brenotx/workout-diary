import React from "react";
import { shallow } from "enzyme";

import AppBar from "../index";

describe("<AppBar />", () => {
    it("should render two <AppBar", () => {
        const wrapper = shallow(<AppBar />);
        expect(wrapper.find("nav").length).toBe(1);
    });

    it("should render its text", () => {
        const children = "Text";
        const wrapper = shallow(<AppBar>{children}</AppBar>);
        expect(wrapper.contains(children)).toBe(true);
    });
});
