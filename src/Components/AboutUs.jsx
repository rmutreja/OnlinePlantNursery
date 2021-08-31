import React from 'react'
// import car1 from '../images/car1.jpg'
// import car2 from '../images/car2.jpg'
// import car4 from '../images/car4.jpg'
import car1 from '../images/img.jpg'
import car2 from '../images/1.jpg'
import car4 from '../images/2.jpg'
function AboutUs() {
    return (
        <div className="mt-4">
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
<div class="container">
<h1 class="text-custom font-weight-normal mb-3 text-center text-dark">About Us</h1>
    <div class="row align-items-center">
        <div class="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-6">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 mt-4 pt-2">
                            <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                            <img src={car4} class="img-fluid" alt="Image" />
                                <div class="img-overlay bg-dark"></div>
                            </div>
                        </div>
                        {/* <!--end col--> */}

                        <div class="col-12">
                            <div class="mt-4 pt-2 text-right">
                                <a href="javascript:void(0)" class="btn btn-info">Read More <i class="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <!--end row--> */}
                </div>
                {/* <!--end col--> */}

                <div class="col-lg-6 col-md-6 col-6">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src={car1} class="img-fluid" alt="Image" />
                                <div class="img-overlay bg-dark"></div>
                            </div>
                        </div>
                        {/* <!--end col--> */}

                        <div class="col-lg-12 col-md-12 mt-4 pt-2">
                            <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src={car2} class="img-fluid" alt="Image" />
                                <div class="img-overlay bg-dark"></div>
                            </div>
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}
                </div>
                {/* <!--end col--> */}
            </div>
            {/* <!--end row--> */}
        </div>
        {/* <!--end col--> */}

        <div class="col-lg-6 col-md-6 col-12 order-1 order-md-2">
            <div class="section-title ml-lg-5">
                {/* <h5 class="text-custom font-weight-normal mb-3">About Us</h5> */}
                <h4 class="title mb-4">
                    Our mission is to <br />
                    make your life easier.
                </h4>
                <p class="text-muted mb-0">Plant Nursery germinated in 2021 from a promise to make ‘green and healthy’ a click away for all Indians

Having plants in our homes or in our offices doesn’t just look good, it also boosts our mood, makes us more productive, and cleans the air around us by absorbing toxins

Most of us being urban dwellers spending their days in apartments with limited access to parks and ecological reserves, have no way of feeling close to nature and experiencing the benefits of being around plants.</p>

                <div class="row">
                    <div class="col-lg-6 mt-4 pt-2">
                        <div class="media align-items-center rounded shadow p-3 bg-primary">
                            <i class="fa fa-play h4 mb-0 text-custom"></i>
                            <h6 class="ml-3 mb-0"><a class="text-light">Responsive</a></h6>
                            {/* javascript:void(0) */}
                        </div>
                    </div>
                    <div class="col-lg-6 mt-4 pt-2">
                        <div class="media align-items-center rounded shadow p-3 bg-success">
                            <i class="fa fa-file-download h4 mb-0 text-custom"></i>
                            <h6 class="ml-3 mb-0"><a href="" class="text-light">Free Download</a></h6>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-4 pt-2">
                        <div class="media align-items-center rounded shadow p-3 bg-warning">
                            <i class="fa fa-user h4 mb-0 text-custom"></i>
                            <h6 class="ml-3 mb-0"><a href="" class="text-light">Support</a></h6>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-4 pt-2">
                        <div class="media align-items-center rounded shadow p-3 bg-danger">
                            <i class="fa fa-image h4 mb-0 text-custom"></i>
                            <h6 class="ml-3 mb-0"><a class="text-light">Development</a></h6>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        {/* <!--end col--> */}
    </div>
    {/* <!--enr row--> */}
</div>
        </div>
    )
}

export default AboutUs


