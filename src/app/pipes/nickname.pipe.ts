import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nickname'
})
export class NicknamePipe implements PipeTransform {

  transform(value: string, type: number): string {
    switch (value) {
      case 'Leonardo':
        return this.getNicknameByType(value, ['Leo'], type);
      case 'Donatello':
        return this.getNicknameByType(value, ['Donny', 'Don'], type);
      case 'Raphael':
        return this.getNicknameByType(value, ['Raph'], type);
      case 'Michelangelo':
        return this.getNicknameByType(value, ['Mickey', 'DJ Mickey'], type);
      default:
        return value;
    }
  }
  getNicknameByType(name, nicks, type) {
    let nickByType = nicks[type-1]
    return nickByType ? nickByType : name;
  }

}
