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
       ]
}



export default store