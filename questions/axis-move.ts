/**
 * @description 开发一个坐标计算工具， A表示向左移动，D表示向右移动，W表示向上移动，S表示向下移动。从（0,0）点开始移动，从输入字符串里面读取一些坐标，并将最终输入结果输出到输出文件里面。
 * 输入：
 * 1. 合法坐标为A(或者D或者W或者S) + 数字（两位以内）, 坐标之间以;分隔。
 * 2. 非法坐标点需要进行丢弃。如AA10;  A1A;  $%$;  YAD; 等。
 * 下面是一个简单的例子 如： A10;S20;W10;D30;X;A1A;B10A11;;A10; .
 * 处理过程：
 * 起点（0,0）->
 * A10   =  （-10,0）->
 * S20   =  (-10,-20)->
 * W10  =  (-10,-10)->
 * D30  =  (20,-10)->
 * x    =  无效 ->
 * A1A   =  无效 ->
 * B10A11   =  无效 ->
 * 一个空 不影响 ->
 * A10  =  (10,-10) ->
 * 结果 （10， -10）
 * @tag 字符串处理
 * @tag 正则
 * @tag 应用题
 * @level 普通
 * @param paths {String}
 * @returns {Array} [x坐标值, y坐标值]
 */
function axisMove(paths: string): [number, number] {
  let stepReg = /^(\w{1})(\d{1,2})$/i
  let match = paths.split(';').filter(i => !!i)
  let pos = { x: 0, y: 0 }
  if (match && match.length) {
    match.forEach(p => {
      let match = p.match(stepReg)
      if (match) {
        switch (match[1]) {
          case 'w':
          case 'W':
            pos.y += +match[2]
            break

          case 's':
          case 'S':
            pos.y -= +match[2]
            break

          case 'A':
          case 'a':
            pos.x -= +match[2]
            break

          case 'd':
          case 'D':
            pos.x += +match[2]
            break
        }
      }
    })
  }
  return [pos.x, pos.y]
}

export default axisMove
