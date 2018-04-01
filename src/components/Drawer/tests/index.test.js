import React from "react";
import { shallow } from "enzyme";

import Drawer from "../index";

describe("<Drawer />", () => {
    it("should render two <div", () => {
        const wrapper = shallow(<Drawer drawerVisible={false} />);
        expect(wrapper.find("div").length).toBe(2);
    });

    it("should render a drawer div with no width if drawerVisible propety if false", () => {
        const wrapper = shallow(<Drawer drawerVisible={false} />);
        expect(
            wrapper
                .find("div")
                .first()
                .prop("style")
        ).toHaveProperty("width", "0");
    });

    it("should render a drawer div with 70% width if drawerVisible propety if true", () => {
        const wrapper = shallow(<Drawer drawerVisible={true} />);
        expect(
            wrapper
                .find("div")
                .first()
                .prop("style")
        ).toHaveProperty("width", "70%");
    });
});
