import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Home } from './index';
import { theme } from '../../theme';
import { ThemeProvider } from 'styled-components';


function setup() {
    const utils = render(
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>);

    return {
        ...utils,
    }
}

test('should show loader', () => {
    const { getByTestId } = setup();
    const isLoader = getByTestId(/main-loader/i);
    expect(isLoader).toBeInTheDocument();
});

test('should show projects', async () => {
    setup()
    const projects = await screen.findByTestId("projects")
    expect(projects).toBeInTheDocument();
});

test('should show all projects', async () => {
    setup()
    const projects = await screen.findByTestId("projects")
    expect(projects.children.length).toBe(11)

});

test('should show switch button', async () => {
    setup()
    const projects = await screen.findByTestId("projects")
    const btnFilter = await screen.findByLabelText("Toggle")
    expect(projects).toBeInTheDocument();
    expect(btnFilter).toBeInTheDocument();
});

test('should show search field', async () => {
    setup()
    const projects = await screen.findByTestId("projects")
    const searchField = await screen.findByPlaceholderText("Search description")
    expect(projects).toBeInTheDocument();
    expect(searchField).toBeInTheDocument();
});

test('should show search results for *Kryptonite*', async () => {
    setup()
    const projects = await screen.findByTestId("projects")
    const searchField = await screen.findByPlaceholderText("Search description")
    expect(projects).toBeInTheDocument();
    expect(searchField).toBeInTheDocument();
    fireEvent.change(searchField, { target: { value: 'Kryptonite' } })
    fireEvent.submit(searchField);
    const searchResult = await screen.findByTestId("projects")
    expect(searchResult.children.length).toBe(2)
});

test('should show search results the same for case insensitivity', async () => {
    setup()
    const projects = await screen.findByTestId("projects")
    const searchField = await screen.findByPlaceholderText("Search description")
    fireEvent.change(searchField, { target: { value: 'Kryptonite' } })
    fireEvent.submit(searchField);
    const searchResultCapitalize = await screen.findByTestId("projects")
    fireEvent.change(searchField, { target: { value: 'kryptonite' } })
    fireEvent.submit(searchField);
    const searchResultLowerCase = await screen.findByTestId("projects")
    expect(searchResultCapitalize.children.length).toEqual(searchResultLowerCase.children.length)
});

test('should show a *Not found* text if no project found', async () => {
    setup()
    const projects = await screen.findByTestId("projects")
    const searchField = await screen.findByPlaceholderText("Search description")
    expect(projects).toBeInTheDocument();
    expect(searchField).toBeInTheDocument();
    fireEvent.change(searchField, { target: { value: '112' } })
    fireEvent.submit(searchField);
    const searchResult = await screen.findByTestId("projects")
    expect(searchResult.children[0]).toHaveTextContent('No project found')
});