const lista = document.querySelector('.lista');

const loadCars = async () => {
  try {
    let response = await fetch(
      'https://rentacar-jmrb.herokuapp.com/api/v1/car?available=1',
    );
    let datos = await response.json();
    datos.map((element) => {
      const li = document.createElement('li');

      const container_car = document.createElement('div');
      container_car.classList.add('container_car');
      
      const container_left = document.createElement('div');
      const container_right = document.createElement('div');
      const car = document.createElement('p');
      const year = document.createElement('p');
      const engine = document.createElement('p');
      const price_day = document.createElement('p');
      price_day.classList.add('price_day');
      const img = document.createElement('img');
      car.innerHTML = `${element.brand} ${element.model}`;
      year.innerHTML = `Year of manufacture: ${element.year}`;
      engine.innerHTML = `Engine type: ${element.engine}`;
      price_day.innerHTML = `${element.price_day}€/day`;
      img.src = `${element.photo}`;
      lista.appendChild(li);
      li.appendChild(container_car);

      container_car.appendChild(container_left);
      container_car.appendChild(container_right);
      container_left.appendChild(car);
      container_left.appendChild(year);
      container_left.appendChild(engine);
      container_right.appendChild(price_day);
      li.appendChild(img);

     
    });
  } catch (error) {
    console.error(error.message);
  }
};

window.onload = loadCars;
