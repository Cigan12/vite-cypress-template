import React from 'react';
import { mount } from '@cypress/react';
import { TestComponent } from './Test.components';

it('renders learn react link', () => {
    mount(<TestComponent />);
    cy.get('h3').contains('Сайт временно недоступен, ведутся работы.');
});
