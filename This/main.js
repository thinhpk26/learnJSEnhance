/** LÍ THUYẾT
 * This tham chiếu đến đối tượng mà nó thuộc về
 * This chỉ được chạy khi phương thức được gọi hoặc chạy - nên dựa cào từng hoàn cảnh mà this lại khác nhau
 * Đặc tính
 1. Trong một phương thức, this tham chiếu đến đối tượng truy cập phương thức(đối tượng trước dấu .)
 2. Đứng ngoài phương thức thí tham chiếu đến đối tượng global
 * Lưu ý
 - This trong hàm tạo sẽ đại diện cho đối tượng sẽ đc tạo ra.
 - this trong 1 hàm là undefined khi có strict mode
 - Các phương thức bind(), call(), apply() có thể tham chiếu this tới đối tượng khác
 */

// ============================================= VD, thực tế =================================================
// Tạo đối tượng iphone 5
const iPhone5 = {
    // thuộc tính(đặc điểm) - property
    name: 'iphone5',
    weight: '300g',
    color: 'white',
    // phương thức(hành động) - method
    TakeAPhoto() {
        console.log('Take a photo') 
    }
}
iPhone5.TakeAPhoto() // gọi tới phương thức của đối tượng iphone5

// Tạo đối tượng bằng object constructor
{
    function car(name, color, weight) {
        this.name = name,
        this.color = color,
        this.weight = weight,
        this.run = function() {
            console.log(this)
        }
    }
    
    const BMW = new car('BMW','pink', '1000kg')
    const Mescerdes = new car('Mescerdes', 'green', '1500kg')
    
    console.log(BMW)
    
    // function khi không được gán cho một đối tượng hoặc trả về giá trị thì mặc định đối tượng mà nó chọc tới là window
    // TH1:
    function run() {
        console.log('running...', this)
    }
    
    run()
}

// TH2:
{
    function car(name, color, weight) {
        this.name = name,
        this.color = color,
        this.weight = weight,
        this.run = function() {
            function running() {
                console.log('running...', this)
            }
            running()
        }
    }
    
    const BMW = new car('BMW','pink', '1000kg')
    const Mescerdes = new car('Mescerdes', 'green', '1500kg')
    
    console.log(BMW.run())
}