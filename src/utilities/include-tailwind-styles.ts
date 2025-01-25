export default function includeTailwindCSS(
    parent: HTMLElement | ShadowRoot,
) {
    const tailwindStyles =
        document.querySelector('style[data-vite-dev-id]') ||
        document.querySelector('style[data-tailwind]') ||
        document.querySelector('style');

    if (tailwindStyles) {
        // appending a cloned copy of TW styles to the shadowDOM
        const styleClone = tailwindStyles.cloneNode(
            true,
        ) as HTMLStyleElement;
        parent.appendChild(styleClone);
    } else {
        console.error(
            'WHOOPS! no tailwind styles here! - SkinnyHeader error',
        );
    }
}
