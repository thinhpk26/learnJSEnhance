import htmls from "../core.js"
import { connect } from "../store.js"
function mainItem({ todo, edit, index }) {
    return htmls`
        <li class="${todo.completed && 'completed'} ${edit === index && 'editing'}">
            <div class="view">
                <input 
                class="toggle" 
                type="checkbox"
                ${todo.completed && 'checked'}
                onchange="dispatch('toggle', ${index})"
                >
                <label ondblclick="dispatch('startEdit', ${index})">${todo.title}</label>
                <button class="destroy" onclick="dispatch('remove', ${index})"></button>
            </div>
            <input class="edit" value="${todo.title}" 
            onkeyup="event.keyCode === 13 && dispatch('endEdit', this.value.trim()) || event.keyCode === 27 && dispatch('cancel')"
            onblur="dispatch('endEdit', this.value.trim())"
            >
        </li>
    `
}

export default connect()(mainItem)
