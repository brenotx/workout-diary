import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";

import FormContainer from "../FormContainer";
import SignUp from "../SignUp";
import InputText from "../../../components/InputText";
import Button from "../../../components/Button";

describe("<SignUp />", () => {
    it("should render a `FormContainer`", () => {
        const renderedComponent = shallow(<SignUp />);
        expect(renderedComponent.find(FormContainer).length).toBe(1);
    });

    it("should render two `InputText`", () => {
        const renderedComponent = shallow(<SignUp />);
        expect(renderedComponent.find(InputText).length).toBe(2);
    });

    it("should render a <Link to signin page", () => {
        const wrapper = shallow(<SignUp />);
        expect(wrapper.find(Link).prop("to")).toBe("/auth/signin");
    });

    it("should render a `Button`", () => {
        const renderedComponent = shallow(<SignUp />);
        expect(renderedComponent.find(Button).length).toBe(1);
    });
});
