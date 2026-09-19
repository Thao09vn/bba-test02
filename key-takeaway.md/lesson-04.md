## Tổng hợp kiến thức buổi 4
###  Object 
Object dùng để lưu trữ dữ liệu dưới dạng cặp thuộc tính bao gồm **khóa (key)** và **giá trị (value)**. Nó giúp mô tả các thực thể trong thực tế một cách chi tiết.

* **Cú pháp khởi tạo:**
  ```javascript
  const user = {
      name: "THao",
      age: 25,
      isAdmin: true
  };
  Console.log(user.name);
## Array (Mảng)
Array là một danh sách có thứ tự dùng để lưu trữ nhiều giá trị (phần tử) trong một biến duy nhất. Các phần tử được định vị bằng **chỉ số (index)** bắt đầu từ số `0`.

* **Cú pháp khởi tạo:**
  const monHoc = ["Toan", "Anh", "Van"];
  * **Lấy độ dài mảng:** monHoc.length();
  * **Thêm phần tử vào cuối mảng:** `monHoc.push("Nhạc");`
  * **Xóa phần tử cuối cùng:** `monHoc.pop();`
  * **Xóa và trả về phần tử đầu tiên của mảng:** `monHoc.shift();`
   * **Thêm 1 hoặc nhiều phần tử vào đầu mảng:** `monHoc.unshift('Hóa');`
  * **Duyệt phần tử trong mảng:** dùng vòng for bắt đầu từ 0
## Function (Hàm)
Function là một khối mã nguồn được thiết kế để thực hiện một nhiệm vụ cụ thể. Hàm giúp tái sử dụng mã (reuse code), tránh lặp code và giúp chia nhỏ chương trình.

* **Cú pháp khai báo và gọi hàm:**
  function xinChao(ten) {
      return "Xin chào, " + ten + "!";
  }
  let thongBao = xinChao("Thao"); 
## Array Utils Functions 
Đây là các phương thức nâng cao tích hợp sẵn (Higher-Order Functions) giúp duyệt mảng, tìm kiếm và biến đổi dữ liệu ngắn gọn hơn nhiều so với vòng lặp `for` truyền thống.


* **Biến đổi mảng cũ thành mảng mới (`map`):**
  const num =[1, 2, 3];
  const double = num.map(x => x * 2); 
* **Lọc các phần tử theo điều kiện (`filter`):**
  (tìm sản phẩm còn hàng..)
  const danhSachSo = [1,2,3,4,5,6,7,8,9,10];
  const soDuong = danhSachSo.filter(x => x %2=== 0); 
  ```
* **Tìm phần tử đầu tiên thỏa mãn (`find`):**
  
  const numbers =[1,5,8,10];
  const timKiem = numbers.find(num => num %2=== 0); 
  ```
* **Kiểm tra xem CÓ ÍT NHẤT một phần tử thỏa mãn điều kiện không (`some`):**
  * Trả về giá trị `true` nếu tìm thấy ít nhất một phần tử đúng, ngược lại trả về `false`. Dừng chạy khi tìm thấy điều kiện thỏa mãn
  const mangSo =[1,3,5,7,9,8];
  const coSoChan = mangSo.some(x => x % 2 === 0); 
* **Gộp các phần tử trong mảng thành MỘT GIÁ TRỊ DUY NHẤT (`reduce`):**
  * Thường dùng để tính tổng, tính tích hoặc tích lũy dữ liệu qua từng phần tử.
    const tong = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
* **Kiểm tra tất cả phần tử của mảng có thỏa mãn không (`every`):**
     const num= mangSo.every(num=>num>5)
* **Sắp xếp(`sort`):**
  * sắp xếp theo abc tăng dần
    numbers.sort();
 