




import './meta.css';
import { Link } from "react-router-dom";

import meta from '../images/metalogo.png'
import metaimage from '../images/metaimage.png';
import metaimageTwo from '../images/metaimageTwo.png';
import metaimageThree from '../images/metaimageThree.png';
import metaimageFour from '../images/metaimageFour.png';
import metaimageFive from '../images/metaimageFive.png';
import metaimageSix from '../images/metaimageSix.png';
import metaimageSeven from '../images/metaimageSeven.webp';
import metaimageEight from '../images/metaimageEight.png';
import metaimageNine from '../images/metaimageNine.webp';
import logo from '../images/top-product-design-clutch.png';
import metaimageCEO from '../images/FacebookCEO.webp';


const Meta = () => {



    const Menu = () => {
        let metaHeader = document.getElementById('meta-header-container');
        let navMenu = document.getElementById('nav-menu');
        let navBtn = document.getElementById('nav-menu-btn');
        let metaAni = document.getElementById('meta-animation');
        let metaContent = document.getElementById('meta-content');
        let metaContentInvest = document.getElementById('meta-container-invest');
        let metaFooter = document.getElementById('footer-container');


        if(metaHeader) {
            metaHeader.style.visibility =  'hidden';
        }

        if(navMenu) {
            navMenu.style.visibility = 'visible'
        }

        if(navBtn) {
            navBtn.style.visibility = 'visible'
        }
        if(metaAni) {
            metaAni.style.visibility =  'hidden';

        }

        if(metaContent) {
            metaContent.style.visibility =  'hidden';

        }

        if(metaContentInvest) {
            metaContentInvest.style.visibility =  'hidden';

        }

        if(metaFooter) {
            metaFooter.style.visibility =  'hidden';

        }

      
    }




    const Nav = () => {
        let metaHeader = document.getElementById('meta-header-container');
        let navMenu = document.getElementById('nav-menu');
        let navBtn = document.getElementById('nav-menu-btn');
        let metaAni = document.getElementById('meta-animation');
        let metaContent = document.getElementById('meta-content');
        let metaContentInvest = document.getElementById('meta-container-invest');
        let metaFooter = document.getElementById('footer-container');





        if(metaHeader) {
            metaHeader.style.visibility =  'visible';
        }

        if(navBtn) {
            navBtn.style.visibility = 'hidden';
        }


        if(navMenu) {
            navMenu.style.visibility = 'hidden';
        }

        if(metaAni) {
            metaAni.style.visibility =  'visible';

        }

        if(metaContent) {
            metaContent.style.visibility =  'visible';

        }

        if(metaContentInvest) {
            metaContentInvest.style.visibility = 'visible';

        }


        if(metaFooter) {
            metaFooter.style.visibility =  'visible';

        }



      
    }


return (

    <>



  {/*--------------------------------------------------NAV CONTAINER--------------------------------------------------------------------------*/}


  <nav className='meta-nav-container' id='nav-container'>
            <div className='meta-nav-wrapper'>
                <div className='meta-nav-stock-header'> <div><div><img src={meta}></img></div></div> </div>

                <div onClick={Menu} className='meta-span-header' id="span-header"><div><span>&#61;</span></div></div>

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

<div  onClick={Nav} className='nav-menu-btn' id='nav-menu-btn'><div><button type='button'>X</button></div></div>


</div>

</div>











{/*--------------------------------------------------HEADER --------------------------------------------------------------------------*/}
        
        <header className="Meta-Header-Container" id="meta-header-container">

        <div className="Meta-Header-Wrapper">

            <div><div><img src={meta}></img></div></div>

        </div>



        <div className="Meta-Animation-Container" id="meta-animation">




<div className="Meta-Container">
<div className="Meta-Section">

    <div className="meta-carousel"><div><img src={metaimage}></img></div></div>

    <div className="meta-carousel"><div><img  src={metaimageTwo} ></img></div></div>

    <div className="meta-carousel"><div><img  src={metaimageThree} ></img></div></div>

    <div className="meta-carousel"><div><img  src={metaimageFour}></img></div></div>

    <div className="meta-carousel"><div><img  src={metaimageFive} ></img></div></div>

    <div className="meta-carousel"><div><img  src={metaimageSix} ></img></div></div>


    <div className="meta-carousel"><div><img  src={metaimageSeven} ></img></div></div>

    <div className="meta-carousel"><div><img  src={metaimageEight} ></img></div></div>

    <div className="meta-carousel"><div><img  src={metaimageNine} ></img></div></div>



</div>



</div>




</div>






        </header>











                      {/*--------------------------------------------------META CONTENT --------------------------------------------------------------------------*/}



            <div  className="Meta-Content-Container" id="meta-content">


            <div className="Meta-Content-Wrapper">
                        <div><div><h3>Owner - Mark Zuckerberg</h3></div></div>
                    </div>




            <div className="Meta-Content-Wrapper-Two">

                <div><div><img src={metaimageCEO}></img></div></div>
                    
                    <div><div><p>Investing in Apple stock is a strategic choice for long-term success due to the company's consistent track record of innovation,
                         strong financial performance, and expansive ecosystem. Apple has demonstrated an unparalleled ability to develop groundbreaking products
                          and services that foster deep customer loyalty and recurring revenue streams, such as the iPhone, Mac, Apple Watch, and services like Apple
                           Music and iCloud. The company's robust financial health, characterized by substantial cash reserves and steady revenue growth, enables continued
                            investment in research and development, ensuring its competitiveness in the ever-evolving tech industry. Additionally, Apple's global presence and
                             penetration into emerging markets provide significant opportunities for sustained growth. The company's commitment to privacy, quality,
                         and seamless user experience further solidifies its position as a leader in technology, making Apple stock a compelling option for 
                         investors seeking reliable, long-term returns</p></div></div>


                    </div>






            </div>
            
            
            
            
            
            
            
            
            
            
            
            
            {/*--------------------------------------------------META CONTENT TWO--------------------------------------------------------------------------*/}


                <div className="Meta-Container-Invest" id="meta-container-invest">


                <div className="Meta-Invest-Wrapper">
                            <div><div><h3>INVEST IN META</h3></div></div>
                            </div>


                        
                    <div className="Meta-Wrapper-Invest-Two">
                      
                      <div className="meta-crop">

<ul className="meta-card-list">
  <li><div className="meta-card"><a href=""><span className="model-name"> Leadership in Social Media</span>
  <span>Meta owns some of the world’s most popular social media platforms, including Facebook, Instagram, and WhatsApp. 
    These platforms have billions of active users, making Meta a dominant 
    force in digital advertising and social networking. </span></a></div></li>
      
      <li><div className="meta-card"><a href=""><span className="model-name">Expansion into the Metaverse</span>
       <span>Meta is heavily investing in the development of the metaverse, a virtual reality space where users can interact in a 3D environment. 
        This ambitious project has the potential to create new revenue streams and establish Meta as a leader in the next generation of digital experiences.</span></a></div></li>


        <li><div className="meta-card"><a href=""><span className="model-name">Strong Advertising Business</span>
          <span>Meta’s advertising business remains robust, with targeted ads on its platforms driving significant revenue. 
            The company’s advanced data analytics capabilities and large user base make it an attractive platform for advertisers.</span></a></div></li>

              <li><div className="meta-card"><a href=""><span className="model-name">Innovative Technology Investments</span>
          <span>Meta is at the forefront of developing cutting-edge technologies such as virtual reality (VR), augmented reality (AR), and artificial intelligence 
            (AI). These technologies are expected to play a significant role in the future,
             potentially opening up new markets and opportunities.</span></a></div></li>

              <li><div className="meta-card"><a href=""><span className="model-name">Global Reach and User Growth</span>
          <span>Meta’s platforms are used globally, with a strong
             presence in both developed and emerging markets. The company’s continuous growth 
             in user numbers provides a solid foundation for sustained revenue growth.</span></a></div></li>


              <li><div className="meta-card"><a href=""><span className="model-name">Financial Resilience and Profitability</span>
          <span> Despite challenges, Meta has consistently demonstrated financial resilience, with strong cash flow and profitability.
             This financial stability allows Meta to invest in new growth areas, such as the metaverse and AI,
              while continuing to return value to shareholders.  </span></a></div></li>
               
               
               </ul>


                      <div className="meta-last-circle"></div>
                      <div className="meta-second-circle"></div>
                      </div>
                      <div className="meta-mask"></div>
                      <div className="meta-center-circle"></div>
                  <div>

                </div>
                
                
                 </div>





                 <div className="Meta-Wrapper-Invest-Three">

            <div><div><h3>Stock Performance- Previous 5 Years </h3></div></div>
            <div><div><p>Investing in Meta (formerly Facebook) stock over the past five years has offered
                 a mix of challenges and significant opportunities, reflecting the company's adaptability and long-term potential.
                  Despite facing regulatory scrutiny, privacy concerns, and a shift in user behavior, Meta has consistently demonstrated its
                   ability to generate strong revenue and profit growth, primarily driven by its dominance in digital advertising across its platforms like Facebook,
                    Instagram, and WhatsApp. While the stock experienced volatility, especially during periods of increased regulatory pressure 
                    and market-wide tech sell-offs, Meta's forward-thinking investments in the metaverse and its ongoing commitment to innovation 
                    have positioned it as a leader in the next wave of digital transformation. This resilience, combined with its strategic pivot towards 
                the metaverse and VR/AR technologies, has allowed Meta to recover from dips and continue delivering long-term value to investors .</p></div></div>



</div>





                </div>







         
         
         
          {/*-----------------------------------------FOOTER-------------------------------------------------------*/}
      <footer className='meta-footer-container' id="footer-container">

<div className='meta-footer-wrapper'>

<div><div><h3>Let's talk about Meta</h3></div></div>

</div>


<div className='meta-footer-wrapper-two'>

<div className='meta-footer-wrapper-two-email'><div><p>stockshortcutprivate@aol.com</p></div></div>

</div>

<div className='meta-footer-wrapper-three'>
<div><div><p>CALIFORNIA</p></div></div>

</div>

<div className='meta-footer-wrapper-four'>
<div><div><h3>3030 Freedom Drive, San Francisco</h3></div></div>

</div>

<div className='meta-footer-wrapper-five'>
<div><div><span>&copy; 2024 StockShortcut</span></div></div>
</div>






</footer>








    </>
)
}

export default Meta




