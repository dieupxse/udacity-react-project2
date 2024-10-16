import {render, screen, fireEvent} from '@testing-library/react'
import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { store } from '../app/store';
import '@testing-library/jest-dom'
import App from '../components/App'
describe('App', () => {
    test('will match snapshot',  () => {
        // eslint-disable-next-line testing-library/render-result-naming-convention
        var component = render(
          <Provider store={store}>
            <App/>
        </Provider>
        );
        expect(component).toMatchSnapshot();
    })
})