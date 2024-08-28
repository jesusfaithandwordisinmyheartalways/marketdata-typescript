






import { useState } from 'react';
import { useEffect } from 'react';
import '../stock/stocks.css';
import { Link } from 'react-router-dom';
import amazonUpdatedLogo from '../images/amazonupdatedlogo.jpg'
import apple from '../images/Apple-stock-logo-.png';
import google from '../images/google.png';
import microsoft from '../images/microsoft-icon.png';
import tesla from '../images/tesla.png';
import meta from '../images/metalogo.png'
import stock from '../images/Capital.png'
import edinburgh from '../images/edinburgh.png'
import forbes from '../images/forbes.png';
import stanford from '../images/Stanford-University-Logo.png';
import myGames from '../images/mygames.png';
import Dartmouth from '../images/Dartmouth-Logo.png';
import elon from '../images/elon.png';
import Jassy from '../images/Andy-Jassy.jpg';
import Sundar from '../images/Sundar Pichai.png';
import Timothy from '../images/Timothy D. Cook.png'
import  Satya from '../images/satya_nadella.png';
import Markm from '../images/Mark Elliot Zuckerberg.jpg';
import logo from '../images/top-product-design-clutch.png';



export interface StockData {
    teslaSym:string;
    teslaName:string;
    teslaExchange:string;
    teslaCeo:string;
    amazonSym:string;
    amazonName:string;
    amazonExchange:string;
    amazonCeo:string;
    googleSym:string;
    googleName:string;
    googleExchange:string;
    googleCeo:string;
    appleSym:string;
    appleName:string;
    appleExchange:string;
    appleCeo:string;
    metaSym:string;
    metaName:string;
    metaExchange:string;
    metaCeo:string;
    microsoftSym:string;
    microsoftName:string;
    microsoftExchange:string;
    microsoftCeo:string;
   
}






