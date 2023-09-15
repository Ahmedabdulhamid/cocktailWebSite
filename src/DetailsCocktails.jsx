import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDetails } from './Redux/getAllData'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'flowbite-react';
const DetailsCocktails = () => {
    const { id } = useParams()
  
    const dispatch = useDispatch()
    const { cocktailsDetails, objDetails,loading } = useSelector((s) => s.cocktails)
    useEffect(() => {
        dispatch(getDetails(id))
    }, [])

    const nav=useNavigate()
    const handlBack=()=>{
      nav(-1)
    }
    return (
        <div className='container my-5'>
            {loading===true?( <div className='d-flex justify-content-center mt-5 align-items-center'>
                     <span className="loader text-dark mt-5"></span>

                </div>):(
                    <div>
                         <div className="row my-5">
                <div className="col-md-5 my-5">
                    <img src={objDetails.strDrinkThumb
                    } alt={objDetails.strCategory
                    } srcset="" />
                </div>
                <div className="col-md-7 my-5">
                    <p>Category : {objDetails.strCategory
                    }</p>
                    <p>Info : {objDetails.strAlcoholic

                    }</p>
                    <p>Name : {objDetails.strDrink



                    }</p>
                    <p>Glass : {objDetails.strGlass




                    }</p>


                    <p>{objDetails.strInstructions
                    }</p>
                    <p>{objDetails.strInstructionsIT

                    }</p>
                    <p>{objDetails.strInstructionsDE

                    }</p>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <Button color="purple"onClick={handlBack}>
                   Back
                </Button>
            </div>
                    </div>
                )}
           


        </div>
    )
}

export default DetailsCocktails
