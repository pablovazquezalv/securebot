import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any[], searchTerm: string, page = 0): any[] {
    if (searchTerm.length === 0)
      return users.slice(page,page + 5)

    searchTerm = searchTerm.toLowerCase();
    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchTerm)
        || user.ap_paterno.toLowerCase().includes(searchTerm)
        || user.ap_materno.toLowerCase().includes(searchTerm)
        || user.email.toLowerCase().includes(searchTerm)
        || user.phone_number.toLowerCase().includes(searchTerm)
        || user.rol.toLowerCase().includes(searchTerm);
    });

    return filteredUsers.slice(page,page + 5)
  }
  
}
