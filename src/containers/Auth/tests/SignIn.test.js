import React from 'react';
import { shallow } from 'enzyme';

import AuthBox from '../AuthBox';
import SignIn from '../SignIn';
import InputText from '../../../components/InputText';

describe('<SignIn />', () => {
    it('should render a `AuthBox`', () => {
        const renderedComponent = shallow(<SignIn />);
        expect(renderedComponent.find(AuthBox).length).toBe(1);
    });
    it('should render a `InputText`', () => {
        const renderedComponent = shallow(<SignIn />);
        expect(renderedComponent.find(InputText).length).toBe(2);
    });
});
