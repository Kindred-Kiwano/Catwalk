const productChar = [
  {
    title: 'size',
    messageOptions: [
      {message: 'A Size Too Small', sentiment: 1},
      {message: 'A 1/2 Size Too Small', sentiment: 3},
      {message: 'Perfect', sentiment: 5},
      {message: 'A 1/2 Size Too Large', sentiment: 3},
      {message: 'A Size Too Large', sentiment: 1}
    ],
    leftWord: 'Small',
    rightWord: 'Large',
    middleWord: 'Perfect'
  },
  {
    title: 'width',
    messageOptions: [
      {message: 'Too Narrow', sentiment: 1},
      {message: 'Slightly Narrow', sentiment: 3},
      {message: 'Perfect', sentiment: 5},
      {message: 'Slightly Wide', sentiment: 3},
      {message: 'Too Wide', sentiment: 1}
    ],
    leftWord: 'Narrow',
    rightWord: 'Wide',
    middleWord: 'Perfect'
  },
  {
    title: 'comfort',
    messageOptions: [
      {message: 'Uncomfortable', sentiment: 1},
      {message: 'Slightly Uncomfortable', sentiment: 2},
      {message: 'Ok', sentiment: 3},
      {message: 'Comfortable', sentiment: 4},
      {message: 'Perfect', sentiment: 5}
    ],
    leftWord: 'Uncomfortable',
    rightWord: 'Perfect',
    middleWord: 'Ok'
  },
  {
    title: 'quality',
    messageOptions: [
      {message: 'Poor', sentiment: 1},
      {message: 'Below Average', sentiment: 2},
      {message: 'What I Expected', sentiment: 3},
      {message: 'Pretty Great', sentiment: 4},
      {message: 'Perfect', sentiment: 5}
    ],
    leftWord: 'Poor',
    rightWord: 'Perfect',
    middleWord: 'So-So'
  },
  {
    title: 'length',
    messageOptions: [
      {message: 'Runs Short', sentiment: 1},
      {message: 'Runs Slightly Short', sentiment: 3},
      {message: 'Perfect', sentiment: 5},
      {message: 'Runs Slightly Long', sentiment: 3},
      {message: 'Runs Long', sentiment: 1}
    ],
    leftWord: 'Short',
    rightWord: 'Long',
    middleWord: 'Perfect'
  },
  {
    title: 'fit',
    messageOptions: [
      {message: 'Runs Tight', sentiment: 1},
      {message: 'Runs Slightly Tight', sentiment: 3},
      {message: 'Perfect', sentiment: 5},
      {message: 'Runs Slightly Loose', sentiment: 3},
      {message: 'Runs Loose', sentiment: 1}
    ],
    leftWord: 'Tight',
    rightWord: 'Loose',
    middleWord: 'Perfect'
  }
];

export default productChar;