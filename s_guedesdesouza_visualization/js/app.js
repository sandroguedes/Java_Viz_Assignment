new Chart(document.getElementById('barChart'), {
	type: 'bar',
	data: {
		labels: ['United States', 'Canada', 'Norway', 'Soviet Union', 'Finland', 'Sweden', 'Germany', 'Switzerland', 'Australia', 'Russia'],
		datasets: [
			{
				label: 'Medals',
				data: ['653', '625', '457', '440', '434', '433', '360', '285', '280', '263'],
				backgroundColor: ['#71aef5', '#f24333', '#a3f0ff', '#517353', '#565b96', '#909bf0', '#ebb41c', '#bf0d0d', '#1f1b4a', '#0073ff']
			}
		]
	},
	options: {
		legend: {
			display: false
		},
		animation: {
			duration: '1500',
			easing: 'easeInOutQuint'
		}
	}
});



new Chart(document.getElementById('lineChart'), {
	type: 'line',
	data: {
		labels: ['1924', '1928', '1932', '1936', '1948', '1952', '1956', '1960', '1964', '1968', '1972', '1976', '1980', '1984', '1988', '1992', '1994', '1998', '2002', '2006', '2010', '2014'],
		datasets: [
			{
				label: 'Men',
				data: [112, 83, 110, 99, 125, 118, 123, 108, 139, 153, 155, 159, 167, 168, 201, 226, 232, 258, 273, 299, 296, 340],
				fill: false,
				borderColor: '#3b8ced'
			},
			{
				label: 'Women',
				data: [6, 6, 6, 9, 15, 18, 27, 39, 46, 46, 45, 51, 51, 54, 63, 99, 111, 189, 208, 232, 233, 272],
				fill: false,
				borderColor: '#e88edc'
			}
		]
	}
});

new Chart(document.getElementById('pieChart'), {
	type: 'pie',
	data: {
		labels: ['Gold', 'Silver', 'Bronze'],
		datasets: [
			{
				data: [8, 4, 3],
				backgroundColor: ['#d6ce78', '#d3d8db', '#a38b4d']
			}
		]
	},
	options: {
		title: {
			display: false
		}
	}
});


new Chart(document.getElementById('advancedChart'), {
	type: 'horizontalBar',
	data: {
		labels: ['1924', '1928', '1932', '1936', '1948', '1952', '1956', '1960', '1964', '1968', '1972', '1976', '1980', '1984', '1988', '1992', '1994', '1998', '2002', '2006', '2010', '2014'],
		datasets: [
			{
				label: 'Medals',
				data: [9, 12, 20, 13, 20, 17, 20, 21, 7, 20, 1, 3, 2, 4, 6, 37, 40, 49, 75, 68, 91, 90],
				backgroundColor: 'rgba(232, 66, 51, 0.5)',
				borderColor: 'rgba(232, 66, 51, 1)'
			},
		],
	},
	options: {
		legend: {
			display: false
		}
	}
});