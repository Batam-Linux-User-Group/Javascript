function allData() {
  dataTable.innerHTML = ``;
  dataList = JSON.parse(localStorage.getItem("listItem")) ?? [];

  dataList.forEach(function (value, i) {
    var dataTable = document.getElementById("dataTable");

    dataTable.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${value.name}</td>
        <td>${value.nik}</td>
        <td>${value.major}</td>
        <td>
          <button class="btn btn-sm btn-success" onclick="find(${value.id})">
            <i class="fa fa-edit"></i>
          </button>
          &nbsp;
          <button class="btn btn-sm btn-danger" onclick="removeData(${
            value.id
          })">
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>`;
  });
}

const saveData = document.getElementById("saveData");
saveData.addEventListener("click", () => {
  dataList = JSON.parse(localStorage.getItem("listItem")) ?? [];

  var id;
  dataList.length != 0 ? dataList.findLast((item) => (id = item.id)) : (id = 0);

  if (document.getElementById("id").value) {
    dataList.forEach((value) => {
      if (document.getElementById("id").value == value.id) {
        (value.name = document.getElementById("name").value),
          (value.nik = document.getElementById("nik").value),
          (value.major = document.getElementById("major").value);
      }
    });

    document.getElementById("id").value = "";
  } else {
    var item = {
      id: id + 1,
      name: document.getElementById("name").value,
      nik: document.getElementById("nik").value,
      major: document.getElementById("major").value,
    };

    dataList.push(item);
  }

  localStorage.setItem("listItem", JSON.stringify(dataList));

  allData();

  document.getElementById("form").reset();
});

function find(id) {
  dataList = JSON.parse(localStorage.getItem("listItem")) ?? [];

  dataList.forEach(function (value) {
    if (value.id == id) {
      document.getElementById("id").value = value.id;
      document.getElementById("name").value = value.name;
      document.getElementById("nik").value = value.nik;
      document.getElementById("major").value = value.major;
    }
  });
}

function removeData(id) {
  dataList = JSON.parse(localStorage.getItem("listItem")) ?? [];

  dataList = dataList.filter(function (value) {
    return value.id != id;
  });

  localStorage.setItem("listItem", JSON.stringify(dataList));

  allData();
}

allData();

const clearData = document.getElementById("clearData");
clearData.addEventListener("click", () => {
  document.getElementById("form").reset();
  document.getElementById("id").value = "";
});
