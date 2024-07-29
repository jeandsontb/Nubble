import {stringUtils} from '@utils';

describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of each word', () => {
      expect(stringUtils.capitalizerFirstNames('Ana maria')).toBe('Ana Maria');
      expect(stringUtils.capitalizerFirstNames('ANA MARIA')).toBe('Ana Maria');
      expect(stringUtils.capitalizerFirstNames('Ana MARIA')).toBe('Ana Maria');
      expect(stringUtils.capitalizerFirstNames('ANA maria')).toBe('Ana Maria');
      expect(stringUtils.capitalizerFirstNames('ana maria')).toBe('Ana Maria');
    });

    it('should remove white leading/trailing spaces ', () => {
      expect(stringUtils.capitalizerFirstNames(' ANA MARIA')).toBe('Ana Maria');
      expect(stringUtils.capitalizerFirstNames('Ana MARIA ')).toBe('Ana Maria');
    });
  });
});
