import React, { useEffect } from 'react';
import '../Footer/footer.css';
import video2 from '../assets/video2.mp4';
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos';
import 'aos/dist/aos.css';





function Footer() {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} muted autoPlay loop type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>  
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address'/>
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND
              <FiSend className='icon'/>
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="" className="logo flex">
              <MdTravelExplore className='icon'/>
                Travel
              </a>
            </div>

            <div data-aos="fade-up" className="footerPrg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eligendi amet laudantium pariatur ad harum suscipit libero commodi, doloribus necessitatibus, fuga excepturi. Architecto quas exercitationem, consequuntur cum ipsum molestias ipsam!
            </div>
            <div data-aos="fade-up" className="footerSocialIcons flex">
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>              
              <FaTripadvisor className='icon'/>              
            </div>
          </div>
          <div className="footerLinks grid">
            <div data-aos="fade-up" data-aos-duration= "3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services 
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Insurance 
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tourism 
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Payment 
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration= "4000" className="linkGroup">
              <span className="groupTitle">
                PARTENERS
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                 TripAdvisors
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Trivago 
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration= "5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTES
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                London 
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                California 
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Oceania 
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Africa 
              </li>
            </div>

          </div>
          <div className="footerDiv">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - SYLL 2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer