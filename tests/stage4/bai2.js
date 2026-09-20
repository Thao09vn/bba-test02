// Bài 2: Tạo hàm printBountyLeaderboard:
// Nhận vào tham số: crewList là mảng các object [{name: "Zoro", bounty: 1111000000}, ...].
// Sắp xếp mảng thành viên theo thứ tự tiền thưởng (bounty) từ cao đến thấp.
// In ra bảng xếp hạng danh sách truy nã. 
// Lưu ý: Với top 3 vị trí dẫn đầu, hãy gắn kèm biểu tượng huy chương/vương miện (🥇, 🥈, 🥉).


const crewList = [
    { name: "Luffy", bounty: 70000 },
    { name: "Zoro", bounty: 80000 },
    { name: "Chopper", bounty: 1000 },
    { name: "Luna", bounty: 5000 }
];
function printBountyLeaderboard(crewList) {
    const sortedList = crewList.sort((a, b) => b.bounty - a.bounty);
    const medals = ["🥇", "🥈", "🥉"];
    for (let i = 0; i <sortedList.length; i++) {
        const crew = sortedList[i];
        let medal;
        if (i < 3) {
            medal = medals[i];
        } else {
             medal = "  ";
        }
        console.log(`${medal} Top ${i + 1}: ${crew.name} - ${crew.bounty}`);
    }
}
printBountyLeaderboard(crewList);
