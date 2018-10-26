/* global Vue, VueRouter, axios */

Vue.component('modal', {
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <p>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
          </p>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
  `
});

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
  el: '#root',

  data: {
    showModal: false
  }
});