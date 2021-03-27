/**
 * @name react-coming
 * @author cyntler <damian@cyntler.com>
 */
export const injectFont = () => {
  const link = document.createElement('link');
  link.href =
    'https://fonts.googleapis.com/css2?family=Merriweather&amp;amp;subset=latin-ext';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};
