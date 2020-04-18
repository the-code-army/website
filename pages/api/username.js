import fetch from "node-fetch";
module.exports = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    res.status(400).send({
      ok: false,
      message: "No ID",
    });
    return;
  }
  let result = await fetch(`https://discordapp.com/api/users/${id}`, {
    headers: {
      Authorization: `Bot ${process.env.TOKEN}`,
    },
  });
  if (!result.ok) {
    res.status(result.status);
    return;
  }
  let json = await result.json();

  res.status(200).send(json);
};
