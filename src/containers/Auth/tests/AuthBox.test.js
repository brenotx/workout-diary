import React from 'react';
import { shallow } from 'enzyme';

// import expect from 'expect';
// import enzymify from 'expect-enzyme';
// expect.extend(enzymify());

import AuthBox from '../AuthBox';

describe('<AuthBox />', () => {
    it('should render a prop', () => {
        const id = 'testId';
        const renderedComponent = shallow(<AuthBox id={id} />);
        expect(renderedComponent.prop('id')).toEqual(id);
    });

    it('should render its text', () => {
        const children = 'Text';
        const renderedComponent = shallow(<AuthBox>{children}</AuthBox>);
        expect(renderedComponent.contains(children)).toBe(true);
    });
});
