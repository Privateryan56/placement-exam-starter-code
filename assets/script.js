// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Austin Churilla" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let gbs= document.getElementById('qty-gb') //setting a variable to count the quantity of cookie
let ccs= document.getElementById('qty-cc')
let scs= document.getElementById('qty-sugar')
let total=document.getElementById('qty-total')

document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies

document.getElementById('add-gb').addEventListener('click', function() {
       gb++ // literally just adding the thing no need for a for loop
        gbs.textContent=gb //text content doesnt just have to be a string
        console.log(gb)
        total.textContent=gb+cc+sugar
    console.log('more cookie')
    


   
})
document.getElementById('minus-gb').addEventListener('click',function(){
    gb--
    gbs.textContent=gb
    total.textContent=gb+cc+sugar
    if(gb<0)
    gbs.textContent=0;
    if(gb+cc+sugar<0)
    total.textContent=0;
    console.log(gb)

    console.log('less cookie')
})
                    //end of ginger


                // counter stuff for the Chocos
document.getElementById('add-cc').addEventListener('click', function() {
    cc++ // literally just adding the thing no need for a for loop
     ccs.textContent=cc 
     total.textContent=gb+cc+sugar
     console.log(cc)

 console.log('more choco cookie')



})
document.getElementById('minus-cc').addEventListener('click',function(){
    cc--
    ccs.textContent=cc
    console.log(cc)
    total.textContent=gb+cc+sugar
    if(cc<0)
    ccs.textContent=0;
    if(gb+cc+sugar<0)
    total.textContent=0;
 console.log('less  choco cookie')
})
                    //end of chocos


                    //start of sugar
document.getElementById('add-sugar').addEventListener('click', function() {
            sugar++ 
            scs.textContent=sugar 
        console.log(sugar)
        total.textContent=gb+cc+sugar
 console.log('more sugar cookie')



})
document.getElementById('minus-sugar').addEventListener('click',function(){
        sugar--
             scs.textContent=sugar
        console.log(sugar)
        total.textContent=gb+cc+sugar
        if(sugar<0)
    scs.textContent=0;
    if(gb+cc+sugar<0)
    total.textContent=0;
 console.log('less sugar cookie')
})

 document.getElementById('qty-total').addEventListener('click',function(){
     total.textContent=gb+cc+sugar
 })