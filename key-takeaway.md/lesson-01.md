## Tóm tắt bài 1

> Mẹo định dạng nhanh trong VS Code: Ấn tổ hợp phím `Alt + Shift + F` hoặc click chuột phải chọn **Format Document** để tự động căn chỉnh code.

### 1. Khởi tạo 1 project Playwright
Chạy lệnh sau tại thư mục dự án của bạn: npm init playwright@latest
* Sau đó, cứ nhấn **Enter** để chọn các thiết lập mặc định.
* Riêng câu hỏi: `Add a GitHub Actions workflow? (Y/n)` -> Nhập `false` rồi ấn **Enter** để quá trình tự động chạy tiếp.
### 2. Khởi tạo và lưu trữ trong Git
* **Khởi tạo repo ở local:** git init
* **Thêm (Add) file đơn lẻ vào Git:** git add file1.txt
* **Thêm tất cả các file thay đổi vào Git:** git add .
* **Thêm một thư mục cụ thể vào Git:** git add folder/file4.txt
* **Lưu lại các thay đổi (Commit):** git commit -m "ghi chú thích để commit vào đây"
* **Di chuyển vào một thư mục cụ thể để thao tác:**
  cd tên_folder
* **Quay lại thư mục cha (thư mục ban đầu):**
  cd ..
* **Đưa fie lên Github:**git push -u origin main
### 3. Đưa file vào vùng Staging
* **Lệnh thực hiện:**
  git add tên_file
* **Kiểm tra trạng thái:**
  git status
  * *Lưu ý:* Nếu tên file hiển thị **màu xanh**, chứng tỏ bạn đã đưa file vào vùng Staging thành công.
### 4. Đưa file từ vùng Staging quay về Working Directory
* **Lệnh thực hiện:**
  git restore --staged tên_file
* **Kiểm tra trạng thái:**
  git status
  * *Lưu ý:* Nếu tên file hiển thị **màu đỏ**, chứng tỏ file đã quay về vùng Working Directory thành công.
### 5. Commit file lên Repository
* **Lệnh thực hiện:**
  git commit -m "ghi chú thích để commit vào đây"

### 6. Đưa file từ Repository quay về Working Directory
* **Lệnh hủy commit gần nhất:**
  git reset HEAD~1
  *(Lệnh này giúp đưa các thay đổi của commit gần nhất quay trở lại vùng Working Directory)*
### 7. Quản lý nhánh (Branch)
* **Tạo 1 nhánh mới:**
  git branch tên_nhánh
* **Kiểm tra danh sách các nhánh hiện có:**
  git branch
  * *Ví dụ:* Nếu màn hình hiển thị `lesson3` và `* main` thì thư mục của bạn đang có nhánh `lesson3` và nhánh chính là `main`. Dấu `*` biểu thị nhánh bạn đang đứng để thao tác.
### 8. Di chuyển sang nhánh khác
* **Lệnh thực hiện:**
  git checkout tên_nhánh
  *(Sau khi chạy lệnh, dấu `*` sẽ chuyển sang nhánh mới để bạn bắt đầu thao tác)*
### 9. Vừa tạo nhánh mới vừa chuyển sang nhánh đó
* **Lệnh viết tắt (Tạo và chuyển nhánh cùng lúc):**
  git checkout -b tên_nhánh_mới
### 10. Xóa nhánh
* **Lệnh xóa một nhánh cụ thể:**
  git branch -D tên_nhánh
### 11. Tệp cấu hình .gitignore
* `.gitignore` là nơi khai báo các file và thư mục **không cần đưa vào Git Repo** (ví dụ: `node_modules`, các file chứa mật khẩu, dữ liệu cấu hình hoặc log lỗi cá nhân...). Git sẽ tự động bỏ qua và không theo dõi các file có tên trong tệp này.
