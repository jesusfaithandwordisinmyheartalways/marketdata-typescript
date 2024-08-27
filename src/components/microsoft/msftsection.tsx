





import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import './microsoft.css';
import mLogo from '../images/Microsoft_logo.png'
import mpicture from '../images/microsoftimage.png';
import mpicturetwo from '../images/microsoftimagetwo.jpg';
import mpicturethree from '../images/microsoftimagethree.png';
import mpicturefour from '../images/microsoftimagefour.png';
import mpicturefive from '../images/microsoftimagefive.jpg';
import mpicturesix from '../images/microsoftimagesix.png';
import mpictureseven from '../images/microsoftimageseven.png';
import mpictureeight from '../images/microsoftimageeight.webp';
import mpicturenine from '../images/microsoftimagnine.png';
import microsoftCeo from '../images/microsoftCeoo.jpg';


const Microsoft = () => {



    const Menu = () => {
        let microsoftHeader = document.getElementById('microsoft-header-container');
        let spanHeader = document.getElementById('span-header');
        let navMenu = document.getElementById('nav-menu');
        let navBtn = document.getElementById('nav-menu-btn');
        let microsoftAni = document.getElementById('microsoft-animation');
        let microsoftContent = document.getElementById('microsoft-content-container');
        let microsoftInvest = document.getElementById('microsoft-container-invest');
        let footer = document.getElementById('footer-container');




        if(microsoftHeader) {
            microsoftHeader.style.visibility = 'hidden';
        }

        if(spanHeader) {
            spanHeader.style.visibility = 'hidden';

        }

        if(navMenu) {
            navMenu.style.visibility = 'visible'
        }

        if(navBtn) {
            navBtn.style.visibility = 'visible'
        }

        if(microsoftAni) {
            microsoftAni.style.visibility = 'hidden'
        }


        if(microsoftContent) {
            microsoftContent.style.visibility = 'hidden'
        }

        if(microsoftInvest) {
            microsoftInvest.style.visibility = 'hidden'
        }

        if(footer) {
            footer.style.visibility = 'hidden';
        }









    }



    const Nav = () => {
        let microsoftHeader = document.getElementById('microsoft-header-container');
        let spanHeader = document.getElementById('span-header');
        let navMenu = document.getElementById('nav-menu');
        let navBtn = document.getElementById('nav-menu-btn');
        let microsoftAni = document.getElementById('microsoft-animation');
        let microsoftContent = document.getElementById('microsoft-content-container');
        let microsoftInvest = document.getElementById('microsoft-container-invest');
        let footer = document.getElementById('footer-container');



        if(microsoftHeader) {
            microsoftHeader.style.visibility = 'visible';
        }

        if(spanHeader) {
            spanHeader.style.visibility = 'visible';

        }


        if(navMenu) {
            navMenu.style.visibility = 'hidden';
        }

        if(navBtn) {
            navBtn.style.visibility = 'hidden';
        }


        if(microsoftAni) {
            microsoftAni.style.visibility = 'visible';
        }

        if(microsoftContent) {
            microsoftContent.style.visibility = 'visible';
        }


        if(microsoftInvest) {
            microsoftInvest.style.visibility = 'visible';
        }

        if(footer) {
            footer.style.visibility = 'visible';
        }






      
    }


return (
    <>




       {/*--------------------------------------------------NAV CONTAINER--------------------------------------------------------------------------*/}


  <nav className='microsoft-nav-container' id='nav-container'>
            <div className='microsoft-nav-wrapper'>
                <div className='microsoft-nav-stock-header'> <div><div><img src={mLogo}></img></div></div> </div>

                <div onClick={Menu}  className='microsoft-span-header' id="span-header"><div><span>&#61;</span></div></div>

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

<div onClick={Nav}   className='nav-menu-btn' id='nav-menu-btn'><div><button type='button'>X</button></div></div>


</div>

</div>








        {/*--------------------------------------------------HEADER --------------------------------------------------------------------------*/}



        <header className="Microsoft-Header-Container" id="microsoft-header-container">

        <div className="Microsoft-Header-Wrapper">

                <div><div><img src={mLogo}></img></div></div>

            </div>




            <div className="Microsoft-Animation-Container" id="microsoft-animation">




<div className="Microsoft-Container">
<div className="Microsoft-Section">

    <div className="microsoft-carousel"><div><img src={mpicture}></img></div></div>

    <div className="microsoft-carousel"><div><img  src={mpicturetwo} ></img></div></div>

    <div className="microsoft-carousel"><div><img  src={mpicturethree} ></img></div></div>

    <div className="microsoft-carousel"><div><img  src={mpicturefour}></img></div></div>

    <div className="microsoft-carousel"><div><img  src={mpicturefive} ></img></div></div>

    <div className="microsoft-carousel"><div><img  src={mpicturesix} ></img></div></div>


    <div className="microsoft-carousel"><div><img  src={mpictureseven} ></img></div></div>

    <div className="microsoft-carousel"><div><img  src={mpictureeight} ></img></div></div>

    <div className="microsoft-carousel"><div><img  src={mpicturenine} ></img></div></div>



</div>



</div>




</div>






        </header>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
         {/*--------------------------------------------------MICROSOFT CONTENT --------------------------------------------------------------------------*/}




            <div className="Microsoft-Content-Container" id="microsoft-content-container">


            <div className="Microsoft-Content-Wrapper">
                        <div><div><h3>Owner - Satya Nadella</h3></div></div>
                    </div>


                    <div className="Microsoft-Content-Wrapper-Two">

        <div><div><img src={microsoftCeo}></img></div></div>

         <div><div><p>Investing in Microsoft stock offers a compelling opportunity for long-term success due to the company's 
            diversified business model, strong financial performance, and leadership in key growth areas like cloud computing, software, 
            and artificial intelligence. Microsoft's Azure cloud platform has become a significant revenue driver, benefiting from the global shift towards
             digital transformation and cloud adoption. Additionally, the company's consistent innovation in products like Windows, Office, and gaming through
              Xbox, as well as its strategic acquisitions (e.g., LinkedIn and GitHub), further solidify its market dominance. Microsoft's strong balance sheet, 
              robust cash flow, and commitment to returning value to shareholders through dividends and 
            stock buybacks make it a reliable choice for long-term investors looking to capitalize on the continued growth in technology and digital services.</p></div></div>


</div>



                            <div className="Microsoft-Content-Wrapper-Three">

                                <div><div><h3>Stock Performance-Previous 5 years</h3></div></div>

                                <div><div><p>Investing in Microsoft stock over the past five years has proven to be a strong decision for long-term investors,
                                     as the company has delivered impressive returns driven by its strategic focus on high-growth areas like cloud computing, AI, and enterprise software
                                     . Microsoft's stock has consistently outperformed the broader market, largely due to the rapid expansion of its Azure cloud platform, which has become
                                      a significant revenue driver. Additionally, the company's continued innovation in products like Office 365 and its success in gaming through the Xbox division 
                                      have further bolstered its financial performance. Despite market fluctuations, Microsoft's ability to generate strong cash flow,
                                     maintain a healthy balance sheet, and return capital to shareholders through dividends and buybacks has solidified its reputation as a reliable long-term investment.</p></div></div>



                            </div>



            </div>
            
            
            
            
            
            
            
            
            
            
            {/*--------------------------------------------------INVEST MICROSOFT CONTENT --------------------------------------------------------------------------*/}



                <div className="Microsoft-Container-Invest" id="microsoft-container-invest">




                <div className="Microsoft-Wrapper-Invest">

                <div><div><h3>INVEST IN MICROSOFT</h3></div></div>

                    </div>





                    <div className="Microsoft-Wrapper-Invest-Two" id="microsoft-wrapper-invest-two">
                      <div><div><h3>Diversified Revenue Streams</h3></div></div>
                      <div><div><p>Microsoft has a well-diversified business model, with revenue coming from various segments including cloud computing, 
                        software (Windows, Office), gaming (Xbox), and professional networking (LinkedIn). 
                        This diversification reduces risk and ensures stability in earnings.</p></div></div>



                   </div>


                   <div className="Microsoft-Wrapper-Invest-Three" id="microsoft-wrapper-invest-three">
                      <div><div><h3>Strong Financial Health</h3></div></div>
                      <div><div><p>Microsoft consistently demonstrates robust financial performance, characterized by strong revenue growth,
                         high profit margins, and substantial cash reserves. 
                        This financial strength allows Microsoft to invest in innovation, make strategic acquisitions,
                         and return value to shareholders through dividends and stock buybacks..</p></div></div>


                   </div>



                   <div className="Microsoft-Wrapper-Invest-Four" id="microsoft-wrapper-invest-four">
                      <div><div><h3>Innovation and Diversification</h3></div></div>
                      <div><div><p>Amazon is known for its relentless innovation, expanding into areas such as artificial intelligence,
                         digital advertising, streaming, and healthcare. 
                         This diversification reduces risk and opens up new revenue streams</p></div></div>


                   </div>



                   <div className="Microsoft-Wrapper-Invest-Five" id="microsoft-wrapper-invest-five">
                      <div><div><h3>Continuous Innovation</h3></div></div>
                      <div><div><p>Microsoft is at the forefront of technological innovation, from AI
                         and machine learning to quantum computing and cybersecurity. 
                         Its ongoing investment in R&D ensures that it remains a leader in the technology industry,
                          driving future growth..</p></div></div>


                   </div>



                   <div className="Microsoft-Wrapper-Invest-Six" id="microsoft-wrapper-invest-six">
                      <div><div><h3>Global Reach & Market Penetration</h3></div></div>
                      <div><div><p>Microsoft's products and services are used by billions of people and businesses worldwide,
                         giving it a vast and stable customer base. The company's global reach positions 
                         it well to capitalize on growth opportunities in both developed and emerging markets.</p></div></div>


                   </div>





                   <div className="Microsoft-Wrapper-Invest-Seven" id="microsoft-wrapper-invest-seven">
                      <div><div><h3>Commitment to Shareholder Value</h3></div></div>
                      <div><div><p>Microsoft has a strong track record of returning value to shareholders through consistent 
                        dividend payments and share repurchases. This commitment, combined with the
                         company's growth potential, makes Microsoft a reliable choice for long-term investors.</p></div></div>


                   </div>






                </div>










            {/*-----------------------------------------FOOTER-------------------------------------------------------*/}
      <footer className='microsoft-footer-container' id="footer-container">

<div className='microsoft-footer-wrapper'>

<div><div><h3>Let's talk about Microsoft</h3></div></div>

</div>


<div className='microsoft-footer-wrapper-two'>

<div className='microsoft-footer-wrapper-two-email'><div><p>stockshortcutprivate@aol.com</p></div></div>

</div>

<div className='microsoft-footer-wrapper-three'>
<div><div><p>CALIFORNIA</p></div></div>

</div>

<div className='microsoft-footer-wrapper-four'>
<div><div><h3>3030 Freedom Drive, San Francisco</h3></div></div>

</div>

<div className='microsoft-footer-wrapper-five'>
<div><div><span>&copy; 2024 StockShortcut</span></div></div>
</div>





</footer>







    </>
)
}

export default Microsoft
