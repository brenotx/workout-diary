import React from "react";
import { shallow } from "enzyme";

import Home, { Container } from "../index";
import Appbar from "../../../components/AppBar";
import Drawer from "../../../components/Drawer";
import H2 from "../../../components/H2";

describe("<Home />", () => {
    let props;
    beforeEach(() => {
        props = {
            drawerVisible: false
        };
    });

    it("should render a <Container />", () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find(Container).length).toBe(1);
    });

    it("should render a <AppBar />", () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find(Appbar).length).toBe(1);
    });

    describe("<AppBar />", () => {
        it("should render a <div>", () => {
            const wrapper = shallow(<Home />);
            expect(wrapper.find("img").length).toBe(1);
        });

        it('onClick event on the <img> should toggle "drawerVisible" state', () => {
            const wrapper = shallow(<Home />);
            wrapper.find("img").simulate("click", { target: { drawerVisible: true } });
            expect(wrapper.state().drawerVisible).toBe(true);
            wrapper.find("img").simulate("click", { target: { drawerVisible: false } });
            expect(wrapper.state().drawerVisible).toBe(false);
        });

        it("should render a <H2>", () => {
            const title = "Workout Diary";
            const wrapper = shallow(<Home />);
            expect(wrapper.find(H2).length).toBe(1);
            expect(wrapper.find(H2).contains(title)).toBe(true);
        });
    });

    it("should render a <Drawer />", () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find(Drawer).length).toBe(1);
    });

    it("should render a <div>", () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find("div").length).toBe(1);
    });

    it('onClick event on the <div> should change "drawerVisible" state to false', () => {
        const wrapper = shallow(<Home />);
        props = { drawerVisible: true };
        wrapper.find("div").simulate("click");
        expect(wrapper.state().drawerVisible).toBe(false);
    });
});
