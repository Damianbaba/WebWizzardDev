// import './main.scss';

const scrollers = document.querySelectorAll('.stack');


function addAnimation() {
	scrollers.forEach((scroller) => {
		// add data-animated="true" to every `.scroller` on the page
		scroller.setAttribute("data-animated", true);


		const scrollerInnerWrapper = scroller.querySelector('.stack__inner-wrappper');
		const scrollerInner = scroller.querySelector('.stack__inner');
		const scrollerInnerContent = Array.from(scrollerInner.children);

		const dupilcatedItem = scrollerInner.cloneNode(true)
		dupilcatedItem.setAttribute('aria-hidden', true)
		scrollerInner.parentElement.appendChild(dupilcatedItem)
	})
}

addAnimation()