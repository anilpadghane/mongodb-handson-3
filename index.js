const mongoose = require('mongoose');
const url = "mongodb://localhost:27017";
 
    mongoose
      .connect(MongoDB)
      .then(() => {
        console.log("Connect to Port :" + MongoDB);
      })
      .catch((err) => {
        console.log(err);
      });

    const Schema = mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      Job: String,
      Age: Number,
      Lang: String,
      Siblings: String,
      date: {
        type: Date,
        default: Date.now,
      },
    });

    const CollectionName = mongoose.model("Test", Schema);

    const wait = async () => {
      try {
        const finalDocument = new CollectionName({
          firstName: "John",
          lastName: "Doe",
          salary: "25000",
          department: "HR",
          lastCompany: "X",
          lastSalary: "10000",
          overallExp: "2",
          contactInfo: "1234567890",
          yearGrad: "2016",
          gradStream: "CSE",
        });

        const finalDocumentTwo = new CollectionName({
          firstName: "Rohan",
          lastName: "Jame",
          salary: "30000",
          department: "Technical",
          lastCompany: "Y",
          lastSalary: "15000",
          overallExp: "1",
          contactInfo: "1234567860",
          yearGrad: "2015",
          gradStream: "CSE",
        });

        const finalDocumentThree = new CollectionName({
          firstName: "Jame",
          lastName: "Doe",
          salary: "35000",
          department: "Accounts",
          lastCompany: "Z",
          lastSalary: "20000",
          overallExp: "1",
          contactInfo: "123567890",
          yearGrad: "2019",
          gradStream: "ECE",
        });

        const finalDocumentFive = new CollectionName({
          firstName: "Jame",
          lastName: "roh",
          salary: "35000",
          department: "Accounts",
          lastCompany: "Z",
          lastSalary: "15000",
          overallExp: "2",
          contactInfo: "123567890",
          yearGrad: "2019",
          gradStream: "EEE",
        });
        const finalDocumentSix = new CollectionName({
          firstName: "Rohan",
          lastName: "Jame",
          salary: "30000",
          department: "Technical",
          lastCompany: "Y",
          lastSalary: "15000",
          overallExp: "1",
          contactInfo: "1234567860",
          yearGrad: "2015",
          gradStream: "CSE",
        });
        const finalDocumentSeven = new CollectionName({
          firstName: "Jame",
          lastName: "Doe",
          salary: "35000",
          department: "Accounts",
          lastCompany: "Z",
          lastSalary: "20000",
          overallExp: "1",
          contactInfo: "123567890",
          yearGrad: "2019",
          gradStream: "ECE",
        });
        const finalDocumentEigth = new CollectionName({
          firstName: "Sao",
          lastName: "Avika",
          salary: "30000",
          department: "Sales",
          lastCompany: "Y",
          lastSalary: "15000",
          overallExp: "2",
          contactInfo: "1234567860",
          yearGrad: "2015",
          gradStream: "CSE",
        });
        const finalDocumentNine = new CollectionName({
          firstName: "Sao",
          lastName: "Avika",
          salary: "30000",
          department: "Sales",
          lastCompany: "Y",
          lastSalary: "15000",
          overallExp: "2",
          contactInfo: "1234567860",
          yearGrad: "2015",
          gradStream: "CSE",
        });
        const finalDocumentTen = new CollectionName({
          firstName: "Jame",
          lastName: "Doe",
          salary: "35000",
          department: "Accounts",
          lastCompany: "Z",
          lastSalary: "15000",
          overallExp: "2",
          contactInfo: "123567890",
          yearGrad: "2019",
          gradStream: "EEE",
        });
        const finalDocumentTwelve = new CollectionName({
          firstName: "Rohan",
          lastName: "Jame",
          salary: "30000",
          department: "Technical",
          lastCompany: "Y",
          lastSalary: "15000",
          overallExp: "1",
          contactInfo: "1234567860",
          yearGrad: "2015",
          gradStream: "CSE",
        });
        const finalDocumentThirteen = new CollectionName({
          firstName: "Jame",
          lastName: "Doe",
          salary: "35000",
          department: "Accounts",
          lastCompany: "Z",
          lastSalary: "20000",
          overallExp: "1",
          contactInfo: "123567890",
          yearGrad: "2019",
          gradStream: "ECE",
        });
        const finalDocumentFourteen = new CollectionName({
          firstName: "Sao",
          lastName: "Avika",
          salary: "30000",
          department: "Sales",
          lastCompany: "Y",
          lastSalary: "15000",
          overallExp: "2",
          contactInfo: "1234567860",
          yearGrad: "2015",
          gradStream: "CSE",
        });
        const finalDocumentFifteen = new CollectionName({
          firstName: "Jame",
          lastName: "Doe",
          salary: "35000",
          department: "Accounts",
          lastCompany: "Z",
          lastSalary: "15000",
          overallExp: "2",
          contactInfo: "123567890",
          yearGrad: "2019",
          gradStream: "EEE",
        });

        const result = await CollectionName.insertMany([
          finalDocument,
          finalDocumentTwo,
          finalDocumentThree,
          finalDocumentFive,
          finalDocumentSix,
          finalDocumentSeven,
          finalDocumentEigth,
          finalDocumentNine,
          finalDocumentTen,
          finalDocumentTwelve,
          finalDocumentThirteen,
          finalDocumentFourteen,
          finalDocumentFifteen,
        ]);
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    };


    const show = async () => {
      const result = await CollectionName.find({ salary: { $gt: 30000 } });
      console.log(result);
    };
    show();