// import React from 'react'
// import car1 from '../images/img.jpg'
// import car2 from '../images/1.jpg'
// import car4 from '../images/2.jpg'
// function AboutUs() {
//     return (
//         <div>
//          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
// <div class="container">
//     <div class="row align-items-center">
//         <div class="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
//             <div class="row align-items-center">
//                 <div class="col-lg-6 col-md-6 col-6">
//                     <div class="row">
//                         <div class="col-lg-12 col-md-12 mt-4 pt-2">
//                             <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
//                             <img src={car4} class="img-fluid" alt="Image" />
//                                 <div class="img-overlay bg-dark"></div>
//                             </div>
//                         </div>
//                         {/* <!--end col--> */}

//                         <div class="col-12">
//                             <div class="mt-4 pt-2 text-right">
//                                 <a href="javascript:void(0)" class="btn btn-info">Read More <i class="mdi mdi-chevron-right"></i></a>
//                             </div>
//                         </div>
//                     </div>
//                     {/* <!--end row--> */}
//                 </div>
//                 {/* <!--end col--> */}

//                 <div class="col-lg-6 col-md-6 col-6">
//                     <div class="row">
//                         <div class="col-lg-12 col-md-12">
//                             <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
//                                 <img src={car1} class="img-fluid" alt="Image" />
//                                 <div class="img-overlay bg-dark"></div>
//                             </div>
//                         </div>
//                         {/* <!--end col--> */}

//                         <div class="col-lg-12 col-md-12 mt-4 pt-2">
//                             <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
//                                 <img src={car2} class="img-fluid" alt="Image" />
//                                 <div class="img-overlay bg-dark"></div>
//                             </div>
//                         </div>
//                         {/* <!--end col--> */}
//                     </div>
//                     {/* <!--end row--> */}
//                 </div>
//                 {/* <!--end col--> */}
//             </div>
//             {/* <!--end row--> */}
//         </div>
//         {/* <!--end col--> */}

//         <div class="col-lg-6 col-md-6 col-12 order-1 order-md-2">
//             <div class="section-title ml-lg-5">
//                 <h5 class="text-custom font-weight-normal mb-3">About Us</h5>
//                 <h4 class="title mb-4">
//                     Our mission is to <br />
//                     make your life easier.
//                 </h4>
//                 <p class="text-muted mb-0">Plant Nursery germinated in 2021 from a promise to make ‘green and healthy’ a click away for all Indians

// Having plants in our homes or in our offices doesn’t just look good, it also boosts our mood, makes us more productive, and cleans the air around us by absorbing toxins

// Most of us being urban dwellers spending their days in apartments with limited access to parks and ecological reserves, have no way of feeling close to nature and experiencing the benefits of being around plants.</p>

//                 <div class="row">
//                     <div class="col-lg-6 mt-4 pt-2">
//                         <div class="media align-items-center rounded shadow p-3 bg-primary">
//                             <i class="fa fa-play h4 mb-0 text-custom"></i>
//                             <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-light">Responsive</a></h6>
//                         </div>
//                     </div>
//                     <div class="col-lg-6 mt-4 pt-2">
//                         <div class="media align-items-center rounded shadow p-3 bg-success">
//                             <i class="fa fa-file-download h4 mb-0 text-custom"></i>
//                             <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-light">Free Download</a></h6>
//                         </div>
//                     </div>
//                     <div class="col-lg-6 mt-4 pt-2">
//                         <div class="media align-items-center rounded shadow p-3 bg-warning">
//                             <i class="fa fa-user h4 mb-0 text-custom"></i>
//                             <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-light">Support</a></h6>
//                         </div>
//                     </div>
//                     <div class="col-lg-6 mt-4 pt-2">
//                         <div class="media align-items-center rounded shadow p-3 bg-danger">
//                             <i class="fa fa-image h4 mb-0 text-custom"></i>
//                             <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-light">Development</a></h6>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         {/* <!--end col--> */}
//     </div>
//     {/* <!--enr row--> */}
// </div>
//         </div>
//     )
// }

// export default AboutUs