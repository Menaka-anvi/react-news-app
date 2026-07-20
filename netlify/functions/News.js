export async function handler(event) {
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const { page = 1, country = "us", category = "general", pageSize = 10 } = event.queryStringParameters;

  const url = `https://gnews.io/api/v4/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // console.log("Using API key:",apikey);
    console.log("NewsAPI response:",data);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch news" }),
    };
  }
}



