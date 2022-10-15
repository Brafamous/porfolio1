import React from "react";
import logo from '../images/logo.png'
import cert1 from  './cert_1.png';
import cert2 from  './cert_2.jpg';
import cert3 from  './cert_3.jpg';
import cert4 from  './cert_4.jpg';
import cert5 from  './cert_5.jpg';
import cert6 from  './cert_6.png';
import cert7 from  './cert_7.png';
import cert8 from  './cert_8.png';
import cert9 from  './cert_9.png';
import cert10 from  './cert_10.png';
import cert11 from  './cert_11.png';

function CertificateScreen(){
    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="ml-0 navbar-brand" href="/"><img src={logo} height={'60em'}/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse w-100 justify-content-center"
                     id="navbarSupportedContent">
                    <div className="flex-grow-1">
                        <ul className="navbar-nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link" href="/#projects">Projects <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#technologies">Technologies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={'/certs'}>Certificates</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={'/#me'}>Me</a>
                            </li>
                        </ul>

                    </div>
                    <div className=""><a
                        href="https://github.com/Robert-Doe"
                        className="HeaderStyles__SocialIcons-sc-1rpswi9-8 bZrquz">
                        <svg stroke="#f90" fill="white" stroke-width="0" viewBox="0 0 1024 1024"
                             height="2rem"
                             width="2rem" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                        </svg>
                    </a><a href="https://www.instagram.com/bob_cumulus"
                           className="HeaderStyles__SocialIcons-sc-1rpswi9-8 bZrquz">
                        <svg stroke="#fff" fill="#fff" stroke-width="0" viewBox="0 0 1024 1024"
                             height="2rem"
                             width="2rem" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
                        </svg>
                    </a><a href="https://www.linkedin.com/in/robert-doe/"
                           className="HeaderStyles__SocialIcons-sc-1rpswi9-8 bZrquz">
                        <svg stroke="currentColor" fill="#fff" stroke-width="0" viewBox="0 0 1024 1024"
                             height="2rem"
                             width="2rem" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
                        </svg>
                    </a></div>
                </div>
            </nav>
            <section className={'container'}>
                <h3 className={'text-bold text-light'}>Certificates</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="p-3"> <img src={cert9} className={'w-100'} type="button" data-toggle="modal" data-target="#exampleModal8"
                                                       data-whatever="@mdo"/>
                                <div className="modal fade" id="exampleModal8" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                     aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <img src={cert9} className={'w-100'}/>
                                            </div>
                                            <div className="modal-footer w-100">
                                                <h6 className={'m-auto text-bold'}>Arizona State University, Python Workshop</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="p-3">  <img src={cert7} className={'w-100'} type="button" data-toggle="modal" data-target="#exampleModal6"
                                                        data-whatever="@mdo"/>
                                <div className="modal fade" id="exampleModal6" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                     aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <img src={cert7} className={'w-100'}/>
                                            </div>
                                            <div className="modal-footer">
                                                <h6 className={'m-auto text-bold'}>Baobab, How to make a point in one minute or less</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="p-3"> <img src={cert11} className={'w-100'} type="button" data-toggle="modal" data-target="#exampleModal11"
                                                       data-whatever="@mdo"/>
                                <div className="modal fade" id="exampleModal11" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                     aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <img src={cert11} className={'w-100'}/>
                                            </div>
                                            <div className="modal-footer w-100">
                                                    <h5 className={'m-auto text-bold'}>How to write a CV/Resume</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="p-3"> <img src={cert10} className={'w-100'} type="button" data-toggle="modal" data-target="#exampleModal9"
                                                       data-whatever="@mdo"/>
                                <div className="modal fade" id="exampleModal9" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                     aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <img src={cert10} className={'w-100'}/>
                                            </div>
                                            <div className="modal-footer w-100">
                                                <h6 className={'m-auto text-bold'}>Google Africa Developer Scholar, 2020 [Mobile Web]</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="p-3"> <img src={cert2} className={'w-100'} type="button" data-toggle="modal" data-target="#exampleModal2"
                                                   data-whatever="@mdo"/>
                            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                 aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <img src={cert2} className={'w-100'}/>
                                        </div>
                                        <div className="modal-footer w-100">
                                            <h6 className={'m-auto text-bold'}>ILF Leadership Seminar, Part I</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="p-3"> <img src={cert5} className={'w-100'} type="button" data-toggle="modal" data-target="#exampleModal4"
                                                   data-whatever="@mdo"/>
                            <div className="modal fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                 aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <img src={cert4} className={'w-100'}/>
                                        </div>
                                        <div className="modal-footer w-100">
                                            <h5 className={'m-auto text-bold'}>ILF Leadership Seminar, Part II</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="col-md-3">
                            <div className="p-3"> <img src={cert4} className={'w-100'} type="button" data-toggle="modal" data-target="#exampleModal3"
                                                       data-whatever="@mdo"/>
                                <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                     aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <img src={cert3} className={'w-100'}/>
                                            </div>
                                            <div className="modal-footer w-100">
                                                <h6 className={'m-auto text-bold'}>ILF Leadership Seminar, Part III</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="p-3"><img src={cert3} className={'w-100'} type="button" data-toggle="modal" data-target="#exampleModal10"
                                                      data-whatever="@mdo"/>
                                <div className="modal fade" style={{width:"100vw"}} id="exampleModal10" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                     aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <img src={cert3} className={'w-100'}/>
                                            </div>
                                            <div className="modal-footer w-100">
                                                <h6 className={'m-auto text-bold'}>ILF Leadership Seminar, Part IV</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="p-3"> <img src={cert6} className={'w-100'} type="button" data-toggle="modal" data-target="#exampleModal5"
                                                       data-whatever="@mdo"/>
                                <div className="modal fade" id="exampleModal5" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                     aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <img src={cert5} className={'w-100'}/>
                                            </div>
                                            <div className="modal-footer w-100">
                                                <h6 className={'m-auto text-bold'}>Foundations of User Experience(UX) Design</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="p-3">  <img src={cert8} className={'w-100'} type="button" data-toggle="modal" data-target="#exampleModal7"
                                                        data-whatever="@mdo"/>
                                <div className="modal fade" id="exampleModal7" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                     aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <img src={cert8} className={'w-100'}/>
                                            </div>
                                            <div className="modal-footer w-100">
                                                <h6 className={'m-auto text-bold'}>Huawei Certified Network Associate(HCNA)</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="p-3"> <img src={cert1} className={'w-100'} type="button" data-toggle="modal" data-target="#exampleModal1"
                                                       data-whatever="@mdo"/>
                                <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                     aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <img src={cert1} className={'w-100'}/>
                                            </div>
                                            <div className="modal-footer w-100">
                                                <h6 className={'m-auto text-bold'}>Google Africa Developer Scholar, 2022 [Android Track]</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default CertificateScreen;