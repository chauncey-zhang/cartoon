var coke = document.getElementById('coke');

function scrollFromRight() {


	coke.scrollLeft += 1;


	t = setTimeout("scrollFromRight()", 20);
	if (coke.scrollLeft == 500) {
		clearTimeout(t)
		scrollFromLeft();
	}
}

function scrollFromLeft() {
	coke.scrollLeft -= 1;



	t = setTimeout("scrollFromLeft()", 20);

	if (coke.scrollLeft == 0) {
		clearTimeout(t)
		scrollFromRight();
	}
}
//scrollFromRight();