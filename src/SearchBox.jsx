import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
const SearchBox = () => {
    const {arrSearch,loading,err}=useSelector((s)=>s.cocktails)
    const navigate=useNavigate()
 const func=(id)=>{
    navigate(`/detailsofcocktails/${id}`)


 }
 
  return (
    <div>
        <div className='container mt-5'>

{loading===true?(
    <div className='d-flex justify-content-center mt-5 align-items-center'>
         <span className="loader text-dark mt-5"></span>

    </div>



):(  <div className="row d-flex justify-content-center">
    {arrSearch.length===0?(
        <h3 className='text-center my-5'>{err}</h3>    ):(
         arrSearch.map((e, idx) => (
            <div className="col-lg-4 col-md-4 col-sm-6  d-flex justify-content-center my-3" key={idx}>
    
                <Card className='w-75 h-100 d-flex justify-content-center card' style={{ background: '#F3FAF7' }}>
                    <Card.Img variant="top" src={e.strDrinkThumb
                    } />
                    <Card.Body>
                        <Card.Title className='text-center'>{e.strDrink}</Card.Title>
                        <div className='d-flex justify-content-center'>
                            <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"onClick={()=>func(e.idDrink)}>See Details</button>
    
                        </div>
    
                        <p className='text-center'>glass: {e.strGlass}</p>
                        <p className='text-center'>name: {e.strCategory
                        }</p>
    
                    </Card.Body>
                </Card>
    
    
    
            </div>)
    
    
        )
        
    )}
  
</div>

)}

</div>
    </div>
  )
}

export default SearchBox
