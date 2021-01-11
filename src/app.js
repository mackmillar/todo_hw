import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            todos: [
                'learn Vue',
                'create radio buttons',
                'complete todos',
            ],
            newTodo: ""
        },
        methods: {
            saveNewTodo: function(){
                this.todos.push(this.newTodo);
                this.newTodo = "";
            }
        }
    })
})