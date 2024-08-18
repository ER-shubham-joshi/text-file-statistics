// src/components/__tests__/Loader.test.js
import { render, screen } from '@testing-library/react';
import Loader from '../components/Loader';

test('renders loader', () => {
    render(<Loader />);
    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toHaveClass('loader');
});
