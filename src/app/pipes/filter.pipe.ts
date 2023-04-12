import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any[], searchTerm: string, allUsers: any[], desde = 0, hasta = 0): any[] {
    if(searchTerm === "" || searchTerm.length < 3) return users
    if (!users) {
      return [];
    }
    if (!searchTerm) {
      return users;
    }
    searchTerm = searchTerm.toLowerCase();
    return allUsers.filter(user => {
      return user.name.toLowerCase().includes(searchTerm)
        || user.ap_paterno.toLowerCase().includes(searchTerm)
        || user.ap_materno.toLowerCase().includes(searchTerm)
        || user.email.toLowerCase().includes(searchTerm)
        || user.phone_number.toLowerCase().includes(searchTerm)
        || user.rol.toLowerCase().includes(searchTerm);
    });
  }
}
