db.col001.insertOne({Trabajadores: 7})
db.col001.deleteMany({})
db.col001.insertMany(
    [
        {name: "Elena", country: "Nicaragua", age: 55, size: {h: 1.75, w: 80}, shift: "morning"},
        {name: "Pablo", country: "Spain", age: 48, size: {h: 1.83, w: 72}, shift: "morning"},
        {name: "Manuel", country: "Spain", age: 29, size: {h: 1.94, w: 94}, shift: "morning"},
        {name: "Mohammed", country: "Morocco", age: 30, size: { h: 1.92, w: 78}, shift: "morning"},
        {name: "Juana", country: "Peru", age: 35, size: {h: 1.60, w: 70}, shift: "afternoon"},
        {name: "Carmen", country: "Spain", age: 48, size: {h: 1.73, w: 60}, shift: "afternoon"},
        {name: "Pablo", country: "Colombia", age: 43, size: {h:1.78, w: 75}, shift: "afternoon"},  
    ]
)
