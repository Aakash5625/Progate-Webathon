const scrollToTopButton=document.querySelector('#js-top');



var scrollFunc=()=>{
	let y=window.scrollY;

	if(y>20){
		scrollToTopButton.className="top-link show";
	}
	else{
		scrollToTopButton.className="top-link hide";
	}
};

window.addEventListener('scroll',scrollFunc);