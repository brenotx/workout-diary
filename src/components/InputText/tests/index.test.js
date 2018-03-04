import React from 'react';
import { shallow } from 'enzyme';

import InputText from '../index';

describe('<InputText />', () => {
    it('should render a div', () => {
        const renderedComponent = shallow(<InputText />);
        expect(renderedComponent.find('div').length).toBe(1);
    });

    it('should render a input', () => {
        const renderedComponent = shallow(<InputText />);
        expect(renderedComponent.find('input').length).toBe(1);
    });

    it('should render a label', () => {
        const renderedComponent = shallow(<InputText />);
        expect(renderedComponent.find('label').length).toBe(1);
    });

    it('should render a span', () => {
        const renderedComponent = shallow(<InputText />);
        expect(renderedComponent.find('span').length).toBe(1);
    });
});
