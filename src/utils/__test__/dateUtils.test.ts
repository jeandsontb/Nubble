import {dateUtils} from '@utils';
import {add, Duration, formatISO, sub} from 'date-fns';

const MOCKED_NOW = 1696573824333;

function getDataISO(duration: Duration, op?: 'sub' | 'add') {
  op = op || 'sub';
  const time =
    op === 'sub' ? sub(Date.now(), duration) : add(Date.now(), duration);
  const timeISO = formatISO(time);

  return dateUtils.formateRelative(timeISO);
}

describe('dateUtils', () => {
  describe('formateRelative', () => {
    beforeAll(() => {
      jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it('should be displayed in seconds if less than 1 minute ago', () => {
      expect(getDataISO({seconds: 30})).toBe('30 s');
    });

    it('should be displayed in minutes if less than 1 hour ago', () => {
      expect(getDataISO({minutes: 20})).toBe('20 m');
    });

    it('should be displayed in hours if less than 1 day ago', () => {
      expect(getDataISO({hours: 15})).toBe('15 h');
    });

    it('should be displayed in days if less than 7 day ago', () => {
      expect(getDataISO({days: 5})).toBe('5 d');
    });

    it('should be displayed in weeks if less than 4 weeks ago', () => {
      expect(getDataISO({weeks: 3, hours: 2})).toBe('3 sem');
    });

    it('should be displayed in months if less than 12 month ago', () => {
      expect(getDataISO({months: 10})).toBe('10 mes');
    });

    it('should be displayed in dd/MM/yyyy if less than 12 months ago', () => {
      expect(getDataISO({months: 13})).toBe('06/09/2022');
    });

    it('should be displayed in dd/MM/yyyy if future to date', () => {
      expect(getDataISO({days: 2}, 'add')).toBe('08/10/2023');
    });
  });
});
