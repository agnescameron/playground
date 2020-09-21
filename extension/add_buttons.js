console.log('im in a dataset');

$('.file-metadata-block').each(function( index ) {
	const link = $(this).find('a');

	if(link.text().includes('.tab')){
		console.log('tab party')
		$(this).append("<h3><a href='https://underlay.github.io/playground/csv-import/index.html'>R1</a></h3>");
	}

})
