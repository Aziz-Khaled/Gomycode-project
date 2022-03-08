import React from 'react'
import Carou4 from'./carou4.jpg'

function aboutUs() {
    return (
    <div className ="AboutUs-Section">
      <img  className ="Cover" src={Carou4}  alt ="photosAboutUs"   />
        <div>
        <h1 className ="Question">Who we are ?</h1>
        </div>

        <div className="aboutTheCompany">
            <p className ="test6">
            MTS+ was founded in 2000 with the goal of establishing a truly exceptional 500 Terry Francois Street in the San Francisco area. Our team of experienced agents are passionate about making our clients happy, and we go above and beyond to ensure superb customer service.

Since we opened our doors, we have dedicated ourselves to planning trips that provide our clients with beautiful memories for years to come. So whatever type of trip you're dreaming of, we've got you covered. Get in touch today and we'll take care of the rest.
            </p>
            <div>
{/*                        <div className ="logoForSocialMedia">
       <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
            </div>
    */}    
            <p className ="Footer ">
        ©2022 by aziz khaled. Proudly created at GomyCode 
        </p>
       </div>
        </div>
    </div>
    )
}

export default aboutUs