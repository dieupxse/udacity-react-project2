import {render, screen, fireEvent} from '@testing-library/react'
import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { store } from '../app/store';
import '@testing-library/jest-dom'
import HomePage from '../pages/Home';
describe('HomePage', () => {
    test('will match snapshot',  () => {
        // eslint-disable-next-line testing-library/render-result-naming-convention
        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <HomePage/>
                </Provider>
            </MemoryRouter>
        );
        expect(component).toMatchSnapshot();
    })


    test('Categories has showed',  () => {
        // eslint-disable-next-line testing-library/render-result-naming-convention
        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <HomePage/>
                </Provider>
            </MemoryRouter>
        );
        expect(screen.getByText('New Questions')).toBeInTheDocument();
        expect(screen.getByText('Done')).toBeInTheDocument();
    })
})