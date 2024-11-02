const fooddata = [
  {
    id: '1',
    name: 'Greek salad',
    image: '1721230229396food_1.png',
    price: 80,
    description:
      'A refreshing blend of crisp vegetables, feta cheese, and olives, perfect for a healthy and delicious meal.',
    category: 'Salad',
  },
  {
    id: '2',
    name: 'Veg salad',
    image: '1721230250509food_2.png',
    price: 90,
    description:
      'A colorful mix of fresh vegetables, offering a nutritious and flavorful option for any meal.',
    category: 'Salad',
  },
  {
    id: '3',
    name: 'Clover Salad',
    image: '1721230271083food_3.png',
    price: 100,
    description:
      'A delightful combination of greens and toppings, providing a wholesome and tasty salad experience.',
    category: 'Salad',
  },
  {
    id: '4',
    name: 'Chicken Salad',
    image: '1721230292572food_4.png',
    price: 120,
    description:
      'Tender chicken pieces mixed with fresh vegetables, making for a protein-packed and satisfying salad.',
    category: 'Salad',
  },
  {
    id: '5',
    name: 'Lasagna Rolls',
    image: '1721230327724food_5.png',
    price: 70,
    description:
      'Classic lasagna flavors rolled into a convenient and delicious bite-sized form.',
    category: 'Rolls',
  },
  {
    id: '6',
    name: 'Peri Peri Rolls',
    image: '1721230347839food_6.png',
    price: 60,
    description:
      'Spicy and flavorful peri peri sauce wrapped in a roll, perfect for a quick and tasty snack.',
    category: 'Rolls',
  },
  {
    id: '7',
    name: 'Chicken Rolls',
    image: '1721230369220food_7.png',
    price: 120,
    description:
      'Juicy chicken wrapped in a roll, offering a satisfying and portable meal.',
    category: 'Rolls',
  },
  {
    id: '8',
    name: 'Veg Rolls',
    image: '1721230390461food_8.png',
    price: 75,
    description:
      'A variety of fresh vegetables wrapped in a roll, perfect for a light and healthy meal.',
    category: 'Rolls',
  },
  {
    id: '9',
    name: 'Ripple Ice Cream',
    image: '1721230424253food_9.png',
    price: 70,
    description:
      'Creamy ice cream with a ripple of flavor, ideal for a sweet treat.',
    category: 'Deserts',
  },
  {
    id: '10',
    name: 'Fruit Ice Cream',
    image: '1721230457164food_10.png',
    price: 110,
    description:
      'Delicious ice cream made with real fruit, perfect for a refreshing dessert.',
    category: 'Deserts',
  },
  {
    id: '11',
    name: 'Jar Ice Cream',
    image: '1721230479852food_11.png',
    price: 50,
    description: 'Convenient jar of ice cream, great for on-the-go enjoyment.',
    category: 'Deserts',
  },
  {
    id: '12',
    name: 'Vanilla Ice Cream',
    image: '1721230502125food_12.png',
    price: 60,
    description:
      'Classic vanilla ice cream, rich and creamy for a timeless dessert.',
    category: 'Deserts',
  },
  {
    id: '13',
    name: 'Chicken Sandwich',
    image: '1721230573573food_13.png',
    price: 60,
    description:
      'Grilled chicken sandwich with fresh toppings, perfect for a satisfying meal.',
    category: 'Sandwich',
  },
  {
    id: '14',
    name: 'Vegan Sandwich',
    image: '1721230594812food_14.png',
    price: 90,
    description:
      'Delicious vegan sandwich with a variety of fresh vegetables and spreads.',
    category: 'Sandwich',
  },
  {
    id: '15',
    name: 'Grilled Sandwich',
    image: '1721230618405food_15.png',
    price: 80,
    description:
      'Grilled to perfection, this sandwich is packed with flavorful fillings.',
    category: 'Sandwich',
  },
  {
    id: '16',
    name: 'Bread Sandwich',
    image: '1721230650301food_16.png',
    price: 120,
    description:
      'Simple yet delicious bread sandwich with your choice of fillings.',
    category: 'Sandwich',
  },
  {
    id: '17',
    name: 'Cup Cake',
    image: '1721230675389food_17.png',
    price: 70,
    description: 'Delightful cupcake, perfect for a sweet snack.',
    category: 'Cake',
  },
  {
    id: '18',
    name: 'Vegan Cake',
    image: '1721230692140food_18.png',
    price: 60,
    description: 'Delicious vegan cake, made without any animal products.',
    category: 'Cake',
  },
  {
    id: '19',
    name: 'Butterscotch Cake',
    image: '1721230716637food_19.png',
    price: 100,
    description:
      'Rich and flavorful butterscotch cake, perfect for any celebration.',
    category: 'Cake',
  },
  {
    id: '20',
    name: 'Sliced Cake',
    image: '1721230733395food_20.png',
    price: 75,
    description: 'Conveniently sliced cake, ready to enjoy anytime.',
    category: 'Cake',
  },
  {
    id: '21',
    name: 'Garlic Mushroom',
    image: '1721230768637food_21.png',
    price: 70,
    description:
      'Sautéed garlic mushrooms, a tasty and nutritious vegetarian option.',
    category: 'Pure Veg',
  },
  {
    id: '22',
    name: 'Fried Cauliflower',
    image: '1721230773436food_21.png',
    price: 110,
    description: 'Crispy fried cauliflower, perfect as a snack or side dish.',
    category: 'Pure Veg',
  },
  {
    id: '23',
    name: 'Mix Veg Pulao',
    image: '1721230797133food_22.png',
    price: 50,
    description: 'Flavorful mix vegetable pulao, a complete and healthy meal.',
    category: 'Pure Veg',
  },
  {
    id: '24',
    name: 'Rice Zucchini',
    image: '1721230798482food_22.png',
    price: 60,
    description: 'Rice mixed with zucchini, a light and nutritious dish.',
    category: 'Pure Veg',
  },
  {
    id: '25',
    name: 'Cheese Pasta',
    image: '1721230832486food_23.png',
    price: 80,
    description: 'Creamy cheese pasta, a delightful and comforting meal.',
    category: 'Pasta',
  },
  {
    id: '26',
    name: 'Tomato Pasta',
    image: '1721230854038food_24.png',
    price: 60,
    description:
      'Pasta tossed in a tangy tomato sauce, perfect for a quick meal.',
    category: 'Pasta',
  },
  {
    id: '27',
    name: 'Creamy Pasta',
    image: '1721230855641food_24.png',
    price: 70,
    description: 'Rich and creamy pasta, a delicious and satisfying dish.',
    category: 'Pasta',
  },
  {
    id: '28',
    name: 'Chicken Pasta',
    image: '1721230879483food_25.png',
    price: 90,
    description: 'Pasta with tender chicken pieces, perfect for a hearty meal.',
    category: 'Pasta',
  },
  {
    id: '29',
    name: 'Butter Noodles',
    image: '1721230898246food_26.png',
    price: 70,
    description: 'Noodles tossed in butter, a simple and tasty dish.',
    category: 'Noodles',
  },
  {
    id: '30',
    name: 'Veg Noodles',
    image: '1721230921141food_27.png',
    price: 60,
    description:
      'Noodles mixed with fresh vegetables, a healthy and quick meal.',
    category: 'Noodles',
  },
  {
    id: '31',
    name: 'Japanese Noodles',
    image: '1721230922314food_27.png',
    price: 100,
    description: 'Authentic Japanese noodles, full of flavor and texture.',
    category: 'Noodles',
  },
  {
    id: '32',
    name: 'Cooked Noodles',
    image: '1721230942632food_28.png',
    price: 75,
    description: 'Perfectly cooked noodles, ready to be enjoyed.',
    category: 'Noodles',
  },
];
export { fooddata };
