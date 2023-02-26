class Product {
  constructor(id, name, image, price, stock) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.stock = stock;
  }
}

const products = [
  new Product(1, "Mac", "", 90000, 0),
  new Product(2, "Iphone", "", 50000, 10),
];
let count = products.length;

exports.findAll = () => products

exports.findByPrice = (min, max) => {
  const result = products.filter(
    (product) => product.price >= min && product.price <= max
  );
  return result;
};

exports.findById = (id) => {
  const result = products.filter((product) => product.id == id);
	return result
};

exports.add = (product, file) => {
  count = count + 1;
  const productNew = new Product(count, product.name, file ? file.filename: "", product.price, product.stock);
  products.push(productNew);
  return productNew
};

exports.update= (id, product, file) => {
  const index = products.findIndex((product) => product.id == id);
  if (index !== -1) {
    const productUpdated = new Product(Number(id), product.name, file ? file.filename: products[index].image, product.price, product.stock);
    products[index] = productUpdated;
    return productUpdated
  }
	return null;
};

exports.remove = (id) => {
  const index = products.findIndex((product) => product.id == id);
  if (index !== -1) {
    products.splice(index, 1);
    return true
  }
	return false
};
