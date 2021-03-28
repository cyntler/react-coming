/**
 * @name react-coming
 * @author cyntler <damian@cyntler.com>
 */
export const logError = (message: string) => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  console.error(`react-coming: ${message}`);
};
