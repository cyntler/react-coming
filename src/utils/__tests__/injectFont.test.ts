import { injectFont } from '../injectFont';

test('font is not includes in haed before call the util function', () => {
  expect(document.head.innerHTML.includes('Merriweather')).toBeFalsy();
});

test('font should be injected to head after call the util function', () => {
  injectFont();

  expect(document.head.innerHTML.includes('Merriweather')).toBeTruthy();
});
