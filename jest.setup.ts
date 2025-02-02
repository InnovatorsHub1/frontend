<<<<<<< HEAD
import '@testing-library/jest-dom';
=======
import { TextEncoder, TextDecoder } from 'util';

if (typeof global.TextEncoder === 'undefined') {
    global.TextEncoder = TextEncoder;
}

if (typeof global.TextDecoder === 'undefined') {
    //@ts-ignore
    global.TextDecoder = TextDecoder;
}
>>>>>>> 557de602dcf86f1253a903bb5e1a4624865d0cc0
