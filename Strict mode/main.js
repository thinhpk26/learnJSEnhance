'use strict'
// Đặt 'use strict' ở đầu đoạn code để bật chế dộ nghiêm ngặt cho cả chương trình đằng sau nó
// Hãy đặt vào đầu chương trình để tối ưu hóa chúng

/** Công dụng
 * Báo lỗi khi gán lại giá trị cho thuộc tính writable: false
 * Báo lỗi khi khai báo tham sô của function khi trùng tên
 * Khai báo hàm trong code block thì sẽ thuộc code block
 * Không đặt tên, hàm trùng với các từ khóa đã đc đặt nghĩa trong js
*/ 

fullname = 'HELLO'

function logger() {
    // Đặt 'use strict' ở đầu 1 function
    age = 18;
}

logger();

console.log(age)