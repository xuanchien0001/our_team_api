const domElement = (element) => document.querySelector(element);
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    domElement(".navbar").style.backgroundColor = "#fff";
    domElement(".navbar").classList.add("fixed-top");
    domElement(".nav-brand").style.display = "none";
  } else {
    domElement(".navbar").style.backgroundColor = "transparent";
    domElement(".navbar").classList.remove("fixed-top");
    domElement(".nav-brand").style.display = "block";
  }
});
domElement("#sidebarCollapse").onclick = () => {
  domElement("#sidebar .active")
    ? domElement(".container .nav-brand").classList.add("d-none")
    : domElement(".container .nav-brand").classList.remove("d-none");
};

const getListUser = () => {
  return axios({
    method: "GET",
    url: "https://625bc0d050128c57020706e0.mockapi.io/api/danhsachnguoidung-axios",
  });
};
const renderListUser = () => {
  getListUser()
    .then((result) => {
      let html = result.data
        .map((item) => {
          if (item.loaiND === "GV") {
            return `<div class="col-lg-3 col-md-6 col-12 mb-5">
              <div class="card">
                    <div class="img">
                          <div class="img">
                                <img class="card-img-top" src="./img/images/${item.hinhAnh}"
                                      alt="">
                          </div>
                    </div>
                    <div class="card-body">
                          <div class="country">${item.ngonNgu}</div>
                          <h3 class="card-title">${item.hoTen}</h3>
                          <p class="card-text">${item.moTa}</p>
                    </div>
              </div>
        </div>`;
          }
        })
        .join("");
      domElement("#list_user .container .row").innerHTML = html;
    })
    .catch((err) => {
      console.log(err);
    });
};
renderListUser();
