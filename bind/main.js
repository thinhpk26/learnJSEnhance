// This chỉ được chạy khi phương thức được gọi hoặc thực thi - nên dựa vào từng hoàn cảnh mà this lại khác nhau
// This không phải 1 biến mang giá trị mà là một từ khóa để trỏ vào đối tượng trước có phương thức bao gồm nó. 
//  ====> VD:

'use strict'
{
    this.firstName = 'Thịnh'
    this.lastName  = 'Văn'

    const myFriend = {
        firstName: 'Sơn',
        lastName : 'Văn',
        getFullName() {
            return this.firstName + ' ' + this.lastName
        }
    }

    console.log(myFriend.getFullName())  // Gọi

    const getName = myFriend.getFullName.bind(myFriend)  // Không gọi
    console.log(getName())
}

// Nên chúng ta có phương thức bind() để dàng buộc this vào 1 đối tượng
// bind sẽ tạo ra 1 phạm vi mới hay hàm mới
// bind có thể nhận đối số như hàm ban đầu
{
    this.firstName = 'Thịnh'
    this.lastName  = 'Văn'

    const myFriend = {
        firstName: 'Sơn',
        lastName : 'Văn',
        getFullName(data1, data2) {
            console.log(data1 + ' ' + data2)
            return this.firstName + ' ' + this.lastName
        }
    }

    const getName = myFriend.getFullName.bind(myFriend, 'data 3', 'data 4')  // Không linh động 
    console.log(getName('data 1', 'data 2'))  // linh hoạt hơn 
}

// VD về bind:
{
    const myFriend = {
        firstName: 'Sơn',
        lastName : 'Văn',
        getFullName() {
            console.log(this.firstName + ' ' + this.lastName)
        }
    }
    const btn = document.querySelector('button')
    btn.onclick = myFriend.getFullName.bind(myFriend)
}

// VD gần hơn với thực tế
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = (() => {
    const cars = ['BMW']
    const ulElement = $('.root')
    const addElement = $('.add-btn')
    const inputElement = $('input')
    return {
        add(car) {
            cars.push(car)
        },
        delete(index) {
            cars.splice(index, 1)
        },
        render() {
            const htmls = cars.map((car, index) => `
                <li>
                ${car}
                <span class="delete" data-index="${index}">&times</span>
                </li>
            `).join('')
            ulElement.innerHTML = htmls
        },
        handleDelete(e) {
            const deleteElement = e.target.closest('.delete')
            if(deleteElement) {
                const indexDelete = deleteElement.dataset.index
                this.delete(indexDelete)
                this.render()
            }
        },
        handleEvent() {
            // add
            addElement.onclick = () => {
                const car = inputElement.value
                this.add(car)
                this.render()
                inputElement.select()
            }
            // delete
            ulElement.onclick = this.handleDelete.bind(this)
        },
        init() {
            this.handleEvent()
            this.render()
        }
    }
})();

app.init()