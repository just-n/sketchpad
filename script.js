var start = function(option) {
	
	do {
	sideLength = prompt('Enter the number of squares for each side. (Must be an integer between 1 and 64)');
	} while(sideLength < 1 || sideLength > 64 || sideLength % 1 !== 0);
	
	$('#grid_container').empty();
	
	var square_length = (720)/sideLength;

	for(var height = 0; height < sideLength; height++) {
		for(var width = 0; width < sideLength; width++) {
			$('#grid_container').append('<div class="grid_square"></div>');
		}
		$('#grid_container').append('<div class="new_row"></div>');
	}
	
	$('.grid_square').width(square_length);
	$('.grid_square').height(square_length);

	$('.grid_square').mouseenter(function() {
		switch(option) {
			case 1:
				$(this).addClass('square_lit');
				break;
			case 2:
				var squareOpacity = $(this).css('opacity');
				if (squareOpacity > 0) {
					$(this).css('opacity', squareOpacity - 0.1);
				}
				break;
			case 3:
				var randColor1 = '#' + Math.floor(Math.random()*16777215).toString(16);
				$(this).css('backgroundColor', randColor1);
		}
	});
}	