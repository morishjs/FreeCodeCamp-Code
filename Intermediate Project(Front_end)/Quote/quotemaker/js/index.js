
var colors = [
	'#FF9800',
	'#4CAF50',
	'#009688',
	'#3F51B5',
	'#673AB7',
	'#B71C1C',
	'#4A148C'
];

var quotes = [
	"다이어트는 포샵으로",
	"어디서 치킨 냄새 안나요?",
	"으리가 어떤 민족입니까?",
	"오늘 먹을 치킨은 내일로 미루지 말자",
	"지금부터 살과의 전쟁을 포기한다."
];


	var color = Math.floor(Math.random() * colors.length);
	var quote = Math.floor(Math.random() * quotes.length);

	function getQuote(){
		$('html body').animate({
			backgroundColor: colors[color],
			color: colors[color]
		}, 1000);
		
		$('#quote-button').animate({
			backgroundColor : colors[color],
			color: color[color]},1000);
			$('#my-quote').text(quotes[quote]);			
}

$(document).ready(function () {
	getQuote();
	$('#quote-button').on('click',getQuote);
});