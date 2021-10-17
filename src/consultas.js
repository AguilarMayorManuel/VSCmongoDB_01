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

/*
Los trabajadores que miden 1.60 metros y pesan 70 kilogramos
*/
db.col001.find({size: {h: 1.60, w: 70}, })

/*
Los trabajadores que tienen 35 años o más
*/
db.col001.find({age: {$gte: 35}})

/*
Los trabajadores que tienen 35 años o menos
*/
db.col001.find({age: {$lte: 35}})