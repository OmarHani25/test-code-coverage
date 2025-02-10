import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import Home from './home';


describe('Home Component', () => {
  it('should render the component and display the text "Hello"', () => {
    render(<Home />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('should not display the text "You should never see this"', () => {
    render(<Home />);
    expect(screen.queryByText('You should never see this')).not.toBeInTheDocument();
  });

  it('should not render the Header component', () => {
    render(<Home />);
    expect(screen.queryByText('Header')).not.toBeInTheDocument();
  });
});