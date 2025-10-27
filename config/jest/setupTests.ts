import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

// Установил "заменитель" fetch для тестов(тестовая среда это серверная среда fetch там нету)
// Это как скачать эмулятор функции fetch для Node.js
// "Включил" этот эмулятор в тестах
import 'whatwg-fetch';

import { TextEncoder, TextDecoder } from 'node:util';

global.TextEncoder = TextEncoder;

const decoder = new TextDecoder();
global.TextDecoder = decoder.constructor as typeof global.TextDecoder;

// global.TextDecoder = TextDecoder as typeof global.TextDecoder;
