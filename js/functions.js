$(window).scroll(function(){

var wScroll = $(this).scrollTop();

if(wScroll > $('.aboutMe').offset().top){

	$('.first-list .thumb').each(function(i){
		console.log("hi");
		setTimeout(function(){
			$('.first-list .thumb').eq(i).addClass('is-visible');
		},150 * (i+1));

	});


}

});