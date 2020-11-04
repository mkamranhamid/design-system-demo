import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Header } from './index';
import { theme } from '../../theme';
import { mount, shallow } from "enzyme";
import { ThemeProvider } from 'styled-components';

function ThemeProviderWrapper({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

function setup() {
    const utils = render(
        <ThemeProviderWrapper>
            <Header />
        </ThemeProviderWrapper>);

    return {
        ...utils,
    }
}

test('should show filter button', async () => {
    setup()
    const btnFilter = await screen.findByTestId("btn-filter")
    expect(btnFilter).toBeInTheDocument();
});

test('should show filter button', async () => {
    setup()
    const btnFilter = await screen.findByTestId("btn-filter")
    fireEvent.click(btnFilter); // toggle filter button
    const selectFilter = await screen.findByTestId("select-filter")
    expect(selectFilter).toBeInTheDocument();
});