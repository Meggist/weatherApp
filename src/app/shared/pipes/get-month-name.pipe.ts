import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getMonthName'
})
export class GetMonthNamePipe implements PipeTransform {
  monthNames: string[] = ["January","February","March","April","May","June","July",
  "August","September","October","November","December"]

  transform(index: number): string {
    return this.monthNames[index]
  }

}
