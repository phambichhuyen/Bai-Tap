// Hàm định dạng số
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// câu 1 xx-yyyyyyyy (21-1234567)  xx là số cuối của năm sinh, yyyyyyyy là các chữ số từ 0-9.
function validateStudentId() {
  const studentId = $("#studentId").val().trim(); // Lấy giá trị và loại bỏ khoảng trắng
  const regex = /^\d{2}-\d{7}$/; // Định dạng cần kiểm tra: xx-yyyyyyyy

  if (studentId === "") {
    return false; // Trả về false nếu trường trống
  }

  if (!regex.test(studentId)) {
    return false; // Trả về false nếu không khớp với định dạng
  }

  const [yearPart, numberPart] = studentId.split("-");
  if (isNaN(yearPart) || yearPart.length !== 2) {
    return false;
  }

  // Kiểm tra số lượng chữ số của numberPart
  if (isNaN(numberPart) || numberPart.length !== 7) {
    return false;
  }

  return true;
}

// câu 2 Tối thiểu 2 từ và viết hoa đầu từ
function validateFullName() {
  let fullName = $("#fullName").val();
  const regex = /^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/;

  // Tự động sửa tên nếu không đúng định dạng
  if (!regex.test(fullName)) {
    let nameParts = fullName.split(" ");
    nameParts = nameParts.map((part) => {
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    });
    fullName = nameParts.join(" ");
    $("#fullName").val(fullName);
  }

  // Kiểm tra lại sau khi sửa
  return regex.test(fullName);
}

// câu 3 email có phần đuôi @iuh.edu.vn
function validateEmail() {
  const email = $("#email").val();
  // Kiểm tra xem email có trống không
  if (email === "") {
    return false; // Trả về false nếu email trống
  }
  const regex = /^[a-zA-Z0-9._%+-]+@iuh\.edu\.vn$/;
  return regex.test(email);
}
$("#email").blur(function () {
  let email = $("#email").val();
  // Kiểm tra xem email có trống không
  if (email === "") {
    return false; // Trả về false nếu email trống
  }
  const atIndex = email.indexOf("@");
  if (atIndex !== -1) {
    email = email.substring(0, atIndex) + "@iuh.edu.vn";
  } else {
    email += "@iuh.edu.vn";
  }
  $("#email").val(email); // Cập nhật lại giá trị email với đuôi mới
});
// Hàm kiểm tra tính hợp lệ và cập nhật thông báo
function validateAndUpdateFeedback(
  elementId,
  validateFunction,
  successMessage,
  errorMessage
) {
  const feedbackElement = $("#" + elementId + "Feedback"); // Lấy phần tử hiển thị thông báo
  if (validateFunction()) {
    feedbackElement.html(
      '<span class="text-success">&#10003; ' + successMessage + "</span>"
    ); // Hiện thị dấu tick
  } else {
    feedbackElement.html(
      '<span class="text-danger">' + errorMessage + "</span>"
    ); // Thông báo lỗi
  }
  feedbackElement.show(); // Hiện phần tử
}
// Kiểm tra các trường khi blur
$("#studentId, #fullName, #email").blur(function () {
  switch (this.id) {
    case "studentId":
      validateAndUpdateFeedback(
        this.id,
        validateStudentId,
        "Hợp lệ",
        "Mã học viên không hợp lệ hoặc trống, vui lòng kiểm tra lại!"
      );
      break;
    case "fullName":
      validateAndUpdateFeedback(
        this.id,
        validateFullName,
        "Hợp lệ",
        "Họ tên không hợp lệ! Vui lòng kiểm tra lại."
      );
      break;
    case "email":
      validateAndUpdateFeedback(
        this.id,
        validateEmail,
        "Hợp lệ",
        "Email không hợp lệ hoặc trống, vui lòng kiểm tra lại!"
      );
      break;
  }
});

// câu 4 chọn dịch vụ, gán giá tiền vào trường giá tiền
const servicePrices = {
  0: 100000,
  1: 200000,
  2: 300000,
};

$("#service").change(function () {
  const selectedService = $(this).val();
  const servicePrice = servicePrices[selectedService];
  $("#price").val(formatNumber(servicePrice)); // Định dạng giá tiền
});

// câu 5 Tính tổng tiền dựa trên dịch vụ và đồ dùng
const equipmentPrices = {
  aoquanbơi: 50000,
  phao: 30000,
  kinhboi: 20000,
};

// Cập nhật giá tiền từ checkbox
$('input[type="checkbox"]').change(function () {
  let totalEquipmentPrice = 0;
  $('input[type="checkbox"]:checked').each(function () {
    totalEquipmentPrice += equipmentPrices[$(this).attr("id")];
  });
  $("#usedEquipmentPrice").val(formatNumber(totalEquipmentPrice));

  // Tính toán lại tổng giá khi có sự thay đổi
  updateTotalPrice();
});

// Cập nhật giá tiền từ dropdown
$("#service").change(function () {
  const servicePrice = parseInt($("#price").val().replace(/\./g, "")) || 0; // Loại bỏ dấu chấm
  updateTotalPrice();
});

// Hàm cập nhật tổng giá
function updateTotalPrice() {
  const servicePrice = parseInt($("#price").val().replace(/\./g, "")) || 0; // Loại bỏ dấu chấm
  const equipmentPrice =
    parseInt($("#usedEquipmentPrice").val().replace(/\./g, "")) || 0; // Loại bỏ dấu chấm
  const totalPrice = servicePrice + equipmentPrice;
  $("#totalPrice").val(formatNumber(totalPrice));
}
// câu 6  Cập nhật thông tin vào bảng khi nhấn "Thanh toán"
// Biến để theo dõi số thứ tự
let stt = 2; // Bắt đầu từ 1

$("#paymentButton").click(function () {
  if (validateStudentId() && validateFullName() && validateEmail()) {
    const studentId = $("#studentId").val();
    const fullName = $("#fullName").val();
    const email = $("#email").val();
    const price = $("#price").val() || 0; // Lấy giá trị tiền dịch vụ
    const equipmentPrice = $("#usedEquipmentPrice").val() || 0; // Lấy giá trị tiền đồ dùng
    const totalPrice = $("#totalPrice").val() || 0;

    const newRow = `
            <tr>
                <td>${stt}</td> 
                <td>${studentId}</td>
                <td>${fullName}</td>
                <td>${email}</td>
                <td>${price}</td> <!-- Định dạng giá tiền dịch vụ -->
                <td>${equipmentPrice}</td> <!-- Định dạng giá tiền đồ dùng -->
                <td>${totalPrice}</td> <!-- Định dạng tổng tiền -->
            </tr>
        `;

    $("#paymentTable").append(newRow);
    stt++;
    resetFormFields();
    $("#registerModal").modal("hide");
  } else {
    alert("Vui lòng nhập đúng thông tin!");
  }
});

// Hàm reset các trường nhập liệu
function resetFormFields() {
  $("#studentId").val("");
  $("#fullName").val("");
  $("#email").val("");
  $("#service").val(""); // Nếu bạn có giá trị mặc định, có thể thay đổi thành giá trị đó
  $("#usedEquipmentPrice").val("");
  $("#totalPrice").val("");
  $('input[type="checkbox"]').prop("checked", false); // Bỏ chọn tất cả checkbox
}
