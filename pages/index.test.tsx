import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/index';

describe('Home Component', () => {
  it('should render the landing page', () => {
    render(<Home />);
    expect(screen.getByTestId('landing_page')).toBeInTheDocument();
  });

  it('should display the correct title', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to the TypeScript Next.js Cypress example.')).toBeInTheDocument();
  });

  it('should have a link to the about page', () => {
    render(<Home />);
    expect(screen.getByTestId('about_page_link')).toBeInTheDocument();
    expect(screen.getByTestId('about_page_link')).toHaveAttribute('href', '/about');
  });
});