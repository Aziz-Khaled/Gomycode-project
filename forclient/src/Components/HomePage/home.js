import React from 'react'
import Image3 from '../../image3.jpg'
function home() {
  return (
    <div>

            <div>
        <img className="Image1" src={Image3} alt = 'ph' />
        
            </div>

            <div className ="parag1" >
        <h1 >plan your next aventure with us</h1>
        <p >your tavel experts</p>
            </div>

            <div className = "block2">
                <h2 className="title">TESTIMONIALS AND REVIEWS</h2>
            <div className = "testimonials">
                <div className = "testimonials-blocks" > 

                <div>
                <i class="fa-solid fa-comment fa-2xl"></i>
                <p style={{ width: '18rem' }} className =" quotes">
                thank you so much for a well organized trip. We had a wonderful time. Hard to believe it's already done and past. Weather was awesome, the hotels were nice, thank you for everything!
                <h4 className ='name'>Lori R.</h4>
                </p>
                </div>

                <div>
                <i class="fa-solid fa-comment fa-2xl"></i>
                <p style={{ width: '18rem' }} className =" quotes">
                is great to work with! they have helped with numerous travel occasions. they responds very promptly to requests and have helped to make wonderful vacation plans for my family and I <br/>
                <h4 className ='name' >Tiffany H.</h4>
                </p>
                </div>

                <div>
                <i class="fa-solid fa-comment fa-2xl"></i>
                <p style={{ width: '18rem' }} className =" quotes">
                Hi. We had a wonderful time! I highly recommend the Resort at Longboat Key & the area. It was perfect for not being crowded on the beach w/ Covid concerns.Thanks so much for finding the perfect spot for us for spring break :) <br/>
                <h4>Stephanie B.</h4>
                </p>
                </div>
                
                </div>
            </div>
            
            </div>
    </div>
)
}

export default home