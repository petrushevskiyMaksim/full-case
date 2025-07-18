type Mods = Record<string, boolean | string>;

export const classNames = (
    cls: string,
    mods: Mods = {},
    additional: string[] = []
): string => {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
};

