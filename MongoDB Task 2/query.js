//1. Find all the topics and tasks which are thought in the month of October?
  
  db.zen-database.find({ month: "October" });

//2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020?
  
  db.zen-database.find({
    $and: [
      {
        date: { $gt: "15-10-2020" },
      },
      {
        date: { $lt: "31-10-2020" },
      },
    ],
  });

//3. Find all the company drives and students who are appeared for the placement.?
  
  db.zen-database.find({ companydrives},{ placement} );

//4. Find the number of problems solved by the user in codekata?
  
  db.zen-database.find({},{codekata})

//5. Find all the mentors with who has the mentee's count more than 15?

  db.zen-database.find({menteesCount: {$gt:15}})
