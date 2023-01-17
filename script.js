const numRating = document.querySelectorAll('.circle');
const submit = document.querySelector('.submit');
const ratingState = document.querySelector('.rating-state');
const tyState = document.querySelector('.ty-state');
const numValue = document.querySelector('span');


for(let i = 0; i<=numRating.length; i++){
    let finalRating = numRating[i];
    console.log(finalRating);
    finalRating.addEventListener('click', ()=> {
        numValue.textContent = finalRating.textContent;
        finalRating.style.backgroundColor = 'hsl(25, 97%, 53%)';
    });

    submit.addEventListener('click', ()=>{
        tyState.style.display = 'flex';
        ratingState.style.display = 'none';
    })
}