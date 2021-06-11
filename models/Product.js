function Product(
    productID,
    productName,
    productPrice,
    screen,
    backCamera,
    frontCamera,
    productImg,
    desc,
    type,
    productImage,
    inventory,
    rating
) {
    this.id = productID;
    this.name = productName;
    this.price = productPrice;
    this.screen = screen;
    this.backCamera = backCamera;
    this.frontCamera = frontCamera;
    this.img = productImg;
    this.desc = desc;
    this.type = type;
    this.image = productImage;
    this.inventory = inventory;
    this.rating = rating;
}
