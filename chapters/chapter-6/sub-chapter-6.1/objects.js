const Car = (name, brand, year, formerOwners = []) => {
    return {
        name: name,
        brand: brand,
        year: year,
        formerOwners: formerOwners,
        getInformations: function(){
            return `${this.name} - ${this.brand} - ${this.year} - ${this.formerOwners.join(", ")}`;
        }
    };
};

const myFirstCar = {
    name: "Thunderbird",
    brand: "Ford",
    year: 1956,
    formerOwners: ["Clark", "Joe", "Jerry"],
    getInformations: function(){
        return `${this.name} - ${this.brand} - ${this.year}`;
    }
};

const mySecondCar = Car("Mercury Cougar", "Ford", 1968, ["Jeff"]);

console.log(Car, myFirstCar, mySecondCar);

console.log("-----------------------------------------------------------------------------------------------------");

function Book(initName, initAuthor){
    const name = `${initName}`;
    const author = `${initAuthor}`;

    this.getName = () => name;
    this.getAuthor = () => author;
};

const bookWithNew = new Book("foo", "bar");
const bookWithoutNew = Book("foo", "bar");
const favoriteBook = new Book("Democracy: The God That Failed", "Hans-Hermann Hoppe");

Book.prototype.isBook = true;
Book.prototype.throwAlertWithInformations = function(){
    alert(`${this.getName()} - ${this.getAuthor()}`);
};

console.log(bookWithNew, bookWithNew.throwAlertWithInformations(), bookWithoutNew);
console.log(favoriteBook, favoriteBook.getName(), favoriteBook.getAuthor(), favoriteBook.isBook, favoriteBook.throwAlertWithInformations());

Book.prototype.throwAlertWithInformations = function(){
    return `${this.getName()} - ${this.getAuthor()}`;
};

console.log(bookWithNew.throwAlertWithInformations());
console.log(favoriteBook.throwAlertWithInformations());

console.log("-----------------------------------------------------------------------------------------------------");

const Instrument = (function(){
    const Instrument = function(initName){
        let name = initName;

        this.getName = () => name;
        this.setName = newName => name = newName;
    };

    Instrument.prototype.playMusic = "♩♪♫♬𝄞";

    return Instrument;
})();

const Guitar = (function(extend){
    const Guitar = function(initName, initBrand){
        extend.call(this, initName);

        let brand = initBrand;

        this.getBrand = () => brand;
        this.setBrand = newBrand => brand = newBrand;
    };

    Guitar.prototype.isGuitar = true;

    return Guitar;
})(Instrument);

console.log(Guitar, Instrument);

const myGuitar = new Guitar("Vintera 50s Stratocaster Maple", "Fender");

console.log(myGuitar.getName(), myGuitar.getBrand(), myGuitar.isGuitar, myGuitar.playMusic, myGuitar.setName("testName"), myGuitar.setBrand("testBrand"), myGuitar.getName(), myGuitar.getBrand());