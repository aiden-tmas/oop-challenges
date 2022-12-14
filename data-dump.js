function printCredentials(matrix) {
  for (item in matrix) {
    for (thing in matrix[item]) {
      splitString = matrix[item][thing][0].split(" ");
      console.log(`${thing} : ${splitString[0]}, ${splitString[1]}`);
    }
  }
}

const data = [
  {
    Google: [
      "test@test.com 123",
      "test@test.com 321",
      "test@test.com 451",
      "test@test.com 123",
    ],
  },
  {
    Yahoo: [
      "test@test.com 123",
      "test@test.com 321",
      "test@test.com 451",
      "test@test.com 451",
    ],
  },
  {
    IBM: [
      "test@test.com 888",
      "test@test.com 123",
      "test@test.com 888",
      "test@test.com 123",
    ],
  },
  {
    GREGS: [
      "test@test.com 123",
      "test@test.com 888",
      "test@test.com 123",
      "test@test.com 123",
    ],
  },
  {
    "AUTO SHOP": [
      "test@test.com 888",
      "test@test.com 555",
      "test@test.com 555",
      "test@test.com 123",
    ],
  },
  {
    "PAWN SHOP": [
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 123",
    ],
  },
  {
    Nike: [
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 555",
      "test@test.com 123",
    ],
  },
  {
    Franks: [
      "test@test.com 123",
      "test@test.com 888",
      "test@test.com 555",
      "test@test.com 123",
    ],
  },
  {
    Tims: [
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 888",
      "test@test.com 123",
    ],
  },
  {
    Apple: [
      "test@test.com 123",
      "test@test.com 555",
      "test@test.com 123",
      "test@test.com 123",
    ],
  },
  {
    Sony: [
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 123",
    ],
  },
  {
    Disney: [
      "test@test.com 123",
      "test@test.com 888",
      "test@test.com 123",
      "test@test.com 123",
    ],
  },
  {
    Popies: [
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 123",
    ],
  },
  {
    Sally: [
      "test@test.com 123",
      "test@test.com 555",
      "test@test.com 888",
      "test@test.com 123",
    ],
  },
  {
    Henry: [
      "test@test.com 123",
      "test@test.com 555",
      "test@test.com 555",
      "test@test.com 555",
    ],
  },
  {
    "Dave's": [
      "test@test.com 123",
      "test@test.com 888",
      "test@test.com 555",
      "test@test.com 123",
    ],
  },
];

printCredentials(data);
