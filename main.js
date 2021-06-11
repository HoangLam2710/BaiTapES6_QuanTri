function renderProduct(arrProduct) {
    var contentTable = "";
    for (let item of arrProduct) {
        var product = new Product(
            item.id,
            item.name,
            item.price,
            item.screen,
            item.backCamera,
            item.frontCamera,
            item.img,
            item.desc,
            item.type,
            item.image,
            item.inventory,
            item.rating
        );

        contentTable += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}$</td>
                <td>${product.screen}</td>
                <td>${product.backCamera}</td>
                <td>${product.frontCamera}</td>
                <td>${product.desc}</td>
                <td>${product.type}</td>
                <td><img class="img-fluid" src="${product.image}" alt="${product.img}" /></td>
                <td>${product.inventory}</td>
                <td>${product.rating}</td>
                <td><button class="btn btn-danger" onclick="xoaSanPham('${product.id}')">Xoá</button></td>
                <td><button class="btn btn-warning ml-2" onclick="suaSanPham('${product.id}')">Sửa</button></td>
            </tr>
        `;
    }

    document.querySelector("#tblProduct").innerHTML = contentTable;
}

async function getDataProduct() {
    try {
        var result = await axios({
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products",
            method: "get",
        });
        renderProduct(result.data);
    } catch (errors) {
        console.log(errors.response.data);
    }
}

getDataProduct();

document.getElementById("btnXacNhan").onclick = async function () {
    var product = new Product();
    product.id = document.querySelector("#productID").value;
    product.name = document.querySelector("#productName").value;
    product.price = document.querySelector("#productPrice").value;
    product.screen = document.querySelector("#screen").value;
    product.backCamera = document.querySelector("#backCamera").value;
    product.frontCamera = document.querySelector("#frontCamera").value;
    product.desc = document.querySelector("#desc").value;
    product.type = document.querySelector("#type").value;
    product.image = document.querySelector("#productImage").value;
    product.img = document.querySelector("#productImg").value;
    product.inventory = document.querySelector("#inventory").value;
    product.rating = document.querySelector("#rating").value;

    try {
        var result = await axios({
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products",
            method: "POST",
            data: product,
        });
        getDataProduct();
    } catch (errors) {
        console.log(errors.response.data);
    }
};

async function xoaSanPham(productID) {
    try {
        var result = await axios({
            url: `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products/${productID}`,
            method: "DELETE",
        });
        getDataProduct();
    } catch (errors) {
        console.log(errors.response.data);
    }
}

async function suaSanPham(productID) {
    try {
        var result = await axios({
            url: `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products/${productID}`,
            method: "GET",
        });
        var editProduct = result.data;

        document.querySelector("#productID").value = editProduct.id;
        document.querySelector("#productName").value = editProduct.name;
        document.querySelector("#productPrice").value = editProduct.price;
        document.querySelector("#screen").value = editProduct.screen;
        document.querySelector("#backCamera").value = editProduct.backCamera;
        document.querySelector("#frontCamera").value = editProduct.frontCamera;
        document.querySelector("#desc").value = editProduct.desc;
        document.querySelector("#type").value = editProduct.type;
        document.querySelector("#productImage").value = editProduct.image;
        document.querySelector("#productImg").value = editProduct.img;
        document.querySelector("#inventory").value = editProduct.inventory;
        document.querySelector("#rating").value = editProduct.rating;
    } catch (errors) {
        console.log(errors.response.data);
    }
}

document.querySelector("#btnLuuThongTin").onclick = async function () {
    var product = new Product();
    product.id = document.querySelector("#productID").value;
    product.name = document.querySelector("#productName").value;
    product.price = document.querySelector("#productPrice").value;
    product.screen = document.querySelector("#screen").value;
    product.backCamera = document.querySelector("#backCamera").value;
    product.frontCamera = document.querySelector("#frontCamera").value;
    product.desc = document.querySelector("#desc").value;
    product.type = document.querySelector("#type").value;
    product.image = document.querySelector("#productImage").value;
    product.img = document.querySelector("#productImg").value;
    product.inventory = document.querySelector("#inventory").value;
    product.rating = document.querySelector("#rating").value;

    try {
        var result = await axios({
            url: `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products/${product.id}`,
            method: "PUT",
            data: product,
        });
        getDataProduct();
    } catch (errors) {
        console.log(errors.response.data);
    }
};
