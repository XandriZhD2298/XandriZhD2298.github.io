var productsCount=document.getElementById("products-count");
console.log(productsCount);

//add to cart
var addToCartButtons=document.querySelectorAll(".addtocart");
console.log(addToCartButtons);

for (var i=0; i<addToCartButtons.length;i++){
	addToCartButtons[i].addEventListener("click",function(){
		console.log("clicked")
		var prevProductsCount = productsCount.textContent
		console.log(prevProductsCount)
		var newProductsCount= +prevProductsCount+1;
		productsCount.textContent=newProductsCount
	})
}

//slider
 $('.slider').slick({
 	dots:true,
 	autoplay:true,
 	autoplySpeed:2000,
 })

//quantity block
//sozdaem peremennie v kotorih hranyatsa objectki
var decrementButton = document.querySelectorAll(".decrement-button")
var incrementButton = document.querySelectorAll(".increment-button")
var quantityInput = document.querySelectorAll(".quantity-block input")
var currentCount = 1;


function toggleDecrementButton(count, d){
	
		if (count<=1){
			decrementButton[d].disabled=true;
		}else{
			decrementButton[d].disabled=false;
		}
	}

for (let i = 0; i < decrementButton.length; i++) {
toggleDecrementButton(currentCount,i);
}

for (let i = 0; i < decrementButton.length; i++) {
	decrementButton[i].addEventListener("click", function () {
		let currentCount = +quantityInput[i].value;
		let nextCount = currentCount - 1;
		quantityInput[i].value = nextCount;
		toggleDecrementButton(nextCount,i)
	}
	)
}

for (let i = 0; i < incrementButton.length; i++) {
	incrementButton[i].addEventListener("click", function () {
		let currentCount = +quantityInput[i].value;
		let nextCount = currentCount + 1;
		quantityInput[i].value = nextCount;
		toggleDecrementButton(nextCount,i)
	}
	)
}

//change heart by mouse click

var clickHeart = document.querySelectorAll(".heart")
for (var i = 0; i < clickHeart.length; i++){
	clickHeart[i].onclick = function() {
		this.style.background = (this.style.backgroundColor == "") ? "#ff000040 url('demoShop/icon52.png') no-repeat center" : "";
		//if background color is not set, we chacge bg properties to "..." , esle delete them. and html starts to take it from css file. 
	//	this.style.backgroundColor = (this.style.backgroundColor == "") ? "pink" : "";
	}
}
//end of heart section