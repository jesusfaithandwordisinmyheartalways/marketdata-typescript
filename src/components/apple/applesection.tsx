







import { Link } from "react-router-dom";
import apple from '../images/Apple-stock-logo-.png';
import aLogo from '../images/appleImage.png';
import aLogoTwo from '../images/appleImageTwo.png';
import aLogoThree from '../images/appleImageThree.jpg';
import aLogoFour from '../images/appleImageFour.png';
import aLogoFive from '../images/appleImageFive.png';
import aLogoSix from '../images/appleImageSix.png';
import aLogoSeven from '../images/appleImageSeven.png';
import aLogoEight from '../images/appleImageEight.png';
import aLogoNine from '../images/appleImageNine.png';
import aLogoOwner from '../images/Timothy D. Cook.png';
import logo from '../images/top-product-design-clutch.png';
import './apple.css'



const Apple = () => {




    const Menu = () => {
        let appleHeader = document.getElementById('apple-header-container');
        let navMenu = document.getElementById('nav-menu');
        let navBtn = document.getElementById('nav-menu-btn');
        let appleAni = document.getElementById('apple-animation');
        let appleContent = document.getElementById('apple-content');
        let appleInvest = document.getElementById('apple-invest');
        let appleFooter = document.getElementById('footer-container');


        

        if(appleHeader) {
            appleHeader.style.visibility = 'hidden';
        }

        if(navMenu) {
            navMenu.style.visibility = 'visible'
        }

        if(navBtn) {
            navBtn.style.visibility = 'visible'
        }

        if(appleAni) {
            appleAni.style.visibility = 'hidden';
        }

        if(appleContent) {
            appleContent.style.visibility = 'hidden';
        }

        if(appleInvest) {
            appleInvest.style.visibility = 'hidden';

        }

        if(appleFooter) {
            appleFooter.style.visibility = 'hidden';

        }

      

    }



    const Nav = () => {
        let appleHeader = document.getElementById('apple-header-container');
        let navMenu = document.getElementById('nav-menu');
        let navBtn = document.getElementById('nav-menu-btn');
        let appleAni = document.getElementById('apple-animation');
        let appleContent = document.getElementById('apple-content');
        let appleInvest = document.getElementById('apple-invest');
        let appleFooter = document.getElementById('footer-container');




        if(appleHeader) {
            appleHeader.style.visibility = 'visible';
        }
        if(navBtn) {
            navBtn.style.visibility = 'hidden';
        }


        if(navMenu) {
            navMenu.style.visibility = 'hidden';
        }

        if(appleAni) {
            appleAni.style.visibility = 'visible';
        }


        if(appleContent) {
            appleContent.style.visibility =  'visible';
        }

        if(appleInvest) {
            appleInvest.style.visibility =  'visible';
        }

        if(appleFooter) {
            appleFooter.style.visibility = 'visible';

        }



      
    }



return (
    <>





    {/*--------------------------------------------------NAV CONTAINER--------------------------------------------------------------------------*/}


<nav className='nav-container' id='nav-container'>
            <div className='nav-wrapper'>
                <div className='nav-stock-header'> <div><div><img src={apple}></img></div></div> </div>

                <div onClick={Menu}  className=' span-header' id="span-header"><div><span>&#61;</span></div></div>

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

        <header className="Apple-Header-Container" id="apple-header-container"> 


        <div className="Apple-Header-Wrapper">

            <div><div><img src={apple}></img></div></div>

            </div>




            <div className="Apple-Animation-Container" id="apple-animation">




<div className="Apple-Container">
<div className="Apple-Section">

    <div className="apple-carousel"><div><img src={aLogo}></img></div></div>

    <div className="apple-carousel"><div><img  src={aLogoTwo} ></img></div></div>

    <div className="apple-carousel"><div><img  src={aLogoThree} ></img></div></div>

    <div className="apple-carousel"><div><img  src={aLogoFour}></img></div></div>

    <div className="apple-carousel"><div><img  src={aLogoFive} ></img></div></div>

    <div className="apple-carousel"><div><img  src={aLogoSix} ></img></div></div>


    <div className="apple-carousel"><div><img  src={aLogoSeven} ></img></div></div>

    <div className="apple-carousel"><div><img  src={aLogoEight} ></img></div></div>

    <div className="apple-carousel"><div><img  src={aLogoNine} ></img></div></div>



</div>



</div>




</div>






        </header>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
         {/*--------------------------------------------------APPLE CONTENT --------------------------------------------------------------------------*/}



                <div className="Apple-Content-Container" id="apple-content">

                    <div className="Apple-Content-Wrapper">
                        <div><div><h3>Owner - Timothy Cook</h3></div></div>
                    </div>



                    <div className="Apple-Content-Wrapper-Two">
                        <div><div><img src={aLogoOwner}></img></div></div>

                        <div><div><p>Investing in Apple stock is a strong long-term strategy due to the company's consistent innovation,
                             brand loyalty, and dominant position in the tech industry. Apple has a proven track record of delivering cutting-edge products that redefine markets,
                              from the iPhone to wearables like the Apple Watch. Its ecosystem of products and services, including the App Store, 
                              iCloud, and Apple Music, creates recurring revenue streams and fosters customer loyalty. Moreover, Apple's strong financial performance,
                               characterized by significant cash reserves and consistent dividend payouts, underscores its ability to navigate economic fluctuations 
                               and invest in future growth opportunities.
                             As a leader in technology and innovation, Apple is well-positioned to continue delivering value to investors over the long term.</p></div></div>



                    </div>




                </div>
                
                
                
                
                
                
                
                
                
                
                
                
                {/*--------------------------------------------------APPLE CONTENT TWO --------------------------------------------------------------------------*/}


                  <div className="Apple-Container-Invest" id="apple-invest">

                            <div className="Apple-Invest-Wrapper">
                            <div><div><h3>INVEST IN APPLE</h3></div></div>
                            </div>




                   <div className="Apple-Wrapper-Invest-Two" id="apple-wrapper-invest-two">
                      <div><div><h3>Strong Brand Loyalty</h3></div></div>
                      <div><div><p>Apple has one of the most loyal customer bases in the world.
                         The seamless integration of its hardware, software, and services creates a strong ecosystem that
                          keeps customers returning, driving long-term growth and revenue stability.</p></div></div>



                   </div>


                   <div className="Apple-Wrapper-Invest-Three" id="apple-wrapper-invest-three">
                      <div><div><h3>Robust Financial Health:</h3></div></div>
                      <div><div><p>Apple has a strong balance sheet with substantial cash reserves.
                         This financial strength enables the company to invest in research and development, 
                         acquire new technologies, and return capital to shareholders through dividends and stock buybacks.</p></div></div>


                   </div>



                   <div className="Apple-Wrapper-Invest-Four" id="apple-wrapper-invest-four">
                      <div><div><h3>Expanding Services Revenue</h3></div></div>
                      <div><div><p>Apple has successfully expanded its services segment, which includes the App Store, iCloud, Apple Music, and Apple Pay.</p></div></div>


                   </div>



                   <div className="Apple-Wrapper-Invest-Five" id="apple-wrapper-invest-five">
                      <div><div><h3>Global Expansion</h3></div></div>
                      <div><div><p>Amazon is increasingly expanding its presence in 
                        international markets, which presents enormous growth potential 
                        as it taps into emerging markets with large populations and growing internet penetration.</p></div></div>


                   </div>



                   <div className="Apple-Wrapper-Invest-Six" id="apple-wrapper-invest-six">
                      <div><div><h3>Global Market Reach</h3></div></div>
                      <div><div><p>Apple’s global presence, particularly its expansion in emerging markets 
                        like China and India, provides significant growth opportunities. 
                        The company continues to tap into these markets, increasing 
                        its customer base and revenue potential</p></div></div>


                   </div>





                   <div className="Apple-Wrapper-Invest-Seven" id="apple-wrapper-invest-seven">
                      <div><div><h3>Sustainable Competitive Advantage:</h3></div></div>
                      <div><div><p>Apple's focus on quality, design, and user experience creates 
                        a sustainable competitive advantage that competitors struggle to match. 
                        This advantage, combined with its innovation and ecosystem, positions Apple 
                        for continued success in the long term.</p></div></div>


                   </div>




                  </div>











           
           
           
           
            {/*-----------------------------------------FOOTER-------------------------------------------------------*/}
      <footer className='apple-footer-container' id="footer-container">

<div className='apple-footer-wrapper'>

<div><div><h3>Let's talk about Apple</h3></div></div>

</div>


<div className='apple-footer-wrapper-two'>

<div className='apple-footer-wrapper-two-email'><div><p>stockshortcutprivate@aol.com</p></div></div>

</div>

<div className='apple-footer-wrapper-three'>
<div><div><p>CALIFORNIA</p></div></div>

</div>

<div className='apple-footer-wrapper-four'>
<div><div><h3>3030 Freedom Drive, San Francisco</h3></div></div>

</div>

<div className='apple-footer-wrapper-five'>
<div><div><span>&copy; 2024 StockShortcut</span></div></div>
</div>


<div className='apple-footer-wrapper-six'>
<div><div><img src={logo}></img></div></div>


</div>



</footer>





    </>
)
}


export default Apple






