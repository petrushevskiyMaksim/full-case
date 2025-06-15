import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            expected
        );
    });

    test('with mods', () => {
        const expected = 'someClass class1 class2 hovered visibile';
        expect(
            classNames('someClass', { hovered: true, visibile: true }, [
                'class1',
                'class2',
            ])
        ).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(
            classNames('someClass', { hovered: true, visibile: false }, [
                'class1',
                'class2',
            ])
        ).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(
            classNames('someClass', { hovered: true, visibile: undefined }, [
                'class1',
                'class2',
            ])
        ).toBe(expected);
    });
});
