import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort',
})
export class SortPipe implements PipeTransform {
    transform(value: any[], args: string): any[] {
        if (value) {
            return value.sort((a: any[], b: any[]) => {
                if (a[args] < b[args]) {
                    return -1;
                } else if (b[args] < a[args]) {
                    return 1;
                }
                return 0;
            });
        }
        return [];
    }
}

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;

        return items.filter((item) => {
            return Object.keys(item).some((key) => {
                return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
            });
        });
    }
}

@Pipe({
    name: 'niceDateFormatPipe',
})
export class niceDateFormatPipe implements PipeTransform {
    transform(value: any) {
        var _value = Number(value);

        var dif = Math.floor((Date.now() - _value) / 1000 / 86400);

        if (dif < 30) {
            return convertToNiceDate(value);
        } else {
            var datePipe = new DatePipe('en-US');
            value = datePipe.transform(value, 'MMM-dd-yyyy');
            return value;
        }
    }
}

function convertToNiceDate(time: any) {
    var date = new Date(time),
        diff = (new Date().getTime() - date.getTime()) / 1000,
        daydiff = Math.floor(diff / 86400);

    if (isNaN(daydiff) || daydiff < 0 || daydiff >= 31)
        return (
            (Math.abs(daydiff) == 1 && 'Tomorrow') || (Math.abs(daydiff) > 1 && Math.abs(daydiff) + ' days from now')
        );

    return (
        (daydiff == 0 && 'Today') ||
        (daydiff == 1 && 'Yesterday') ||
        (daydiff < 7 && daydiff + ' days ago') ||
        (daydiff < 31 && Math.ceil(daydiff / 7) + ' week(s) ago')
    );
}
