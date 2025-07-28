import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import { TextEncoder, TextDecoder } from 'node:util';

global.TextEncoder = TextEncoder;

const decoder = new TextDecoder();
global.TextDecoder = decoder.constructor as typeof global.TextDecoder;

// global.TextDecoder = TextDecoder as typeof global.TextDecoder;
