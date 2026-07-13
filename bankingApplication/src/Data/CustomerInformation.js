const customerInformation = {
  "customer": {
    "id": 1,
    "name": "Rahul Sharma",
    "customerId": "CUST100245",
    "accountNumber": "XXXXXX4589",
    "accountType": "Savings",
    "branch": "Mumbai Main Branch",
    "lastLogin": "2026-07-12T09:45:00",
    "balance": 124580.75
  },

  "accounts": [
    {
      "id": 1,
      "type": "Savings",
      "accountNumber": "XXXXXX4589",
      "balance": 124580.75
    },
    {
      "id": 2,
      "type": "Credit Card",
      "accountNumber": "XXXXXX1102",
      "balance": -15420.3
    }
  ],

  "transactions": [
    {
      "id": 1,
      "date": "2026-07-11",
      "description": "Salary Credit",
      "merchant": "ABC Technologies Pvt Ltd",
      "category": "Salary",
      "type": "credit",
      "amount": 85000,
      "status": "Completed",
      "balanceAfter": 124580.75
    },
    {
      "id": 2,
      "date": "2026-07-10",
      "description": "Amazon Purchase",
      "merchant": "Amazon India",
      "category": "Shopping",
      "type": "debit",
      "amount": 2499,
      "status": "Completed",
      "balanceAfter": 39580.75
    },
    {
      "id": 3,
      "date": "2026-07-09",
      "description": "Electricity Bill",
      "merchant": "MSEDCL",
      "category": "Utilities",
      "type": "debit",
      "amount": 1850,
      "status": "Completed",
      "balanceAfter": 42079.75
    },
    {
      "id": 4,
      "date": "2026-07-08",
      "description": "Netflix Subscription",
      "merchant": "Netflix",
      "category": "Entertainment",
      "type": "debit",
      "amount": 649,
      "status": "Completed",
      "balanceAfter": 43929.75
    },
    {
      "id": 5,
      "date": "2026-07-07",
      "description": "Fuel Payment",
      "merchant": "Indian Oil",
      "category": "Transport",
      "type": "debit",
      "amount": 2200,
      "status": "Completed",
      "balanceAfter": 44578.75
    },
    {
      "id": 6,
      "date": "2026-07-06",
      "description": "UPI Transfer",
      "merchant": "Priya Patel",
      "category": "Transfer",
      "type": "debit",
      "amount": 5000,
      "status": "Completed",
      "balanceAfter": 46778.75
    },
    {
      "id": 7,
      "date": "2026-07-05",
      "description": "Interest Credit",
      "merchant": "XYZ Bank",
      "category": "Interest",
      "type": "credit",
      "amount": 520,
      "status": "Completed",
      "balanceAfter": 51778.75
    },
    {
      "id": 8,
      "date": "2026-07-04",
      "description": "Swiggy Order",
      "merchant": "Swiggy",
      "category": "Food",
      "type": "debit",
      "amount": 760,
      "status": "Completed",
      "balanceAfter": 51258.75
    },
    {
      "id": 9,
      "date": "2026-07-03",
      "description": "ATM Withdrawal",
      "merchant": "ATM",
      "category": "Cash",
      "type": "debit",
      "amount": 10000,
      "status": "Completed",
      "balanceAfter": 52018.75
    },
    {
      "id": 10,
      "date": "2026-07-02",
      "description": "Refund",
      "merchant": "Flipkart",
      "category": "Shopping",
      "type": "credit",
      "amount": 1499,
      "status": "Completed",
      "balanceAfter": 62018.75
    }
  ],

  "notifications": [
    {
      "id": 1,
      "title": "Salary Credited",
      "message": "₹85,000 has been credited to your account.",
      "read": false
    },
    {
      "id": 2,
      "title": "Bill Payment",
      "message": "Electricity bill paid successfully.",
      "read": true
    },
    {
      "id": 3,
      "title": "Low Credit Card Limit",
      "message": "You've used 82% of your credit limit.",
      "read": false
    }
  ]
}

export default customerInformation;