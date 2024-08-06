import axios from 'axios'

export const searchImage = async (query) => {
  const data = JSON.stringify({
    "q": query + ' amazon',
    "num": 1
  });
  
  const config = {
    method: 'post',
    url: 'https://google.serper.dev/images',
    headers: { 
      'X-API-KEY': import.meta.env.VITE_SERPER_API_KEY, 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  const response = await axios(config)

  return response.data.images[0].imageUrl
}