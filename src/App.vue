<template>
  <div id="app">
    <h3 class="header">Todos - now feat. application level state management</h3>
    <div class="container">      
      <AddTodo />
      <FilterTodos/>
      <Todos/>
    </div>    
  </div>
</template>

<script>
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import FilterTodos from './components/FilterTodos';

export default {
  name: 'app',
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,500&display=swap');

  body{
    font-family: 'Raleway', Helvetica, Arial, sans-serif;
    line-height: 1.6;
    background: #e8f7f0;
  }
  .container{
    max-width: 1100px;
    margin: auto;
    overflow: auto;
    padding: 0 2rem;
  }
  .header{
    padding: 10px;
    background: #292727;
    color: #fff;
    font-weight: 200;
    text-align: center;
    margin-top: 0;
  }
</style>
