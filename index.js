/* global Vue, VueRouter, axios */

Vue.component('task-list', {
  template: '<div><task v-for="task in tasks">{{ task.description }}</task></div>',

  data() {
    return {
      tasks: [
        { description: 'Learn French', completed: false },
        { description: 'Learn Spanish', completed: false },
        { description: 'Learn German', completed: true }

      ]
    };
  }

});

Vue.component('task', {
  template: '<li><slot></slot></li>'

});

new Vue({
  el: '#root'
});