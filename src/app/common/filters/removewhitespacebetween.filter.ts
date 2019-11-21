import { Pipe, PipeTransform } from '@angular/core';  
  
@Pipe({  
    name: 'remove_space_between'
})  
  
export class RemoveSpaceBetweenPipe implements PipeTransform {  
    transform(value: any): any {  
        if (!value) {
            return '';
        }
        return value.replace(/\s/g, "_").toLowerCase(); 
    }  
}  