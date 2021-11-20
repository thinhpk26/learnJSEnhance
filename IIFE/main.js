// IIFE - immediately invoked express funtion

// dùng dấu ; trước IIFE
;(function(message = 'HI!') {
    console.log(message)
})(`Hello!
Hãy tạo ra 1 danh sách xe bằng cách sử dụng:
- app.get() để xem danh sách
- app.create(tên xe) để thêm xe
- app.replace(tên xe) để thay thế xe
- app.delate(tên xe) để xóa xe`)

// Tính chất của IIFE là private - tránh làm hỏng dữ liệu từ bên ngoài
// Có thể dùng expression function hoặc dùng arrow function

const app = (function() {
    const car = []
    return {
        get() {
            return car;
        },
        create(name) {
            car.push(name)
        },
        delete(index) {
            car.splice(index, 1)
        },
        replace(index, name) {
            car[index] = name;
        }
    }
})()


