import React from "react";
import { shallow, mount } from "enzyme";
import { Link } from "react-router-dom";

import Password from "../Password";
import FormContainer from "../FormContainer";
import Button from "../../../components/Button";
import InputText from "../../../components/InputText";

describe("<Password />", () => {
    it("should render a <FormContainer", () => {
        const wrapper = shallow(<Password />);
        expect(wrapper.find(FormContainer).length).toBe(1);
    });

    it("should render a <span", () => {
        const wrapper = shallow(<Password />);
        expect(wrapper.find("span").length).toBe(1);
    });

    it("should render an InputText", () => {
        const wrapper = shallow(<Password />);
        expect(wrapper.find(InputText).length).toBe(1);
        expect(wrapper.find(InputText).prop("type")).toBe("email");
    });

    it("should render a <Link to signin page", () => {
        const wrapper = shallow(<Password />);
        expect(wrapper.find(Link).prop("to")).toBe("/auth/signin");
    });

    it("should render a <button", () => {
        const wrapper = shallow(<Password />);
        expect(wrapper.find(Button).length).toBe(1);
    });
});
