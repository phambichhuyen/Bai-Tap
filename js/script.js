$(document).ready(function () {
  // hàm hiển thị danh sách sách
  function renderBookList(book) {
    data = "";
    data += `<div class="col">
                <a href="product-detail.html?id=${book.id}">
                  <div class="card mb-3">
                    <div class="card-img--custom">
                      <img src="${book.image}" class="card-img-top" alt="image">
                    </div>
                    <div class="card-body text-start">
                      <span class="title-prod book-title">${book.title} - ${
      book.author
    }</span>
                      <div class="book-price">
                        <span>$${book.price.toLocaleString("de-DE")} đ</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>`;
    return data;
  }

  //không cho vào giỏ hàng nếu chưa đăng nhập
  function checkCart() {
    var user_id = JSON.parse(localStorage.getItem("user_id"));
    if (user_id == 0) {
      alert("Vui lòng đăng nhập để tạo giỏ hàng");
      $(".cartyuyy").attr('href', 'login.html');
    }
  }
  $(document).on("click", ".cartyuyy", function () {
    checkCart();
  });

  //đã đăng nhập
  function checkLogin() {
    var user = JSON.parse(localStorage.getItem("user"));
    var user_id = JSON.parse(localStorage.getItem("user_id"));
    if (user_id != 0) {
      var currUser = user.find((u) => u.id == user_id);
      if (currUser) {
        $("#user").text(currUser.username);
        console.log(currUser);
        $(".dropdown-menu").empty();
        $(".dropdown-menu").append(
          "<a class='dropdown-item' id='logout'>Đăng xuất</a>"
        );
      }
    }
  }
  checkLogin();

  //đăng xuất
  $(".dropdown-menu").on("click", "#logout", function () {
    localStorage.setItem("user_id", 0);
    window.location.href = "index.html";
  });

  //*index.html
  // Lấy danh sách từ localStorage
  function displayList() {
    var books = JSON.parse(localStorage.getItem("book")) || [];
    $(".get_productList").empty();
    var randomBook = books
      .sort(() => Math.random() - Math.random())
      .slice(0, 4);
    randomBook.forEach((book) => {
      $(".get_productList").append(renderBookList(book));
    });
  }
  displayList();

  $("#search-form").on("submit", function (event) {
    event.preventDefault();
    var searchKeyword = $("#search-input").val();
    localStorage.setItem("searchKeyword", searchKeyword);
    window.location.href = "produce.html";
  });

  //*produce.html
  // render danh mục
  function renderCategory(category) {
    return `<a  class="list-group-item list-group-item-action" href="${category.id}">${category.name}</a>`;
  }
  //hiển thị danh mục
  function displayCategory() {
    var categories = JSON.parse(localStorage.getItem("category")) || [];
    categories.forEach((category) => {
      $("#product-category").append(renderCategory(category));
    });
  }
  displayCategory();

  function displayProductList(category = "all") {
    var books = JSON.parse(localStorage.getItem("book")) || [];
    var searchKeyword = localStorage.getItem("searchKeyword");

    var matchingProducts = []; // Danh sách sản phẩm tìm được
    $("#get_productList").empty();

    // Tìm kiếm sản phẩm theo tên
    if (searchKeyword != null) {
      matchingProducts = books.filter(function (book) {
        return book.title.toLowerCase().includes(searchKeyword.toLowerCase());
      });
      if (matchingProducts.length == 0) {
        $(".keyword").empty();
        $(".keyword").append(
          "<h2 style='color: red; text-align: center;'>Không tìm thấy sản phẩm</h2>"
        );
      }
    }else{
      matchingProducts = books;
    }

    $("#search-input").val(searchKeyword);

    //theo danh mục

    if (category === "all") {
      matchingProducts.forEach((book) => {

        $("#get_productList").append(renderBookList(book));
      });
    } else {
      matchingProducts.forEach((book) => {
        if (book.id_category == category) {
          $("#get_productList").append(renderBookList(book));
        }
      });
    }
  }
  displayProductList();

  // Hàm hiển thị sản phẩm theo danh mục
  $("#product-category a").on("click", function (e) {
    e.preventDefault();
    $("#product-category a").removeClass("active");
    $(this).addClass("active");

    // Lấy loại sản phẩm từ thuộc tính href
    var category_curr = $(this).attr("href");
    displayProductList(category_curr);
  });
});
