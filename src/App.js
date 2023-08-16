import './App.css';
import logo from './images/logo.png';
import project0Img from './images/project_0.png'
import project1Img from './images/project_1.png'
import project2Img from './images/project_2.jpg'
import project3Img from './images/project_3.png'
import project4Img from './images/project_4.png'
import project5Img from './images/project_5.png'
import project6Img from './images/project_6.jpg'
import profileImg  from './images/fam.jpg'
import React from "react";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CertificateScreen from './certificates/CertificateScreen'
import DataCareTransportScreen from './project_details/DataCareTransportScreen';



function HomeScreen(){
    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="ml-0 navbar-brand" href="#"><img src={logo} height={'60em'}/></a>
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
                                <a className="nav-link" href={'/#me'}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#technologies">Technologies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={'/certs'}>Awards</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={'/#articles'}>Articles</a>
                            </li>
                            
                        </ul>

                    </div>
                    <div className=""><a
                        href="https://github.com/Brafamous"
                        className="HeaderStyles__SocialIcons-sc-1rpswi9-8 bZrquz">
                        <svg stroke="#f90" fill="white" strokeWidth="0" viewBox="0 0 1024 1024"
                             height="2rem"
                             width="2rem" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                        </svg>
                    </a><a href="https://www.instagram.com/famous.gtay/"
                           className="HeaderStyles__SocialIcons-sc-1rpswi9-8 bZrquz">
                        <svg stroke="#fff" fill="#fff" strokeWidth="0" viewBox="0 0 1024 1024"
                             height="2rem"
                             width="2rem" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
                        </svg>
                    </a><a href="https://www.linkedin.com/in/fgtay/"
                           className="HeaderStyles__SocialIcons-sc-1rpswi9-8 bZrquz">
                        <svg stroke="currentColor" fill="#fff" strokeWidth="0" viewBox="0 0 1024 1024"
                             height="2rem"
                             width="2rem" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
                        </svg>
                    </a></div>
                </div>
            </nav>
            <section>
                <div className="container">
                    <div className="row intro-box">
                        <div className="col-md-9">
                            <section className={'container'}>
                                <h2 className={'greeting_headline'}>Welcome! <br/>I'm Famous G. Tay</h2>
                                <div className="row">
                                    <p className="col-md-9 description-p"> Passionate Biomedical Engineer deeply engrossed in the realms of Machine Learning and Deep Learning.<br/>
                                    Robust understanding of ISO 13485 | ISO 14971 | IEC 60601 | IEC 62304.
                                    </p>
                                </div>
                            </section>
                        </div>
                        <div className="col-md-3 horse-aside">

                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="hr-short"></div>
            </div>
            <section className="container projects" id={'projects'}>
                <h2 className="greeting_headline">Projects</h2>
                <div className="rd-container">
                    <div className="row">
                        <div className="col-md-6">
                            <a href="https://brafamous.github.io/Brain-Tumor-Detection/" className={'text-decoration-none'}>
                                <div className="container py-5">
                                    <div className="container py-5">
                                        <div className="card card-bg-theme">
                                            <img className="card-img-top" src={project0Img} alt=""
                                                 height={'200px'}/>
                                            <div className="card-body">
                                                <h5 className="card-title text-center">Brain Tumor Detection Using Deep Learning (CNN)</h5>
                                                <hr className="hr"/>
                                                <p className="card-text text-justify">The Brain Tumor Detection Project is an artificial 
                                                intelligence project designed to detect the presence of brain tumors in medical images such
                                                as MRI scans. This project utilizes deep learning techniques to analyze the images and classify
                                                them as either having a tumor or being tumor-free. Read More...
                                                <br/><br/></p>
                                                <div className="d-flex justify-content-around">
                                                    <span>TensorFlow</span><span>OpenCV</span><span>Keras</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a href="https://brafamous.github.io/Breadboard-Power-Supply-PCB-Design/" className={'text-decoration-none'}>
                                <div className="container py-5">
                                    <div className="container py-5">
                                        <div className="card card-bg-theme">
                                            <img className="card-img-top" src={project5Img} alt=""
                                                 height={'200px'}/>
                                            <div className="card-body">
                                                <h5 className="card-title text-center">Breadboard Power Supply PCB Design</h5>
                                                <hr className="hr"/>
                                                <p className="card-text text-justify">This project aims to provide a compact and efficient solution for powering electronic 
                                                circuits directly on a breadboard. This was designed in KiCAD.</p>
                                                <div className="d-flex justify-content-around">
                                                    <span>KiCAD</span>{/*<span>Mongo DB</span>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a href="https://www.codeden.org" className={'text-decoration-none'}>
                                <div className="container py-5">
                                    <div className="container py-5">
                                        <div className="card card-bg-theme">
                                            <img className="card-img-top" src={project2Img} alt=""
                                                 height={'200px'}/>
                                            <div className="card-body">
                                                <h5 className="card-title text-center">Diabetes Prediction Using Machine Learning</h5>
                                                <hr className="hr"/>
                                                <p className="card-text text-justify">The Machine Learning Model for Diabetes Prediction project aims to develop an
                                                 intelligent system that can accurately predict the likelihood of an individual developing diabetes. In this project, four popular
                                                  algorithms are used and the best one is chosen.</p>
                                                <div className="d-flex justify-content-around">
                                                    <span>Seaborn</span><span>Pandas</span>Sklearn<span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                  {/*  </div>*/}
                   {/* <div className="row">*/}
                        {/*<div className="col-md-6">
                            <a href="https://www.github.com/Robert-Doe/scheduler" className={'text-decoration-none'}>
                                <div className="container py-5">
                                    <div className="container py-5">
                                        <div className="card card-bg-theme">
                                            <img className="card-img-top" src={project1Img} alt=""
                                                 height={'200px'}/>
                                            <div className="card-body">
                                                <h5 className="card-title text-center">University Course Scheduling</h5>
                                                <hr className="hr"/>
                                                <p className="card-text text-justify">Using React, Mongo DB and I designed a
                                                    University
                                                    Course scheduling application with a custom algorithm to schedule
                                                    sessions</p>
                                                <div className="d-flex justify-content-around">
                                                    <span>React</span><span>Mongo DB</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>

    </div> */}
                        {/*<div className="col-md-6">
                            <a href="https://www.github.com/Robert-Doe/Retail-Xpresso" className={'text-decoration-none'}>
                                <div className="container py-5">
                                    <div className="container py-5">
                                        <div className="card card-bg-theme">
                                            <img className="card-img-top" src={project4Img} alt=""
                                                 height={'200px'}/>
                                            <div className="card-body">
                                                <h5 className="card-title text-center">Retail Xpresso</h5>
                                                <hr className="hr"/>
                                                <p className="card-text text-justify">I put together a
                                                    portable application to help retail shop owners do their daily
                                                    accounting
                                                    after a hard day's work. This was way back 2020</p>
                                                <div className="d-flex justify-content-around">
                                                    <span>Java</span><span>XML</span><span>Room</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
</div> */}

                 {/*   </div>
                    <div className="row">*/}
                        <div className="col-md-6">
                           {/*} <div className="container py-5">
                                <div className="container py-5">
                                    <div className="card card-bg-theme">
                                        <img className="card-img-top" src={project3Img}
                                             alt=""
                                             height={'200px'}/>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Projet Consult</h5>
                                            <hr className="hr"/>
                                            <p className="card-text text-justify">Using flutter and
                                                Firebase, I am creating an application that serves as a
                                                guide to students writing their thesis. </p>
                                            <div className="d-flex justify-content-around">
                                                <span>Flutter</span><span>Firebase</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/*<div className="container py-5">
                                <div className="container py-5">
                                    <div className="card card-bg-theme">
                                        <img className="card-img-top" src={project1Img} alt=""
                                             height={'200px'}/>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">University Course Scheduling</h5>
                                            <hr className="hr"/>
                                            <p className="card-text text-justify">Using React, Mongo DB and I designed a
                                                University
                                                Course scheduling application with a custom algorithm to schedule
                                                sessions</p>
                                            <div className="d-flex justify-content-around">
                                                <span>React</span><span>Mongo DB</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>*/}
                        </div>
                        {/*<div className="col-md-6">
                            <a href="https://github.com/Robert-Doe/anti-stegan-crypto.git" className={'text-decoration-none'}>
                                <div className="container py-5">
                                    <div className="container py-5">
                                        <div className="card card-bg-theme">
                                            <img className="card-img-top" src={project6Img} alt=""
                                                 height={'200px'}/>
                                            <div className="card-body">
                                                <h5 className="card-title text-center">Anti-stegan Text Encryption</h5>
                                                <hr className="hr"/>
                                                <p className="card-text text-justify">Using the RGB color fxn, I developed a model to enhance web transfers easy with an anti-stegan touch </p>
                                                <div className="d-flex justify-content-around">
                                                    <span>JS Canvas</span><span>Python</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div> */}
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="hr-short"></div>
            </div>
            <section className="container technologies" id={'technologies'}>
                <h2 className="greeting_headline">Technologies</h2>
                <div className="container">
                    <p className="description-p ">
                    Here are a few technologies I’ve been working with recently:
                    </p>

                    <div className="row ">
                        <div className="col-md-4">
                        <svg fill="white" width="3rem" height="3rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.5 9a3.49 3.49 0 0 0-3.45 3h-1.1a2.49 2.49 0 0 0-4.396-1.052L8.878 9.731l3.143-4.225a2.458 2.458 0 0 0 2.98-.019L17.339 8H16v1h3V6h-1v1.243l-2.336-2.512A2.473 2.473 0 0 0 16 3.5a2.5 2.5 0 0 0-5 0 2.474 2.474 0 0 0 .343 1.243L7.947 9.308 4.955 7.947a2.404 2.404 0 0 0-.161-1.438l3.704-1.385-.44 1.371.942.333L10 4 7.172 3l-.334.943 1.01.357-3.659 1.368a2.498 2.498 0 1 0-.682 4.117l2.085 2.688-2.053 2.76a2.5 2.5 0 1 0 .87 3.864l3.484 1.587-1.055.373.334.943L10 21l-1-2.828-.943.333.435 1.354-3.608-1.645A2.471 2.471 0 0 0 5 17.5a2.5 2.5 0 0 0-.058-.527l3.053-1.405 3.476 4.48a2.498 2.498 0 1 0 4.113.075L18 17.707V19h1v-3h-3v1h1.293l-2.416 2.416a2.466 2.466 0 0 0-2.667-.047l-3.283-4.23 2.554-1.176A2.494 2.494 0 0 0 15.95 13h1.1a3.493 3.493 0 1 0 3.45-4zm-7-7A1.5 1.5 0 1 1 12 3.5 1.502 1.502 0 0 1 13.5 2zm0 18a1.5 1.5 0 1 1-1.5 1.5 1.502 1.502 0 0 1 1.5-1.5zM1 7.5a1.5 1.5 0 1 1 2.457 1.145l-.144.112A1.496 1.496 0 0 1 1 7.5zm3.32 1.703a2.507 2.507 0 0 0 .264-.326l2.752 1.251-1.124 1.512zM2.5 19A1.5 1.5 0 1 1 4 17.5 1.502 1.502 0 0 1 2.5 19zm2.037-2.941a2.518 2.518 0 0 0-.193-.234l1.885-2.532 1.136 1.464zm3.76-1.731L6.849 12.46l1.42-1.908L11.1 11.84a2.29 2.29 0 0 0-.033 1.213zM13.5 14a1.5 1.5 0 1 1 1.5-1.5 1.502 1.502 0 0 1-1.5 1.5zm7 1a2.5 2.5 0 1 1 2.5-2.5 2.502 2.502 0 0 1-2.5 2.5zm1.5-2.5a1.5 1.5 0 1 1-1.5-1.5 1.502 1.502 0 0 1 1.5 1.5z"/>
                        <path fill='none' d="M0 0h24v24H0z"/>
                        </svg>
                            <div className="TechnologiesStyles__ListContainer-sc-1ccvow3-3 technology-p"><h4
                                className="TechnologiesStyles__ListTitle-sc-1ccvow3-4 gRmPxD">ML & DL</h4><p
                                className="TechnologiesStyles__ListParagraph-sc-1ccvow3-5 fXnhlQ"> TensorFlow | Keras | Scikit-Learn | PyTorch  <br/>
                                OpenCV | Flask </p></div>
                        </div>
                        <div className="col-md-4">
                        <svg width="3rem" height="3rem" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier">

<path d="M213.4 521.4c4.4 155.5 131.8 280.2 288.4 280.2 159.3 0 288.5-129.2 288.5-288.5 0-156.2-124.1-283.3-279-288.3v296.6" fill="#eaaa1f"/>

<path d="M416.7 515.6c1.3 45.9 38.9 82.7 85.1 82.7 47 0 85.1-38.1 85.1-85.1 0-46.1-36.6-83.6-82.3-85.1v87.5" fill="#FFFFFF"/>

<path d="M510.6 960.4c-2.7 0-5.5 0-8.1-0.1l0.3-16c2.6 0 5.2 0.1 7.9 0.1v16zM486.1 959.7c-5.4-0.3-10.9-0.7-16.3-1.2l1.4-15.9c5.2 0.5 10.5 0.9 15.7 1.1l-0.8 16z m-32.5-2.9c-5.4-0.7-10.8-1.5-16.2-2.4l2.6-15.8c5.1 0.8 10.4 1.6 15.6 2.3l-2 15.9z m-32.3-5.3c-5.3-1.1-10.7-2.3-16-3.5l3.7-15.6c5.1 1.2 10.3 2.4 15.4 3.4l-3.1 15.7z m-31.8-7.7c-5.2-1.5-10.5-3-15.7-4.7l4.9-15.2c5 1.6 10.1 3.1 15.1 4.5l-4.3 15.4z m-31.1-10c-5.1-1.8-10.3-3.8-15.3-5.9l6-14.8c4.9 2 9.8 3.9 14.8 5.6l-5.5 15.1zM328 921.6c-5-2.2-9.9-4.6-14.8-7l7.1-14.4c4.7 2.3 9.5 4.6 14.3 6.7l-6.6 14.7z m-29.4-14.5c-4.8-2.6-9.6-5.3-14.3-8l8.1-13.8c4.5 2.6 9.1 5.3 13.8 7.7l-7.6 14.1z m-28.2-16.5c-4.6-2.9-9.2-6-13.6-9l9.1-13.2c4.3 3 8.7 5.9 13.1 8.7l-8.6 13.5zM243.5 872c-4.3-3.2-8.7-6.6-12.9-10l10-12.5c4.1 3.3 8.3 6.5 12.5 9.7l-9.6 12.8zM218 851.5c-4.1-3.6-8.2-7.2-12.2-10.9l10.9-11.7c3.8 3.6 7.8 7.1 11.7 10.5L218 851.5z m-23.9-22.3c-3.8-3.8-7.6-7.8-11.3-11.8l11.7-10.9c3.6 3.8 7.2 7.7 10.9 11.3l-11.3 11.4z m-22.3-23.9c-3.5-4.1-7.1-8.3-10.4-12.6l12.5-10c3.3 4.1 6.7 8.2 10.1 12.1l-12.2 10.5z m-20.4-25.5c-3.2-4.3-6.4-8.8-9.5-13.3l13.2-9.1c3 4.3 6 8.6 9.2 12.8l-12.9 9.6zM132.9 753c-2.9-4.6-5.8-9.3-8.5-13.9l13.8-8.1c2.6 4.5 5.4 9 8.2 13.4l-13.5 8.6z m-16.5-28.2c-2.6-4.8-5.1-9.6-7.5-14.5l14.4-7.1c2.3 4.7 4.7 9.4 7.2 14l-14.1 7.6zM102 695.6c-2.2-4.9-4.4-10-6.4-15l14.8-6c2 4.8 4 9.7 6.2 14.5l-14.6 6.5z m-12.3-30.3c-1.8-5.1-3.6-10.3-5.3-15.5l15.2-4.9c1.6 5 3.3 10 5.1 14.9l-15 5.5z m-9.9-31.1c-1.5-5.2-2.9-10.5-4.1-15.8l15.6-3.8c1.2 5.1 2.6 10.2 4 15.2l-15.5 4.4z m-7.7-31.7c-1.1-5.3-2.1-10.7-3-16.1l15.8-2.6c0.9 5.2 1.8 10.4 2.9 15.5l-15.7 3.2z m-5.3-32.3c-0.7-5.4-1.3-10.8-1.8-16.2l15.9-1.4c0.5 5.2 1 10.5 1.7 15.7l-15.8 1.9z m-3-32.5c-0.3-5.4-0.5-10.9-0.6-16.3l16-0.3c0.1 5.2 0.3 10.5 0.6 15.8l-16 0.8z m15.4-32.4l-16-0.3c0.1-5.4 0.3-10.9 0.6-16.3l16 0.9c-0.3 5.1-0.5 10.4-0.6 15.7z m1.7-31.5L65 472.4c0.5-5.4 1.1-10.9 1.8-16.2l15.9 2c-0.8 5.1-1.4 10.4-1.8 15.6z m3.9-31.2L69 440c0.9-5.4 1.9-10.8 2.9-16.1l15.7 3.2c-1 5.1-1.9 10.3-2.8 15.5z m6.3-30.9L75.5 408c1.3-5.3 2.7-10.6 4.1-15.8l15.4 4.3c-1.4 5-2.7 10.1-3.9 15.2z m8.5-30.4l-15.2-4.9c1.7-5.2 3.4-10.4 5.3-15.5l15 5.4c-1.8 5-3.5 10-5.1 15z m10.7-29.7l-14.8-6c2-5 4.2-10.1 6.4-15.1l14.6 6.5c-2.2 4.9-4.2 9.8-6.2 14.6z m12.9-28.8l-14.4-7.1c2.4-4.9 4.9-9.8 7.5-14.6l14.1 7.6c-2.5 4.7-4.9 9.4-7.2 14.1z m14.9-27.8l-13.8-8.1c2.8-4.7 5.6-9.4 8.5-14l13.5 8.6c-2.7 4.5-5.5 9-8.2 13.5z m17-26.6l-13.2-9.1c3.1-4.5 6.3-8.9 9.5-13.3l12.8 9.6c-3.1 4.2-6.2 8.5-9.1 12.8z m18.8-25.3l-12.5-10c3.4-4.2 6.9-8.5 10.5-12.6L184 231c-3.4 3.9-6.8 8-10.1 12.1z m20.6-23.9l-11.7-10.9c3.7-4 7.5-7.9 11.3-11.8l11.3 11.3c-3.6 3.8-7.3 7.6-10.9 11.4z m22.3-22.2l-10.9-11.7c4-3.7 8.1-7.4 12.2-10.9l10.5 12.1c-4 3.4-8 6.9-11.8 10.5z m23.8-20.6l-10-12.5c4.2-3.4 8.6-6.8 12.9-10l9.6 12.8c-4.2 3.1-8.4 6.4-12.5 9.7z m25.3-18.9l-9.1-13.2c4.5-3.1 9-6.1 13.6-9l8.6 13.5c-4.4 2.9-8.8 5.8-13.1 8.7z m26.5-16.9l-8.1-13.8c4.7-2.7 9.5-5.4 14.2-8l7.6 14.1c-4.6 2.5-9.2 5.1-13.7 7.7z m27.7-14.9l-7.1-14.4c4.8-2.4 9.8-4.7 14.8-6.9l6.5 14.6c-4.7 2.2-9.5 4.4-14.2 6.7z m28.7-12.8l-6-14.8c5-2 10.2-4 15.3-5.9l5.5 15c-5 1.8-10 3.7-14.8 5.7z m29.6-10.8l-4.9-15.2c5.2-1.7 10.4-3.2 15.6-4.7l4.3 15.4c-5 1.4-10 2.9-15 4.5z m30.3-8.5L405 78c5.3-1.3 10.6-2.5 16-3.6l3.2 15.7c-5.2 1.1-10.4 2.3-15.5 3.5z m30.9-6.3L437 71.5c5.3-0.9 10.8-1.7 16.2-2.4l2 15.9c-5.2 0.7-10.4 1.5-15.6 2.3z m31.3-4l-1.5-15.9c5.4-0.5 10.9-0.9 16.3-1.2l0.9 16c-5.3 0.2-10.5 0.6-15.7 1.1zM502.7 81.6l-0.3-16c2.7 0 5.4-0.1 8.1-0.1v16c-2.5 0-5.2 0-7.8 0.1z" fill="#ffffff"/>

<path d="M510.6 960.4v-16c58.2 0 114.8-11.4 167.9-33.9 51.4-21.7 97.5-52.8 137.1-92.5 39.6-39.6 70.7-85.8 92.5-137.1C930.6 627.7 942 571.2 942 513s-11.4-114.8-33.9-168c-21.7-51.4-52.8-97.5-92.5-137.1-39.6-39.6-85.8-70.7-137.1-92.5-53.2-22.5-109.7-33.9-167.9-33.9v-16c60.4 0 119 11.8 174.2 35.2 53.3 22.5 101.1 54.8 142.2 95.9s73.4 88.9 95.9 142.2C946.2 393.9 958 452.5 958 513c0 60.4-11.8 119-35.2 174.2-22.5 53.3-54.8 101.1-95.9 142.2s-88.9 73.4-142.2 95.9c-55.1 23.3-113.7 35.1-174.1 35.1z" fill="#ffffff"/>

<path d="M510.6 879c-49.4 0-97.3-9.7-142.4-28.8-43.6-18.4-82.7-44.8-116.3-78.4-33.6-33.6-60-72.7-78.4-116.3-19.1-45.1-28.8-93-28.8-142.4h16c0 93.4 36.4 181.3 102.5 247.3C329.3 826.6 417.1 863 510.6 863s181.3-36.4 247.3-102.5 102.5-153.9 102.5-247.3S824 331.9 757.9 265.8C693.7 201.7 609 165.5 518.6 163.5v366.3h-16V147.4h8c49.4 0 97.3 9.7 142.4 28.8 43.6 18.4 82.7 44.8 116.3 78.4 33.6 33.6 60 72.7 78.4 116.3 19.1 45.1 28.8 93 28.8 142.4 0 49.4-9.7 97.3-28.8 142.4-18.4 43.6-44.8 82.7-78.4 116.3-33.6 33.6-72.7 60-116.3 78.4-45.1 18.9-93 28.6-142.4 28.6z" fill="#ffffff"/>

<path d="M514 973h-1c-12.5 0-22.6-10.1-22.6-22.6v-1c0-12.5 10.1-22.6 22.6-22.6h1c12.5 0 22.6 10.1 22.6 22.6v1c0 12.5-10.1 22.6-22.6 22.6z" fill="#e6c341"/>

<path d="M514 981h-1c-16.8 0-30.6-13.7-30.6-30.6v-1c0-16.8 13.7-30.6 30.6-30.6h1c16.8 0 30.6 13.7 30.6 30.6v1c0 16.9-13.7 30.6-30.6 30.6z m-0.9-46.1c-8 0-14.6 6.5-14.6 14.6v1c0 8 6.5 14.6 14.6 14.6h1c8 0 14.6-6.5 14.6-14.6v-1c0-8-6.5-14.6-14.6-14.6h-1z" fill="#ffffff"/>

<path d="M514 96.5h-1c-12.5 0-22.6-10.1-22.6-22.6v-1c0-12.5 10.1-22.6 22.6-22.6h1c12.5 0 22.6 10.1 22.6 22.6v1c0 12.5-10.1 22.6-22.6 22.6z" fill="#e6c341"/>

<path d="M514 104.5h-1c-16.8 0-30.6-13.7-30.6-30.6v-1c0-16.8 13.7-30.6 30.6-30.6h1c16.8 0 30.6 13.7 30.6 30.6v1c0 16.9-13.7 30.6-30.6 30.6z m-0.9-46c-8 0-14.6 6.5-14.6 14.6v1c0 8 6.5 14.6 14.6 14.6h1c8 0 14.6-6.5 14.6-14.6v-1c0-8-6.5-14.6-14.6-14.6h-1z" fill="#ffffff"/>

<path d="M481.1 528.9h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z" fill="#ffffff"/>

</g>

</svg>
                            <div className="TechnologiesStyles__ListContainer-sc-1ccvow3-3 technology-p"><h4
                                className="TechnologiesStyles__ListTitle-sc-1ccvow3-4 gRmPxD">Data Science</h4><p
                                className="TechnologiesStyles__ListParagraph-sc-1ccvow3-5 fXnhlQ"> Pandas | Numpy Matplotlib | Scipy<br/>
                                Seaborn | Plotly</p></div>
                        </div>
                        <div className="col-md-4">
                        <svg width="3rem" height="3rem" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" fill="url(#paint0_linear_87_8204)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" fill="url(#paint1_linear_87_8204)"/>
<defs>
<linearGradient id="paint0_linear_87_8204" x1="12.4809" y1="2" x2="12.4809" y2="22.7407" gradientUnits="userSpaceOnUse">
<stop stop-color="#327EBD"/>
<stop offset="1" stop-color="#1565A7"/>
</linearGradient>
<linearGradient id="paint1_linear_87_8204" x1="19.519" y1="9.25928" x2="19.519" y2="30" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFDA4B"/>
<stop offset="1" stop-color="#F9C600"/>
</linearGradient>
</defs>
</svg>

                            <div className="TechnologiesStyles__ListContainer-sc-1ccvow3-3 technology-p"><h4
                                className="TechnologiesStyles__ListTitle-sc-1ccvow3-4 gRmPxD">Languages</h4><p
                                className="TechnologiesStyles__ListParagraph-sc-1ccvow3-5 fXnhlQ">Python | MATLAB  <br/>
                                HTML | CSS
                                </p></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                        <svg width="3rem" height="3rem" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="2"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier">

<path d="M272.2 696.2m-59.3 0a59.3 59.3 0 1 0 118.6 0 59.3 59.3 0 1 0-118.6 0Z" fill="#efaf25"/>

<path d="M392.1 485.4l-62.5-253v-0.1c-0.6-3-1.4-6.3-2.2-9.8-7.2-31.8-18.1-79.8 7.2-111.5 15.8-19.7 43.3-29.7 81.9-29.7v15c-33.8 0-57.4 8.1-70.2 24.1-20.8 26.1-10.9 69.8-4.3 98.8 0.8 3.5 1.6 6.8 2.2 9.9l62.4 252.8-14.5 3.5zM731.5 485.1l-14.6-3.6 62.4-252.4c0.9-4.6 2-9.5 3.1-14.6 6.6-29.7 15.6-70.4-3.8-94.6-12.6-15.7-36.6-23.7-71.5-23.7v-15c40.2 0 67.4 9.6 83.2 29.3 23.9 29.8 14 74.5 6.8 107.2-1.1 5.2-2.2 10-3.1 14.4l-0.1 0.4-62.4 252.6zM645.6 952.4c-22.4 0-44.1-7.9-61.5-22.6-21.3-18.1-33.6-44.6-33.6-72.6l0.5-254.6h21.5l-0.2 84.8h188.1c20.1 0 38.4 8.4 51.4 23.8 12.4 14.5 19.3 34.1 19.5 55 0.4 39.7-20.4 82.6-58.6 120.8-33.8 33.8-76.6 58.4-111.7 64.1-5.1 0.9-10.2 1.3-15.4 1.3zM559 610.6l-0.4 246.6c0 25.6 11.2 49.9 30.7 66.5s45.2 23.7 70.5 19.6c33.5-5.5 74.7-29.2 107.4-61.9 36.7-36.7 56.7-77.5 56.3-115-0.2-19.1-6.5-36.8-17.6-49.9-11.7-13.7-27.4-21-45.3-21H572.4v5.5h180.8c40.8 0 63.4 24.3 63.7 68.4 0.2 33.1-18.8 71.6-51.9 105.7-30.2 31-68.7 54.6-100.5 61.5-26.1 5.7-50.6 0.5-69.1-14.4-19.9-16-31.2-42.4-31.2-72.3l0.4-239.3H559z m13.4 98.4l-0.3 140.9c0 27.5 10.3 51.5 28.2 66 16.6 13.4 38.7 17.9 62.3 12.8 30.4-6.6 67.4-29.3 96.5-59.2 31.7-32.6 49.8-69.1 49.7-100.1-0.1-27.6-9.9-60.4-55.7-60.4H572.4z" fill="#999999"/>

<path d="M557.3 709h-216v-21.5h215.8v8H349.3v5.5h208zM272.2 728.3c-17.7 0-32.1-14.4-32.1-32.1 0-17.7 14.4-32.1 32.1-32.1s32.1 14.4 32.1 32.1c0.1 17.7-14.3 32.1-32.1 32.1z m0-56.3c-13.3 0-24.1 10.8-24.1 24.1s10.8 24.1 24.1 24.1 24.1-10.8 24.1-24.1c0.1-13.2-10.8-24.1-24.1-24.1z" fill="#999999"/>

<path d="M272.2 780.7c-46.6 0-84.5-37.9-84.5-84.5s37.9-84.5 84.5-84.5 84.5 37.9 84.5 84.5c0.1 46.6-37.8 84.5-84.5 84.5z m0-154.1c-38.3 0-69.5 31.2-69.5 69.5s31.2 69.5 69.5 69.5 69.5-31.2 69.5-69.5-31.1-69.5-69.5-69.5z" fill="#999999"/>

<path d="M581.4 615.7h-38.9v-52.5h38.9v52.5z m-24-15h8.9v-22.5h-8.9v22.5z" fill="#efaf25"/>

<path d="M657.1 570H466.4c-37.2 0-63.8-25-78.9-74.3v-0.2l-2-7.9c-0.6-2.4-0.1-4.9 1.4-6.9s3.8-3.1 6.3-3.1h14.5c3 0 5.6 2 6.4 4.8 11 37.9 24.6 59.8 62 59.8h171.5c36.6 0 49.2-19.3 62.3-59.9 0.9-2.8 3.5-4.7 6.4-4.7h14.4c2.5 0 4.8 1.1 6.3 3.1s2 4.5 1.4 6.9l-2 7.6c-14.1 48.3-42.2 74.8-79.3 74.8z m-261.9-76.5c14.2 46.1 37.5 68.6 71.2 68.6h190.7c18 0 33.6-6.9 46.3-20.6 10.7-11.6 19.5-28.3 25.3-48.3l1.9-7.4h-13.5c-13.9 42.8-28.6 64.5-69.6 64.5H476.1c-41.7 0-58-25.8-69.4-64.5h-13.6l2.1 7.7zM494.2 86.6V91h-72v-4.4h72m3-15h-78c-6.6 0-12 5.4-12 12V94c0 6.6 5.4 12 12 12h78c6.6 0 12-5.4 12-12V83.6c0-6.6-5.4-12-12-12zM702.4 86.6V91h-72v-4.4h72m3-15h-78c-6.6 0-12 5.4-12 12V94c0 6.6 5.4 12 12 12h78c6.6 0 12-5.4 12-12V83.6c0-6.6-5.4-12-12-12z" fill="#efaf25"/>

</g>

</svg>
                            <div className="TechnologiesStyles__ListContainer-sc-1ccvow3-3 technology-p"><h4
                                className="TechnologiesStyles__ListTitle-sc-1ccvow3-4 gRmPxD">Medical Device <br/> Standards</h4><p
                                className="TechnologiesStyles__ListParagraph-sc-1ccvow3-5 fXnhlQ"> ISO 13485 | ISO 14971 ISO 14155 |
                                IEC 60601 
                                IEC 62304
                               </p></div>
                        </div>
                        <div className="col-md-4">
                            <svg stroke="#fff" fill="#fff" strokeWidth="0" version="1.1"
                                 viewBox="0 0 32 32" height="3rem" width="3rem" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.334 14.023c0 0 0-2.972 2.972-2.972h8.917c0 0 0 2.972-2.972 2.972h-8.917zM15.334 17.821c0 0 0-2.972 2.972-2.972h4.459c0 0 0 2.972-2.972 2.972h-4.459zM15.334 21.619c0 0 0-2.972 2.972-2.972h1.486c0 0 0 2.972-2.972 2.972h-1.486zM14.336 19.3v2.371h-9.559l6.158-8.399h-5.286v-2.371h9.972l-6.129 8.4z"></path>
                            </svg>
                            <div className="TechnologiesStyles__ListContainer-sc-1ccvow3-3 technology-p"><h4
                                className="TechnologiesStyles__ListTitle-sc-1ccvow3-4 gRmPxD">Others</h4><p
                                className="TechnologiesStyles__ListParagraph-sc-1ccvow3-5 fXnhlQ">COMSOL Multiphysics | Fusion 360 | Cadence
                                </p></div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="hr-short"></div>
            </div>


           







            
            <section className="container bio" id={'me'}>
                <h2 className="greeting_headline">About Me</h2>
                <div className="container">
                    <div className="row">
                        <div className={'col-md-7'}>
                        <p className="description-p ">
                    I'm Famous Ghanyo Tay, a Biomedical Engineering master's student at the University of Toronto,
                     deeply passionate about the application of Artificial Intelligence in healthcare. <br/>
                     <br/>
                    
                     With two years of hands-on experience, I excel in HTML, CSS, Python, MATLAB, and tools
                    like COMSOL Multiphysics, Fusion 360, and Adobe Photoshop. My expertise lies in crafting intelligent 
                    data analyses, predictive models, and deep learning algorithms tailored for healthcare applications.
                     Clear communication is key to my approach, enabling effective collaboration with clients and teams. <br/>
                     <br/>
                     Beyond school work, my interests encompass cooking, reading, volunteering, and exploring new technologies. 
                     These activities fuel my creativity, bring balance to my life, and inspire fresh perspectives in my professional pursuits.


                    </p>


                            
                        </div>
                        <div className="col-md-5">
                            <div className="aliko-card">
                                <img src={profileImg} alt="Your Image"/>
                                <div className="overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            <section className="container bio" id={'articles'}></section>
            </section>
            <div className="container">
                <div className="hr-short"></div>
            </div>
            <section className="container w-100">
                <h2 className="greeting_headline">Articles</h2>
                <div className="container">
                    <p className="description-p ">
                        <a href={'https://ieeexplore.ieee.org/document/9905329'}
                                                         className={'text-theme text-decoration-none'}>IEEE Paper</a><br/>
                        <a href={'https://internationalexperience.utoronto.ca/global-experiences/global-scholarships/mastercard-foundation-scholars/'}
                                               className={'text-theme text-decoration-none'}> 2023 MCF Scholars @ U of T</a> <br/>
                                               <a href={'https://discover.bme.utoronto.ca/bme-welcomes-2022-mastercard-scholar-cohort/'}
                                                         className={'text-theme text-decoration-none'}>BME @ U of T</a> <br/>
                        <a href={'https://africademics.com/2020/11/02/scholarship-success-stories-famous-ghanyo-tay/'}
                                                         className={'text-theme text-decoration-none'}>Africademics</a>
                    </p>
                </div>
            </section>
            <hr/>
            <section className="footer-section">
                <ul className="d-flex justify-content-start">
                    <div className="row text-small">
                        <div className="col-md-6"><h4
                            className="email-header">Email</h4><a
                            href="mailto:robertdoe@codeden.org" className="email-link">famousghanyotay@gmail.com</a>
                        </div>
                    </div>

                </ul>
            </section>
        </section>
    );
}



function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<HomeScreen/>}/>
                <Route path='/certs' exact element={<CertificateScreen/>}></Route>
                <Route path='/data-care-transport-project' exact element={<DataCareTransportScreen/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
