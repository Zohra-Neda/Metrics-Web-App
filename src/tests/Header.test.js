import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the component', () => {
    const { getByText } = render(<Header />);
    const headerElement = getByText('Crypto currency');
    expect(headerElement).toBeInTheDocument();
  });
});