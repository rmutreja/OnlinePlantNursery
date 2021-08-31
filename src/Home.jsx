// import React from 'react'
// import car3 from './images/car3.jpg'
// function Home() {
//     return (
//         <div>
//          <h3 className='text-primary text-center'>Home Page</h3>   
//             <hr/>
//          <img className='img-thumbnail mx-auto d-block' src={car3}/>
//         </div>
//     )
// }

// export default Home


import React from 'react';
//import Header from './Header';
import ss from './img/bg-img/23.jpg'
import b1 from './img/core-img/b1.png'
import b2 from './img/core-img/b2.png'
import b3 from './img/core-img/b3.png'
import b4 from './img/core-img/b4.png'
import s1 from './img/core-img/s1.png'
import s2 from './img/core-img/s2.png'
import s3 from './img/core-img/s3.png'
//import backg1 from './images/backg1.png'
import mhome1 from './images/mhome1.png'
import mhome2 from './images/mhome2.png'

import mhome3 from './images/mhome3.png'
import Carousel from 'react-bootstrap/Carousel'
//import Footer from './Footer';


function Home() {


  

  return (

    <>

    {/* <br></br> */}
    <div className='container' > 
    
                                            
                                              <Carousel interval={2000} keyboard={false} pauseOnhover={true}>  
                                             
                                              <Carousel.Item style={{height:"85vh"}}  >  
                                              <img height="600px" alt="for sell"
                                              className="d-block w-100" src={mhome1}  />  
                                                <Carousel.Caption>  
                                                  <h1 className="text-primary">GROW BLOOM HAPPY</h1>  
                                                      </Carousel.Caption>  
                                                      </Carousel.Item  > 

                                                     
                                 <Carousel.Item style={{height:"85vh"}}>  
                                 <img height="600px" alt="for sell"
                                   className="d-block w-100"  
                                    src={mhome2}    />  
                                       <Carousel.Caption>  
                                   <h1 className=" pb-5 mb-5">LIVE WITH NATURE </h1>  
                                      </Carousel.Caption>  
                                         </Carousel.Item>
                                      
                                       <Carousel.Item style={{height:"85vh"}}>  
                                       <img height="600px" alt="for sell"
                                        className="d-block w-100"  
                                         src={mhome3}   />  
                                        <Carousel.Caption>  
                                         <h1 className=" text-primary">Plants are bundle of JOY</h1>  
                                        
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  


                                        <section class="our-services-area bg-gray section-padding-100-0">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    {/* <!-- Section Heading --> */}
                    <div class="section-heading text-center">
                      <br></br>
                      <br></br>
                        <h2>OUR SERVICES</h2>
                        <p>We provide the perfect service for you.</p>
                    </div>
                </div>
            </div>

            <div class="row justify-content-between container">
                <div class="col-12 col-lg-5">
                    <div class="alazea-service-area mb-100">

                        {/* <!-- Single Service Area --> */}
                        <div class="single-service-area d-flex align-items-center wow fadeInUp" data-wow-delay="100ms">
                            {/* <!-- Icon --> */}
                            <div class="service-icon mr-30">
                                <img src={s1} alt=""/>
                            </div>
                            {/* <!-- Content --> */}
                            <div class="service-content">
                              <br></br>
                              
                                <h5>&nbsp; Plants Care</h5>
                                <p>&nbsp; As the seasons change, so too do your plant’s needs. Indoor plants are affected by outdoor changes. In this we’re talking about all things that you can do to keep your plants happy as the temperature rises.</p>
                            </div>
                        </div>

                        {/* <!-- Single Service Area --> */}
                        <div class="single-service-area d-flex align-items-center wow fadeInUp" data-wow-delay="300ms">
                            {/* <!-- Icon --> */}
                            <div class="service-icon mr-30">
                                <img src={s2} alt=""/>
                            </div>
                            {/* <!-- Content --> */}
                            <div class="service-content">
                              <br></br>
                              
                                <h5>&nbsp; Pressure Washing</h5>
                                <p>&nbsp;The plants that surround your home's foundation, however, are directly underneath the power-washing application. Although power-wash chemicals are manufactured to be safe for both animal and plant life, it is possible for them to kill plants.</p>
                            </div>
                        </div>

                        {/* <!-- Single Service Area --> */}
                        <div class="single-service-area d-flex align-items-center wow fadeInUp" data-wow-delay="500ms">
                            {/* <!-- Icon --> */}
                            <div class="service-icon mr-30">
                                <img src={s3} alt=""/>
                            </div>
                            {/* <!-- Content --> */}
                            <div class="service-content">
                              <br></br>
                              
                                <h5>&nbsp; Tree Service &amp; Trimming</h5>
                                <p>&nbsp; Trimming (a tree, shrub, or bush) by cutting away dead or overgrown branches or stems, especially to increase fruitfulness and growth.
Whether you’re just starting out with caring for plants, or you’re managing an indoor jungle, pruning plants is an activity that everyone can do at one point or another.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-16 col-lg-7">
                    <div class="alazea-video-area bg-overlay mb-100">
                        <img src={ss} height='550px' alt=""/>
                        <a href="http://www.youtube.com/watch?v=7HKoqNJtMTQ" class="video-icon">
                            <i class="fa fa-play" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </section>

        <br></br>
        <br></br>
        <br></br>
        <section class="about-us-area section-padding-100-0">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-12 col-lg-5">
                    {/* <!-- Section Heading --> */}
                    <div class="section-heading">
                        <h2>ABOUT US</h2>
                        <br></br>
                                    <br></br>
                        <p>We are leading in the plants service fields.</p>
                    </div>
                    <p>A one-stop-shop for all gardening related requirements, Online Plant Nursery has more than 500+ products available online for delivery across India saving you numerous messy trips to various nurseries.We deliver all kinds of plants, planters, seeds, to curated plant solutions.</p>

                    {/* <!-- Progress Bar Content Area --> */}
                    <div class="alazea-progress-bar mb-50">
                        {/* <!-- Single Progress Bar --> */}
                        <div class="single_progress_bar">
                            <p>Office plants</p>
                            <div id="bar1" class="barfiller">
                                <div class="tipWrap">
                                    <span class="tip"></span>
                                </div>
                                <span class="fill" data-percentage="80"></span>
                            </div>
                        </div>

                        {/* <!-- Single Progress Bar --> */}
                        <div class="single_progress_bar">
                            <p>Field manager</p>
                            <div id="bar2" class="barfiller">
                                <div class="tipWrap">
                                    <span class="tip"></span>
                                </div>
                                <span class="fill" data-percentage="70"></span>
                            </div>
                        </div>

                        {/* <!-- Single Progress Bar --> */}
                        <div class="single_progress_bar">
                            <p>Landscape design</p>
                            <div id="bar3" class="barfiller">
                                <div class="tipWrap">
                                    <span class="tip"></span>
                                </div>
                                <span class="fill" data-percentage="85"></span>
                            </div>
                        </div>

                        {/* <!-- Single Progress Bar --> */}
                        <div class="single_progress_bar">
                            <p>Garden Care</p>
                            <div id="bar4" class="barfiller">
                                <div class="tipWrap">
                                    <span class="tip"></span>
                                </div>
                                <span class="fill" data-percentage="65"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="alazea-benefits-area">
                        <div class="row">
                            {/* <!-- Single Benefits Area --> */}
                            <div class="col-12 col-sm-6">
                                <div class="single-benefits-area">
                                    <img src={b1} alt=""/>
                                    <br></br>
                                    <br></br>
                                    <h5>Quality Products</h5>
                                    <p>Perfect quality begins with prevention, but also requires a rigorous program for detection and measurement. Adherence to a quality management system, provides documentation to ensure that quality parameters are met throughout production, and that goods comply with regulatory and customer requirements.</p>
                                </div>
                            </div>

                            {/* <!-- Single Benefits Area --> */}
                            <div class="col-12 col-sm-6">
                                <div class="single-benefits-area">
                                    <img src={b2} alt=""/>
                                    <br></br>
                                    <br></br>
                                    <h5>Perfect Service</h5>
                                    <p>Plant service programs include regular visits from a horticultural technician, typically on a weekly or biweekly basis. Service includes so much more than just watering–in fact, some clients prefer to do their own watering, and bring us in just for the other work that goes into maintaining their greens.  </p>
                                </div>
                            </div>

                            {/* <!-- Single Benefits Area --> */}
                            <div class="col-12 col-sm-6">
                                <div class="single-benefits-area">
                                    <img src={b3} alt=""/>
                                    <br></br>
                                    <br></br>
                                    <h5>100% Natural</h5>
                                    <p>Learn all about organic soil and why you should use it! Not all soil is organic, but yours should be! Get bigger healthier plants today!</p>
                                </div>
                            </div>

                            {/* <!-- Single Benefits Area --> */}
                            <div class="col-12 col-sm-6">
                                <div class="single-benefits-area">
                                    <img src={b4} alt=""/>
                                    <br></br>
                                    <br></br>
                                    <h5>Environmentally friendly</h5>
                                    <p>Being environmentally friendly simply means having a lifestyle that is better for the environment.
It’s just taking small steps towards looking after the mother earth to make this planet a better place for our communities and generations to come.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="border-line"></div>
                </div>
            </div>
        </div>
    </section>
                                        
                                </div>  
                              
                              
</>  

 
  );
}

export default Home;