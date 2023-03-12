import { render, screen } from '@testing-library/react';
import { WinnerDisplay } from './WinnerDisplay';

const winnerDisplayFactory = async () => {
    const winnerText = 'Red Dragon';
    render(<WinnerDisplay text={winnerText} />)
}

describe('WinnerDisplay', () => {
    winnerDisplayFactory()
    const winnerText = 'Red Dragon';
    it('renders winner text', async () => {
        const winnerElement = screen.getByTestId('winner');
        expect(winnerElement).toBeInTheDocument();
        expect(winnerElement.textContent).toBe(`${winnerText} wins!`);
    })
})