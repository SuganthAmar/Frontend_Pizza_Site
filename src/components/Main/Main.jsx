import React from 'react'
import './main.css'

const Main=()=>{
    return(
        <div>
              <main className="main">
    {/*~~~~~~~~~~~~~~~ HOME ~~~~~~~~~~~~~~~*/}
    <section className="home section" id="home">
      <div className="home__container container grid">
        <img src="../../images/home-pizza.png" alt="home image" className="home__img" />
        <div className="home__data">
          <h1 className="home__title">
            Your <br />
            Chioce <br />
            Your <br />
            Pizza
          </h1>
          <p className="home__description">
            Enjoy mouth-watering, handcrafted custom pizzas made with locally-sourced
            ingredients from pizzoo. With easy online ordering and fast
            delivery options.
          </p>
          <a href="#" className="button">
            Order Now <i className="fa-solid fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
    {/*~~~~~~~~~~~~~~~ ABOUT ~~~~~~~~~~~~~~~*/}
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <span className="section__subtitle">About Us</span>
          <h2 className="section__title">
            Custamise <br />
            Your own <br />
            Healthy Pizza
          </h2>
          <p className="about__description">
            we are dedicated to crafting mouth-watering pizzas that are made 
            with your own choice only the freshest and highest quality locally-sourced
            ingredients. We believe that using fresh ingredients not only
            enhances the taste of our pizzas.
            <br />
            <br />
            So come on in and create your own pizza, taste the difference for yourself – we can't wait
            to serve you!
          </p>
        </div>
        <img
          src="../../images/about-pizza.png"
          alt="about image"
          className="about__img"
        />
      </div>
    </section>
    {/*~~~~~~~~~~~~~~~ POPULAR ~~~~~~~~~~~~~~~*/}
    <section className="popular section" id="popular">
      <span className="section__subtitle">The Best Food</span>
      <h2 className="section__title">Popular Pizza</h2>
      <div className="popular__container container grid">
        <div className="popular__card">
          <img
            src="../../images/popular-pizza-1.png"
            alt="popular image"
            className="popular__img"
          />
          <div className="popular__content">
            <a href="" className="popular__button">
              <i className="fa-solid fa-bag-shopping" />
            </a>
            <h3 className="popular__name">Margherita</h3>
            <p className="popular__description">
              A classic pizza with tomato sauce, fresh mozzarella, and basil.
            </p>
            <p className="popular__price">₹299</p>
          </div>
        </div>
        <div className="popular__card">
          <img
            src="../../images/popular-pizza-2.png"
            alt="popular image"
            className="popular__img"
          />
          <div className="popular__content">
            <a href="" className="popular__button">
              <i className="fa-solid fa-bag-shopping" />
            </a>
            <h3 className="popular__name">Pepperoni</h3>
            <p className="popular__description">
              A traditional pizza topped with tomato sauce, mozzarella cheese.
            </p>
            <p className="popular__price">₹399</p>
          </div>
        </div>
        <div className="popular__card">
          <img
            src="../../images/popular-pizza-3.png"
            alt="popular image"
            className="popular__img"
          />
          <div className="popular__content">
            <a href="" className="popular__button">
              <i className="fa-solid fa-bag-shopping" />
            </a>
            <h3 className="popular__name">Meat Lovers</h3>
            <p className="popular__description">
              A hearty pizza topped with tomato sauce, mozzarella cheese,
              pepperoni.
            </p>
            <p className="popular__price">₹459</p>
          </div>
        </div>
      </div>
    </section>
    {/*~~~~~~~~~~~~~~~ RECENTLY ~~~~~~~~~~~~~~~*/}
    <section className="recently section" id="recently">
      <div className="recently__container">
        <div className="recently__data">
          <span className="section__subtitle_R">How it's work</span>
    
        </div>
        <div className="three-card-container">
      <div className="card">
        <img
          src="../../images/how-to-work2.png"
          alt="Card 1"
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">Choose A Restaurant</h2>
          <p className="card-description">Determine the type of cuisine you are in the mood for, such as Italian, Mexican, Chinese, etc.</p>
        </div>
      </div>
      <div className="card">
        <img
          src="../../images/how-to-work3.png"
          alt="Card 2"
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">Choose A Tasty Dish</h2>
          <p className="card-description">Think about the type of cuisine or flavors you enjoy. Do you prefer something spicy, savory, sweet, or a specific cultural cuisine?</p>
        </div>
      </div>
      <div className="card">
        <img
          src="../../images/how-to-work1.png"
          alt="Card 3"
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">Pick Up Or Delivery</h2>
          <p className="card-description">Enjoy Our Handcrafted Pizzas Your Way: Delivery or Pick-up - Your Choice!.</p>
        </div>
      </div>
    </div>
      </div>
    </section>
    <section className="ordernow">
    <div className="banner">
    <div className="banner__overlay">
  <div className="banner__container">
    <h1 className="banner__hero">Premium Pizza</h1>
    <p className="banner__text">get the most yummy pizza of all times! </p>
    <div>
      <a href="#" className="button button--primary">
        Order Now 🍕
      </a>
    </div>
    </div>
  </div>
</div>
    </section>
    {/*~~~~~~~~~~~~~~~ NEWSLETTER ~~~~~~~~~~~~~~~*/}
    <section className="newsletter section">
      <div className="newsletter__container container grid">
        <img
          src="../../images/pizza-slice.png"
          alt="newsletter image"
          className="newsletter__img"
        />
        <div className="newsletter__data">
          <span className="section__subtitle">Newsletter</span>
          <h2 className="section__title">
            Subscribe for <br />
            exclusive offers
          </h2>
          <form action="" className="newsletter__form">
            <input
              type="email"
              placeholder="Enter email"
              className="newsletter__input"
            />
            <button className="button newsletter__button">
              Subscribe <i className="fa-regular fa-paper-plane" />
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
        </div>
    )
}
export default Main