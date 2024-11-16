// codeCademy project to learn about creating Classes

class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get averageRating() {
    return this._title;
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
  toggleCheckOutStatus() {
    if (this.isCheckedOut === true) {
      this.isCheckedOut = false;
    } else {
      this.isCheckedOut = true;
    }
  }
  getAverageRating() {
    let ratingsSum = this._ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    const lengthOfArray = this._ratings.length;
    if (ratingsSum === 0) {
      return "No ratings yet";
    } else {
      return Math.round(ratingsSum / lengthOfArray);
    }
  }
  addRating(rating) {
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._title = title;
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, runTime) {
    super(title);
    this._title = title;
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
