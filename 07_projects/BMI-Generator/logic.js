const form = document.querySelector('form');

// console.log(form)

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter Valid Hight`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter Valid weight`;
  } else {
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    const br = document.createElement('br');
    results.appendChild(br);
    const p = document.createElement('span');
    if (bmi < 18.6) {
      p.innerHTML = `Under Weight`;
      results.appendChild(p);
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      p.innerHTML = `Normal Range`;
      results.appendChild(p);
    } else {
      p.innerHTML = `Over Weight`;
      results.appendChild(p);
    }
  }
});
