/* 2 loại dữ liệu: value types and reference types - trong function gọi là tham trị và tham chiếu
 * Value types là những biến lưu ô nhớ nên khi chạy sẽ trỏ vào ô nhớ tức là giá trị của biến - chương trình sẽ đọc từ trên xuống dưới
    - number
    - string
    - boolen
    - undefinded
    - null
    - symbol
    - bigInt
 * Reference types - là những biến lưu địa chỉ nên sẽ trỏ vào địa chỉ khi chạy.
    - array
    - object
    - function
*/

//========================= Khi biến được lưu sẽ có địa chỉ và ô nhớ đc tạo ra: =========================

// VD: Value types
{
    let a = 9;
    b = a;
    a = 1
    console.log('a', b)
}
// biến     giá trị    địa chỉ      ô nhớ
//  a          9        #001          9
//  b          9        #002          9

// VD: Reference types 
{
    let a = {
    name: 'Car'
    }

    let b = a

    b.name = 'moto'

    console.log(a)
}
// biến     giá trị    địa chỉ      ô nhớ
//  a        #001        #001          9
//  b        #001
// ====> Vì a và b đều trỏ vào cùng 1 địa chỉ nên khi gọi b thì sẽ chọc vào địa chỉ của a và ngược lại. Nên khi log ra giá trị của a thì gái trị đó đã bị thay đổi.

// ========================= Cách reference types khi tham chiếu vào function =========================

// Bản chất khi tạo 1 function

function sum(a, b) {
    // let a = c;
    // let b = d;
    return a + b
}

const c = 1;
const d = 2;

sum(c, d)

// Cách 1: dùng với mảng có nhiều lớp
{
    function createCar(car) {
        car = JSON.parse(JSON.stringify(car));
        car.name = 'Mescerdes'
        return car
    }
    
    const car = {
        name: 'BMW'
    }
    
    console.log(car)
    console.log(createCar(car))
}

// Cách 2: dùng với mảng có 1 lớp
{
    function createCar(car) {
        car = {...car};
        car.name = 'Mescerdes'
        return car
    }
    
    const car = {
        name: 'BMW'
    }
    
    console.log(car)
    console.log(createCar(car))
}