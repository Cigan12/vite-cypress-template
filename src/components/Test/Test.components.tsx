import React from 'react';
import STestComponent from './Test.module.scss';

interface ITestComponentProps {}

export const TestComponent: React.FC<ITestComponentProps> = () => (
    <h3 className={STestComponent.main}>
        Сайт временно недоступен, ведутся работы.
    </h3>
);
