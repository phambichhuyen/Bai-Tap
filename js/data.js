//Đối tượng sách

var book = [
  {
    id: 1,
    title: "8 Vụ Án Hoàn Hảo",
    author: "Peter Swanson",
    description:
      "Vài năm về trước, Malcolm Kershaw là một nhân viên bán sách, nhưng đồng thời cũng là quản lý nội dung trang blog đang nổi như cồn của cửa hàng - một nơi dành cho những người yêu trinh thám tham gia bản luận",
    image: "asset/image/book-1.jpg",
    price: 116000,
    id_category: 1,
  },
  {
    id: 2,
    title: "Thạch Hầu",
    author: "Jeffery Deaver",
    description:
      "Thông tin tác giả: Từng là nhà báo, ca sĩ nhạc đồng quê và luật sư, các tiểu thuyết của Jeffery Deaver đã xuất hiện trong những danh sách bán chạy nhất trên khắp thế giới, bao gồm The Times, New York Times và Los Angeles Times",
    image: "asset/image/book-2.png",
    price: 116000,
    id_category: 1,
  },
  {
    id: 3,
    title: "Ta tư duy, ta tồn tại",
    author: "James Allen",
    description: `"Ta Tư Duy Ta Tồn Tại (As a Man Thinketh) - Khi Người Ta Tư Duy - 7 Quy Luật Của Tư Duy": Bí kíp "nâng cấp" cuộc sống của bạn!
        Bạn có đang:
        - Loay hoay tìm kiếm bí quyết thành công?
        - Muốn "lột xác" bản thân và đạt được những mục tiêu mới?
        - Hay đơn giản là mong muốn cải thiện cuộc sống và tìm kiếm hạnh phúc?
        Vậy thì "Ta Tư Duy Ta Tồn Tại (As a Man Thinketh) - Khi Người Ta Tư Duy - 7 Quy Luật Của Tư Duy" chính là cuốn sách dành cho bạn!`,
    image: "asset/image/book-3.jpg",
    price: 29000,
    id_category: 2,
  },
  {
    id: 4,
    title: "Trăng Tan Đáy Nước",
    author: "Hoàng Yến",
    description:
      "Hắn nhảy lên ngựa, theo dấu lông ngỗng vương mắc đầu ngọn cỏ mà điên cuồng truy đuổi. Sau cùng, nàng vẫn chẳng quên câu ước hẹn dẫu cho chiến loạn, cũng đừng để lạc mất nhau.",
    image: "asset/image/book-4.jpg",
    price: 120000,
    id_category: 1,
  },
  {
    id: 5,
    title: "Hiệu suất đỉnh cao",
    author: "Thibaut Meurisse",
    description: `
    Một hôm, ông già Ê-giơn đã kể cho cô bé A-xôn câu chuyện về chàng hoàng tử lái con tàu có cánh buồm đỏ thắm đến đón ý trung nhân. A- xôn đã sống qua tuổi thơ với khát vọng chờ mong cánh buồm đỏ thắm. Rồi một ngày, con tàu mang cánh buồm rực rỡ ấy đã ghé vào làng Ca-péc-na để đón A-xôn.
Thiên truyện tuyệt vời Cánh buồm đỏ thắm chan hòa ánh sáng mặt trời và thắm đượm tình người được viết cách đây gần một thế kỉ, cho đến nay vẫn đủ sức làm xao xuyến hàng triệu con tim...
    `,
    image: "asset/image/book-5.jpg",
    price: 39000,
    id_category: 2,
  },
  {
    id: 6,
    title: "Sức nặng của sự kỳ vọng",
    author: "An An",
    description: `Trong xã hội hiện đại, áp lực từ sự kỳ vọng đã trở thành một phần không thể thiếu của cuộc sống. Từ những mong muốn của cha mẹ, sự so sánh từ bạn bè, đến những tiêu chuẩn xã hội được truyền thông tạo ra, mỗi người trong chúng ta đều đang phải đối diện với những áp lực vô hình nhưng rất mạnh mẽ. Thật không dễ dàng để tìm được sự cân bằng giữa việc đáp ứng những kỳ vọng này và giữ vững bản thân mình.`,
    image: "asset/image/book-6.jpg",
    price: 49000,
    id_category: 2,
  },
  {
    id: 7,
    title: "Đập nồi bán sắt đi học",
    author: "Hồng Thứ Bắc",
    description: `Trong giai đoạn huấn luyện chuẩn bị cho một giải đấu nào đó, cánh truyền thông lần lượt đến phỏng vấn chiến sĩ của các trường. Chương trình được phát sóng trực tiếp trên tinh võng nên khán giả có thể thấy được toàn cảnh tất cả mọi người đang ra sức huấn luyện, tăng cường trọng lực, đánh giáp lá cà, đánh gần rồi cả đánh tầm xa…
    [Không ngờ XX lại dám cài đặt cảm giác đau chân thật tới 100%, thực sự quá đẳng cấp!]`,
    image: "asset/image/book-7.png",
    price: 79000,
    id_category: 1,
  },
  {
    id: 8,
    title: "Nhân cách nguy hiểm - Tập 2",
    author: "Mộc Qua Hoàng",
    description: `Trì Thanh và Giải Lâm quen biết nhau trong một tình huống đặc biệt. Trì Thanh tới phòng khám tâm lý khám bệnh và tình cờ Giải Lâm cũng là khách quen của phòng khám. Sau đó, hai người liên tiếp gặp lại và cùng trở thành “nghi phạm”. Dưới sự nỗ lực của Giải Lâm, cặp đôi hoàn cảnh có nhân cách nguy hiểm này còn trở thành cố vấn và trợ lý cố vấn cho Tổng cục Cảnh sát hình sự.
    Cuối tập 1, những hành động kỳ lạ của Trì Thanh khiến cho cô gái Nhậm Cầm tầng dưới hiểu nhầm cậu là kẻ giết người hàng loạt gần đây. Trì Thanh phải làm sao để hóa giải hiểu nhầm và tóm gọn tên sát nhân biến thái?`,
    image: "asset/image/book-8.jpg",
    price: 179000,
    id_category: 1,
  },
];