const Stocks = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [data, setData] = useState<StockData | null>(null);
    const [error, setError] = useState<string | null>(null);
  

  
 
    useEffect(() => {
          
       const JsonData = async():Promise<void> => {
        try {
          const response = await fetch('/stock.json');
          if(response.status === 200) {
              const res:StockData = await response.json();
              setData(res)
          } else {
              console.error('Unable to fetch data')
          }
        }catch(error) {
          console.log(error)
        }
     }
        JsonData()

    }, [])

    useEffect(() => {
            window.addEventListener('scroll', UserScroll)
            return () => {
                window.addEventListener('scroll', UserScroll)
            }
    }, [])

    
    const UserScroll = () => {
        const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
        setScrollTop(scrollPosition)
    }

    const Menu = () => {
        let menu = document.getElementById('nav-menu');
        let closeBtn = document.getElementById('nav-menu-btn');
        let openBtn = document.getElementById('span-header');

        let stock = document.getElementById('top-container');
        let nav = document.getElementById('nav-container');
        let feedback = document.getElementById('container');
        let sContain = document.getElementById('stock-container');
        let footer = document.getElementById('footer-container');

        if(menu) {
          menu.style.visibility = 'visible'
          document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
          document.body.style.overflowY = 'hidden';
          
        }

        if(closeBtn) {
            closeBtn.style.visibility = 'visible';
        }
        
        if(openBtn) {
            openBtn.style.visibility = 'hidden';
        }

        if(stock) {
            stock.style.visibility = 'hidden'
        }
        if(nav) {
            nav.style.visibility = 'hidden'
        }

        if(feedback) {
            feedback.style.visibility = 'hidden'
        }
        if(sContain) {
            sContain.style.visibility = 'hidden';
        }
        if(footer) {
            footer.style.visibility = 'hidden';
        }
    }



    const Nav = () => {
        let nav = document.getElementById('nav-menu');
        let closeBtn = document.getElementById('nav-menu-btn');
        let openBtn = document.getElementById('span-header');

        let len = document.getElementById('top-container');
        let navSection = document.getElementById('nav-container');
        let feedback = document.getElementById('container');
        let sContain = document.getElementById('stock-container');
        let footer = document.getElementById('footer-container');

        
        if(nav) {
          nav.style.visibility = 'hidden';
          document.body.style.backgroundColor = "white";
          document.body.style.overflowY = 'auto';

        }

        if(closeBtn) {
            closeBtn.style.visibility = 'hidden';
        }
        
        if(openBtn) {
            openBtn.style.visibility = 'visible';
        }





        if(len) {
            len.style.visibility = 'visible';
        }

        if(navSection) {
            navSection.style.visibility = 'visible'
        }

        if(feedback) {
            feedback.style.visibility = 'visible'
        }
        if(sContain) {
            sContain.style.visibility = 'visible';
        }


        if(footer) {
            footer.style.visibility = 'visible';
        }

       

       
    }
        



    return (
        <>


        <nav className='nav-container' id='nav-container'>
            <div className='nav-wrapper'>
                <div className='nav-stock-header'> <div><div><img src={stock}></img></div></div> </div>

                <div onClick={Menu} className=' span-header' id="span-header"><div><span>&#61;</span></div></div>

        </div>

   </nav>




   <div className='top-container' id='top-container'>
             <div className='top-wrapper'>

        <div className='top-elements'>
          <div className='top'><div><img src={tesla}></img></div></div>
          <div className='two'><div><img src={amazonUpdatedLogo}></img></div></div>
          <div className='three'><div><img src={google}></img></div></div>

        </div>


        <div className='top-header'>
            <div><div><span className='header-text'>Stock</span><span className='header-text-two'>S</span><span className='header-text-three'>hortcut</span></div></div>
            <div className='top-header-intro'><div>Stock Shortcut is a streamlined financial platform that offers top-tier tools and resources for investors.
            Our focus is to provide concise and reliable information into popular stocks companies</div></div>
        </div>
        


        <div className='top-elements-two'>
          <div className='top-two'><div><img src={apple}></img></div></div>
          <div className='two-two'><div><img src={meta}></img></div></div>
          <div className='three-two'><div><img src={microsoft}></img></div></div>

        </div>



      </div>
    </div>
     

            



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














            {/*------------------------------------------FEEDBACK CONTAINER------------------------------------*/}


            <div className='Container' id='container'>

                <div className='feedback-wrapper'>
                    <div style={{
                        position:'relative',
                        top: scrollTop > 160 ? '0px': '50px',
                        transition:'top 1.5s linear'
                    }}><div><span className='feedback-text'>Positive</span></div></div>
                </div>

                <div className='feedback-wrapper-two'>
                  <div style={{
                    position:'relative',
                    top: scrollTop > 190 ? '-50px' : '50px',
                    transition: 'top 1.5s linear'
                  }}><div><span className='feedback-text-right'>Feelings</span></div></div>

                </div>


                 <div style={{
                    position: 'relative',
                    top: scrollTop > 200 ? '30px' : '90px',
                    transition: 'top 1.5s linear'
                 }} className='Wrapper'>
                <div className='wrapper-header'>
                    <div><div><img src={edinburgh}></img></div></div>  
                    <div>
                        <div><p>Our experience as international group here on campus has been great to learn about 
                            the popular stocks thats out there. Students coming from england
                            really do not have their tools on what companies to go with. We love this website!!!</p></div>
                    </div>
                
                </div>


                <div className='wrapper-header'>
                <div><div><img className='forbes-image' src={forbes}></img></div></div> 
                <div>
                        <div><p>Our experience as international group here on campus has 
                            been great to learn about the popular stocks thats out there. We had millionaires visit this 
                            platform and all of them has stated they did not know about how well each company performance 
                            has an impact on its popularity. Thank You Stock Shortcut</p></div>
                    </div> 
                    
                    </div>
               
                 <div className='wrapper-header'>
                    <div><div><img className='stanford-image' src={stanford}></img></div></div>
                        <div><div><p>Ivy league students are not informed on companies that 
                            have an history of long-term performance. Stock shortcut is a helpful
                            resource on investment goals.</p></div></div>
                    
                    </div>
                
                
                 <div className='wrapper-header'>
                    <div><div><img src={myGames}></img></div></div>
                    <div><div><p>The group of guys at the company love stock shortcut because they did'nt know about how to 
                        start their stock investment plans. Popular companies at times do not perform well but this website 
                        highlights the ones that do. </p></div></div>
                 </div>


                 <div className='wrapper-header'>
                    <div><div><img className='dartmouth-image' src={Dartmouth}></img></div></div>
                      <div><div><p>East coast education has not done well enough to hand our students the 
                       the information on how to learn about the stock market. The curriculum here at the 
                       university is okay, but not how stock shortcut has developed an informative 
                       go-to to be updated in live time on the popular companies performance. This is great  </p></div></div>

                    </div>

        
      </div>




     </div>
     
     
     
     
     
     
     
     
     
      {/*------------------------------------------STOCKS CONTAINER-------------------------------------------------------*/}

      <div className='Stock-Container' id='stock-container'> 
                 <div style={{
                    position: 'relative',
                    top: scrollTop > 620 ? '-10px' : '50px',
                    transition: 'top 1.5s linear'
                 }} className='Stock-Header-Wrapper'>
                    <div>Investment Companies Thats Well <span>Worth It</span></div>
                 </div>

         <div className='Stock-Wrapper'>

            <div style={{
                position: 'relative',
                top: scrollTop > 630 ? '-10px' : '50px',
                transition: 'top 1.5s linear'
            }} className='stock-content'>
                <div><div><img src={tesla}></img></div></div>

                {data && 
                <div className='tesla-header-symbol'><div><h3>{data.teslaSym}</h3></div></div>
                }
                {data && 
                <div className='tesla-header-exchange'><div><h3>{data.teslaName}</h3></div></div>
                }
                {data && (
                    <div className='tesla-header-ceo'><div><h3>{data.teslaCeo}</h3></div></div>
                )}
                <div><div><img src={elon}></img></div></div>
                
                
                   <div className='tesla-page'>

                    <Link to="/tesla" className='links'><div><button type='button'>Learn About Tesla Stock</button></div></Link>
                     

                    </div>


            </div>

          
          
            <div style={{
                position: 'relative',
                top: scrollTop > 695 ? '-10px' : '50px',
                transition: 'top 1.5s linear'
            }} className='stock-content-two'>
                <div><div><img src={amazonUpdatedLogo}></img></div></div>
                {data && 
                <div className='amazon-header-symbol'><div><h3>{data.amazonSym}</h3></div></div>
                }
                {data && 
                <div className='amazon-header-exchange'><div><h3>{data.amazonName}</h3></div></div>
                }
                {data && (
                    <div className='amazon-header-ceo'><div><h3>{data.amazonCeo}</h3></div></div>
                )}
                
                
                 <div><div><img src={Jassy}></img></div></div>

                  <div className='amazon-page'>
                  <Link to="/amazon" className='links'><div><button type='button'>Learn About Amazon Stock</button></div></Link>

                  </div>


            </div>

           
           
            <div style={{
                 position: 'relative',
                 top: scrollTop > 745 ? '-10px' : '50px',
                 transition: 'top 1.5s linear'
            }} className='stock-content-three'>
            <div><div><img src={google}></img></div></div>
            {data && 
                <div className='google-header-symbol'><div><h3>{data.googleSym}</h3></div></div>
                }
                {data && 
                <div className='google-header-exchange'><div><h3>{data.googleName}</h3></div></div>
                }
                {data && (
                    <div className='google-header-ceo'><div><h3>{data.googleCeo}</h3></div></div>
                )}

                    <div><div><img src={Sundar}></img></div></div>

                <div className='google-page'>
                <Link to="/google" className='links'><div><button type='button'>Learn About Google Stock</button></div></Link>

                </div>


                
            </div >

            <div style={{
                  position: 'relative',
                  top: scrollTop > 945 ? '0px' : '50px',
                  transition: 'top 1.5s linear'
            }} className='stock-content-four' >
              <div><div><img src={apple}></img></div></div>

              {data && 
                <div className='apple-header-symbol'><div><h3>{data.appleSym}</h3></div></div>
                }
                {data && 
                <div className='apple-header-exchange'><div><h3>{data.appleName}</h3></div></div>
                }
                {data && (
                    <div className='apple-header-ceo'><div><h3>{data.appleCeo}</h3></div></div>
                )}

                <div><div><img src={Timothy}></img></div></div>

                <div className='apple-page'>
                <Link to="/apple" className='links'><div><button type='button'>Learn About Apple Stock</button></div></Link>

                </div>






            </div>

            <div style={{
                  position: 'relative',
                  top: scrollTop > 990 ? '0px' : '50px',
                  transition: 'top 1.5s linear' 
            }} className='stock-content-five' >
            <div><div><img src={meta}></img></div></div>


        {data && 
             <div className='meta-header-symbol'><div><h3>{data.metaSym}</h3></div></div>
         }
         {data && 
              <div className='meta-header-exchange'><div><h3>{data.metaName}</h3></div></div>
             }
              {data && (
             <div className='meta-header-ceo'><div><h3>{data.metaCeo}</h3></div></div>
             )}

                <div><div><img src={Markm}></img></div></div>

         <div className='meta-page'> 
         <Link to="/meta" className='links'><div><button type='button'>Learn About Meta Stock</button></div></Link>

         </div>




            </div>



            <div style={{
                position: 'relative',
                top: scrollTop > 1050 ? '0px' : '50px',
                transition: 'top 1.5s linear' 
            }} className='stock-content-six'>
              <div><div><img src={microsoft}></img></div></div>


        {data && 
             <div className='microsoft-header-symbol'><div><h3>{data.microsoftSym}</h3></div></div>
         }
         {data && 
              <div className='microsoft-header-exchange'><div><h3>{data.microsoftName}</h3></div></div>
             }
              {data && (
             <div className='microsoft-header-ceo'><div><h3>{data.microsoftCeo}</h3></div></div>
             )}

                <div><div><img src={Satya}></img></div></div>

         <div className='microsoft-page'>
         <Link to="/microsoft" className='links'><div><button type='button'>Learn About Microsoft Stock</button></div></Link>

         </div>


            </div>

         </div>



      </div>
      
      
      
      
      
      
      
      
      {/*-----------------------------------------ABOUT US-------------------------------------------------------*/}

                    <div className="About-Us">

                        <div className='About-Us-Wrapper'>



                            
                        </div>




                    </div>
      
      
      
      
      
      
      
      {/*-----------------------------------------FOOTER-------------------------------------------------------*/}
      <footer className='footer-container' id='footer-container'>

        <div className='footer-wrapper'>

            <div><div><h3>Let's talk</h3></div></div>

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



export default Stocks
