import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSensoresHora'
})
export class FilterSensoresHoraPipe implements PipeTransform {

  transform(users: any[], start: string, end:string): any[] {
    if(end.length === 0)
    {
      start = start.toLowerCase();
      const filteredUsers = users.filter(user => {
        return user.hora.toLowerCase().includes(start)
      });
      return filteredUsers
    }
    else
    {
      const filteredUsers = users.filter(user => {
        return user.hora >= start && user.hora <= end;
      });
      console.log(filteredUsers)
      return filteredUsers
    }
  }

}
