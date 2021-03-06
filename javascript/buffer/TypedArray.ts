/**
 * 
 * TypedArray 类数组视图
 * 二进制数据缓存区，的数据视图
 * 每一个位置占用当前位的字节
 * 
 */
namespace TestTypedArray {
  //8位无符号数组， 8 * 10 / 8 =  10个字节
  let u8a = new Uint8Array(10)
  u8a[0] = 255
  u8a[1] = 257 //溢出
  u8a[2] = 255
  console.log(u8a)

  //64位浮点数数据， 64 *1 /8 = 8 个字节
  let f64a = new Float64Array(1)
  f64a.fill(-3.1415926)
  console.log(f64a)

  //16位无符号数组，16 * 2 / 8 =  4个字节
  let u16a = new Uint16Array(2)
  u16a[0]= 65535
  console.log(u16a)
  console.log(u16a.byteLength)

}

/**
 * | TYPE            | RANGE                  |   SIZE              |
 * +-----------------+------------------------+---------------------+
 * | Int8Array       | -2 ** 7 ~ 2 ** 7       |   1BYTE             |
 * +-----------------+------------------------+---------------------+
 * | Uint8Arr        | 0 ~ 2 ** 8             |   1BYTE             |
 * +-----------------+------------------------+---------------------+
 * | Uint8ClampedArr | 0 ~ 255  溢出处理不同!  |   1BYTE             |
 * +-------------------+----------------------+---------------------+
 * | Int16Array      | -2 ** 15 ~ 2 ** 15     |   2BYTE             |
 * +-----------------+------------------------+---------------------+
 * | Uint16Array     | 0 ~ 2 ** 16            |   2BYTE             |
 * +-----------------+------------------------+---------------------+
 * | Int32Array      | -2 ** 31 ~ 2 ** 31     |   4BYTE             |
 * +-----------------+------------------------+---------------------+
 * | Uint32Array     | 0 ~ 2 ** 32            |   4BYTE             |
 * +-----------------+------------------------+---------------------+
 * | BigInt64Array   | -2n ** 63n ~ 2n ** 63n |   8BYTE             |
 * +-----------------+------------------------+---------------------+
 * | BigUint64Array  | 0n ~ 2n ** 64n         |   8BYTE             |
 * +-----------------+------------------------+---------------------+
 * | Float32Array    |                        |   4BYTE             |
 * +-----------------+------------------------+---------------------+
 * | Float64Array    |                        |   8BYTE             |
 * +-----------------+------------------------+---------------------+
 */