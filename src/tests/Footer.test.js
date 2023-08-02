import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the component', () => {
    const { getByRole } = render(<Footer />);
    const linkElement = getByRole('link', { name: /Zohra Neda/i });
    expect(linkElement).toBeInTheDocument();
  });
});
