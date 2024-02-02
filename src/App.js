import './App.css';
import './style.css';   


import slider1 from './assests/slider1_1.jpeg';

import construct1 from './assests/construction1.jpeg';
import construct2 from './assests/contruction 2.jpeg';
import construct3 from './assests/construction 3.jpeg';
import construct4 from './assests/construction 4.jpeg';

import alt_cont from './assests/alt_construction.jpeg';

import features1 from './assests/features-1.jpeg'
import features2 from './assests/features-2.jpeg'
import features3 from './assests/features-3.jpeg'
import features4 from './assests/features-4.jpeg'


import remodeling1 from './assests/remolding1.jpeg'
import remodeling2 from './assests/remolding2.jpeg'
import remodeling3 from './assests/remolding3.jpeg'

import construction1 from './assests/construction1.jpeg'
import construction2 from './assests/contruction 2.jpeg'
import construction3 from './assests/construction 3.jpeg'

import repair1 from './assests/repair1.jpeg'
import repair2 from './assests/repair2.jpeg'
import repair3 from './assests/repair3.jpeg'

import design1 from './assests/design1.jpeg'
import design2 from './assests/design2.jpeg'
import design3 from './assests/design3.jpeg'


import slider_1 from './assests/slider-1.jpeg'
import slider_2 from './assests/slider-2.jpeg'
import slider_3 from './assests/slider-3.jpeg'
import slider_4 from './assests/slider-4.jpeg'
import slider_5 from './assests/slider-5.jpeg'


import about1 from './assests/about1.jpeg'
import about2 from './assests/about2.jpeg'
import about3 from './assests/about3.jpeg'




// import cmp1 from './assets/cmp1.png'
// import cmp2 from './assets/cmp2.png'
// import cmp3 from './assets/cmp3.png'
// import cmp4 from './assets/cmp4.png'
// import cmp5 from './assets/cmp5.png'
// import cmp6 from './assets/cmp6.png'
// import cmp7 from './assets/cmp7.png'
// import cmp8 from './assets/cmp8.png'
// import cmp9 from './assets/cmp9.png'



// import logo from './assets/logo.png'




