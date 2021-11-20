// lí thuyết
/**
 * Là một hàm có thể ghi nhớ đc nơi nó đc tạo và truy cập được những biến bên ngoài phạm vi của nó
 * Ứng dụng
   - Viết code ngắn gọn hơn
   - Biểu diễn, ứng dụng tính private trong OOP
 * Lưu ý 
   - Biến được gọi sẽ không bị xóa khỏi bộ nhớ khi hàm cha được thực thi xong
   - Các khái niệm js nâng cao rất dễ gây nhầm lẫn
 */

// VD 1:
function createCounter() {
    let count = 0;
    function counter() {
        return ++count;
    }
    return counter
}

const count1 = createCounter()
console.log(count1())
console.log(count1())
console.log(count1())
// tạo ra 1 phạm vi mới 
const count2 = createCounter()
console.log(count2())
console.log(count2())
console.log(count2())

// VD 2:
function createLogger(mark) {
    function logger(message) {
        console.log(`[${mark}]: ${message}`)
    }
    return logger;
}

const logInfo = createLogger('info')
const logError = createLogger('error')
logInfo('Chạy sau...')
logInfo('Email sẽ chạy luôn')
logError('Bị lỗi ở password')

// VD 3:
function createLocalStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {};
    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }
    const storage = {
        get(key) {
            return store[key]
        },
        set(key, value) {
            store[key] = value
            return save()
        },
        remove(key) {
            delete store[key]
            return save()
        }
    }
    return storage
}
// profile.js
const profileSetting = createLocalStorage('Profile_setting')

profileSetting.set('fullname', 'Thịnh Văn')

console.log(profileSetting.get('fullname'))