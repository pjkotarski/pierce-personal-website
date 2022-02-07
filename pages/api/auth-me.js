export default async function handler(req, res) {

  const password = req.body.password;
  if (password && password === process.env.PASSWORD) {
    res.status(200).send('authenticated!');
  } else {
    res.status(401).send('not authenticated');
  }

}