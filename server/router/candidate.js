const candidate = require('../controller/candidate')

module.exports = function (app) {
	app.post('/api/candidate/userinfo', async(req, res) => {
		await candidate.infoEdit(req.body.username, req.body.formData)
		res.send({ok: true, data: req.body.formData})
	})

	app.post('/api/collection/add', async(req, res) => {
		await candidate.addCollection(req.body.username, req.body.collectiontype, req.body.collectionid)
		res.send({ok: true})
	})

	app.post('/api/collection/remove', async(req, res) => {
		await candidate.removeCollection(req.body.username, req.body.collectionid)
		res.send({ok: true})
	})

	app.get('/api/collection/list', async(req, res) => {
		const result = await candidate.getCollection(req.query.username, req.query.collectiontype)
		result.length === 0 ? res.send({ok: false}) : res.send({ok: true, data: result})
	})

}