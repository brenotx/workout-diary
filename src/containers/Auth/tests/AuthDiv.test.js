import React from "react";
import { shallow } from "enzyme";

import AuthDiv from "../AuthDiv";

describe("<AuthDiv />", () => {
    it("should render a div", () => {
        const renderedComponent = shallow(<AuthDiv />);
        expect(renderedComponent.find("div").length).toBe(1);
    });
});
