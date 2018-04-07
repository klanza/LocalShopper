const ko = require('nekodb');
const Product = require('../models').Product;
const User = require('../models').User;


const productSeed = [
  {
    productName: 'Apollo Athletics S-HAMMER-20 Steel Sledge Hammer - 20 lbs',
    sku: 'APLA083',
    upc: null,
    serialNumber: 'S-Hammer-20',
    price: 45.81,
    seller: 0,
    keywords: ['hammer', 'big hammer', 'slege hammer', '20lb sledge', 'sledge'],
  },
  {
    productName: 'ABC Hammers ABC14DB Polyurethane Dead Blow Hammer, 12-Pound',
    sku: null,
    upc: null,
    serialNumber: 'abc14db',
    price: 146.16,
    seller: 0,
    keywords: ['hammer', 'big hammer', 'dead blow', '12lb', 'sledge', '14lb'],
  },
  {
    productName: 'Lisle Water Pump Sprocket Holders 13800',
    sku: null,
    upc: '083045138006',
    serialNumber: 'LIL-13800',
    price: 26.97,
    seller: 0,
    keywords: ['water pump tool', 'water pump', 'ecotec', '2.2l', '2.4l', 'GM', 'Chevy'],
  },
  {
    productName: 'Plantronics Backbeat Fit Bluetooth Headphones',
    sku: null,
    upc: '017229157354',
    serialNumber: '49166404',
    price: 84.99,
    seller: 1,
    keywords: ['bluetooth headphones', 'sport headphones', 'Pantronics', 'Backbeat Fit'],
  },
  {
    productName: 'Plantron BackBeat GO 3 Wireless Earbuds with Charging Case',
    sku: '9092917',
    upc: '017229152540',
    serialNumber: '204353-01',
    price: 89.99,
    seller: 1,
    keywords: ['bluetooth headphones', 'sport headphones', 'Pantronics', 'Backbeat Go', 'earbuds', 'bluetooth earbuds'],
  },
  {
    productName: 'Yamaha F325D Acoustic Guitar',
    sku: null,
    upc: null,
    serialNumber: 'F325D',
    price: 149.99,
    seller: 2,
    keywords: ['guitar', 'acoustic', 'instrument'],
  },
  {
    productName: 'Rogue Travel / Starter Banjo',
    sku: 511195,
    upc: null,
    serialNumber: null,
    price: 119.99,
    seller: 2,
    keywords: ['banjo', 'beginner', 'instrument'],
  },
  {
    productName: 'Lisle STRETCH BELT REMOVER/INSTALLER 59370',
    sku: null,
    upc: '0083045593706',
    serialNumber: '59370 LIS LP',
    price: 21.33,
    seller: 0,
    keywords: ['pulley', 'belt tool', 'belt remover', 'strech belt tool', 'strech belt'],
  },
  {
    productName: 'BMW A/C Belt Installer - CTA 3458',
    sku: null,
    upc: null,
    serialNumber: '83300494518',
    price: 24.39,
    seller: 0,
    keywords: ['pulley', 'belt tool', 'belt remover', 'strech belt tool', 'strech belt', 'BMW'],
  },
];


const userSeed = [

{
  _id: 0,
  username: 'darwood',
  password: 'super secret password',
  address: '123 E. Fake St.',
  picture: null,
  storeName: 'The Junk Pile',
  mapLng: null,
  mapLong: null,
  storeHours: [],
},
{
  _id: 1,
  username: 'Kenny',
  password: 'super secret password',
  address: '435 E. Fake St.',
  picture: null,
  storeName: 'The Better Pile',
  mapLng: null,
  mapLong: null,
  storeHours: [],
},
{
  _id: 2,
  username: 'Jan',
  password: 'super secret password',
  address: '543 E. Fake Rd.',
  picture: null,
  storeName: 'Emporium Unlimited',
  mapLng: null,
  mapLong: null,
  storeHours: [],
},
];

async; function seed() {
  try {
    savedUsers = await; Promise.all(userSeed.map((user) => User.create(user).save()));
    return Promise.all(productSeed.map((product) => Product.create(product).save()));
  } catch (err) {
      console.log(err);
    }
}

seed().then(() => console.log('all done!')).catch((err) => console.log(err));
