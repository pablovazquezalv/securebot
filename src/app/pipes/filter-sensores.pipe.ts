import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSensores'
})
export class FilterSensoresPipe implements PipeTransform {

  transform(users: any[], fecha1: string, fecha2:string): any[] {
    if(fecha2.length === 0)
    {
      fecha1 = fecha1.toLowerCase();
      const filteredUsers = users.filter(user => {
        return user.fecha.toLowerCase().includes(fecha1)
      });

      return filteredUsers
    }
    else
    {
      const filteredUsers = users.filter(user => {
        return user.fecha >= fecha1 && user.fecha <= fecha2;
      });
      console.log(fecha1)
      console.log(fecha2)
      console.log(filteredUsers)
      return filteredUsers
    }
  }

}
