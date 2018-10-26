/* global Vue, VueRouter, axios */

Vue.component('message', {
  props: ['title', 'body'],

  data() {
    return {
      isVisible: true
    };
  },

  template: `
    <article class="message container" v-show="isVisible">
      <div class="message-header">
        {{ title }}
        <button class="delete" aria-label="delete" @click="hideMessage"></button>
      </div>
      <div class="message-body">
        {{ body }}
      </div>
    </article>
  `,

  methods: {
    hideMessage() {
      this.isVisible = false;
    }
  }
});

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