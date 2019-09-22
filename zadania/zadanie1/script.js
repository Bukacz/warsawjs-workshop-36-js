const name = prompt("Proszę podaj swoję imię");
const age = prompt("Podaj swój wiek");

function hello(name, age) {
  ageRetire = 65;
  const timeToRetire = ageRetire - age;

  alert(
    `Witaj ${name}, ${
      timeToRetire <= 0
        ? `Jesteś emerytem`
        : `Do emerytury zostało Ci ${timeToRetire} lat`
    }`
  );
}

function freeFrom(age) {
  let status;

  if (age > 0 && age < 15) {
    status = "od szkoły";
  } else if (age >= 15 && age < 20) {
    status = " od gimnazjum";
  } else if (age >= 20 && age < 65) {
    status = "od pracy/studiów";
  } else {
    status = "bo jesteś emerytem więc masz wolne cały czas";
  }
  alert("Masz dzisiaj wolne " + status);
}

function multiNameDay(name) {
  const nameDay = [
    "Joachim",
    "Maurycy",
    "Tomasz",
    "Bazyla",
    "Daria",
    "Digna",
    "Eksuperiusz",
    "Emeryta",
    "Emmeram",
    "Emmeran",
    "Feliks",
    "Ignacy",
    "Imbram",
    "Innocenty",
    "Jonasz",
    "Józefa",
    "Kandyd",
    "Prosimir",
    "Tacjusz",
    "Wiktor",
    "Witalis"
  ];
  const arrayToCheck = nameDay.map(el => el.toLowerCase());
  if (arrayToCheck.includes(name.toLowerCase()))
    alert("Wszystkiego najlepszego w dniu imienin " + name);
}

function animalLover(count) {
  if (count >= 5) {
    alert("Gratuluję, jesteś honorowym miłośnikiem zwierząt WarsawJS");
  } else if (count < 5 && count > 3) {
    alert("Widać, że szalejesz za zwierzętami!");
  } else if (count > 0 && count <= 3) {
    alert("Widać, że bardzo lubisz zwierzęta!");
  }
}

function animalList() {
  const animals = prompt(
    "Wymień wszystkie swoje ulubione zwierzęta, jako oddzielenia użyj spacji"
  );

  if (animals) {
    const animalsArray = animals.split(" ");

    hasDog(animalsArray);

    alert(
      animalsArray[animalsArray.length - 1] + " jest smutny, że jest na końcu"
    );

    animalLover(animalLover.length);
  } else {
    alert("Nie masz serca");
  }
}

function hasDog(array) {
  //   if (array.includes("pies")) alert("Hau Hau!");

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "pies") alert("Hau Hau");
  }
}

hello(name, age);
freeFrom(age);
multiNameDay(name);
animalList();
