<template>
	<div>
    <h1>{{ monthName[month-1] }}</h1>
		<ul class="days-month">
			<li class="days-item" v-for="(day, index) in days" :key="index">
				<p class="day-name">{{ day[1] }}</p>
				<p class="day-number">{{ day[0] }} </p>
			</li>
		</ul>
	</div>
</template>

<script>
module.exports = {
	props: {
		year: Number,
		month: Number
	},

	data: function() {
		return {
      days: [],
      monthName: [
        "Janvier", 
        "Fevrier", 
        "Mars", 
        "Avril", 
        "Mai", 
        "Juin",
        "Juillet", 
        "Aout", 
        "Septembre", 
        "Octobre", 
        "Novembre", 
        "Decembre"
      ]
		};
	},
	mounted: function() {
		this.daysOfMonth(this.month, this.year);
	},
	methods: {
		daysOfMonth: function(month, year) {
			var calendar = [];
			var daysName = [
				"Dimanche",
				"Lundi",
				"Mardi",
				"Mercredi",
				"Jeudi",
				"Vendredi",
				"Samedi"
      ];
      
			var numbersOfDay = new Date(year, month, 0).getDate();

			for (var i = 1; i <= numbersOfDay; i++) {
				calendar.push([i, daysName[new Date(year, month - 1, i).getDay()]]);
			}

			this.days = calendar;
		}
	},
	computed: {
		dyears: function() {
			var currentyear = new Date().getFullYear();
			return Array.from(
				{ length: currentyear - 1900 },
				(value, index) => currentyear - index
			);
		}
	},
	watch: {
		month: function() {
			this.daysOfMonth(this.month, this.year);
		},
		year: function() {
			this.daysOfMonth(this.month, this.year);
		}
	}
};
</script>

<style scoped>
  .days-month{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    width: 512px;
  }

  .days-item{
    border: 1px solid black;
    padding: 4px;
    width: 92px;
    height: 92px;
  }

  .day-name{
    font-size: 16px;
  }

  .day-number{
    font-size: 24px
  }
</style>