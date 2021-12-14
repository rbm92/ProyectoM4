const lista = document.querySelector('.lista');

const loadCars = async () => {
  try {
    let response = await fetch(
      'http://rentacar-jmrb.herokuapp.com/api/v1/car?available=1',
    );
    let datos = await response.json();
    datos.map((element) => {
      const li = document.createElement('li');
      li.textContent = element.title;
      lista.appendChild(li);
    });
  } catch (error) {
    console.error(error.message);
  }
};

window.onload = loadCars;
