// "Hãy đếm và in ra có bao nhiêu cặp số nguyên dương (a, b) từ 1 tới 100 sao cho tích của chúng chia hết cho 19."
// Ví dụ:
// - (1, 19), (2, 38), (19, 5)... là các cặp hợp lệ vì tích a*b chia hết cho 19.
// Lưu ý:
// - Mỗi cặp số chỉ được tính 1 lần — (1, 19) và (19, 1) tính là 1 cặp.
// - 2 số trong cặp được phép bằng nhau nếu thỏa mãn điều kiện.

let i, j;
let total = 0
for (i = 1; i <= 100; i++) {
    for (j = i; j <= 100; j++) {
        if ((i * j) % 19 === 0) {
            console.log(i, j);
            total += 1;
        }

    }
}
console.log(total);