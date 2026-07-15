function simulateSavingsCampaign(): void {
    let totalSavings: number = 0;

    for (let day: number = 1; day <= 30; day++) {
        totalSavings += day;
        console.log(`[วันที่ ${day}]: ยอดเงิน = ${totalSavings} บาท`);
    }
    console.log(`ขอแสดงความยินดี เดือนนี้คุณออมเงิน ${totalSavings} บาท`);
}
simulateSavingsCampaign();