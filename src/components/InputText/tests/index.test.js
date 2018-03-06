import React from 'react';
import { shallow, mount, render } from 'enzyme';

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

    // it('should validade email', () => {
    //     const wrapper = shallow(<InputText {...props} />);
    //     const input = wrapper.find('input');
    //     // console.log('@@@: ' + JSON.stringify(input.get(0)));
    //     input.simulate('change', { target: { value: 'Hello' } });
    //     expect(wrapper.state('isValid')).toEqual('blah@gmail.');
    //     // wrapper.setState({ value: 'bar' });
    //     // console.log('@@@@@: ' + JSON.stringify(input.get(0)));
    //     // input.get(0).props.value = 'oioioi';
    //     // input.simulate('change', { target: { value: 'Changed' } });
    //     // console.log('#####: ' + JSON.stringify(input.get(0)));
    //     // expect(input.get(0).value).toBe('Hello');

    //     // expect(wrapper.find('input').value).toBe(undefined);
    //     // wrapper.find('input').instance().value = 'abc';
    //     // wrapper.find('input').instance().value = 'abc';
    //     expect(wrapper.find('.invalid').length).toBe(1);
    // });
});
