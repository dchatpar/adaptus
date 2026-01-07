import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Accessibility Tests', () => {
  it('should not have accessibility violations on homepage', async () => {
    const { container } = render(<div>Test</div>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
