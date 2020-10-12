(function(){
    this.app = {};

    const favoriteNumber = 7;
    const favoriteColors = ["black", "white", "blue"];
    const sayHello = () => alert("hello!");
    const information = {
        name: "João",
        age: 18
    };

    this.app.favoriteNumber = favoriteNumber;
    Object.assign(this.app, information, { sayHello, favoriteColors: favoriteColors });
})();

console.log(this.app);