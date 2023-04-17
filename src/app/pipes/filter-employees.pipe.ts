import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEmployees'
})
export class FilterEmployeesPipe implements PipeTransform {

  transform(users: any[], searchTerm: string): any[] {
    if (searchTerm.length === 0)
      return users

    searchTerm = searchTerm.toLowerCase();
    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchTerm)
        || user.ap_paterno.toLowerCase().includes(searchTerm)
        || user.ap_materno.toLowerCase().includes(searchTerm)
        || user.email.toLowerCase().includes(searchTerm)
        || user.phone_number.toLowerCase().includes(searchTerm)
        || `${user.name.toLowerCase()} ${user.ap_paterno.toLowerCase()} ${user.ap_materno.toLowerCase()}`.includes(searchTerm);
    });

    return filteredUsers
  }

}
