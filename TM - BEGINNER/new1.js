class Car {
    constructor(brand, model, mfd, country) {
        this.brand = brand;
        this.model = model;
        this.mfd = new Date(mfd);
        this.country = country;
    }

    fullName() {
        return `${this.brand} ${this.model}`;
    }

}

const c1 = new Car('Nissan', 'Sunny', '1998-10-12', 'Malesiya');

console.log(c1);
