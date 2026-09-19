// Bài 1: Thực hiện yêu cầu sau:
// Tạo file tests/lesson-04/calm-belt.jsKhai báo:
// Biến navigatorName có giá trị là "Luffy".
// Biến currentHakiLevel có giá trị là 3.
// Các hằng số lưu lượng thịt (Meat) tiêu thụ theo đảo:Island A: 15;Island B: 25;Island C: 40;
// Tính tổng lượng thịt tiêu thụ ở 3 đảo, sau đó tính trung bình (tổng / 3).
// In ra lượng thịt còn dư sau khi chia đều cho 3 thành viên cốt cán.
// Commit kết quả với message: "feat: add solution for calm belt challenge"

let navigatorName="Luffy";
let currentHakiLevel=3;
const isLandA=15;
const isLandB=25;
const isLandC=40;

let sum=isLandA+isLandB+isLandC;
console.log("Tổng số lượng thịt tiêu thụ ở 3 đảo là: "+sum);
console.log("Tổng lượng thịt trung bình trên 3 đảo là: "+sum/3);
console.log("Số thịt còn dư sau khi chia cho 3 thành viên cốt cán: "+sum%3);