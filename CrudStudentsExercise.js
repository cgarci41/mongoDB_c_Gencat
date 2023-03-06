//Insert one student with insertOne
print("Insert one student with insertOne")
printjson(db.students.insertOne({name:'Tom',major:'Geology',gpa:3.9}))

//Insert multiple students with insertMany
print("Insert multiple students with insertMany")
printjson(db.students.insertMany([{name: 'Jacob', major:'Phisics',gpa:3.2},{nom: 'Kathy',
major:'Geology',gpa:3.5}]))

//Find all students
print("Find all students")
printjson(db.students.find({}))

//update a student with updateOne
print("update a student with updateOne")
printjson(db.californians.updateOne({name: 'Tom'}, {$set: {gpa: 3.1}}))

//update multiple student with updateMany
print("update multiple student with updateMany")
printjson(db.students.updateMany(
    { major: "Geology" },
    { $set: { major: "Software Engineering" } }
))

//Find all students ordered by name
print("Find all students ordered by name")
printjson(db.students.find({}).sort({name:1}))

//Find all students and limit to one student
print("Find all students and limit to one student")
printjson(db.students.find({}).limit(1))

//Find first student according insertion order
print("Find first student according insertion order")
printjson(db.students.findOne({}))

//DeleteMany 
print("DeleteMany")
printjson(db.students.deleteMany({ major: { $eq: 'Software Engineering' } }));


//Find all students
print("Find all students")
printjson(db.students.find({}))

//drop students collection
print("drop students collection")
printjson(db.students.drop())
