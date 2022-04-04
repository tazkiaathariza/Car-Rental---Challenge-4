class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }


render() {
    return `
    <div class="card col-lg-4 mt-4">
    <div class="card-body">
      <img src="${this.image}" class="imageCars"/>
      <div class="txt-Tipe">${this.manufacture}</div>
      <div class="txt-Harga">${this.rentPerDay}</div>
      <div class="txt-Caption">${this.description}</div>
      <div class="txt-Caption"><img src="Image/icon_users.svg">${this.capacity}</div>
      <div class="txt-Caption"><img src="Image/icon_settings.svg">${this.transmission}</div>
      <div class="txt-Caption"><img src="Image/icon_calendar.svg">${this.year}</div>
      <button type="submit" class="btn btn-success" id="btn-pilihMobil">Pilih Mobil</button>
    </div>
  </div>
    `;
  }
} 

 /* render() {
    return `
      <p>id: <b>${this.id}</b></p>
      <p>plate: <b>${this.plate}</b></p>
      <p>manufacture: <b>${this.manufacture}</b></p>
      <p>model: <b>${this.model}</b></p>
      <p>available at: <b>${this.availableAt}</b></p>
      <img src="${this.image}" alt="${this.manufacture}" width="64px">
    `;
  }
} */