function App() {



    return (
        <>

            {/* NAV */}
            <nav className="main">
                <div className="container">
                    <div className="main_header">
                        <div className="logo">
                            <h1>UpConstruction<span>.</span> </h1>
                        </div>
                        <div>
                            <ul className="mainmenu">
                                <li> <a href="/">HOME</a></li>
                                <li><a href="/">ABOUT</a></li>
                                <li><a href="/">SERVICES</a></li>
                                <li><a href="/">PROJECTS</a></li>
                                <li> <a href="/">BLOG</a></li>
                                <li>
                                    <a href="/">DROPDOWN</a>
                                    <ul className="submenu">
                                        <li><a href="/">DropDown1</a></li>
                                        <li>
                                            <a href="/">Deep DropDown</a>
                                            <ul className="petamenu">
                                                <li><a href="/">Deep DropDown</a></li>
                                                <li><a href="/">Deep DropDown</a></li>
                                                <li><a href="/">Deep DropDown</a></li>
                                                <li><a href="/">Deep DropDown</a></li>
                                                <li><a href="/">Deep DropDown</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/">DropDown2</a></li>
                                        <li><a href="/">DropDown3</a></li>
                                        <li><a href="/">DropDown4</a></li>
                                    </ul>
                                </li>
                                <li><a href="/">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* SEC1 */}
            <div className="slider">
                <div className="item ">
                    <img src={slider1} alt="" />
                </div>
            </div>

            <div className="slider_content">
                <div className="slider_text">
                    <h2>Welcome to <br /><span>UpConstruction</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip
                        ex ea commodo consequat.</p>
                    <button>Get Started</button>
                </div>
            </div>

            {/* SEC2 */}
            <section>
                <div className="container">
                    <div className="section2">
                        <div className="content">
                            <h3>Minus hic non reiciendis ea possimus at quia.</h3>
                            <p>Rem id rerum. Debitis deserunt quidem delectus expedita ducimus dolor. Aut iusto ipsa. Eos
                                ipsum nobis ipsa soluta itaque perspiciatis fuga ipsum perspiciatis. Eum amet fugiat totam
                                nisi possimus ut delectus dicta.
                            </p>
                            <p>Aliquam velit deserunt autem. Inventore et saepe. Tenetur suscipit eligendi labore culpa eos.
                                Deserunt porro magni qui necessitatibus dolorem at animi cupiditate.</p>
                        </div>

                        <div className="form">
                            <form action="" method="post">
                                <h3>Get a quote</h3>
                                <p>Vel nobis odio laboriosam et hic voluptatem. Inventore vitae totam. Rerum repellendus enim
                                    linead sero park flows.</p>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" name="name" className="form-control" placeholder="Name" required="" />
                                    </div>

                                    <div className="col">
                                        <input type="email" className="form-control" name="email" placeholder="Email" required="" />
                                    </div>

                                    <div className="col">
                                        <input type="text" className="form-control" name="phone" placeholder="Phone" required="" />
                                    </div>

                                    <div className="col">
                                        <textarea className="form-control" name="message" rows="6" placeholder="Message"
                                            required=""></textarea>
                                    </div>
                                    <div classNameName="frm-btn">
                                        <button className="form_button" type="submit">Get a quote</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>

            {/* SEC3 */}
            <section className="constructions">
                <div className="container">
                    <div className="section3">
                        <div className="section-header">
                            <h2>Constructions</h2>
                            <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt
                                quisdolorem dolore earum</p>
                        </div>
                        <div className="card-main">
                            <div className="card-item">
                                <div className="card-img">
                                    <img src={construct1} />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Eligendi omnis sunt veritatis.</h4>
                                    <p>Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem
                                        placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia
                                        temporibus illo magnam. Dolor eos et.</p>
                                </div>
                            </div>
                            <div className="card-item">
                                <div className="card-img">
                                    <img src={construct2} />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Possimus ut sed velit assumenda</h4>
                                    <p>Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis.
                                        Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium
                                        sunt at quas aut hic. Eum dignissimos.</p>
                                </div>
                            </div>
                            <div className="card-item">
                                <div className="card-img">
                                    <img src={construct3} />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Error beatae dolor inventore aut</h4>
                                    <p>Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis
                                        numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto officia
                                        laboriosam odit. Ut sunt temporibus nulla culpa.</p>
                                </div>

                            </div>
                            <div className="card-item">
                                <div className="card-img">
                                    <img src={construct4} />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Expedita voluptas ut ut nesciunt</h4>
                                    <p>Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. Eum eos
                                        doloremque architecto illo at beatae dolore. Fugiat suscipit et sint ratione
                                        dolores. Aut aliquid ea dolores libero nobis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEC4 */}
            <section id="services" className="services section-bg">
                <div className="container" >
                    <div className="section-header">
                        <h2>Services</h2>
                        <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti
                            fignissimos eos quam</p>
                    </div>

                    <div className="section4">
                        <div className="service-item">
                            <div className="icon">
    
                            </div>
                            <h3>Nesciunt Mete</h3>
                            <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure
                                perferendis tempore et consequatur.</p>
                            <a href="service-details.html" className="readmore stretched-link">Learn more</a>
                        </div>

                        <div className="service-item">
                            <div className="icon">
                            </div>
                            <h3>Eosle Commodi</h3>
                            <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic
                                non ut nesciunt dolorem.</p>
                            <a href="service-details.html" className="readmore stretched-link">Learn more</a>
                        </div>


                        <div className="service-item">
                            <div className="icon">

                            </div>
                            <h3>Ledo Markt</h3>
                            <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas
                                adipisci eos earum corrupti.</p>
                            <a href="service-details.html" className="readmore stretched-link">Learn more</a>
                        </div>


                        <div className="service-item">
                            <div className="icon">

                            </div>
                            <h3>Asperiores Commodit</h3>
                            <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit
                                provident adipisci neque.</p>
                            <a href="service-details.html" className="readmore stretched-link">Learn more</a>
                        </div>


                        <div className="service-item">
                            <div className="icon">

                            </div>
                            <h3>Velit Doloremque</h3>
                            <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi
                                at autem alias eius labore.</p>
                            <a href="service-details.html" className="readmore stretched-link">Learn more</a>
                        </div>


                        <div className="service-item">
                            <div className="icon">

                            </div>
                            <h3>Dolori Architecto</h3>
                            <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure.
                                Corrupti recusandae ducimus enim.</p>
                            <a href="service-details.html" className="readmore stretched-link">Learn more</a>
                        </div>

                    </div>
                </div>
            </section>

            {/* SEC5 */}
            <section id="alt-services" className="alt-services">
                <div className="container aos-init aos-animate" data-aos="fade-up">

                    <div className="section5">
                        <div className="alt_img">
                            <img src={alt_cont} />
                        </div>

                        <div className="alt-info ">
                            <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima
                                temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>

                            <div className="icon-box">

                                <div>
                                    <h4><a href="/" className="">Lorem Ipsum</a></h4>
                                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                        occaecati cupiditate non provident</p>
                                </div>
                            </div>

                            <div className="icon-box">

                                <div>
                                    <h4><a href="/" className="">Nemo Enim</a></h4>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                        voluptatum deleniti atque</p>
                                </div>
                            </div>

                            <div className="icon-box">

                                <div>
                                    <h4><a href="/" className="">Dine Pad</a></h4>
                                    <p>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut
                                        deserunt minus aut eligendi omnis</p>
                                </div>
                            </div>

                            <div className="icon-box">

                                <div>
                                    <h4><a href="/" className="">Tride clov</a></h4>
                                    <p>Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non
                                        aspernatur odit amet. Et eligendi</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* SEC6*/}
            <section id="features" className="features section-bg">
                <div className="container">
                    <ul className="nav nav-heading nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link">
                                <h4>Modisit</h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <h4>Praesenti</h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <h4>Explica</h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <h4>Nostrum</h4>
                            </a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div className="tab-panel" id="tab-1">
                            <div className="tab-main">
                                <div className="tab-img ">
                                    <img src={features1} />
                                </div>
                                <div className="tab-info">
                                    <h3>Voluptatem dignissimos provident</h3>
                                    <p className="fst-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore
                                        magna aliqua.
                                    </p>
                                    <ul>
                                        <li> Ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.</li>
                                        <li>Duis aute irure dolor in reprehenderit in voluptate
                                            velit.</li>
                                        <li> Ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate trideta
                                            storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEC7*/}
            <section id="projects" className="projects">
                <div className="container aos-init aos-animate" data-aos="fade-up">

                    <div className="section-header">
                        <h2>Our Projects</h2>
                        <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto
                            accusamus fugit aut qui distinctio</p>
                    </div>

                    <nav>
                        <div className="nav nav-tabs nav-heading" id="nav-tab" role="tablist">
                            <li className="nav-link nav_head" id="pic-type-1">
                                All
                            </li>
                            <li className="nav-link nav_head" id="pic-type-2">
                                Remolding
                            </li>
                            <li className="nav-link nav_head" id="pic-type-3">
                                Construction
                            </li>
                            <li className="nav-link nav_head" id="pic-type-4">
                                Repair
                            </li>
                            <li className="nav-link nav_head" id="pic-type-5">
                                Design
                            </li>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-panel" id="nav-all" >
                            <div className="tab-images">
                                <div className="our-project">
                                    <div className="tab-pic">
                                        <img src={remodeling1} />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Remodeling 1</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    </div>
                                </div>
                                <div className="our-project">
                                    <div className="tab-pic">
                                        <img src={construction1} />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>construction 1</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    </div>
                                </div>
                                <div className="our-project">
                                    <div className="tab-pic">
                                        <img src={repair1} />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Repair 1</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>

                                    </div>
                                </div>
                                <div className="our-project">
                                    <div className="tab-pic">
                                        <img src={design1} />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Design 1</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>

                                    </div>
                                </div>
                                <div className="our-project">
                                    <div className="tab-pic">
                                        <img src={remodeling2} />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Remodeling 2</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>

                                    </div>
                                </div>
                                <div className="our-project">
                                    <div className="tab-pic">
                                        <img src={construction2} />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Construction 2</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>

                                    </div>
                                </div>
                                <div className="our-project">
                                    <div className="tab-pic">
                                        <img src={repair2} />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Repair 2</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>

                                    </div>
                                </div>
                                <div className="our-project">
                                    <div className="tab-pic">
                                        <img src={design2} />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Design 2</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>

                                    </div>
                                </div>
                                <div className="our-project">
                                    <div className="tab-pic">
                                        <img src={remodeling3} />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Remodeling 3</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>

                                    </div>
                                </div>
                                <div className="our-project">
                                    <div className="tab-pic">
                                        <img src={construction3} />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Construction 3</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>

                                    </div>
                                </div>
                                <div className="our-project">
                                    <div className="tab-pic">
                                        <img src={repair3} />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Repair 3</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>

                                    </div>
                                </div>
                                <div className="our-project">
                                    <div className="tab-pic">
                                        <img src={design3} />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Design 3</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEC8*/}
            <section id="testimonials" className="testimonials section-bg">
                <div className="container">
                    <div className="section-header">
                        <h2>Testimonials</h2>
                        <p>Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem
                            uia reprehenderit sunt deleniti</p>
                    </div>
                </div>
            </section>

            {/* SEC9*/}
            <section id="recent-blog-posts" className="recent-blog-posts">
                <div className="container">
                    <div className=" section-header">
                        <h2>Recent Blog Posts</h2>
                        <p>In commodi voluptatem excepturi quaerat nihil error autem voluptate ut et officia consequuntu</p>
                    </div>

                    <div className="blog-main">
                        <div className="blog">
                            <div className="post-item ">
                                <div className="post-img ">
                                    <img src={about1} />
                                    <span className="post-date">December 12</span>
                                </div>
                                <div className="post-content">
                                    <h3 className="post-title">Eum ad dolor et. Autem aut fugiat debitis</h3>
                                    <div className="meta">
                                        <div className="meta">

                                            <span className="ps-2">Julia Parker</span>
                                        </div>
                                        <span className="px-3 text-black-50">/</span>
                                        <div className="meta">

                                            <span class="ps-2">Politics</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <a href="blog-details.html" class="readmore stretched-link"><span>Read More</span>

                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="blog">
                            <div className="post-item">
                                <div className="post-img ">
                                    <img src={about2} />
                                    <span className="post-date">July 17</span>
                                </div>
                                <div className="post-content">
                                    <h3 className="post-title">Et repellendus molestiae qui est sed omnis</h3>
                                    <div className="meta">
                                        <div className="meta">

                                            <span className="ps-2">Mario Douglas</span>
                                        </div>
                                        <span>/</span>
                                        <div className="meta">

                                            <span className="ps-2">Sports</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span>

                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="blog">
                            <div className="post-item">
                                <div className="post-img ">
                                    <img src={about3} />
                                    <span className="post-date">September 05</span>
                                </div>
                                <div className="post-content">
                                    <h3 className="post-title">Quia assumenda est et veritati tirana ploder</h3>
                                    <div className="meta">
                                        <div className="meta">

                                            <span className="ps-2">Lisa Hunter</span>
                                        </div>
                                        <span className="px-3 text-black-50">/</span>
                                        <div className="meta">

                                            <span className="ps-2">Economics</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* SEC10*/}
            <footer id="footer" className="footer">
                <div className="footer-content">
                    <div className="container">
                        <div className="footer-main">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-info">
                                    <h3>UpConstruction</h3>
                                    <p>
                                        A108 Adam Street <br />
                                        NY 535022, USA<br /><br />
                                        <strong>Phone:</strong> +1 5589 55488 55<br />
                                        <strong>Email:</strong> info@example.com<br />
                                    </p>
                                </div>
                            </div>
                            <div className="footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Terms of service</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                </ul>
                            </div>
                            <div className="footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#">Web Development</a></li>
                                    <li><a href="#">Product Management</a></li>
                                    <li><a href="#">Marketing</a></li>
                                    <li><a href="#">Graphic Design</a></li>
                                </ul>
                            </div>
                            <div className="footer-links">
                                <h4>Hic solutasetp</h4>
                                <ul>
                                    <li><a href="#">Molestiae accusamus iure</a></li>
                                    <li><a href="#">Excepturi dignissimos</a></li>
                                    <li><a href="#">Suscipit distinctio</a></li>
                                    <li><a href="#">Dilecta</a></li>
                                    <li><a href="#">Sit quas consectetur</a></li>
                                </ul>
                            </div>
                            <div className="footer-links">
                                <h4>Nobis illum</h4>
                                <ul>
                                    <li><a href="#">Ipsam</a></li>
                                    <li><a href="#">Laudantium dolorum</a></li>
                                    <li><a href="#">Dinera</a></li>
                                    <li><a href="#">Trodelas</a></li>
                                    <li><a href="#">Flexo</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-legal">
                    <div className="container">
                        <div className="copyright">
                            © Copyright <strong><span>UpConstruction</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits ">
                            Designed by <a href="https://bootstrapmade.com/" class="ms-1">BootstrapMade</a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default App;
