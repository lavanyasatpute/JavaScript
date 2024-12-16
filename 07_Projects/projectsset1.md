# Projects related to Dom

## Project Link
[Click hear](https://stackblitz.com/edit/dom-project-chaiaurcode-gdsdcr5i)

# Solution Code

## Project 1

```javascript
const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector('body');
// body.style.backgroundColor = "green";
buttons.forEach((button) => {
  // console.log(button.id)
  button.addEventListener('click', (e) => {
    // console.log(e)
    // console.log(e.target)
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```
## Project 2
```javascript
'use strict';
const form = document.querySelector('form');
// console.log(form)
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  // console.log(e.target);
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  const results = document.getElementById('results');
  const BMI_con = document.getElementById('BMI_con')
  // console.log(results)
  if(height === "" || height<0 || isNaN(height)){
    results.innerHTML= `Please enter the valid height ${height}`;
  }else if(weight === "" || weight<0 || isNaN(weight)){
    results.innerHTML = `Please enter the valid height ${weight}`;
  }else{
    const a = (weight/((height/100)**2)).toFixed(2);
    results.innerHTML = `BMI=${a}`;
    if(a<18.6){
      BMI_con.innerHTML = "Under Weight";
    }else if(a<24.9){
      BMI_con.innerHTML = "Normal Range";
    }else{
      BMI_con.innerHTML = "Overweight"
    }
  }
  // const a = (weight/((height/100)**2)).toFixed(2);
  

})
```
## Project 3
```javascript
const clock = document.querySelector('#clock');

// let hr = now.getHours();
// let min = now.getMinutes();
// console.log(clock);
// const hour = hr >= 12 ? 'PM' : 'AM';
// clock.innerHTML = `${hr}:${min} ${hour}`
setInterval(function () {
  let now = new Date();
  let hr = now.getHours();
  let hour = hr >= 12 ? 'PM' : 'AM';
  clock.innerHTML = `${now.toLocaleTimeString()} ${hour}`;
}, 1000);
```