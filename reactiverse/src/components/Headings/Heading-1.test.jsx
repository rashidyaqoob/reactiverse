import { render } from '@testing-library/react';
import Heading1 from './Heading-1';

describe('Heading1', () => {
  test('renders heading text', () => {
    const headingText = 'Welcome to the Page';
    const { getByText } = render(<Heading1 heading1_text={headingText} />);
    
    const headingElement = getByText(headingText);
    expect(headingElement).toBeInTheDocument();
  });

  test('applies extra classes correctly', () => {
    const extraClasses = 'custom-class1 custom-class2';
    const { container } = render(
      <Heading1 heading1_text="Heading" extra_heading1_classes={extraClasses} />
    );

    const headingElement = container.querySelector('h1');
    expect(headingElement).toHaveClass(extraClasses);
  });
});
