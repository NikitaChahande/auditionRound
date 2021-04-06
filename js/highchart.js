$(function () {
	
	var labels123 = ['0', '1K', '2k', '3k', '4k', '5k', '6k', '7k', '8k', '9k', '10k'];
	Highcharts.chart(
		'side_content_graph',
		{
			chart: {
				type: 'column',
				height: 250,

			},
			title:{
				text: null
			},
			accessibility: {
				announceNewData: {
					enabled: false
				}
			},
			xAxis: {
				min: 0,
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				gridLineColor: '#999',
				tickColor: '#707073',
				labels: {
					enabled: true,
					style: {
						fontSize: '12px',
						whiteSpace: 'nowrap',
					},
				}
			},
			yAxis: {
				min: 0,
				max: 7,
				tickInterval: 2,
				lineColor: '#fff',
				lineWidth: 1,
				title: {
					text: null
				},
				labels: {
					useHTML:true,
					enabled: true,
					style: {
						fontSize: '14px',
						whiteSpace: 'nowrap'
					},
					formatter: function () {
						return labels123[this.value];
					}
				}
			},
			legend: {
				enabled: false
			},
			scrollbar: {
				enabled: false,
				height: 0
			},
			// remove chart watermark (highcharts.com)
			credits: {
				enabled: false
			},
			// remove hamburger button
			exporting: {
				enabled: false
			},
			plotOptions: {
				series: {
					borderWidth: 0,
					pointWidth: 16,
					dataLabels: {
						enabled: false,
						format: '{point.y:,.0f}'
					}
				},
				column: {
					borderRadius: 12,
					borderWidth: 4,
					stacking: 'normal'
				}
			},

			tooltip: {
				headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
				pointFormat: ' <b>${point.y:,.0f}</b>'
			},

			series: [
				{
					name: 'Browsers',
					data: [
						{
							name: 'jan',
							y: 3,
							drilldown: 'jan'
						},
						{
							name: 'feb',
							y: 4,
							drilldown: 'feb'
						},
						{
							name: 'mar',
							y: 3,
							drilldown: 'mar'
						},
						{
							name: 'apr',
							y: 5.4,
							drilldown: 'apr'
						},
						{
							name: 'may',
							y: 2.02,
							drilldown: 'may'
						},
						{
							name: 'jun',
							y: 2,
							drilldown: 'jun'
						},
						{
							name: 'jul',
							y: 3.4,
							drilldown: 'jul'
						},
						{
							name: 'aug',
							y: 2,
							drilldown: 'aug'
						},
						{
							name: 'sep',
							y: 2.2,
							drilldown: 'sep'
						},
						{
							name: 'oct',
							y: 4.2,
							drilldown: 'oct'
						},
						{
							name: 'nov',
							y: 2,
							drilldown: 'nov'
						},
						{
							name: 'dec',
							y: 2,
							drilldown: 'dec'
						}
					]
				}
			]
		},
		function () {
			const chart = this,
				series = chart.series,
				xAxis = chart.xAxis[0];

			function getCurrentMonth() {
				const currentDate = new Date(),
					currentMonthIndex = currentDate.getMonth();
				return xAxis.categories[currentMonthIndex];
			}

			function setColor(series, month) {
				console.log(month);

				series.points.forEach((point) => {
					if (point.category === month) {
						const highlightedColor = series.index === 0 ? 'hotpink' : 'red';
						point.update({
							color: highlightedColor,
							pointWidth: 16
						});
					}
				});
			}

			function setActivePassiveColor(series, month) {
				const currentDate = new Date(),
					currentMonthIndex = currentDate.getMonth();
				
				series.points.forEach((point) => {
					if (point.category == month) {
						const highlightedColor = series.index == 0 ? 'blue' : 'red';
						point.update({
							color: highlightedColor,
							pointWidth: 16
						});
					} 
				});
			}

			console.log(series);
			console.log(getCurrentMonth());

			series.forEach((series) => setColor(series, getCurrentMonth()));

			series.forEach((series) => setActivePassiveColor(series, getCurrentMonth()));
		}
	);
});

