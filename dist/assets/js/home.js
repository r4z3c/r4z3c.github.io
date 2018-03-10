Vue.component('project', {
  props: ['project'],
  template: (
    '<div class="project">' +
      '<h2><a class="project__title" v-bind:href="project.href">{{ project.title }}</a></h2>' +
      '<p>{{ project.description }}</p>' +
    '</div>'
  )
});

var projects = new Vue({
  el: '#projects',
  data: {
    projectList: [
      {
        id: 0,
        href: 'scrum/retro',
        title: 'Scrum - Sprint Retrospective',
        description: 'After each sprint, is essential to discuss about: "what we done right" and "what we can done better". Here you your team join a room to share anonymous feelings about the last sprint.'
      }
    ]
  }
});