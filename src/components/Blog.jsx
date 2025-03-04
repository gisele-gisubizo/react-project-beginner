import React from "react"
import '../styles/blog.css'
import b1 from '../assets/b1.webp'
import b2 from '../assets/b2.webp'
import b3 from '../assets/b3.webp'
import b4 from '../assets/b4.webp'
import b5 from '../assets/b5.webp'
import b6 from '../assets/b6.webp'
import "@fontsource/inter"; // Default weight
import "@fontsource/open-sans";
import "@fontsource/lora";



function Blog(){
    const Products =[
        {   
            picture:b1,
            date:'July 18, 2021',
            name:'Benitha Zuri shoes',
            Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]',
        
        },
        {   
            picture:b2,
            date:'July 18, 2021',
            name:'Ingamba Mens shoes',
            Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]',
        },
        {    picture:b3,
            date:'July 18, 2021',
            name:'Isimbi Women shoes',
            Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]',
            
        },

    ]

    const BlogProducts =[
        {   
            picture:b4,
            date:'July 18, 2021',
            name:'Benitha Zuri shoes',
            Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]',
        
        },
        {   
            picture:b5,
            date:'July 18, 2021',
            name:'Ingamba Mens shoes',
            Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]',
        },
        {    picture:b6,
            date:'July 18, 2021',
            name:'Isimbi Women shoes',
            Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]',
            
        },

]
    return(

        <div className="Blog-Blog">
            <h1>Blog</h1>
            <div className="blog">
            <div className='blog-head'>
                
                </div>
                {/* {
                 Products.map((item) => (
                    <>
                  <div className='BlogS-content'>
            
                                      <div className='image-blog'><img src={item.picture} className='image-image-blog'/> </div>
            
                         <div className='item-date'>{item.date}</div>
                         <div className='item-name'>{item.name}</div>
                         <div className='item-Description'>{item.Description}</div>
            
                  </div>

            
            
            
                    </>
             ))
            } */}


            </div>

            <div className="Blog">
                {
                     BlogProducts.map((item) => (
                        <>
                      <div className='Blogs-content'>
                
                                          <div className='image-blog'><img src={item.picture} className='image-image-blog'/> </div>
                
                             <div className='item.date'>{item.date}</div>
                             <div className='item.name'>{item.name}</div>
                             <div className='item-Description'>{item.Description}</div>
                
                
                
                
                
                      </div>
                
                
                
                
                        </>
                 ))




                 
                }

                
            </div>
            
            <div className="Blog">
                {
                     BlogProducts.map((item) => (
                        <>
                      <div className='Blogs-content'>
                
                                          <div className='image-blog'><img src={item.picture} className='image-image-blog'/> </div>
                
                             <div className='item.date'>{item.date}</div>
                             <div className='item.name'>{item.name}</div>
                             <div className='item-Description'>{item.Description}</div>
                
                
                
                
                
                      </div>
                
                
                
                
                        </>
                 ))




                 
                }

                
            </div>
        </div>
    )
}
export default Blog;