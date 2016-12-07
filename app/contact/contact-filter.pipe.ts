import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class ContactFilterPipe implements PipeTransform {
    transform(items:any, args:string):any {
        let resultArray:any = [];
        if (args.length === 0) {
            resultArray = items;
        }
        else {
            for (let item of items) {
                if (item.firstname != null && item.firstname.match(new RegExp(''+args, 'i'))) {
                    resultArray.push(item);
                }
            }
        }
        return resultArray;
    }
}
