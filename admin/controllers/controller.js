export let getDataFromForm = () => {
  let id = getData("itemID")
  let name = getData("itemName")
  let type = getData("itemType")
  let price = getData("itemPrice")
  let screen = getData("itemScreen")
  let backCam = getData("itemBC")
  let frontCam = getData("itemFC")
  let img = getData("itemImg")
  let desc = getData("itemDesc")
  return {
    id,
    name,
    type,
    price,
    screen,
    backCam,
    frontCam,
    img,
    desc,
  }
}

export let renderItemList = (itemArr) => {
  let contentHTML = ""
  itemArr.forEach((item) => {
    let { id, name, price, screen, type, backCamera, frontCamera, desc } = item
    let trString = ` <tr>
                        <td>${id}</td>
                        <td>${name}</td>
                        <td>${type}</td>
                        <td>${price}</td>
                        <td>${screen}</td>
                        <td>${backCamera}</td>
                        <td>${frontCamera}</td>
                        <td>${desc}</td>
                        <td>
                        <button class="btn btn-danger">Xoá</button>
                        <button class="btn btn-success">Sửa</button></td>
                    </tr> `
    contentHTML = contentHTML + trString
  })

  document.getElementById("tbodyItem").innerHTML = contentHTML
}
