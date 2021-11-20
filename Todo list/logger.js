export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group('action: ', action)
        console.log('prevState: ', prevState)
        console.log('args: ', args)
        const newState = reducer(prevState, action, args)
        console.log('nextState: ', newState)
        console.groupEnd()
        return newState
    }
}