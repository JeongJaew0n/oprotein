/* eslint-disable @typescript-eslint/ban-ts-comment */
import dayjs, { type Dayjs, type UnitTypeLong } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import objectSupport from 'dayjs/plugin/objectSupport';
import updateLocale from 'dayjs/plugin/updateLocale';

type DateTimeUnit = Exclude<UnitTypeLong, 'day' | 'millisecond'>;

interface DatetimeObject {
  year?: number;
  month?: number;
  date?: number;
  hour?: number;
  minute?: number;
  second?: number;
}

const isStartOf = <T>(_o: T, c: typeof Dayjs) => {
  /* @ts-ignore */
  c.prototype.isStartOf = function (unit: DateTimeUnit) {
    const startOfUnit = this.startOf(unit);

    return this.isSame(startOfUnit, 'second');
  };
};

const getObject = <T>(_o: T, c: typeof Dayjs) => {
  /* @ts-ignore */
  c.prototype.getObject = function (unit: DateTimeUnit) {
    const result: DatetimeObject = {};

    /* eslint-disable no-fallthrough */
    switch (unit) {
      /* @ts-ignore */
      case 'second':
        result.second = this.second();
      /* @ts-ignore */
      case 'minute':
        result.minute = this.minute();
      /* @ts-ignore */
      case 'hour':
        result.hour = this.hour();
      /* @ts-ignore */
      case 'date':
        result.date = this.date();
      /* @ts-ignore */
      case 'month':
        result.month = this.month();
      default:
        result.year = this.year();
    }

    return (Object.keys(result) as (keyof DatetimeObject)[]).reverse().reduce((acc, key) => {
      acc[key] = result[key];

      return acc;
    }, {} as DatetimeObject);
  };
};

/**
 * dayjs 확장
 * ncui 내부에서 해당 기능을 호출하지만 빌드 후 실행되는 경우 해당 확장 플러그인을 찾지 못하는 문제를 대응하기위한 함수
 * ncui datepicker utils 내부 코드에서 사용되는 코드를 그대로 사용
 */
export function extendDayjs() {
  dayjs.extend(isStartOf);
  dayjs.extend(getObject);
  dayjs.extend(isSameOrAfter);
  dayjs.extend(isSameOrBefore);
  dayjs.extend(objectSupport);
  dayjs.extend(isBetween);
  dayjs.extend(localizedFormat);
  dayjs.extend(updateLocale);
}
