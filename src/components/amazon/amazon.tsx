







import { Link } from "react-router-dom";
import './amazon.css'



import amazonCeo from '../images/Andy-Jassy.jpg';
import amazonLogo from '../images/-amazon-com.png'
import amazonImage from '../images/amazonimage.png';
import amazonImageTwo from '../images/amazonimagetwo.png';
import amazonImageThree from '../images/amazonimagethree.png';
import amazonImageFour from '../images/amazonimagefour.png';
import amazonImageFive from '../images/amazonimagefive.png'
import amazonImageSix from '../images/amazonrszglobal_amazn-1.png';
import amazonImageSeven from '../images/Jeff-Bezos.png';
import amazonImageEight from '../images/amazonsmile.png';
import amazonImageNine from '../images/amazonblacklogo.png';

import logo from '../images/top-product-design-clutch.png';
import aLogo from '../images/-amazon-com.png';











const Amazon = () => {


    const Menu = () => {
        let navMenu = document.getElementById('nav-menu');
        let spanHeader = document.getElementById('span-header');
        let xButton = document.getElementById('nav-menu-btn');
        let header = document.getElementById('amazon-header-container');
        let headerAni = document.getElementById('header-animation');
        let amazonC = document.getElementById('amazon-content-container');
        let amazonInvest = document.getElementById('amazon-container-invest');
        let footer = document.getElementById('footer-container');

        
        if(navMenu) {
            navMenu.style.visibility = 'visible';
        }


         if(spanHeader) {
            spanHeader.style.visibility = 'hidden';
            }

        if(xButton) {
        xButton.style.visibility = 'visible';
          }

          if(header) {
            header.style.visibility = 'hidden';
          }

          if(headerAni) {
            headerAni.style.visibility = 'hidden';

          }

          if(amazonC) {
            amazonC.style.visibility = 'hidden';

          }


          if(amazonInvest) {
            amazonInvest.style.visibility = 'hidden';

          }

          if(footer) {
            footer.style.visibility = 'hidden';
        }


    }


    const Nav = () => {
        let nav = document.getElementById('nav-menu');
        let spanHeader = document.getElementById('span-header');
        let xButton = document.getElementById('nav-menu-btn');
        let header = document.getElementById('amazon-header-container');
        let headerAni = document.getElementById('header-animation');
        let amazonC = document.getElementById('amazon-content-container');
        let amazonInvest = document.getElementById('amazon-container-invest');
        let footer = document.getElementById('footer-container');




        if(nav) {
            nav.style.visibility = 'hidden';
            document.body.style.overflowY = 'scroll';
          }


        if(spanHeader) {
         spanHeader.style.visibility = 'visible'
    }


      if(xButton) {
        xButton.style.visibility = 'hidden'
    }

    if(header) {
        header.style.visibility = 'visible';
      }

      if(headerAni) {
        headerAni.style.visibility = 'visible';

      }

      if(amazonC) {
        amazonC.style.visibility = 'visible';

      }

      if(amazonInvest) {
        amazonInvest.style.visibility = 'visible';

      }
      if(footer) {
        footer.style.visibility = 'visible';
    }




    }



return (
<>


{/*--------------------------------------------------NAV CONTAINER--------------------------------------------------------------------------*/}


<nav className='amazon-nav-container' id='nav-container'>
        <div className='amazon-nav-wrapper'>
            <div className='amazon-nav-stock-header'> <div><div><img src={amazonImageNine}></img></div></div> </div>

            <div onClick={Menu} className='amazon-span-header' id="span-header"><div><span>&#61;</span></div></div>

    </div>

</nav>












{/*--------------------------------------------------NAV MENU--------------------------------------------------------------------------*/}





<div className='amazon-nav-menu-container' id='nav-menu'>

<div className='amazon-nav-menu'>

<div className='amazon-nav-menu-content-wrapper'>
<Link to="/" className='nav-links'><div><button>Home</button></div></Link>
<Link to="/tesla" className='nav-links'><div><button>Tesla</button></div></Link>
<Link to="/amazon" className='nav-links'><div><button>Amazon</button></div></Link>
<Link to="/google" className='nav-links'><div><button>Google</button></div></Link>
<Link to="/apple" className='nav-links'><div><button>Apple</button></div></Link>
<Link to="/meta" className='nav-links'><div><button>Meta</button></div></Link>
<Link to="/microsoft" className='nav-links'><div><button>Microsoft</button></div></Link>



</div>

<div onClick={Nav}  className='amazon-nav-menu-btn' id='nav-menu-btn'><div><button type='button'>X</button></div></div>


</div>

</div>


   
   
   







   
    {/*--------------------------------------------------HEADER --------------------------------------------------------------------------*/}

    <header className="Amazon-Header-Container"id="amazon-header-container">

        <div className="Amazon-Header-Wrapper">

            <div><div><img src={amazonLogo}></img></div></div>

        </div>




        <div className="Header-Animation-Container" id="header-animation">

<div className="Animation-Container">
<div className="Animation-Section">

<div className="animation-carousel"><div><img src={amazonImage}></img></div></div>

<div className="animation-carousel"><div><img src={amazonImageTwo}></img></div></div>

<div className="animation-carousel"><div><img src={amazonImageThree}></img></div></div>

<div className="animation-carousel"><div><img src={amazonImageFour}></img></div></div>

<div className="animation-carousel"><div><img src={amazonImageFive}></img></div></div>

<div className="animation-carousel"><div><img src={amazonImageSix}></img></div></div>


<div className="animation-carousel"><div><img src={amazonImageSeven}></img></div></div>

<div className="animation-carousel"><div><img src={amazonImageEight}></img></div></div>


<div className="animation-carousel"><div><img src={amazonImageNine}></img></div></div>













</div>



</div>


</div>



        





    </header>
    
    
    
    
    
    
    
    
     {/*--------------------------------------------------AMAZON CONTENT --------------------------------------------------------------------------*/}


        <div className="Amazon-Content-Container" id="amazon-content-container">

          <div className="Amazon-Content-Wrapper">
             <div><div><h3>Owner- Andrew R. Jassy</h3></div></div>
            
          </div>



            <div  className="Amazon-Content-Wrapper-Two">

                <div><div><p>Investing in Amazon stock offers substantial long-term potential
                     due to the company's dominant position in e-commerce and cloud computing, 
                     both of which are key drivers of future growth. Amazon's relentless innovation,
                      diversification into areas like artificial intelligence and logistics, and expanding
                       global footprint make it a robust investment opportunity. Despite past volatility,
                        Amazon's consistent revenue growth, especially through its highly profitable 
                        Amazon Web Services (AWS) segment, underpins its ability to adapt and thrive 
                        in various market conditions. For long-term investors, Amazon represents a solid investment in 
                    a company that continues to shape the future of digital commerce and technology.</p></div></div>


                <div><div><img src={amazonCeo}></img></div></div>


            </div>


            <div className="Amazon-Content-Wrapper-Three">
              <div><div><h3>Stock Performance - Previous 5 years</h3></div></div>
            </div>


            <div className="Amazon-Content-Wrapper-Four">
              <div><div><p>Investing in Amazon stock over the past five years has proven to be a strategic move for 
                long-term investors, despite periods of volatility. During this period, Amazon has demonstrated remarkable
                 resilience, particularly with the explosive growth of its Amazon Web Services (AWS) segment,
                  which has become a cornerstone of its profitability. While the stock faced a significant downturn in 
                  2022 due to broader market challenges, it rebounded strongly in 2023 with an impressive 81% increase,
                   underscoring its ability to recover and grow. Amazon’s consistent revenue growth, driven
                   ] by its leadership in e-commerce and cloud computing, as well as its continued innovation and 
                   expansion into new markets, has made it a solid performer. 
                This track record indicates that Amazon is well-positioned to continue delivering long-term value to investors​ </p></div></div>
            </div>




        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        {/*--------------------------------------------------INVEST AMAZON CONTENT --------------------------------------------------------------------------*/}

            <div className="Amazon-Container-Invest" id="amazon-container-invest">



                <div className="Amazon-Wrapper-Invest">

                <div><div><h3>INVEST IN AMAZON</h3></div></div>

                </div>



               <div className="Amazon-Wrapper-Invest-Two" id="amazon-wrapper-invest-two">
                  <div><div><h3>E-commerce Dominance</h3></div></div>
                  <div><div><p>Amazon continues to lead the global e-commerce market, with a vast product offering and a strong 
                    logistics network.
                     Its Prime membership program, with millions of loyal customers, drives consistent revenue growth and customer retention.</p></div></div>



               </div>


               <div className="Amazon-Wrapper-Invest-Three" id="amazon-wrapper-invest-three">
                  <div><div><h3>Cloud Computing Leadership</h3></div></div>
                  <div><div><p>Amazon Web Services (AWS) is a market leader in cloud computing, 
                    contributing significantly to Amazon's profitability. 
                    AWS continues to expand, driven by the growing demand for cloud services across various industries.</p></div></div>


               </div>



               <div className="Amazon-Wrapper-Invest-Four" id="amazon-wrapper-invest-four">
                  <div><div><h3>Innovation and Diversification</h3></div></div>
                  <div><div><p>Amazon is known for its relentless innovation, expanding into areas such as artificial intelligence,
                     digital advertising, streaming, and healthcare. 
                     This diversification reduces risk and opens up new revenue streams</p></div></div>


               </div>



               <div className="Amazon-Wrapper-Invest-Five" id="amazon-wrapper-invest-five">
                  <div><div><h3>Global Expansion</h3></div></div>
                  <div><div><p>Amazon is increasingly expanding its presence in 
                    international markets, which presents enormous growth potential 
                    as it taps into emerging markets with large populations and growing internet penetration.</p></div></div>


               </div>



               <div className="Amazon-Wrapper-Invest-Six" id="amazon-wrapper-invest-six">
                  <div><div><h3>Strong Financial Performance</h3></div></div>
                  <div><div><p>Amazon consistently reports strong financial results,
                     with significant revenue growth and a robust balance sheet. 
                     The company’s ability to generate substantial cash 
                     flow allows for ongoing investment in growth initiatives.</p></div></div>


               </div>





               <div className="Amazon-Wrapper-Invest-Seven" id="amazon-wrapper-invest-seven">
                  <div><div><h3>Strong Financial Performance</h3></div></div>
                  <div><div><p>Amazon consistently reports strong financial results,
                     with significant revenue growth and a robust balance sheet. 
                     The company’s ability to generate substantial cash 
                     flow allows for ongoing investment in growth initiatives.</p></div></div>


               </div>








            </div>




      



      

        {/*-----------------------------------------FOOTER-------------------------------------------------------*/}
  <footer className='footer-container' id="footer-container">

<div className='footer-wrapper'>

<div><div><h3>Let's talk about Amazon</h3></div></div>

</div>


<div className='footer-wrapper-two'>

<div className='footer-wrapper-two-email'><div><p>stockshortcutprivate@aol.com</p></div></div>

</div>

<div className='footer-wrapper-three'>
<div><div><p>CALIFORNIA</p></div></div>

</div>

<div className='footer-wrapper-four'>
<div><div><h3>3030 Freedom Drive, San Francisco</h3></div></div>

</div>

<div className='footer-wrapper-five'>
<div><div><span>&copy; 2024 StockShortcut</span></div></div>
</div>


<div className='footer-wrapper-six'>
<div><div><img src={logo}></img></div></div>


</div>



</footer>



             

            



   



</>
)
}


export default Amazon







