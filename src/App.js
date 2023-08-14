import './App.css';
import logo from './images/logo.png';
import project0Img from './images/project_0.png'
import project1Img from './images/project_1.png'
import project2Img from './images/project_2.png'
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
                            <a href="https://github.com/Brafamous/Brain-Tumor-Detection" className={'text-decoration-none'}>
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
                            <a href="https://cariscaacademy.org/about-us/" className={'text-decoration-none'}>
                                <div className="container py-5">
                                    <div className="container py-5">
                                        <div className="card card-bg-theme">
                                            <img className="card-img-top" src={project5Img} alt=""
                                                 height={'200px'}/>
                                            <div className="card-body">
                                                <h5 className="card-title text-center">CARISCA Academy</h5>
                                                <hr className="hr"/>
                                                <p className="card-text text-justify">Part of the developer group
                                                    working on this EdTech platform to educate stakeholders in the supply chain of Africa &nbsp; &nbsp; (KNUST - ASU - USAID)</p>
                                                <div className="d-flex justify-content-around">
                                                    <span>Laravel</span>{/*<span>Mongo DB</span>*/}
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
                                                <h5 className="card-title text-center">Code Den Inc.</h5>
                                                <hr className="hr"/>
                                                <p className="card-text text-justify">Using React, Mongo DB, I am
                                                    currently
                                                    working on an EdTech platform to help the youth of Africa learn to
                                                    Code
                                                    without having to pay a penny.</p>
                                                <div className="d-flex justify-content-around">
                                                    <span>React</span><span>Mongo DB</span><span>Node</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                  {/*  </div>*/}
                   {/* <div className="row">*/}
                        <div className="col-md-6">
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

                        </div>
                        <div className="col-md-6">
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
                        </div>

                 {/*   </div>
                    <div className="row">*/}
                        <div className="col-md-6">
                            <div className="container py-5">
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
                            </div>
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
                        <div className="col-md-6">
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

                        </div>
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
                            <svg stroke="#fff" fill="#fff" strokeWidth="0" version="1.1"
                            viewBox="0 0 32 32" height="3rem" width="3rem" xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M13.249 6.953c-2.833 0.351-4.585 1.184-4.794 2.293-0.038 0.18-0.038 1.184-0.019 2.236 0.038 1.573 0.066 1.971 0.208 2.226 0.152 0.294 0.152 0.341 0 0.739-0.142 0.369-0.152 0.654-0.104 2.188 0.038 0.966 0.114 1.904 0.18 2.075 0.085 0.237 0.085 0.369 0 0.559-0.142 0.303-0.152 2.975-0.019 3.78 0.057 0.379 0.18 0.673 0.36 0.9 0.843 1.052 3.079 1.677 6.366 1.781 4.083 0.133 7.2-0.635 7.939-1.952 0.199-0.341 0.208-0.493 0.208-2.226 0-1.468-0.028-1.933-0.151-2.226-0.123-0.313-0.123-0.417-0.028-0.597 0.085-0.161 0.114-0.71 0.095-2.018-0.019-1.876-0.047-2.151-0.256-2.454-0.104-0.152-0.095-0.227 0.019-0.464 0.123-0.227 0.152-0.644 0.142-2.302-0.009-1.175-0.057-2.15-0.123-2.33-0.256-0.786-1.393-1.506-2.937-1.876-1.895-0.445-4.964-0.587-7.086-0.332zM13.685 7.844c-0.028 0.047 0.502 0.057 1.213 0.028 1.052-0.038 3.827 0.123 3.733 0.218-0.019 0.019-0.445 0.076-0.957 0.133-0.521 0.057-1.023 0.152-1.137 0.208-0.189 0.104-0.189 0.114-0.028 0.237 0.161 0.114 0.151 0.123-0.095 0.18-0.777 0.161-1.279 0.36-1.459 0.587-0.455 0.578-0.057 1.156 0.919 1.364 0.739 0.152 3.657 0.057 4.462-0.142 0.891-0.227 1.345-0.483 1.345-0.767 0-0.388-0.569-0.673-1.942-0.957-0.73-0.142-0.265-0.171 0.644-0.028 0.9 0.142 1.63 0.417 1.866 0.72 0.171 0.227 0.189 0.379 0.189 2.027 0 2.037 0.019 1.989-0.909 2.416-1.345 0.635-3.534 0.872-7.333 0.805-0.72-0.019-0.777-0.028-0.578-0.142s0.133-0.133-0.663-0.18c-1.108-0.066-2.075-0.341-2.529-0.701-0.55-0.436-0.9-1.222-0.947-2.15-0.047-0.881 0.123-1.895 0.303-1.829 0.066 0.028 0.208-0.133 0.341-0.369 0.379-0.72 1.203-1.213 2.558-1.554 0.805-0.199 1.080-0.227 1.004-0.104zM10.123 14.949c0 0.388 0.189 0.549 0.928 0.767 2.672 0.805 8.697 0.701 10.421-0.18 0.351-0.18 0.398-0.237 0.398-0.53 0-0.36 0.095-0.417 0.322-0.18 0.18 0.18 0.171 0.019 0.151 1.98l-0.009 1.611-0.275 0.256c-0.587 0.54-2.624 0.966-5.116 1.080-3.088 0.142-6.622-0.464-7.162-1.232-0.104-0.152-0.133-0.559-0.133-1.847 0-1.402 0.019-1.677 0.161-1.828 0.218-0.246 0.313-0.208 0.313 0.104zM10.407 20.368c0.815 0.597 4.86 0.995 7.598 0.758 1.506-0.133 2.804-0.379 3.429-0.654 0.417-0.189 0.436-0.218 0.436-0.578 0-0.265 0.038-0.388 0.133-0.388 0.322 0 0.369 0.256 0.35 1.999-0.009 0.947-0.047 1.772-0.066 1.838-0.076 0.189-0.881 0.587-1.554 0.758-1.146 0.303-2.217 0.436-3.932 0.493-3.164 0.104-6.139-0.379-6.944-1.127-0.199-0.199-0.208-0.265-0.208-1.914 0-1.639 0.009-1.715 0.218-1.933l0.208-0.227 0.047 0.407c0.038 0.284 0.114 0.445 0.284 0.568z"></path>
                            </svg>
                            <div className="TechnologiesStyles__ListContainer-sc-1ccvow3-3 technology-p"><h4
                                className="TechnologiesStyles__ListTitle-sc-1ccvow3-4 gRmPxD">Data Science</h4><p
                                className="TechnologiesStyles__ListParagraph-sc-1ccvow3-5 fXnhlQ"> Pandas | Numpy Matplotlib | Scipy<br/>
                                Seaborn | Plotly</p></div>
                        </div>
                        <div className="col-md-4">
                            <svg stroke="#fff" strokeWidth="0" version="1.1"
                                 viewBox="0 0 240 234" height="2.5rem" width="2.5rem"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path className="st0" d="M10 10h220v214H10z"/>
                                <path className="st1" d="M0 0v234h240V0H0zm10 10h220v214H10V10z"/>
                                <path className="st1"
                                      d="M174.3 98.3c-1.5-.7-3.4-1-5.8-1-12.6 0-21 9.7-21 25.8 0 18.4 8.6 25.8 19.8 25.8 2.4 0 5-.3 6.9-1.1V98.3h.1zm-44.8 25.6c0-23.3 15-41.5 39.6-41.5 2.1 0 3.2 0 5.2.2v-26c0-.6.5-1 1-1h16.1c.8 0 1 .3 1 .8v91.4c0 2.7 0 6.1.5 9.8 0 .7 0 .8-.6 1.1-8.4 4-17.2 5.8-25.6 5.8-21.7 0-37.2-13.4-37.2-40.6zm-34.1-16.2l28 54.3c.5.8.2 1.6-.6 1.6h-17.4c-1.1 0-1.6-.3-2.1-1.3-6.4-13.2-12.9-26.9-19.6-41.1h-.2c-6 13.4-12.6 28-19 41.2-.5.8-1 1.1-1.8 1.1H46.1c-1 0-1.1-.8-.6-1.4l27.4-52.7L46.4 57c-.6-.8 0-1.5.7-1.5h17.2c1 0 1.5.2 1.8 1.1C72.4 69.9 78.8 83 84.8 96.4h.2c5.8-13.2 12.2-26.5 18.3-39.6.5-.8.8-1.3 1.8-1.3h16.1c.8 0 1.1.6.6 1.5l-26.4 50.7z"/>
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
                            <svg width="2em" height="2em" viewBox="0 0 256 317" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                <defs>
                                    <linearGradient x1="3.9517088%" y1="26.9930287%" x2="75.8970734%" y2="52.9192657%"
                                                    id="linearGradient-1">
                                        <stop stop-color="#000000" offset="0%"></stop>
                                        <stop stop-color="#000000" stop-opacity="0" offset="100%"></stop>
                                    </linearGradient>
                                </defs>
                                <g>
                                    <polygon fill="#fef"
                                             points="157.665785 0.000549356223 0.000549356223 157.665785 48.8009614 206.466197 255.267708 0.000549356223"></polygon>
                                    <polygon fill="#ddd"
                                             points="156.567183 145.396793 72.1487107 229.815265 121.132608 279.530905 169.842925 230.820587 255.267818 145.396793"></polygon>
                                    <polygon fill="#fff"
                                             points="121.133047 279.531124 158.214592 316.61267 255.267159 316.61267 169.842266 230.820807"></polygon>
                                    <polygon fill="#00B5F8"
                                             points="71.5995742 230.364072 120.401085 181.562561 169.842046 230.821136 121.132827 279.531454"></polygon>
                                    <polygon fillOpacity="0.8" fill="url(#linearGradient-1)"
                                             points="121.132827 279.531454 161.692896 266.072227 165.721875 234.941308"></polygon>
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
                                className="TechnologiesStyles__ListParagraph-sc-1ccvow3-5 fXnhlQ">COMSOL Multiphysics  Fusion 360 | Cadence
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
