export default async function handler(req, res) {
  const { page = 1, country = "us", category = "general", pageSize = 10 } = req.query;
  const API_KEY = process.env.GNEWS_API_KEY;

  const url = `https://gnews.io/api/v4/top-headlines?country=${country}&category=${category}&page=${page}&max=${pageSize}&apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
