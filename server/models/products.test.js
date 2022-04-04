const { setupDatabase } = require("../common/test-utils");

const { createProduct, getProduct } = require("./products");

setupDatabase();

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
