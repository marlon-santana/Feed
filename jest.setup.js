import '@testing-library/jest-dom';

const originalConsoleError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning: /.test(args[0])) {
      return;
    }
    originalConsoleError(...args);
  };
});
