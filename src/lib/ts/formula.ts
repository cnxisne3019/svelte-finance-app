import * as utils from  '$lib/ts/utils';

// Formula to calculate the Future Value
export function fv(pv: '' | number, i: number, t: number) {
    return (pv || 0) * (1 + utils.convertPercentage(i)) ** t;
}