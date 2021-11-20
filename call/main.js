/** LÝ THUYẾT
 * Phương thức call() dùng để gọi hàm và bind this đến đối tượng khác, mặc định this là window
 * Call() không trả ra hàm mới, nó luôn gọi hàm sau khi bind this(bind() thì chỉ bind this chứ không gọi hàm)
 * Call() dùng để mượn hàm - function borrowing
 * Call() có tính kế thừa properties và method từ 1 constructure khác
 */

// VD: tính kế thừa

function car(name, color) {
    this.name = name
    this.color = color
}

function ferrary(name, color, modern) {
    car.call(this, name, color)
    this.modern = modern
}

const ferraryReal = new ferrary('ferrary', 'red', 'T-16')

console.log(ferraryReal)