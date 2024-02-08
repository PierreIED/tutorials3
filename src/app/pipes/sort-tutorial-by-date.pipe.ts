import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'sortTutorialByDate',
 standalone:true
})
export class SortTutorialByDatePipe implements PipeTransform {
 transform(tutorials: any[], order: string): any[] {
    console.log(order);
 if (order === 'DESC') {
 return tutorials.sort((a, b) => b.creationDate.getTime() - a.creationDate.getTime());
 } else {
 return tutorials.sort((a, b) => a.creationDate.getTime() - b.creationDate.getTime());
 }
 }
}
