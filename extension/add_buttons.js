console.log('im in a dataset');

$('.file-metadata-block').each(function( index ) {
	const link = $(this).find('a');

	if(link.text().includes('.tab')){
		console.log('tab party')
		const doi = link.attr('href').match('persistentId=.+')[0];
		$(this).append(`<h3><a href='https://agnescameron.github.io/playground/csv-import/index.html?${doi}'>R1</a></h3>`);
	}

})
