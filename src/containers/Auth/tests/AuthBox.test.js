import React from 'react';
import { shallow } from 'enzyme';

import AuthBox from '../AuthBox';

describe('<AuthBox />', () => {
    it('should render a div', () => {
        const renderedComponent = shallow(<AuthBox />);
        expect(renderedComponent.find('div').length).toBe(1);
    });
});
