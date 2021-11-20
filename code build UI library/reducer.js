const init = {
    cars: ['BMW'] 
}

export default function reducer(state = init, action, args) {
    switch (action) {
        case 'ADD': 
            const [newCar] = args
            return {
                ...state, // không cần dòng này vẫn chạy
                cars: [...state.cars, newCar]
            }
        default: 
            return state
    }
}