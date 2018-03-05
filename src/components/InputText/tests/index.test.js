import React from 'react';
import { shallow } from 'enzyme';

import InputText from '../index';

describe('<InputText />', () => {
    let props;
    beforeEach(() => {
        props = {
            hintText: 'Name',
            type: 'text'
        };
    });

    it('should render a div', () => {
        const renderedComponent = shallow(<InputText {...props} />);
        expect(renderedComponent.find('div').length).toBe(1);
    });

    it('should render a input', () => {
        const renderedComponent = shallow(<InputText {...props} />);
        expect(renderedComponent.find('input').length).toBe(1);
    });

    it('should render a label', () => {
        const renderedComponent = shallow(<InputText {...props} />);
        expect(renderedComponent.find('label').length).toBe(1);
    });

    it('should render a span', () => {
        const renderedComponent = shallow(<InputText {...props} />);
        expect(renderedComponent.find('span').length).toBe(1);
    });

    it('setInputDirty function should apply dirty class', () => {
        const renderedComponent = shallow(<InputText {...props} />);
        expect(renderedComponent.find('.dirty').length).toBe(0);
        renderedComponent.find('input').simulate('blur');
        expect(renderedComponent.find('.dirty').length).toBe(1);
    });
});
