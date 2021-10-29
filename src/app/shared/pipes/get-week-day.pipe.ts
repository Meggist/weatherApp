import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'getWeekDay'
})
export class GetWeekDayPipe implements PipeTransform {
  weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  transform(index: number): string {
    return this.weekDays[index]
  }

}
