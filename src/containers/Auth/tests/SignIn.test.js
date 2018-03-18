import React from "react";
import { shallow } from "enzyme";

import FormContainer from "../FormContainer";
import SignIn from "../SignIn";
import InputText from "../../../components/InputText";
import Button from "../../../components/Button";

describe("<SignIn />", () => {
    it("should render a `FormContainer`", () => {
        const renderedComponent = shallow(<SignIn />);
        expect(renderedComponent.find(FormContainer).length).toBe(1);
    });
    it("should render two `InputText`", () => {
        const renderedComponent = shallow(<SignIn />);
        expect(renderedComponent.find(InputText).length).toBe(2);
    });
    it("should render a `Button`", () => {
        const renderedComponent = shallow(<SignIn />);
        expect(renderedComponent.find(Button).length).toBe(1);
    });
});
