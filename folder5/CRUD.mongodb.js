use("CRUD")
// db.operations.insertMany([
//     {
//       "username": "alice123",
//       "name": "Alice Johnson",
//       "age": 28,
//       "email": "alice.johnson@example.com",
//       "address": {
//         "street": "456 Oak St",
//         "city": "Somewhere",
//         "country": "Canada"
//       },
//       "interests": ["music", "photography", "hiking"],
//       "registrationDate": "2022-01-15T00:00:00.000Z"
//     },
//     {
//       "username": "bob456",
//       "name": "Bob Smith",
//       "age": 35,
//       "email": "bob.smith@example.com",
//       "address": {
//         "street": "789 Pine St",
//         "city": "Anywhere",
//         "country": "UK"
//       },
//       "interests": ["programming", "gaming", "cooking"],
//       "registrationDate": "2021-11-20T00:00:00.000Z"
//     },
//     {
//       "username": "charlie789",
//       "name": "Charlie Brown",
//       "age": 25,
//       "email": "charlie.brown@example.com",
//       "address": {
//         "street": "101 Elm St",
//         "city": "Nowhere",
//         "country": "Australia"
//       },
//       "interests": ["sports", "reading", "traveling"],
//       "registrationDate": "2023-02-05T00:00:00.000Z"
//     }
//   ]
//   )
// let a = db.operations.find({age:35})
// console.log(a.toArray())
// db.operations.updateMany({age:25},{$set:{age:30}})
db.operations.deleteMany({age:30})