const computer = {
  name: "MacBook Pro",
  releaseYear: 2017,
  specs: {
    numberOfUsbs: 4,
    cpu: {
      name: "Intel Core i5",
      cores: 2,
      frequency: 3.1
    },
    memory: 16,
    gpu: {
      memory: 1.5,
      name: "Intel Iris Plus Graphics 650"
    }
  }
};

console.log(
  `${computer.name} (${computer.releaseYear}, ${computer.specs.numberOfUsbs} porty USB)`
);
console.log(
  `Procesor: ${computer.specs.cpu.frequency} GHz ${computer.specs.cpu.name} ${computer.specs.cpu.cores} rdzenie`
);
console.log(`Pamięć: ${computer.specs.memory}`);
console.log(
  `Karta graficzna: ${computer.specs.gpu.name} ${computer.specs.gpu.memory}`
);

const employees = [
  {
    name: "Andrzej Małek",
    position: "manager",
    responsibleForRoom: 102,
    age: 41
  },
  {
    name: "Sławomierz Furmanek",
    position: "bathroomCleaner",
    responsibleForRoom: 101,
    age: 35
  },
  {
    name: "Ludomir Michalik",
    position: "shopAssistant",
    age: 31
  },
  {
    name: "Żytomir Sekula",
    position: "shopAssistant",
    age: 25
  },
  {
    name: "Balbina Trzcinska",
    position: "customerSatisfactionSpecialist",
    responsibleForRoom: 100,
    age: 23
  }
];

const shop = {
  rooms: [102, 101, 100],
  manager: {},
  customerSatisfactionSpecialist: {},
  shopAssistants: [],
  bathroomCleaners: {},
  averageAge: null
};

function makeShop(shop) {
  let ageCount = 0;
  let sumAge = 0;
  employees.forEach(({ name, position, responsibleForRoom, age }) => {
    if (position === "shopAssistant") {
      shop.shopAssistants.push({ name });
    }

    if (shop.rooms.includes(responsibleForRoom)) {
      if (position === "manager") {
        shop.manager = { name };
      }
      if (position === "bathroomCleaner") {
        shop.bathroomCleaners = { name };
      }
      if (position === "customerSatisfactionSpecialist") {
        shop.customerSatisfactionSpecialist = { name };
      }
    }
    sumAge += age;
    ageCount++;
    shop.averageAge = sumAge / ageCount;
  });
}

makeShop(shop);
console.log(shop);

const marks = {
  Polski: 4,
  Matematyka: 4,
  Fizyka: 3,
  Historia: 3,
  Geografia: 3,
  Chemia: 3,
  WF: 2,
  Religia: 2
};

const importances = {
  polski: 4,
  matematyka: 4,
  fizyka: 3,
  historia: 3,
  geografia: 3,
  chemia: 3,
  wf: 2,
  religia: 2
};

function checkIfDiscount(marks, importances) {
  const times = Object.keys(marks).map(
    el => marks[el] * importances[el.toLowerCase()]
  );
  const timesSum = Object.values(times).reduce((prev, acc) => {
    return prev + acc;
  }, 0);
  const importencesSum = Object.values(importances).reduce((prev, acc) => {
    return prev + acc;
  }, 0);

  const average = (timesSum / importencesSum).toFixed(2);
  console.log(average);

  if (average >= 4.5) {
    alert("Gratulacje, masz zniżkę!");
  } else {
    alert("Niestety, Twoja średnia " + average + " jest za niska");
  }
}

checkIfDiscount(marks, importances);
