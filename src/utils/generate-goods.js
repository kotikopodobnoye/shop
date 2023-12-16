export function generateGoods(length = 10) {
  const goods = [];

  for (let i = 0; i < length; i++) {
    goods.push(generateGood());
  }

  return goods;
}

const names = [
  "Sweatshirt",
  "Sneakers",
  "Shoes",
  "Jeans",
  "T-shirt",
  "Shirt",
  "Sweatshirt",
  "Hoodie",
  "Heels",
  "Trainers",
  "Bag",
  "Glasses",
];

const imgUrls = [
  "https://i.pinimg.com/564x/24/47/ce/2447cedd7e870d22590d1cb04fccf440.jpg",
];

const colors = [
  "teal",
  "olive",
  "black",
  "white",
  "pink",
  "grey",
  "beige",
  "maroon",
  "yellow",
];

const categories = ["Clothes", "Shoes", "Accessories"];

const descriptions = [
  "Timeless and elegant",
  "Relaxed and easygoing",
  "Bold and eye-catching",
  "Sleek and functional",
  "Cool and effortless",
  "Polished and professional",
  "Warm and timeless",
  "Sophisticated and luxurious",
  "Casual and versatile",
  "Fashionable and edgy",
];

const random = {
  of: (array) => array[Math.floor(Math.random() * array.length)],
  from: (min, max) => Math.floor(Math.random() * (max - min + 1) + min),
  id: () => Math.random().toString(36).substring(2),
};

function generateGood() {
  const id = random.id();
  const name = random.of(names);
  const description = random.of(descriptions);
  const color = random.of(colors);
  const price = random.from(10, 10000);
  const rating = random.from(1, 100);
  const imgUrl = random.of(imgUrls);
  const category = random.of(categories);

  return { id, name, description, color, price, rating, imgUrl, category };
}
