export default [
   {
      title: 'BASE CAMP CAFE',
      imgUrl: 'assets/BASE CAMP CAFE.webp'
    },
    {
      title: 'basera',
      imgUrl: 'public/assets/basera.webp'
    },
    {
      title: 'bay leaf',
      imgUrl: '/assets/bay leaf.jpeg'
    },
    {
      title: 'BHANSA',
      imgUrl: 'public/assets/BHANSA.webp'
    },
    {
      title: 'CHEF BASANTA',
      imgUrl: '/assets/CHEF BASANTA.jpeg'
    },
    {
      title: 'EASY RENTALS',
      imgUrl: '/assets/EASY-RENTALS.jpeg'
    },
    {
      title: 'elrose',
      imgUrl: '/assets/elrose.jpeg'
    },
    {
      title: 'gham',
      imgUrl: '/assets/gham.jpeg'
    },
    {
      title: 'HOTEL SALLERI',
      imgUrl: '/assets/HOTEL-SALLERI.jpeg'
    },
    {
      title: 'loshiva',
      imgUrl: '/assets/loshiva.jpeg'
    },
    {
      title: 'MAHAJAN',
      imgUrl: '/assets/MAHAJAN.png'
    },
    {
      title: 'old town',
      imgUrl: '/assets/old-town.jpeg'
    },
    {
      title: 'THE MANTRA',
      imgUrl: '/assets/THE-MANTRA.jpeg'
    },
    {
      title: 'tokyo',
      imgUrl: '/assets/tokyo.jpeg'
    },
    {
      title: 'tripura resort',
      imgUrl: '/assets/tripura-resort.jpeg'
    }
    
   
  ].map((portfolio) => {
    return {
        ...portfolio,
        imgUrl: portfolio.imgUrl.replace(/\.[^.]+$/, ".webp")
    };
});
