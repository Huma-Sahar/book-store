import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card} from 'react-bootstrap'



const List = () => {
    const [book, setbook] = useState([])
    const Key = 'fA7AAgD8AgoWS32hfms0tSlQB12AgcAX'
    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key= ${Key}`)
            console.log(res.data.results.books)
            setbook(res.data.results.books)
        }
        fetchBooks()
    })
    return (
        <>
            <h1 className='font-bold text-center py-5 text-primary '>Books</h1>
            <div className='container'>
                <div className='row'>
            
            {book.map((item) => {
                
                const{title,
                    description,
                    author,
                    book_image,
                    publisher,
                    buy_links,
                    price}=item
                return (
                    <>
                    <Card className='bg-light py-4 my-2 Card sx-2 px-4 mr-5' style={{ width: '18rem' }}>
            
                        <div>
                            <img className='block mx-auto '  width= '200' src={book_image} alt={item.title}  />
                            </div>
                        <div>
                            <h3 className='font-bold my-2 text-2x1 text-primary'>{title}</h3>
                            <p>{description}</p>
                            <p><span className='font-weight-bold '>Writen By: </span>{author}</p>
                        </div>
                        <ul>
                            <li><span className='font-weight-bold '>Published by :</span>{publisher}</li>
                            <li>Isbn :{item.primary_isbn10}</li>
                        </ul>
                        <h3 className='font-weight-bold text-xl'>Buy Now</h3>
                        <ul>
                            {buy_links.map((link)=>{
                                const{name,url}=link
                                return(
                                    <div key={name}>
                                        
                                        <a href={url} target='_blank' >{name}{price} </a>
                                    </div>
                                )
                            })}
                     
                       </ul>
                    </Card>
                    </>
               )
                
               })}
  
  </div>
  </div>

        </>
    )
}
export default List
