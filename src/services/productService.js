import axios from "axios";

export default class ProductService {
  getProduct() {
    return axios.get("");
  }
  getProductByName(productName) {
    return axios.get("" + productName);
  }
}
