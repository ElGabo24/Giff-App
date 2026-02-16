import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CustomHeader } from './CustomHeader'

describe('CustomHeader', () => {

    const title = 'Test Title';

    test('should render the title correctly', () => {
        render(<CustomHeader title={title} />);
        expect(screen.getByText(title)).toBeDefined();
    })

    test('should render the description when provided', () => {
        const descripcion = "Test Descripcion"
        render(<CustomHeader title={title} descripcion={descripcion} />);
        expect(screen.getByText(descripcion)).toBeDefined();
        expect(screen.getByRole('paragraph')).toBeDefined();
        expect(screen.getByRole('paragraph').innerHTML).toBe(descripcion);
    })

    test('should not render description when not provided', () => {
        const { container } = render(<CustomHeader title={title} />);

        const divElement = container.querySelector('.content-center');

        const h1 = divElement?.querySelector('h1');

        expect(h1?.innerHTML).toBe(title);

        const p = divElement?.querySelector('p');
        expect(p).toBeNull();
    })

})