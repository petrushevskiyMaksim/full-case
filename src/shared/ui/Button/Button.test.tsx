import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

jest.mock('./Button.module.scss', () => ({
    __esModule: true,
    Button: 'Button',
    clear: 'clear',
}));

describe('Button', () => {
    test('test render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('test clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        screen.debug();
        expect(screen.getByText('Test')).toHaveClass('clear Button');
    });
});
