
var arrPlan= [];
arrPlan = [8, 12, 16, 24, 36];

var arrDiscount = [];

for (var i = 0; i < arrPlan.length; i++) {
    arrDiscount.push(Math.round(arrPlan[i] * 0.75));
}

var arrViews = ["10K", "50K", "100K", "500K", "1M"];

var planValue = document.getElementById('finalValue');
var slideValue = document.getElementById("slide");
var pageview = document.getElementById("pageviews");
var discount = document.getElementById("discount");


planValue.innerHTML = arrPlan[slideValue.value] + "$";
pageview.innerHTML = arrViews[slideValue.value] + " PAGEVIEWS";

slideValue.addEventListener("input", function() {
    if (discount.checked == true) {
        planValue.innerHTML = arrDiscount[this.value] + "$";
    }
    else {
        planValue.innerHTML = arrPlan[this.value] + "$";
    }
    
    pageview.innerHTML = arrViews[this.value] + " PAGEVIEWS";
})

discount.addEventListener("click", function(){
    if (discount.checked == true) {
        planValue.innerHTML = arrDiscount[slideValue.value] + "$";
    }
    else {
        planValue.innerHTML = arrPlan[slideValue.value] + "$";
    }
})
