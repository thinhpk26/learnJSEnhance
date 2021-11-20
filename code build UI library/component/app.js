import htmls from "../core.js"
import { connect } from"../store.js"

const connector = connect()
function App({cars}) {
    return htmls`
    <ul>
        ${cars.map(car => `<li>${car}</li>`)}
    </ul>
    <button onclick="dispatch('ADD', 'Poscher')">ADD</button>
    `
}

export default connector(App)