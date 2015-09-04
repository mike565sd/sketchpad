$(document).ready(function(){
	createBoard(12);
});
	
$('.gameBoard').on('mouseenter', 'div', function() {
	$(this).addClass('filled');
	$(this).removeClass('empty');
});

$('button').on('click', function() {
	var squares = prompt('How many squares per side?', '12');
	$('.gameBoard').empty();
	createBoard(squares);
});

function createBoard(sqPerSide) {
	numSquares = sqPerSide * sqPerSide;
	divs = "";
	for (var i = 0; i < numSquares; i++) {
		divs += '<div class="empty"></div>\n';
	}
	$('.gameBoard').append(divs);
	$('.empty').css({'width': 600 / sqPerSide + 'px',
					 'height': 600 / sqPerSide + 'px'});
}
