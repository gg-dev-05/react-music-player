import React from 'react'
import { Button } from "@material-ui/core"
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#0063cc',
      borderColor: '#0063cc',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);
  
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: purple[700],
      },
    },
  }))(Button);
  
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
  
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
  function B1() {
    const classes = useStyles();
  
    return (
      <div>
        <ColorButton href="/login" variant="contained" color="primary" className={classes.margin}>
          Launch The Web Player
        </ColorButton>
      </div>
    );
  }
  function B2() {
    const classes = useStyles();
  
    return (
      <div>
        <BootstrapButton href="/login" variant="contained" color="primary" disableRipple className={classes.margin}>
          GET READY FOR THE SONG
        </BootstrapButton> 
      </div>
    );
  }
  function B3() {
    const classes = useStyles();
  
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Button href="/login" variant="contained" color="primary" className={classes.margin}>
            Listen to your Favorite Artist
          </Button>
        </ThemeProvider>
      </div>
    );
  }
class Home extends React.Component {
    render() {
        return (
            
            <div>
                <nav id="mainNavbar" class="navbar navbar-dark  navbar-expand-lg py-0 fixed-top text-primary" >
                    <a href="#top" class="navbar-brand"><img src="homepage/img/apna player.png" width="50px" alt="" /></a>
                    <button class="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon " ></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navLinks">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a href="/home" class="nav-link" ><i class="fas fa-home mx-2" > </i>HOME </a>
                            </li>
                            <li class="nav-item">
                                <a href="#footer" class="nav-link"><i class="fa fa-group mx-2"> </i>ABOUT</a>

                        </ul>
                        <ul class="navbar-nav d-flex ">
                            <li class="nav-item">
                                <a href="/login" class="nav-link">SIGN IN</a>
                            </li>
                            {/* <hr/> */}
                            {/* <li class="nav-item">
                                <a href="/login" class="nav-link">SIGN UP </a>
                            </li> */}
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
                                <img class="d-block w-100  img-fluid tales" src="homepage/img/mic music.jpg" alt="First slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 img-fluid tales" src="homepage/img/bruce-mars-DBGwy7s3QY0-unsplash.jpg"
                                    alt="Second slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 img-fluid tales" src="homepage/img/elice-moore-E--AUpYXbjM-unsplash.jpg"
                                    alt="Third slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 img-fluid tales"
                                    src="homepage/img/bruno-emmanuelle-Gi6-m_t_W-E-unsplash.jpg" alt="Fouth slide" />
                            </div>

                        </div>
                        {/* Removing to remove warnings */}
                        {/* <a class="carousel-control-prev" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a> */}
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
                            <img class="img-fluid d-none d-sm-block " src="homepage/img/gettyimages-951326930-1579515324.jpg" alt="" />
                        </div>
                    </div>
                </section>

                <section class="container-fluid px-0">
                    <div class="row align-items-center content">
                        <div class="col-md-6 order-2 order-md-1">
                            <img src="homepage/img/FreeVector-Love.jpg" alt="" class="img-fluid " />
                        </div>
                        <div class="col-md-6 text-center order-1 order-md-2">
                            <div class="row justify-content-center">
                                <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                                    <h2>ROMANTIC SONG</h2>
                                    <img src="homepage/img/romantic ic.png" alt="" class="d-none d-xs-inline d-lg-inline " />
                                    <p class="lead">
                                    It will give you feelings and emotions to aspire to, and songs are there for us when we go through difficult times.
                            </p>
                            <B1/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center content">
                        <div class="col-md-6 text-center">
                            <div class="row justify-content-center">
                                <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                                    <h2>RETRO SONG</h2>
                                    <img src="homepage/img/retro ic.png" alt="" class="d-none d-lg-inline" />
                                    <p class="lead">
                                    Music has the potential to change a mood, to shift an atmosphere, and to encourage a different behavior.
                                    Enjoy the unlimited music.</p>
                                    <B2/>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <img src="homepage/img/retro.jpg" alt="" class="img-fluid" />
                        </div>
                    </div>
                    <div class="row align-items-center content">
                        <div class="col-md-6 order-2 order-md-1">
                            <img src="homepage/img/romantic.jpg" alt="" class="img-fluid" />
                        </div>
                        <div class="col-md-6 text-center order-1 order-md-2">
                            <div class="row justify-content-center">
                                <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                                    <h2>ROCK MUSIC</h2>
                                    {/* d-sm-block */}
                                    <img src="homepage/img/rockmusic.png" alt="" class="d-none  d-lg-inline" />
                                    <p class="lead">
                                    Instrumentation includes – male vocals, backing vocals, electric guitars, double bass, drums, piano, harmonica, saxophone and other brass.
                            <B3/>
                            </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

               <section id="footer">
               <footer class="footer">
                    <p class="footer__title"> <img src="homepage/img/music ic.png" class="img-fluid" width="50" height="50" alt="" />
                    Apna-Player</p>

                    <div class="footer__admin">
                        <a href="/">contact</a>
                    </div>
                    <div class="footer__social">
                        <a href="/" target="_blank" class="footer__icon"><i class='fab fa-instagram-square'></i></a>
                        <a href="/" target="_blank" class="footer__icon"><i class='fa fa-envelope-square'></i></a>
                        <a href="/" target="_blank" class="footer__icon"><i class='fa fa-phone'></i></a>
                    </div>
                    <p>&#169; 2020 copyright all right reserved</p>
                </footer>
               </section>

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