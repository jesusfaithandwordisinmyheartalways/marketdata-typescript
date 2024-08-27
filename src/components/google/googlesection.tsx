







import './google.css';
import { Link } from "react-router-dom";
import gLogo from '../images/google-white-logo-1.png'
import gLogoTwo from '../images/googleImageTwo.png';
import gLogoThree from '../images/googleImageThree.png';
import gLogoFour from '../images/googleImageFour.png';
import gLogoFive from '../images/googleImageFive.png';
import gLogoSix from '../images/googleImageSix.png';
import gLogoSeven from '../images/googleImageSeven.png';
import gLogoEight from '../images/googleImageEight.png';
import gLogoNine from '../images/googleImageNine.png';










const Google = () => {

    const Menu = () => {
        let googleHeader = document.getElementById('google-header-container');
        let googleContent = document.getElementById('google-content-container');
        let navMenu = document.getElementById('nav-menu');
        let googleAni = document.getElementById('google-animation');
        let navBtn = document.getElementById('nav-menu-btn');
        let spanBtn = document.getElementById('span-header');
        let googleMain = document.getElementById('google-main-container');
        let footer = document.getElementById('footer-container');



        if(googleHeader) {
            googleHeader.style.visibility = 'hidden'
        }
        if(googleContent) {
            googleContent.style.visibility = 'hidden'
        }
        if(navMenu) {
            navMenu.style.visibility = 'visible'
        }
        if(googleAni) {
            googleAni.style.visibility = 'hidden'
        }
        if(navBtn) {
            navBtn.style.visibility = 'visible'
        }

        if(spanBtn) {
            spanBtn.style.visibility = 'hidden'
        }

        if(googleMain) {
            googleMain.style.visibility = 'hidden'
        }

        if(footer) {
            footer.style.visibility = 'hidden'

        }






    }


    const Nav = () => {
        let googleHeader = document.getElementById('google-header-container');
        let googleContent = document.getElementById('google-content-container');
        let navMenu = document.getElementById('nav-menu');
        let googleAni = document.getElementById('google-animation');
        let navBtn = document.getElementById('nav-menu-btn');
        let spanBtn = document.getElementById('span-header');
        let googleMain = document.getElementById('google-main-container');
        let footer = document.getElementById('footer-container');






        if(googleHeader) {
            googleHeader.style.visibility = 'visible'
        }
        if(googleContent) {
            googleContent.style.visibility = 'visible'
        }
        if(navMenu) {
            navMenu.style.visibility = 'hidden'
        }

        if(googleAni) {
            googleAni.style.visibility = 'visible';
        }

        if(navBtn) {
            navBtn.style.visibility = 'hidden'
        }

        if(spanBtn) {
            spanBtn.style.visibility = 'visible';
        }


        if(googleMain) {
            googleMain.style.visibility = 'visible';
        }


        if(footer) {
            footer.style.visibility = 'visible';

        }
        
        
    }


return (
    <>





{/*--------------------------------------------------NAV CONTAINER--------------------------------------------------------------------------*/}


<nav className='google-nav-container' id='nav-container'>
        <div className='google-nav-wrapper'>
            <div className='google-nav-stock-header'> <div><div><img src={gLogo}></img></div></div> </div>

            <div onClick={Menu} className=' span-header' id="span-header"><div><span>&#61;</span></div></div>

    </div>

</nav>








{/*--------------------------------------------------NAV MENU--------------------------------------------------------------------------*/}





<div className='nav-menu-container' id='nav-menu'>

<div className='nav-menu'>

<div className='nav-menu-content-wrapper'>
<Link to="/" className='nav-links'><div><button>Home</button></div></Link>
<Link to="/tesla" className='nav-links'><div><button>Tesla</button></div></Link>
<Link to="/amazon" className='nav-links'><div><button>Amazon</button></div></Link>
<Link to="/google" className='nav-links'><div><button>Google</button></div></Link>
<Link to="/apple" className='nav-links'><div><button>Apple</button></div></Link>
<Link to="/meta" className='nav-links'><div><button>Meta</button></div></Link>
<Link to="/microsoft" className='nav-links'><div><button>Microsoft</button></div></Link>



</div>

<div onClick={Nav} className='nav-menu-btn' id='nav-menu-btn'><div><button type='button'>X</button></div></div>


</div>

</div>










{/*--------------------------------------------------HEADER --------------------------------------------------------------------------*/}

            


        <header className="Google-Header-Container" id="google-header-container">


        <div className="Google-Header-Wrapper">

            <div><div><img src={gLogo}></img></div></div>

            </div>


            <div className="Google-Animation-Container" id="google-animation">




<div className="Google-Container">
<div className="Google-Section">

<div className="google-carousel"><div><img src={gLogo}></img></div></div>

<div className="google-carousel"><div><img  src={gLogoTwo} ></img></div></div>

<div className="google-carousel"><div><img  src={gLogoThree} ></img></div></div>

<div className="google-carousel"><div><img  src={gLogoFour}></img></div></div>

<div className="google-carousel"><div><img  src={gLogoFive} ></img></div></div>

<div className="google-carousel"><div><img  src={gLogoSix} ></img></div></div>


<div className="google-carousel"><div><img  src={gLogoSeven} ></img></div></div>

<div className="google-carousel"><div><img  src={gLogoEight} ></img></div></div>

<div className="google-carousel"><div><img  src={gLogoNine} ></img></div></div>



</div>



</div>




</div>



        </header>
        
        
        
        
        
        
        


        
        
        
        {/*--------------------------------------------------GOOGLE CONTENT --------------------------------------------------------------------------*/}


            <div className="Google-Content-Container" id="google-content-container">

                <div className="Google-Content-Wrapper">
                      <div><div><h3>Owner-Sundar Pichai</h3></div></div>

                </div>



                <div className="Google-Content-Wrapper-Two">

                        <div><div><img src={gLogoFour}></img></div></div>

                        <div><div><p>Investing in Google (Alphabet) stock offers significant long-term potential due to the company's
                             dominance in digital advertising, its leadership in search and data analytics, and its strategic investments 
                             in cutting-edge technologies like artificial intelligence, cloud computing, and autonomous vehicles. 
                             Google's core advertising business continues to generate substantial revenue, driven by its unparalleled 
                             reach and data-driven advertising solutions. Additionally, Google Cloud is rapidly growing, contributing 
                             to the company's diversification and future revenue streams. Alphabet’s commitment to innovation, coupled with
                              its strong financial performance and global presence, makes it a compelling investment for those seeking long-term growth.
                             The company’s ability to adapt to changing technologies and consumer behaviors positions it well to continue thriving in the evolving digital landscape.</p></div></div>

                </div>



            </div>
            
            
            
            
            
            
            
            
            
            {/*--------------------------------------------------GOOGLE CONTENT TWO --------------------------------------------------------------------------*/}


            <div className="Google-Main-Container" id="google-main-container" >


                <div className="Google-Main-Wrapper">

                <div><div><h3>WANT TO INVEST IN GOOGLE</h3></div></div>


                </div>



                    <div className="Google-Wrapper-Invest">
                        <div><div><img src={gLogo}></img></div></div>
                    </div>



                <div className="Google-Wrapper-Invest-Two">
                  
                <div className="google-crop">

<ul className="google-card-list">
<li><div className="google-card"><a href=""><span className="model-name"> Dominance in Digital Advertising</span>
<span>Google remains the leader in global digital advertising,
 commanding a significant market share with its powerful search engine and YouTube platform.
  This dominance ensures a steady and substantial revenue stream. </span></a></div></li>

<li><div className="google-card"><a href=""><span className="model-name">Expanding Cloud Business</span>
 <span>Google Cloud is rapidly growing and becoming a key player in the cloud computing market.
 As more businesses shift to the cloud, Google Cloud's expansion will contribute significantly to Alphabet's future revenue growth.</span></a></div></li>


  <li><div className="google-card"><a href=""><span className="model-name">Innovation in AI and Technology</span>
    <span>Alphabet is at the forefront of artificial intelligence research and development,
         which has applications across its product lines. </span></a></div></li>

        <li><div className="google-card"><a href=""><span className="model-name">Strong Financial Performance</span>
    <span>Alphabet consistently delivers strong financial results with impressive revenue growth,
         high profit margins, and a robust balance sheet.. </span></a></div></li>

        <li><div className="google-card"><a href=""><span className="model-name">Diversification of Revenue Streamse</span>
    <span>Beyond advertising, Alphabet has diversified its business with ventures like Waymo (autonomous vehicles),
         Verily (life sciences), and Google Cloud.</span></a></div></li>


        <li><div className="google-card"><a href=""><span className="model-name">Global Reach and Influence</span>
    <span> Google’s products and services are used by billions of people worldwide, giving 
        it unparalleled reach and influence.  </span></a></div></li>
         
         
         </ul>


                <div className="google-last-circle"></div>
                <div className="google-second-circle"></div>
                </div>
                <div className="google-mask"></div>
                <div className="google-center-circle"></div>
            <div>

          </div>
          
          
           </div>




                <div className="Group-Wrapper-Invest-Three">

                    <div><div><h3>Stock Performance- Previous 5 Years </h3></div></div>
                    <div><div><p>Investing in Google (Alphabet) stock over the past five years has proven to be a wise decision
                         for long-term investors, reflecting the company's consistent growth and market resilience.
                          Despite facing regulatory scrutiny and market volatility, Google's stock has delivered strong returns
                          , driven by its core digital advertising business and the rapid expansion of Google Cloud. 
                          The company's commitment to innovation, particularly in artificial intelligence and autonomous technologies, 
                          has further strengthened its market position. Alphabet's ability to maintain strong financial performance,
                           diversify its revenue streams, and expand into new markets has made it a standout 
                        performer in the tech industry, demonstrating its capacity to deliver sustained value to shareholders over the long term.</p></div></div>



                </div>



            </div>










                 
  {/*-----------------------------------------FOOTER-------------------------------------------------------*/}
  <footer className='google-footer-container' id="footer-container">

<div className='google-footer-wrapper'>

<div><div><h3>Let's talk about Google</h3></div></div>

</div>


<div className='google-footer-wrapper-two'>

<div className='footer-wrapper-two-email'><div><p>stockshortcutprivate@aol.com</p></div></div>

</div>

<div className='google-footer-wrapper-three'>
<div><div><p>CALIFORNIA</p></div></div>

</div>

<div className='google-footer-wrapper-four'>
<div><div><h3>3030 Freedom Drive, San Francisco</h3></div></div>

</div>

<div className='google-footer-wrapper-five'>
<div><div><span>&copy; 2024 StockShortcut</span></div></div>
</div>





</footer>



    </>
)
}

export default Google




