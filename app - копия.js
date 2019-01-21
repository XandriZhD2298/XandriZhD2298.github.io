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
var decrementButton = document.querySelectorAll(".decrement-button")[0]
var incrementButton = document.querySelectorAll(".increment-button")[0]
var quantityInput = document.querySelectorAll(".quantity-block input")[0]
var currentCount = +quantityInput.value

function toggleDecrementButton(count){
	if (count<=1){
	decrementButton.disabled=true;
	}else{
		decrementButton.disabled=false
	}
	/* decrementCount = count <= minCount
		incrementCount = count >= maxCount

	*/
}

toggleDecrementButton(currentCount)

incrementButton.addEventListener("click",function(){
	var currentCount= +quantityInput.value
	var nextCount=currentCount+1
	quantityInput.value=nextCount
	toggleDecrementButton(nextCount)
})

decrementButton.addEventListener("click",function(){
	var currentCount= +quantityInput.value
	var nextCount=currentCount-1
	quantityInput.value=nextCount
	toggleDecrementButton(nextCount)
})

//change heart by mouse click

var clickHeart = document.querySelectorAll(".heart")
for (var i = 0; i < clickHeart.length; i++){
	clickHeart[i].onclick = function() {
		this.style.backgroundColor = (this.style.backgroundColor == "") ? "pink" : "";
	}
}
//end of heart section