// Bài 2: Thực hiện yêu cầu sau:Tạo file tests/lesson-04/calm-belt-2.js
// Khai báo:Biến devilFruit có giá trị là "gomu-gomu".
// Sử dụng câu điều kiện if...else để xác định trạng thái thức tỉnh tương ứng:
// gomu-gomu": "Gear 5 Unlocked!"
// "mera-mera": "Flame Emperor!"
// "ope-ope": "Room & Ope!"
// "none": "Normal Human"
// Khác: "Unknown Devil Fruit"
// In ra ngoài console trạng thái tương ứng. 
// Commit kết quả với message: “feat: add solution for challenge 03”

let devilFruit = "gomu-gomu";
if (devilFruit === "gomu-gomu") {
    console.log("Gear 5 Unlocked!");
} else if (devilFruit === "mera-mera") {
    console.log("Flame Emperor!");
} else if (devilFruit === "ope-ope") {
    console.log("Room & Ope!");
} else if (devilFruit === "none") {
    console.log("Normal Human");
} else console.log("Unknown Devil Fruit");