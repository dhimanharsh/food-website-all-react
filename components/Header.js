import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
    <>    <header>
    <nav className="h-12 flex items-center justify-end bg-transparent">
      <ul className="flex pr-20 justify-end gap-16">
        <Link to={'/'}><li className="text-xl cursor-pointer text-black font-semibold hover:text-[#49832e] hover:underline">Home</li></Link>
        <Link to={'/contact'}><li className="text-xl cursor-pointer text-black font-semibold hover:text-[#49832e] hover:underline">Contact</li></Link>
        <Link to={'/about'}><li className="text-xl cursor-pointer text-black font-semibold hover:text-[#49832e] hover:underline">About</li></Link>
      </ul>
    </nav>
  </header>
  <main>
    {/* <!-- bg image --> */}
    <a href="https://ibb.co/8gPZgLNz"><img src="https://i.ibb.co/CKVGK3mJ/Green-Illustrative-Vegan-Food-Poster.png" alt="Green-Illustrative-Vegan-Food-Poster" border="0" id='hero-img'></img></a>

    <div className="hero-text">
      <div className="main-text">
        <h2>Find your</h2>
        <h1>Favourite <span>Food</span></h1>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
        laborum mollitia a repudiandae delectus minima unde dicta laboriosam
        corporis id.m ipsum dolor sit, amet consectetur adipisicing elit.
        Minus laborum mollitia a repudiandae delectus minima unde dicta
        laboriosam corporis id
      </p>
     
      <a href="#">See Now</a>
    </div>
  </main>

{/* this is other */}

  <div className="foods">
        <section>
            <div className="three-cards">
          <h2>Food Delivery</h2>
          <h3>From Resturant</h3>
          <p>UPTO 60% OFF</p>
        </div>
          <div>
            <div className="arrow-img">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20220128/pngtree-big-isolated-motorcycle-vector-colorful-icons-flat-illustrations-of-delivery-by-image_984482.jpg" alt=""></img>
            </div>
          </div>
        </section>
       
        <section>
            <div className="three-cards">
          <h2>New Receipes</h2>
          <h3>From Resturant</h3>
          <p>UPTO 30% OFF</p>
        </div>
          <div>
            <div className="arrow-img">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                <img src="./Images/Green Illustrative Vegan Food Poster (1).png" alt=""></img>
            </div>
          </div>
        </section>



        <section>
            <div className="three-cards">
          <h2>Dinning In</h2>
          <h3>From Resturant</h3>
          <p>UPTO 40% OFF</p>
        </div>
          <div>
            <div className="arrow-img">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                <img src="./Images/Green_Illustrative_Vegan_Food_Poster__2_-removebg-preview.png" alt=""></img>
            </div>
          </div>
        </section>

    </div> 



  </>

  )
}