var category = [
  {
    id: 1,
    name: "Tiểu thuyết",
  },
  {
    id: 2,
    name: "Phát triển bản thân",
  },
  {
    id: 3,
    name: "Văn học học đường",
  },
  {
    id: 4,
    name: "Kinh tế",
  },
  {
    id: 5,
    name: "Tâm lý",
  },
  
];

var cart = [
  {
    id: 1,
    id_book: 1,
    quantity: 1,
  },
  {
    id: 2,
    id_book: 4,
    quantity: 3,
  },
];

var user = [
  {
    id: 1,
    username: "admin",
    sdt: "036616084",
    password: "1234!@#$",
    address: "Hà Nội",
  },
  {
    id: 3,
    username: "admin2",
    sdt: "036614444",
    password: "!@#$1234",
    address: "q4 tp.hcm",
  },
];

var order = {
  id: 1,
  user_id: 1,
  total: 100000,
  status: 1,
};

var user_id = 0;


$(document).ready(function () {
  // Kiểm tra và chỉ đẩy dữ liệu vào localStorage nếu chưa có dữ liệu
  if (!localStorage.getItem("book")) {
    localStorage.setItem("book", JSON.stringify(book));
  }

  if (!localStorage.getItem("category")) {
    localStorage.setItem("category", JSON.stringify(category));
  }

  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  if (!localStorage.getItem("user")) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  if (!localStorage.getItem("order")) {
    localStorage.setItem("order", JSON.stringify(order));
  }
  if (!localStorage.getItem("user_id")) {
    localStorage.setItem("user_id", JSON.stringify(user_id));
  }
});
