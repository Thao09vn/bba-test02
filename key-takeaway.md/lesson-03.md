## Tổng hợp kiến thức buổi 3

### 1. Bài học 3.1: Git – unstage (Hủy trạng thái chờ commit)
* **Khái niệm:** Đưa tệp từ vùng **Staging Area** (vùng chờ) quay trở lại vùng **Working Directory** (thư mục làm việc). T
git restore --staged <tên_file>
### 2. Bài học 3.2: Git – un-commit (Hủy bỏ commit)
* **Khái niệm:** Dùng khi bạn đã lỡ chạy lệnh `git commit` nhưng phát hiện ra code bị sai, thiếu tệp hoặc ghi sai thông điệp ghi chú (commit message) để quay về lần commit gần nhất.
  git reset HEAD~1
### JavaScript – 3.Câu điều kiện (Conditional Statements)
Giúp chương trình đưa ra quyết định dựa trên các điều kiện đúng (`true`) hoặc sai (`false`).

* **Cấu trúc `if ... else`:**
  ```javascript
  let diem = 8;
  if (diem >= 8) {
      console.log("Học sinh giỏi");
  } else if (diem >= 5) {     
    console.log("Học sinh khá");
  } else {
      console.log("Học sinh trung bình");
  }

### 4. Vòng lặp (Loops)
Dùng để lặp đi lặp lại một đoạn code nhiều lần cho đến khi điều kiện dừng được thỏa mãn.

* **Vòng lặp `for` cơ bản:** Biết trước số lần lặp.
  ```javascript
  // Lặp từ 0 đến 4
  for (let i = 0; i < 5; i++) {
      console.log("Lần lặp thứ: " + i);
  }

### 5. Coding Conventions (Quy ước viết code)
* **Khai báo biến rõ ràng:** 
  * Luôn dùng `const` cho các giá trị không đổi.
  * Luôn dùng `let` cho các biến có thể thay đổi giá trị.
  * **Tuyệt đối không** dùng `var` 

