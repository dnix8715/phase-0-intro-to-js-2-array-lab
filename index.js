const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);
function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
  }
  function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
  }
  function destructivelyRemoveLastCat(Garfield) {
    cats.pop(Garfield);
  }
  function destructivelyRemoveFirstCat(Milo) {
    cats.shift(Milo);
  }
  function appendCat(Broom) {
    const newCats = [...cats, Broom];
    return newCats;
  }
  function prependCat(cat) {
    const newCats = [cat, ...cats];
     return newCats;
  }
  function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats;
  }
  function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
  }
  