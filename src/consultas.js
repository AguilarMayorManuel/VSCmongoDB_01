/*
Todos los documentos con todos sus campos
*/
db.col001.find()

/*
Todos los documentos de la colección
*/
db.col001.find({})

/*
Los que trabajan en el turno de tarde
*/
db.col001.find({shift: "afternoon"})
db.col001.find({shift: {$eq: "afternoon"}})

/*
Los trabajadores que nacieron en España
*/
db.col001.find({country: {$eq: "Spain"}})