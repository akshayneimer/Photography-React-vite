import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div className="top">
        <div className="logo"><img src="images/KataKlimt photography.jpg" alt=""/></div>
        <div className="list">
            <div className="li">About</div>
            <div className="li">Services</div>
            <div className="li">Folio</div>
            <div className="li">Blog</div>
            <div className="li">Contact</div>
        </div>
    </div>
    <div className="main">
        <div className="picture"><img src="images/fashion_2.jpg" alt=""/></div>
        <div className="con1">
            <div className="sec1"><h1>Welcome!</h1></div><hr/>
            <div className="sec2">
                <p><span>Click here</span> for more info about this free websitetemplate created by TemplateMonster.com. This is bootstrap template that goes with several
                     layout options(for desktop,tablet,smartphone landscape and portrait) to fill all resolution. The PSD
                     source files of this template are available for free for the registered members of TemplateMonster.com. Feel free to get them!
                </p>
            </div>
        </div>
    </div>
    <div className="con2">
        <div className="r1">
            <h2>Fashion</h2><br/>
            <img src="images/c6ab2335bce263905c913a7f9507c9ca_large-1.jpg" alt=""/>
            <h3>At vero eso et accus amus et iusto</h3>
            <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p><br/>  
            <button>Read More</button>
        </div>
        <div className="r2">
            <h2>Nature</h2><br/>
            <img src="images/Nature1.jpg" alt="" className="image"/>
            <h3>Deleniti atque corrupti quos officia</h3>
            <p>Dolores et quas molestias excepturi sint occaecati cupidiate non provident.</p><br/>
            <button>Read More</button>
        </div>
        <div className="r3">
            <h2>Love Story</h2><br/>
            <img src="images/boulder-colorado-couples-intimate-anniversary-1.jpg" alt="" className="image"/>
            <h3>Similique sunt in culpa qua officia</h3>
            <p>Deserunt mollitia animi, id est laborum et dolorum fuga.</p><br/>
            <button>Read More</button>
        </div>
        <div className="r4">
            <h2>Fine Art</h2><br/>
            <img src="images/Fine Art.png" alt="" className="image"/>
            <h3>Similique sunt in culpa qui officia</h3>
            <p>Deserunt mollitia animia, id est laborum et dolorum fuga.</p><br/>
            <button>Read More</button>
        </div>
    </div>
    <div className="box">
    <div className="left">
        <div><h4>Shortly about me</h4></div><br/>
        <div className="par">
        <div className="pic1"><img src="images/Label.jpg" alt=""/></div>
            <div className="para">
                <p className="para1">Sed ut perspictis unde onmis natus error volupatem accus antium doloue laudantium, totam rem.</p><br/>
                <p className="para2">Aperium, eaque ipsa quae ab illoveritatis et beatae vitage dicta suntexplicabo nemo enim ipsamvoluptatem quia voluptas sitaspernatur aut odit aut fugit, sed</p><br/><hr/>
                <div className="name">
                  <div className="name1">
                      <div>Campaigns</div>
                      <div>Portraits</div>
                      <div>Fashion</div>
                      <div>Fine Art</div>
                  </div>
                  <div className="name2">
                      <div>Advertising</div>
                      <div>Lifestyle</div>
                      <div>Love story</div>
                      <div>Landscape</div>
                  </div>
                </div>
            </div>
         </div>
    </div>
    <div className="right">
        <div className="bottom1"><h4>Latest Photoshoots</h4></div><br/>
        <div className="bottom2">
            <img src="images/bottom.jpg" alt=""/>
            <img src="images/bottom.jpg" alt=""/>
            <img src="images/bottom.jpg" alt=""/>
            <img src="images/bottom.jpg" alt=""/>
            <img src="images/bottom.jpg" alt=""/>
            <img src="images/bottom.jpg" alt=""/>
            <img src="images/bottom.jpg" alt=""/>
            <img src="images/bottom.jpg" alt=""/>
            <img src="images/bottom.jpg" alt=""/>
            <img src="images/bottom.jpg" alt=""/>
            <img src="images/bottom.jpg" alt=""/>
            <img src="images/bottom.jpg" alt=""/>
        </div>
    </div>
    </div>
    <footer>
        <div className="foot1"><p>&copy;Copyrights_AK</p></div>
        <div className="foot2">
            <i className="fa-brands fa-google"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
        </div>
    </footer>
    </>
  )
}

export default App
