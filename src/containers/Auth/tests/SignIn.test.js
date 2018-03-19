import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";

import FormContainer from "../FormContainer";
import SignIn from "../SignIn";
import InputText from "../../../components/InputText";
import Button from "../../../components/Button";
import ForgotLink from "../ForgotLink";

describe("<SignIn />", () => {
    it("should render a `FormContainer`", () => {
        const renderedComponent = shallow(<SignIn />);
        expect(renderedComponent.find(FormContainer).length).toBe(1);
    });

    it("should render two `InputText`", () => {
        const renderedComponent = shallow(<SignIn />);
        expect(renderedComponent.find(InputText).length).toBe(2);
    });

    it("should render a `ForgotLink`", () => {
        const renderedComponent = shallow(<SignIn />);
        expect(renderedComponent.find(ForgotLink).length).toBe(1);
    });

    it("should render a <Link to password page", () => {
        const wrapper = shallow(<SignIn />);
        expect(
            wrapper
                .find(Link)
                .first()
                .prop("to")
        ).toBe("/auth/password");
    });

    it("should render a `Button`", () => {
        const renderedComponent = shallow(<SignIn />);
        expect(renderedComponent.find(Button).length).toBe(1);
    });

    it("should render a <span with a <Link to the signup page", () => {
        const wrapper = shallow(<SignIn />);
        expect(wrapper.find("span").length).toBe(1);
        expect(
            wrapper
                .find(Link)
                .at(1)
                .prop("to")
        ).toBe("/auth/signup");
    });
});
