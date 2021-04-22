import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducto'
})
export class FilterProductoPipe implements PipeTransform {

  transform(value: any, campo:string, args:any[string]): any {
     if(!value)return null;
     if (!args)return value;
       return value.filter(singleItem=>
        singleItem[campo].toLowerCase().includes(args.toLowerCase()));
       
     
  }

}
