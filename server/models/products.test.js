const mongoose = require("mongoose");
const { getProduct, createProduct } = require("./products");

const MONGODB_TEST_URL = "mongodb://127.0.0.1/test-ecommerce";

beforeAll(async () => {
  await mongoose.connect(MONGODB_TEST_URL);
});

afterEach(async () => {
  for (const collection of Object.values(mongoose.connection.collection)) {
    await collection.deleteMany();
  }
});

afterAll(async () => {
  await mongoose.connection.close();
});

test("should create product", async () => {
  const newProduct = await createProduct({
    name: "New Product",
    sku: "XYZ-000",
    price: 499,
    description: "A new product",
    thumbnail: "/fake-image-thumbnail.jpg",
    image: "/fake-image.jpg"
  });
  const product = await getProduct("XYZ-000");
  expect(product.name).toEqual(newProduct.name);
});

test("SKUs should be unique", async () => {
  const fakeProduct = {
    name: "New Product",
    sku: "XYZ-000",
    price: 499,
    description: "A new product",
    thumbnail: "/fake-image-thumbnail.jpg",
    image: "/fake-image.jpg"
  };
  await createProduct(fakeProduct);
  await expect(createProduct(fakeProduct)).rejects.toThrowError("Oh no!");
});
