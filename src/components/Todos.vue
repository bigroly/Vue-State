<template>
    <div>
        <h4>{{allTodos.length}} in total: double click a todo to update it</h4>
        <div class="todos">
            <div @dblclick="onDblClick(todo)" 
                v-for="todo in allTodos" 
                :key="todo.id" class="todo"
                v-bind:class="{'complete':todo.completed}">
                <i v-if="todo.completed" class="far fa-check-circle"></i> {{todo.title}}
                <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'Todos',
    methods: {
        ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
        onDblClick(todo){
            const updTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            };
            this.updateTodo(updTodo);
        }
    },
    computed: mapGetters(['allTodos']),
    created(){
        this.fetchTodos();
    }
}
</script>

<style scoped>
    .todos{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 1rem;
    }

    .todo{
        border: 1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 5px;
        text-align: left;
        position: relative;
        cursor: pointer;
    }

    .todo.complete{
        color: #41b883;
        background: #292727;
    }

    i.fa-trash-alt {
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: #fff;
        cursor: pointer;
        background: #ac1c1c;
        padding: 10px;
        border-radius: 20%;
    }

    i.fa-trash-alt:hover{
        background: #d13434;
    }

    @media(max-width: 767px){
        .todos{
            grid-template-columns: 1fr;
        }
    }
</style>
