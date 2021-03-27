/**
 * @name react-coming
 * @author cyntler <damian@cyntler.com>
 */
import packageJson from '../../package.json';

const { name, version } = packageJson;

export const logError = (message: string) => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  console.error(`${name}: ${message}`);
};
