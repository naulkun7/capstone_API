function apiGetProductsList() {
  return axios({
    url: `https://65218262a4199548356d4f0a.mockapi.io/Products`,
    method: "GET",
  })
}

function apiGetProductsSearch(searchValue) {
  return axios({
    url: `https://65218262a4199548356d4f0a.mockapi.io/Products`,
    method: "GET",
    params: {
      name: searchValue || undefined,
    },
  })
}

function apiGetProductById(productId) {
  return axios({
    url: `https://65218262a4199548356d4f0a.mockapi.io/Products/${productId}`,
    method: "GET",
  })
}

function apiCreateProduct(product) {
  return axios({
    url: "https://65218262a4199548356d4f0a.mockapi.io/Products",
    method: "POST",
    data: product,
  })
}

function apiUpdateProduct(productId, newProduct) {
  return axios({
    url: `https://65218262a4199548356d4f0a.mockapi.io/Products/${productId}`,
    method: "PUT",
    data: newProduct,
  })
}

function apiDeleteProduct(productId) {
  return axios({
    url: `https://65218262a4199548356d4f0a.mockapi.io/Products/${productId}`,
    method: "DELETE",
  })
}
