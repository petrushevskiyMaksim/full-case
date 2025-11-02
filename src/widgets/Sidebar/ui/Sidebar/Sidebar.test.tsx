import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/config/tests/componentRender/componentRender';
import { Sidebar } from '../../ui/Sidebar/Sidebar';

jest.mock('./Sidebar.module.scss', () => ({
    __esModule: true,
    collapsed: 'collapsed',
}));

describe('Sidebar', () => {
    test('with only first param', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        // Проверяем, что sidebar изначально не свернут
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
        fireEvent.click(toggleBtn);
        // screen.debug();
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
