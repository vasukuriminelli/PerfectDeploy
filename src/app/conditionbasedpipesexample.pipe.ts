import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conditionbasedpipesexample'
})
export class ConditionbasedpipesexamplePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(args[0]=='male')
    return 'Mr.'+value;
  else if(args[0]=="female")
    return 'Mr.'+value;
  }

}
