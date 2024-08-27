








import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import stock from '../images/Capital.png'
import { StockData } from "../stock/stocksection";
import tlogo from '../images/tesla-logo.png';
import aimage from '../images/teslapicone.png';
import aimageTwo from '../images/teslaelectrictwo.png';
import aimageThree from '../images/telsapicthreel.png';
import aimageFour from '../images/teslapicfour.png';
import aimageFive from '../images/teslapicfive.png';
import aimageSix from '../images/teslapicsix.jpg';
import aimageSeven from '../images/teslapicsevenpng.png';
import aimageEight from '../images/teslapiceight.png';
import aimageNine from '../images/teslaredlogo.png';
import elonImage from '../images/elonmusk.png'
import logo from '../images/top-product-design-clutch.png';
import '../tesla/tesla.css'







interface TeslaStock extends StockData {

}



const Tesla = () => {
        const [teslaData, setTeslaData] = useState<TeslaStock | null>(null);
     


        const TeslaData = async():Promise<void> => {
            try {
                const data = await fetch('/stock.json');
                const t:TeslaStock = await data.json()
                setTeslaData(t);

            }catch(error) {
                console.log(error)
            }
        }

        TeslaData();


        const Menu = () => {
            let navMenu = document.getElementById('nav-menu');
            let headerSection = document.getElementById('header-container');
            let headerAnimation = document.getElementById('header-animation');
            let teslaContainer = document.getElementById('tesla-container');
            let teslaContainerTwo = document.getElementById('tesla-container-two');
            let footer = document.getElementById('footer-container');
            let spanHeader = document.getElementById('span-header');
            let xButton = document.getElementById('nav-menu-btn');

            if(navMenu) {
                navMenu.style.visibility = 'visible';
            }


            if(headerSection) {
                headerSection.style.visibility = 'hidden'
              
            }
            if(headerAnimation) {
                headerAnimation.style.visibility = 'hidden'
            }
            if(teslaContainer) {
                teslaContainer.style.visibility = 'hidden'
            }

            if(teslaContainerTwo) {
                teslaContainerTwo.style.visibility = 'hidden'
            }
           
            if(footer) {
                footer.style.visibility = 'hidden';
            }

            if(spanHeader) {
                spanHeader.style.visibility = 'hidden'
            }

            if(xButton) {
                xButton.style.visibility = 'visible'
            }
        }





        const Nav = () => {
            let nav = document.getElementById('nav-menu');
            let len = document.getElementById('header-container');
            let header = document.getElementById('header-animation');
            let navSection = document.getElementById('tesla-container');
            let feedback = document.getElementById('tesla-container-two');
            let footer = document.getElementById('footer-container');
            let spanHeader = document.getElementById('span-header');
            let xButton = document.getElementById('nav-menu-btn');


            
            if(nav) {
              nav.style.visibility = 'hidden';
              document.body.style.overflowY = 'scroll';
            }


            if(len) {
                len.style.visibility = 'visible';
            }

            if(header) {
                header.style.visibility = 'visible'

            }

            if(navSection) {
                navSection.style.visibility = 'visible'
            }

            if(feedback) {
                feedback.style.visibility = 'visible'
            }
          
            if(footer) {
                footer.style.visibility = 'visible';
            }

            if(spanHeader) {
                spanHeader.style.visibility = 'visible'
            }


            if(xButton) {
                xButton.style.visibility = 'hidden'
            }

           

           
        }








    return (
        <>




<nav className='tesla-nav-container' id='nav-container'>
                <div className='tesla-nav-wrapper'>
                    <div className='tesla-nav-stock-header'> <div><div><img src={aimageNine}></img></div></div> </div>

                    <div onClick={Menu} className='tesla-span-header' id="span-header"><div><span>&#61;</span></div></div>

            </div>

       </nav>













{/*--------------------------------------------------HEADER CONTAINER --------------------------------------------------------------------------*/}

     
        
        <header className="Header-Container" id="header-container">

              <div className="Header-Wrapper">
              <div><div><img src={tlogo}></img></div></div>
          </div>

       



          <div className="Header-Animation-Container" id="header-animation">

<div className="Animation-Container">
    <div className="Animation-Section">

        <div className="animation-carousel"><div><img src={aimage}></img></div></div>

        <div className="animation-carousel"><div><img src={aimageTwo}></img></div></div>

        <div className="animation-carousel"><div><img src={aimageThree}></img></div></div>

        <div className="animation-carousel"><div><img src={aimageFour}></img></div></div>

        <div className="animation-carousel"><div><img src={aimageFive}></img></div></div>
    

        <div className="animation-carousel"><div><img src={aimageSix}></img></div></div>

        <div className="animation-carousel"><div><img src={aimageSeven}></img></div></div>

        <div className="animation-carousel"><div><img src={aimageEight}></img></div></div>


        <div className="animation-carousel"><div><img src={aimageNine}></img></div></div>




    </div>



</div>


</div>






        </header>











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









{/*------------------------------------------TESLA CONTAINER---------------------------------------------------*/}

        <div className="Tesla-Container" id="tesla-container">

            <div className="Tesla-Wrapper">
                    <div><div><h3>Owner- Elon Musk</h3></div></div>

            </div>

            <div  className="Tesla-Wrapper-Two" >
                <div><div><img src={elonImage}></img></div></div>

                <div className="tesla-wrapper-two-text"><div><p>Tesla's stock has been a remarkable story of volatility and growth,
                     making it both a high-risk and high-reward investment. Since its IPO in 2010, 
                     Tesla's stock price has surged dramatically, driven by its innovation in electric vehicles,
                      energy solutions, and autonomous driving technology. The stock experienced significant growth between 
                      2019 and 2021, fueled by strong sales, expanding production capacity, and inclusion in the S&P 500.
                       However, Tesla's stock has also seen periods of sharp declines, reflecting market skepticism, competition
                       , and broader economic factors. For long-term investors, Tesla represents a bet on the future of clean 
                    energy and technological innovation, but it requires patience and a tolerance for market fluctuations.</p></div></div>

            </div>





        </div>





        





        {/*------------------------------------------WHY INVEST IN TESLA CONTAINER---------------------------------------------------*/}


        <div className="Tesla-Container-Two" id="tesla-container-two">

            <div className="Tesla-Wrapper-Invest">

                <div><div><h3>INVEST IN TESLA</h3></div></div>

            </div>


            <div className="Tesla-Wrapper-Invest-Two">
                <div><div><img src={aimageNine}></img></div></div>

            </div>


            <div className="Tesla-Wrapper-Invest-Three">

                <div className="tesla-crop">

                    <ul className="card-list">
                        <li><div className="card"><a href=""><span className="model-name">Leadership in the EV Market</span>
                        <span>Tesla is the leading manufacturer of electric vehicles, with a strong 
                            brand and a growing global market share. </span></a></div></li>
                            
                            <li><div className="card"><a href=""><span className="model-name">Innovative Technology</span>
                             <span>Tesla's focus on cutting-edge technology, including autonomous driving, energy storage,
                             and AI, sets it apart from competitors and opens up multiple
                              revenue streams beyond just car sales </span></a></div></li>


                              <li><div className="card"><a href=""><span className="model-name">Sustainable Energy Solutions</span>
                                <span>Beyond vehicles, Tesla is a pioneer in renewable energy with its 
                                    solar panels and energy storage products. T </span></a></div></li>

                                    <li><div className="card"><a href=""><span className="model-name">Global Expansion</span>
                                <span>Tesla is expanding its manufacturing footprint with 
                                    Giga factories in strategic locations around the world. </span></a></div></li>

                                    <li><div className="card"><a href=""><span className="model-name">Strong Financial Performance</span>
                                <span>Tesla has demonstrated robust revenue growth, improving profitability,
                                     and a solid balance sheet,
                                     which indicates the company's ability to reinvest in innovation and sustain long-term growth</span></a></div></li>


                                    <li><div className="card"><a href=""><span className="model-name">Visionary Leadership</span>
                                <span> Under the leadership of Elon Musk, 
                                    Tesla has consistently set and achieved ambitious goals,
                                     driving innovation and market disruption.  </span></a></div></li>
                                     
                                     
                                     </ul>


                                            <div className="last-circle"></div>
                                            <div className="second-circle"></div>
                                            </div>
                                            <div className="mask"></div>
                                            <div className="center-circle"></div>
                                        <div>

                          </div>

            </div>




                <div className="Tesla-Wrapper-Invest-Four">
                    <div><div><h3>Stock Performance - Previous 5 years</h3></div></div>
                </div>


                <div className="Tesla-Wrapper-Invest-Five">
                <div><div><p>As of August 2024, Tesla's year-to-date (YTD) stock performance has shown volatility
                         with significant fluctuations. Early in the year, Tesla's stock faced challenges, leading 
                         to a decline of nearly 11%. However, the stock has since recovered from its lows, driven by several factors 
                         including strong earnings reports and growing confidence in Tesla's leadership in the electric vehicle market.
                          By mid-August, the stock saw notable gains, especially in recent months,
                         where it posted a 26.48% increase over the past three months and a 14.20% rise over the past six months​ </p></div></div>

                </div>



        </div>







             
          {/*-----------------------------------------FOOTER-------------------------------------------------------*/}
          <footer className='footer-container' id="footer-container">

        <div className='footer-wrapper'>

    <div><div><h3>Let's talk about Tesla</h3></div></div>

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



export default Tesla



