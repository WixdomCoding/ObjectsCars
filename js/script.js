
class Car {
    constructor(name, img, price, model, year) {
        this.name = name;
        this.img = img;
        this.price = price;
        this.model = model;
        this.year = year;
    }
}
const cars = [new Car("Lada", "img/oka.jpeg", "100000", "Oka", "2004"), new Car("BMW", "img/m4comp.jpeg", "90000", "M4-competition", "2018"), new Car("Mercedes", "img/amg.jpeg", "15145", "AMG", "2009"), 
new Car("Lada", "img/1500.jpeg", "20105", "1500", "1954")
, new Car("Nissan", "img/gtr.jpeg", "10200", "GTR", "2015")
, new Car("Nissan", "img/gtr.jpeg", "10200", "GTR", "2015")
, new Car("Nissan", "img/gtr.jpeg", "10200", "GTR", "2015")
, new Car("Nissan", "img/gtr.jpeg", "10200", "GTR", "2015")
, new Car("Nissan", "img/gtr.jpeg", "10200", "GTR", "2015")
, new Car("Nissan", "img/gtr.jpeg", "10200", "GTR", "2015")]

cars.map((item) => {
    let carHolder = document.createElement("div");
    carHolder.style.width = "50%"
    carHolder.style.margin = "auto"
    carHolder.style.textAlign = "center"

    let carBrand = document.createElement("h1");
    carBrand.textContent = item.name;

    let carImg = document.createElement("img");
    carImg.src = item.img;
    carImg.style.width = "50%";

    let carCost = document.createElement("h2");
    carCost.textContent = item.price;

    let carModel = document.createElement("h3");
    carModel.textContent = item.model;

    let carYear = document.createElement("h4");
    carYear.textContent = item.year;

    
    carHolder.appendChild(carImg);
    carHolder.appendChild(carBrand);
    carHolder.appendChild(carCost);
    carHolder.appendChild(carModel);
    carHolder.appendChild(carYear);
    document.body.appendChild(carHolder);
})

console.log(cars)