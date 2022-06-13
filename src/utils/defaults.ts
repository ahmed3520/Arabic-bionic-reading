import isEmpty from './isEmpty.ts';
import omitBy from './omitBy.ts';

export default <T>(origin: Partial<T>, defaultValue: T): T => ({
  ...defaultValue,
  ...omitBy(origin, isEmpty),
});
