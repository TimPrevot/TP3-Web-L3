const HelloOtherWorld = window.httpVueLoader('./components/HelloOtherWorld.vue')
const daysOfMonth = window.httpVueLoader('./components/daysOfMonth.vue')


Vue.component('hello-world', {
  data: function () {
    return {
      message: ', World',
    }
  },
  template: `<p>Hello{{ message }}!</p>`
})

/*Vue.component('date', {
  data: function () {
    return {
      days: [],
      monthNames: [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
      ]
    }
  },
  methods: {
    nbDays: function(year, month){
      var nb = new Date(year, month, 0).getDate();
      return nb;
    },
    daysOfMonth: function(year, month){
      var days = []
      var nbDays = this.nbDays(year, month)
      for (let i = 1; i < nbDays + 1; i++) {
        days.push(i);
      }
      return days;
    },
  },
  template: `<p>There are {{ nbDays(2020, 9) }} days in this month</p>`
})*/

var app = new Vue({
  el: '#app',
  data: function() {
    return {
      year: daysOfMonth.year,
      month: daysOfMonth.month
    }
   },
  methods: { },
  components: { HelloOtherWorld, daysOfMonth }
})
