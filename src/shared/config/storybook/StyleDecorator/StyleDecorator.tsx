import type { Decorator } from '@storybook/react-webpack5';
import 'app/styles/index.scss'; // Импорт глобальных стилей

const StyleDecorator: Decorator = (Story) => {
    // Динамически добавляем стили с переменными
    const style = document.createElement('style');
    style.textContent = `
      :root, .docs-story {
        --primary-color: #2909fe; /* из normal.scss */
      }
    `;
    document.head.appendChild(style);

    return <Story />;
};

export default StyleDecorator;
