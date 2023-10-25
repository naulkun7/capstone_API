import { https } from "../service/service.js"
import { renderItemList } from "./controller.js"

let fetchList = () => {
  https
    .get("/Products")
    .then((res) => {
      console.log(res)
      // normal
      renderItemList(res.data)

      // reverse() => đảo ngược mảng
      // renderItemList(res.data.reverse())
    })
    .catch((err) => {
      console.log(err)
    })
}

// lần đầu load trang
fetchList()
