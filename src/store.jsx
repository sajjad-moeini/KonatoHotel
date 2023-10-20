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
              {title:'Bed',subtitle:['Bed','Bed','Bed'],icon:'fa fa-bed'},
              {title:'Bath',subtitle:['Bath','Bath','Bath'],icon:'fa fa-shower'},
       ],
       homeSuggestPlaceCarousel:[
              {bg:"../../../public/images/home/h1_hero1.jpg.webp",title:' Light House NY',price:3272},
              {bg:"../../../public/images/home/best-halong-cruises.jpg",title:'Indonesia Beach',price:2777},
              {bg:"../../../public/images/home/Tropical-Modern-House-Costa-Rica_1.jpg",title:'Tropical Modern House',price:4999},
       ],
       LastestAndFeaturedProperty:[
              {img:'images/home/items1.jpg.webp',title:'Appartment',price:7675,aos:"fade-down",aosTime:'1000'},
              {img:'images/home/items2.jpg.webp',title:'Classic home',price:5125,aos:"fade-up",aosTime:'2000'},
              {img:'images/home/items1.jpg.webp',title:'Office',price:4500,aos:"fade-down",aosTime:'1000'},
              {img:'images/home/items2.jpg.webp',title:'Appartment',price:7675,aos:"fade-up",aosTime:'2000'},
              {img:'images/home/items1.jpg.webp',title:'Appartment',price:7675,aos:"fade-down",aosTime:'1000'},
              {img:'images/home/items2.jpg.webp',title:'Classic home',price:5125,aos:"fade-up",aosTime:'2000'},
              
       ],
       homeServiceBoxes:[
              {img:"images/home/services1.svg",title:'Sell home or office',text:'Get started by choosing from one of our pre-built page templates to showcase your properties',aos:'fade-up-right'},
              {img:"images/home/services2.svg",title:'Rent home or office',text:'Get started by choosing from one of our pre-built page templates to showcase your properties',aos:'fade-down'},
              {img:"images/home/services3.svg",title:'Find next',text:'Get started by choosing from one of our pre-built page templates to showcase your properties',aos:'fade-up-left'},
       ],
       exploreWithPropertyTypeSection:[
              {img:"images/home/property1.svg",title:'Home & Appartment',aosTime:500},
              {img:"images/home/property2.svg",title:'Vila',aosTime:1500},
              {img:"images/home/property3.svg",title:'Studio',aosTime:2500},
              {img:"images/home/property4.svg",title:'Office',aosTime:3500},
       ],
       agents:[
              {img:"images/persons/team1.jpg.webp",name:'Buster Hyman',post:'Real Estate Agent'},
              {img:"images/persons/team2.jpg.webp",name:'Jimmy Changa',post:'Real Estate Agent'},
              {img:"images/persons/team3.jpg.webp",name:'Nick R. Bocker',post:'Real Estate Agent'},
              {img:"images/persons/team4.jpg.webp",name:'Holly Graham',post:'Real Estate Agent'},
              
       ],
       footerUls:[
              {title:'Navigation',
       li:['Home','About','Services','Blog','Contact']},
              {title:'Services',
       li:['Drone Mapping','Real State','Commercial','Construction',]},
              {title:'Support',
       li:['Drone Mapping','Real State','Commercial','Construction',]},
       ]
}



export default store