import fetch from 'node-fetch';

export default async function(req, res) {
	const {id} = req.query

	try
	{
		const buffer = await getAvatar(id)

		res.status(200).send(buffer)
	}
	catch (error)
	{
		switch (error.constructor)
		{
			case TypeError:
				res.status(400).send({
					ok: false,
					message: "No ID"
				})
				break
			default:
				res.status(error.code)
				break
		}
	}
}

async function getAvatar(id)
{
	if (!id)
	{
		throw new TypeError(`"id" is not a non-null object`)
	}

	let result = await fetch(`https://discordapp.com/api/users/${id}`, {
		headers: {
			'Authorization': `Bot ${process.env.TOKEN}`
		}
	})

	if (!result.ok)
	{
		const err = new Error("Discord API failure")
		err.code = result.status

		throw err
	}

	const json = await result.json()
	const avatar = await fetch(`https://cdn.discordapp.com/avatars/${id}/${json.avatar}`)  // no need for extension

	return await avatar.buffer()
}
