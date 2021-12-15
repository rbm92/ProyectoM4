const lista = document.querySelector('.lista');

const loadCars = async () => {
  try {
    let response = await fetch(
      'https://rentacar-jmrb.herokuapp.com/api/v1/car?available=1',
    );
    let datos = await response.json();
    datos.map((element) => {
      const li = document.createElement('li');

      const car = document.createElement('p');
      const year = document.createElement('p');
      const engine = document.createElement('p');
      const price_day = document.createElement('p');
      const img = document.createElement('img');
      car.innerHTML = `${element.brand} ${element.model}`;
      year.innerHTML = `Year of manufacture: ${element.year}`;
      engine.innerHTML = `Engine type: ${element.engine}`;
      price_day.innerHTML = `From: ${element.price_day} €/day`;
      img.src = `${element.photo}`;
      lista.appendChild(li);
      li.appendChild(car);
      li.appendChild(year);
      li.appendChild(engine);
      li.appendChild(price_day);
      li.appendChild(img);
    });
  } catch (error) {
    console.error(error.message);
  }
};

window.onload = loadCars;
