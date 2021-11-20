import htmls from "../core.js"
import { connect } from "../store.js"

function footer({ todos, filter, filters }) {
    return htmls`
        <footer class="footer">
            <span class="todo-count"><strong>${todos.filter(filters.active).length}</strong> item left</span>
            <ul class="filters">
                ${Object.keys(filters).map(type => htmls`
                    <li>
                        <a class="${type === filter && 'selected'}" href="#" onclick="dispatch('change', '${type}')">
                            ${type[0].toUpperCase() + type.slice(1)}
                        </a>
                    </li>
                `)}
            </ul>
            <button class="clear-completed" onclick="dispatch('clearCompleted')">Clear completed</button>
        </footer>
    `
}

export default connect()(footer)