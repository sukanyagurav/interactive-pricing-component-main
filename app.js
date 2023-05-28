const range = document.querySelector('#range');
const checkPackage = document.querySelector("#select");
const pageViews=["10K", "50K", "100K", "500K", "1M"];
const perMonth ={
    0:8,
    20:12,
    40:16,
    60:24,
    80:36
}
const lableView= document.querySelector('.view-count');
const labelPerMonth = document.querySelector('.price');
const min = range.min
const max = range.max
const value = range.value
range.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${(value-min)/(max-min)*100}%, #DEE2E6 ${(value-min)/(max-min)*100}%, #DEE2E6 100%)`

range.addEventListener('change',function(){
    updatePrice();
    //progress bar
    this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 100%)`
})
//toggle monthly or yearly plan
checkPackage.addEventListener('change',function(){
    updatePrice()
})
function updatePrice(){
    if(!checkPackage.checked){
        lableView.innerHTML = pageViews[+range.value /20]
        labelPerMonth.innerHTML ='$ '+ (perMonth[range.value] * 0.75 )+ ".00"
    }else{
        lableView.innerHTML = pageViews[+range.value /20]
        labelPerMonth.innerHTML ='$ '+ perMonth[range.value] + ".00"
    }

}
