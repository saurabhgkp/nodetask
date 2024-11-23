const rules = [
    { name: "Valuation Fee Paid", key: "isValuationFeePaid", expected: true },
    { name: "UK Resident", key: "isUkResident", expected: true },
    { name: "Risk Rating Medium", key: "riskRating", expected: "Medium" },
    {
        name: "LTV Below 60%", key: "ltv", expected: (data) => {
            const loanRequired = parseFloat(data.mortgage.loanRequired.replace(/[^0-9.-]+/g, ""));
            const purchasePrice = parseFloat(data.mortgage.purchasePrice.replace(/[^0-9.-]+/g, ""));
            return (loanRequired / purchasePrice) * 100 < 60;
        }
    },
];

module.exports = rules;

