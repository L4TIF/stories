
const getRandomImage = () => {
  const randomNumber = Math.floor(Math.random() * 999);
  
  return `https://picsum.photos/id/${randomNumber}/200/300`
}


export const stories = [
  {
    "id": 1,
      "name": "Luna",
      "image": getRandomImage()
    },
    {
      "id": 2,
      "name": "Alex",
      "image": getRandomImage()
      },
      {
      "id": 3,
      "name": "Sophie",
      "image": getRandomImage()
    },
    {
      "id": 4,
      "name": "James",
      "image": getRandomImage()
    },
    {
      "id": 5,
      "name": "Emma",
      "image": getRandomImage()
    },
    {
      "id": 6,
      "name": "Noah",
      "image": getRandomImage()
    },
    {
      "id": 7,
      "name": "Olivia",
      "image": getRandomImage()
    },
    {
      "id": 8,
      "name": "Ethan",
      "image": getRandomImage()
    },
    {
      "id": 9,
      "name": "Ava",
      "image": getRandomImage()
    },
    {
      "id": 10,
      "name": "Liam",
      "image": getRandomImage()
    },
    {
      "id": 11,
      "name": "Mia",
      "image": getRandomImage()
    },
    {
      "id": 12,
      "name": "Lucas",
      "image": getRandomImage()
    },
    {
      "id": 13,
      "name": "Isabella",
      "image": getRandomImage()
      
    }
  ]

