import { render } from "@testing-library/react"
import { Component } from "react"
import React from 'react'

class Home extends React.Component{
    render(){
        return (
 <div>
                 <nav id="mainNavbar" class="navbar navbar-dark  navbar-expand-lg py-0 fixed-top text-primary" >
        <a href="#" class="navbar-brand"><img src="homepage/public/img/apna player.png" width="50px" alt=""/></a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon " ></span>
        </button>
        <div class="collapse navbar-collapse " id="navLinks">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <a href="" class="nav-link" ><i class="fas fa-home mx-2" > </i>HOME </a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link"><i class="fa fa-group mx-2"> </i>ABOUT</a>
                </li>
           </ul>
            <ul class="navbar-nav d-flex ">
                <li class="nav-item">
                    <a href="#" class="nav-link">SIGN IN</a>
                </li>
                {/* <hr/> */}
                <li class="nav-item">
                <a href="#" class="nav-link">SIGN UP </a>
                </li>
            </ul>
        </div>
    </nav>
   
    <section class="container-fluid px-0  ">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100  img-fluid tales" src="homepage/public/img/mic music.jpg" alt="First slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 img-fluid tales" src="homepage/public/img/bruce-mars-DBGwy7s3QY0-unsplash.jpg"
                        alt="Second slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 img-fluid tales" src="homepage/public/img/elice-moore-E--AUpYXbjM-unsplash.jpg"
                        alt="Third slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 img-fluid tales"
                        src="homepage/public/img/bruno-emmanuelle-Gi6-m_t_W-E-unsplash.jpg" alt="Fouth slide"/>
                </div>

            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </section>

    <section class="container-fluid px-0">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div id="headingGroup" class="text-white text-center d-none d-lg-block mt-5">
                    <h1 class="">MUSIC<span>/</span><i class="fas fa-heart"></i><span>/</span>LIFE</h1>
                    <h1 class="">MUSIC<span>/</span><i class="fas fa-heart"></i><span>/</span>LIFE</h1>
                    <h1 class="">MUSIC<span>/</span><i class="fas fa-heart"></i><span>/</span>LIFE</h1>
                    <h1 class="">MUSIC<span>/</span><i class="fas fa-heart"></i><span>/</span>LIFE</h1>
                    <h1 class="">MUSIC<span>/</span><i class="fas fa-heart"></i><span>/</span>LIFE</h1>
                    <h1 class="">MUSIC<span>/</span><i class="fas fa-heart"></i><span>/</span>LIFE</h1>
                </div>
            </div>
            <div class="col-lg-6 m-0">
                <img class="img-fluid d-none d-sm-block " src="homepage/public/img/gettyimages-951326930-1579515324.jpg" alt=""/>
            </div>
        </div>
    </section>

    <section class="container-fluid px-0">
        <div class="row align-items-center content">
            <div class="col-md-6 order-2 order-md-1">
                <img src="homepage/public/img/FreeVector-Love.jpg" alt="" class="img-fluid "/>
            </div>
            <div class="col-md-6 text-center order-1 order-md-2">
                <div class="row justify-content-center">
                    <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                        <h2>ROMANTIC SONG</h2>
                        <img src="homepage/public/img/romantic ic.png" alt="" class="d-none d-xs-inline d-lg-inline "/>
                        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iste molestiae
                            beatae, maiores deserunt
                            in voluptatibus
                            aspernatur architecto excepturi delectus soluta? Ipsa, deleniti dolorem hic consequatur
                            repellat eveniet quidem
                            voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum magnam
                            autem nam ex deserunt debitis
                            eaque ratione! Nobis, quidem assumenda.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row align-items-center content">
            <div class="col-md-6 text-center">
                <div class="row justify-content-center">
                    <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                        <h2>RETRO SONG</h2>
                        <img src="homepage/public/img/retro ic.png" alt="" class="d-none d-lg-inline"/>
                        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iste molestiae
                            beatae, maiores deserunt
                            in voluptatibus
                            aspernatur architecto excepturi delectus soluta? Ipsa, deleniti dolorem hic consequatur
                            repellat eveniet quidem
                            voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum magnam
                            autem nam ex deserunt debitis
                            eaque ratione! Nobis, quidem assumenda.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <img src="homepage/public/img/retro.jpg" alt="" class="img-fluid"/>
            </div>
        </div>
        <div class="row align-items-center content">
            <div class="col-md-6 order-2 order-md-1">
                <img src="homepage/public/img/romantic.jpg" alt="" class="img-fluid"/>
            </div>
            <div class="col-md-6 text-center order-1 order-md-2">
                <div class="row justify-content-center">
                    <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                        <h2>ROCK MUSIC</h2>
                        {/* d-sm-block */}
                        <img src="homepage/public/img/rockmusic.png" alt="" class="d-none  d-lg-inline"/>
                        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iste molestiae
                            beatae, maiores
                            deserunt
                            in voluptatibus
                            aspernatur architecto excepturi delectus soluta? Ipsa, deleniti dolorem hic consequatur
                            repellat eveniet
                            quidem
                            voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum magnam
                            autem nam ex deserunt
                            debitis
                            eaque ratione! Nobis, quidem assumenda.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer ">
        <p class="footer__title"> <img src="homepage/public/img/music ic.png" class="img-fluid" width="50" height="50" alt=""/>
            Apna-Player</p>

        <div class="footer__admin">
            <a href="#">contact</a>
        </div>
        <div class="footer__social">
            <a href="#" target="_blank" class="footer__icon"><i class='fab fa-instagram-square'></i></a>
            <a href="#" target="_blank" class="footer__icon"><i class='fa fa-envelope-square'></i></a>
            <a href="#" target="_blank" class="footer__icon"><i class='fa fa-phone'></i></a>
        </div>
        <p>&#169; 2020 copyright all right reserved</p>
    </footer>

{/*    

    <script src="https://kit.fontawesome.com/a81368914c.js"></script>

   <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>

    <script>
        $(function () {
            $(document).scroll(function () {
                var $nav = $("#mainNavbar");
                $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
            });
        });
    </script> */}
               
            </div>
        )
    }
}
export default Home