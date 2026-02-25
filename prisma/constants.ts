export const categories = [
  {
    name: 'Пиццы',
  },
  {
    name: 'Завтраки',
  },
  {
    name: 'Закуски',
  },
  {
    name: 'Коктейли',
  },
  {
    name: 'Напитки',
  },
]

export const ingredients = [
  {
    name: 'Сырный бортик',
    price: 179,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
  },
  {
    name: 'Сливочная моцарелла',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
  },
  {
    name: 'Сыры чеддер и пармезан',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
  },
  {
    name: 'Острый перец халапеньо',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
  },
  {
    name: 'Нежный цыпленок',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
  },
  {
    name: 'Шампиньоны',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
  },
  {
    name: 'Бекон',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
  },
  {
    name: 'Ветчина',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
  },
  {
    name: 'Пикантная пепперони',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
  },
  {
    name: 'Острая чоризо',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
  },
  {
    name: 'Маринованные огурчики',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
  },
  {
    name: 'Свежие томаты',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
  },
  {
    name: 'Красный лук',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
  },
  {
    name: 'Сочные ананасы',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
  },
  {
    name: 'Итальянские травы',
    price: 39,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
  },
  {
    name: 'Сладкий перец',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
  },
  {
    name: 'Кубики брынзы',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
  },
  {
    name: 'Митболы',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }))

export const products = [
  {
    name: 'Омлет с ветчиной и сыром',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019860575a3175329bf1d7ca6facf8f5.avif',
    categoryId: 2,
  },
  {
    name: 'Омлет с пепперони',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019a761f046d78b78d7a47d74d4ff54b.avif',
    categoryId: 2,
  },
  {
    name: 'Кофе Латте',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/01981db14de9780a882809085aeede60.avif',
    categoryId: 2,
  },
  {
    name: 'Денвич ветчина и сыр',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019897d07b6c7939a756349c707b6e43.avif',
    categoryId: 3,
  },
  {
    name: 'Куринные наггетсы',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198131dce8b706bb3ed5a169df1bc84.avif',
    categoryId: 3,
  },
  {
    name: 'Картофель из печи',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019bd3d8e05c7916b49a779e4d430294.avif',
    categoryId: 3,
  },
  {
    name: 'Додстер',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/01980cb92528769295aeb186fb501f8e.avif',
    categoryId: 3,
  },
  {
    name: 'Острый Додстер',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/01980cb84cfb7023b6eca978780d30c5.avif',
    categoryId: 3,
  },
  {
    name: 'Персиковый молочный коктейль',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/0199864e07967186b27287dc88685579.avif',
    categoryId: 4,
  },
  {
    name: 'Классический молочный коктейль',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198227af30a72b3b2614e9da1d277a3.avif',
    categoryId: 4,
  },
  {
    name: 'Кофе Капучино',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019840c1305675868edac68c862bc0e2.avif',
    categoryId: 4,
  },
  {
    name: 'Кофе Американо',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198227e7648741ead340c4c96da45a4.avif',
    categoryId: 4,
  },
  {
    name: 'Кофе Карамельный капучино ',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/01998643d08072eb8dec77eeca378a50.avif',
    categoryId: 4,
  },
]
