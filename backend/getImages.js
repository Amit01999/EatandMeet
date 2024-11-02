// import { readdir } from 'fs';
// import { extname } from 'path';

// // Function to read the folder and extract image names
// function getImageNamesFromFolder(folderPath) {
//   const supportedExtensions = [
//     '.jpg',
//     '.jpeg',
//     '.png',
//     '.gif',
//     '.bmp',
//     '.webp',
//   ]; // Add more extensions if needed
//   let imageNames = [];

//   // Read all files from the folder
//   readdir(folderPath, (err, files) => {
//     if (err) {
//       console.error('Error reading the folder:', err);
//       return;
//     }

//     // Filter out images based on their extension
//     imageNames = files.filter(file =>
//       supportedExtensions.includes(extname(file).toLowerCase())
//     );

//     console.log('Images found:', imageNames);
//   });
// }

// // Usage example:
// const folderPath = './uploads'; // Specify your folder path
// getImageNamesFromFolder(folderPath);
// img = [
//   '1721230229396food_1.png',
//   '1721230250509food_2.png',
//   '1721230271083food_3.png',
//   '1721230292572food_4.png',
//   '1721230327724food_5.png',
//   '1721230347839food_6.png',
//   '1721230369220food_7.png',
//   '1721230390461food_8.png',
//   '1721230424253food_9.png',
//   '1721230457164food_10.png',
//   '1721230479852food_11.png',
//   '1721230502125food_12.png',
//   '1721230573573food_13.png',
//   '1721230594812food_14.png',
//   '1721230618405food_15.png',
//   '1721230650301food_16.png',
//   '1721230675389food_17.png',
//   '1721230692140food_18.png',
//   '1721230716637food_19.png',
//   '1721230733395food_20.png',
//   '1721230768637food_21.png',
//   '1721230773436food_21.png',
//   '1721230797133food_22.png',
//   '1721230798482food_22.png',
//   '1721230832486food_23.png',
//   '1721230854038food_24.png',
//   '1721230855641food_24.png',
//   '1721230879483food_25.png',
//   '1721230898246food_26.png',
//   '1721230921141food_27.png',
//   '1721230922314food_27.png',
//   '1721230942632food_28.png',
//   '1721230970839food_29.png',
//   '1721230991173food_30.png',
//   '1721231013822food_31.png',
//   '1721231033180food_32.png',
// ];
let img = [
  '1721230229396food_1.png',
  '1721230250509food_2.png',
  '1721230271083food_3.png',
  '1721230292572food_4.png',
  '1721230327724food_5.png',
  '1721230347839food_6.png',
  '1721230369220food_7.png',
  '1721230390461food_8.png',
  '1721230424253food_9.png',
  '1721230457164food_10.png',
  '1721230479852food_11.png',
  '1721230502125food_12.png',
  '1721230573573food_13.png',
  '1721230594812food_14.png',
  '1721230618405food_15.png',
  '1721230650301food_16.png',
  '1721230675389food_17.png',
  '1721230692140food_18.png',
  '1721230716637food_19.png',
  '1721230733395food_20.png',
  '1721230768637food_21.png',
  '1721230773436food_21.png',
  '1721230797133food_22.png',
  '1721230798482food_22.png',
  '1721230832486food_23.png',
  '1721230854038food_24.png',
  '1721230855641food_24.png',
  '1721230879483food_25.png',
  '1721230898246food_26.png',
  '1721230921141food_27.png',
  '1721230922314food_27.png',
  '1721230942632food_28.png',
  '1721230970839food_29.png',
  '1721230991173food_30.png',
  '1721231013822food_31.png',
  '1721231033180food_32.png',
];
let food = [
  {
    _id: '1',
    name: 'Greek salad',
    image: 'food_1',
    price: 80,
    description:
      'A refreshing blend of crisp vegetables, feta cheese, and olives, perfect for a healthy and delicious meal.',
    category: 'Salad',
  },
  {
    _id: '2',
    name: 'Veg salad',
    image: 'food_2',
    price: 90,
    description:
      'A colorful mix of fresh vegetables, offering a nutritious and flavorful option for any meal.',
    category: 'Salad',
  },
  {
    _id: '3',
    name: 'Clover Salad',
    image: 'food_3',
    price: 100,
    description:
      'A delightful combination of greens and toppings, providing a wholesome and tasty salad experience.',
    category: 'Salad',
  },
  {
    _id: '4',
    name: 'Chicken Salad',
    image: 'food_4',
    price: 120,
    description:
      'Tender chicken pieces mixed with fresh vegetables, making for a protein-packed and satisfying salad.',
    category: 'Salad',
  },
  {
    _id: '5',
    name: 'Lasagna Rolls',
    image: 'food_5',
    price: 70,
    description:
      'Classic lasagna flavors rolled into a convenient and delicious bite-sized form.',
    category: 'Rolls',
  },
  {
    _id: '6',
    name: 'Peri Peri Rolls',
    image: 'food_6',
    price: 60,
    description:
      'Spicy and flavorful peri peri sauce wrapped in a roll, perfect for a quick and tasty snack.',
    category: 'Rolls',
  },
  {
    _id: '7',
    name: 'Chicken Rolls',
    image: 'food_7',
    price: 120,
    description:
      'Juicy chicken wrapped in a roll, offering a satisfying and portable meal.',
    category: 'Rolls',
  },
  {
    _id: '8',
    name: 'Veg Rolls',
    image: 'food_8',
    price: 75,
    description:
      'A variety of fresh vegetables wrapped in a roll, perfect for a light and healthy meal.',
    category: 'Rolls',
  },
  {
    _id: '9',
    name: 'Ripple Ice Cream',
    image: 'food_9',
    price: 70,
    description:
      'Creamy ice cream with a ripple of flavor, ideal for a sweet treat.',
    category: 'Deserts',
  },
  {
    _id: '10',
    name: 'Fruit Ice Cream',
    image: 'food_10',
    price: 110,
    description:
      'Delicious ice cream made with real fruit, perfect for a refreshing dessert.',
    category: 'Deserts',
  },
  {
    _id: '11',
    name: 'Jar Ice Cream',
    image: 'food_11',
    price: 50,
    description: 'Convenient jar of ice cream, great for on-the-go enjoyment.',
    category: 'Deserts',
  },
  {
    _id: '12',
    name: 'Vanilla Ice Cream',
    image: 'food_12',
    price: 60,
    description:
      'Classic vanilla ice cream, rich and creamy for a timeless dessert.',
    category: 'Deserts',
  },
  {
    _id: '13',
    name: 'Chicken Sandwich',
    image: 'food_13',
    price: 60,
    description:
      'Grilled chicken sandwich with fresh toppings, perfect for a satisfying meal.',
    category: 'Sandwich',
  },
  {
    _id: '14',
    name: 'Vegan Sandwich',
    image: 'food_14',
    price: 90,
    description:
      'Delicious vegan sandwich with a variety of fresh vegetables and spreads.',
    category: 'Sandwich',
  },
  {
    _id: '15',
    name: 'Grilled Sandwich',
    image: 'food_15',
    price: 80,
    description:
      'Grilled to perfection, this sandwich is packed with flavorful fillings.',
    category: 'Sandwich',
  },
  {
    _id: '16',
    name: 'Bread Sandwich',
    image: 'food_16',
    price: 120,
    description:
      'Simple yet delicious bread sandwich with your choice of fillings.',
    category: 'Sandwich',
  },
  {
    _id: '17',
    name: 'Cup Cake',
    image: 'food_17',
    price: 70,
    description: 'Delightful cupcake, perfect for a sweet snack.',
    category: 'Cake',
  },
  {
    _id: '18',
    name: 'Vegan Cake',
    image: 'food_18',
    price: 60,
    description: 'Delicious vegan cake, made without any animal products.',
    category: 'Cake',
  },
  {
    _id: '19',
    name: 'Butterscotch Cake',
    image: 'food_19',
    price: 100,
    description:
      'Rich and flavorful butterscotch cake, perfect for any celebration.',
    category: 'Cake',
  },
  {
    _id: '20',
    name: 'Sliced Cake',
    image: 'food_20',
    price: 75,
    description: 'Conveniently sliced cake, ready to enjoy anytime.',
    category: 'Cake',
  },
  {
    _id: '21',
    name: 'Garlic Mushroom',
    image: 'food_21',
    price: 70,
    description:
      'Sautéed garlic mushrooms, a tasty and nutritious vegetarian option.',
    category: 'Pure Veg',
  },
  {
    _id: '22',
    name: 'Fried Cauliflower',
    image: 'food_22',
    price: 110,
    description: 'Crispy fried cauliflower, perfect as a snack or side dish.',
    category: 'Pure Veg',
  },
  {
    _id: '23',
    name: 'Mix Veg Pulao',
    image: 'food_23',
    price: 50,
    description: 'Flavorful mix vegetable pulao, a complete and healthy meal.',
    category: 'Pure Veg',
  },
  {
    _id: '24',
    name: 'Rice Zucchini',
    image: 'food_24',
    price: 60,
    description: 'Rice mixed with zucchini, a light and nutritious dish.',
    category: 'Pure Veg',
  },
  {
    _id: '25',
    name: 'Cheese Pasta',
    image: 'food_25',
    price: 80,
    description: 'Creamy cheese pasta, a delightful and comforting meal.',
    category: 'Pasta',
  },
  {
    _id: '26',
    name: 'Tomato Pasta',
    image: 'food_26',
    price: 60,
    description:
      'Pasta tossed in a tangy tomato sauce, perfect for a quick meal.',
    category: 'Pasta',
  },
  {
    _id: '27',
    name: 'Creamy Pasta',
    image: 'food_27',
    price: 70,
    description: 'Rich and creamy pasta, a delicious and satisfying dish.',
    category: 'Pasta',
  },
  {
    _id: '28',
    name: 'Chicken Pasta',
    image: 'food_28',
    price: 90,
    description: 'Pasta with tender chicken pieces, perfect for a hearty meal.',
    category: 'Pasta',
  },
  {
    _id: '29',
    name: 'Butter Noodles',
    image: 'food_29',
    price: 70,
    description: 'Noodles tossed in butter, a simple and tasty dish.',
    category: 'Noodles',
  },
  {
    _id: '30',
    name: 'Veg Noodles',
    image: 'food_30',
    price: 60,
    description:
      'Noodles mixed with fresh vegetables, a healthy and quick meal.',
    category: 'Noodles',
  },
  {
    _id: '31',
    name: 'Japanese Noodles',
    image: 'food_31',
    price: 100,
    description: 'Authentic Japanese noodles, full of flavor and texture.',
    category: 'Noodles',
  },
  {
    _id: '32',
    name: 'Cooked Noodles',
    image: 'food_32',
    price: 75,
    description: 'Perfectly cooked noodles, ready to be enjoyed.',
    category: 'Noodles',
  },
];
food = food.map((item, index) => ({
  ...item,
  image: img[index],
}));

console.log(food);
