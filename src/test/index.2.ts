let someValue: any = 2555;

let strLength: number = (<string>someValue).length

function createArray<T>(length: number, value: T): Array<T> {
  let result: Array<T> = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

const result = createArray(3, 'x2')
console.log(result)