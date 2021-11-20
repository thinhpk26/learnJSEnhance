import htmls from "../core.js"
import { connect } from "../store.js"
import mainItem from "./mainItem.js"

function main({ todos, filter, filters }) {
    return htmls`
        <section class="main">
            <input 
                id="toggle-all" 
                class="toggle-all" 
                type="checkbox"
                onchange="dispatch('toggleAll', this.checked)"
                ${todos.every(filters.completed) && 'checked'}
            >
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todos.filter(filters[filter]).map((todo, index) => mainItem({ todo, index }))}
            </ul>
        </section>
    `
}

export default connect()(main)
