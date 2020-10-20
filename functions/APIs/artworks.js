const { db } = require('../util/admin');


// exports.getAllTodos = (request, response) => {
// 	db
//         .collection('artworks')
// 		.orderBy('createdAt', 'desc')
// 		.get()
// 		.then((data) => {
// 			let art = [];
// 			data.forEach((doc) => {
// 				art.push({
//                     artId: doc.id,
//                     title: doc.data().title,
//                     artist: doc.data().artist,
//                     createdAt: doc.data().createdAt,
//                     clicks : doc.data().clicks
// 				});
// 			});
// 			return response.json(art);
// 		})
// 		.catch((err) => {
// 			console.error(err);
// 			return response.status(500).json({ error: err.code});
// 		});
// };
