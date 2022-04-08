class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.jumlahPenumpang = document.getElementById("jumlahPenumpang");
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async loadFilter(jumlahPenumpang) {
    console.log('jumlahPenumpang', jumlahPenumpang);
    const cars = await Binar.listCars((item) => {
     return item.capacity == Number(jumlahPenumpang);
    });
    Car.init(cars);
  }

  /* async load() {
    const cars = await Binar.listCars((item) => {
     return item.available === true;
    });
    Car.init(cars);
  } */

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
