import React, { useEffect } from 'react';
import '../Main/main.css';
// import data from '../Util';
import img from '../assets/img.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import { IoLocationOutline } from "react-icons/io5";
import { BsClipboard2Check } from "react-icons/bs";
import Aos from 'aos';
import 'aos/dist/aos.css'


const data = [
    {
        id: 1,
        imgSrc: img,
        desTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$1010',
        description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id: 1,
        imgSrc: img2,
        desTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id: 1,
        imgSrc: img3,
        desTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$1000',
        description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id: 1,
        imgSrc: img4,
        desTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id: 1,
        imgSrc: img5,
        desTitle: 'Guanajuata',
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id: 1,
        imgSrc: img6,
        desTitle: 'Cinque Terre',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activities.'
    }
]


function Main() {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return (
      <section className='main container section'>
        <div data-aos="fade-up" className="secTitle">
          <h3 data-aos="fade-right" className='title'>Most visited destinations</h3>
        </div>
        <div className="secContent grid">
          {
            data.map((elem) =>{
              return(
                <div key={elem.id} data-aos="fade-up" className='singleDestination'>
                  <div className="imageDiv">
                    <img src={elem.imgSrc} alt={elem.desTitle} />
                  </div>
                  <div className="cardInfo">
                    <h4 className='desTitle'>{elem.desTitle}</h4>
                    <span className='continent flex'>
                      <IoLocationOutline  className='icon'/>
                      <span className="name">{elem.location}</span>
                    </span>
                    <div className="fees flex">
                      <div className="grade">
                        <span>{elem.grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{elem.fees}</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{elem.description}</p>
                    </div>
                    <button className="btn flex">
                      DETAILS
                      <BsClipboard2Check className='icon'/>
                    </button>
                  </div>
                </div>  
                
              )
            })
          }
        </div>
      </section>
    )
}

export default Main