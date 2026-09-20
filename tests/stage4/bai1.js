//Bài 1: Tạo hàm upgradeCrew:Khai báo mảng các object pirates có các thuộc tính: 
//name, bounty (tiền thưởng), strength.
//Sử dụng hàm map để tạo ra mảng mới awakenedPirates:
//Thuộc tính name: UPPERCASE của tên gốc.
//bounty: x2 tiền thưởng gốc.
//strength: x1.5 sức mạnh gốc.
//Sử dụng hàm filter để lọc ra các thành viên có mức strength > 500. 
//Đặt tên mảng mới là monsterTrioCandidates.
function upgradeCrew() {
    const pirates = [
        { name: "Luffy", bounty: 70000, strength: 600 },
        { name: "Zoro", bounty: 80000, strength: 50 },
        { name: "Chopper", bounty: 1000, strength: 1500 }
    ];
    const awakenedPirates = pirates.map((pirate) => {
        return {
            name: pirate.name.toUpperCase(),
            bounty: pirate.bounty * 2,
            strength: pirate.strength * 1.5
        };
        console.log(awakenedPirates);
    });
    const monsterTrioCandidates = pirates.filter(s => s.strength > 500);
    console.log(monsterTrioCandidates);
}
upgradeCrew();


