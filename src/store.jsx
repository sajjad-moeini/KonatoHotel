let store = {
       navbar : [
              { title: 'Home', path: '/' },
       { title: 'Property', path: '/Property' },
       { title: 'About', path: '/About' },
       {
              title: 'Blog', childs: [
                     { title: 'Blog', path: '/Blog' },
                     { title: 'Blog Detailes', path: '/BlogDetailes' },
                     { title: 'Elements', path: '/Elements' },
              ],
       },
       { title: 'Contact', path: '/Contact' },
       ],
       orderBoxes:[
              {title:'Rent',subtitle:['Rent','Rent','Rent']},
              {title:'Bed',subtitle:['Bed','Bed','Bed']},
              {title:'Bath',subtitle:['Bath','Bath','Bath']},
       ],
       homeSuggestPlaceCarousel:[
              {bg:"../../../public/images/home/h1_hero1.jpg.webp",title:' Light House NY',price:3272},
              {bg:"../../../public/images/home/best-halong-cruises.jpg",title:'Indonesia Beach',price:2777},
              {bg:"../../../public/images/home/Tropical-Modern-House-Costa-Rica_1.jpg",title:'Tropical Modern House Costa Rica',price:4999},
       ]
}



export default store