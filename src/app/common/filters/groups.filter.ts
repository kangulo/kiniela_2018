import { Pipe, PipeTransform } from '@angular/core';  
  
@Pipe({  
    name: 'filter'
})  
  
export class GroupsPipe implements PipeTransform {  
    transform(items: any[], filter: string): any {  
        //console.log(filter);
        if (!items || !filter) {  
            return items;  
        }  
        items.forEach(element => {
            //console.log(element.group_name);
        }); 
        
        return items.filter(item => item.group_name.indexOf(filter) !== -1);  
    }  
}  