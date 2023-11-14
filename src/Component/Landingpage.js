import React from "react";

const offerContent1 = [
  {
    text: "Upto 60% off on Appliances",
    text2: "Upto 60% off on summer Appliances",
    buttonLabel: "Grab now",
  },
  {
    text: "Upto 60% off on Appliances",
    text2: "Upto 60% off on summer Appliances",
    buttonLabel: "Grab now",
  },
  {
    text: "Upto 60% off on Appliances",
    text2: "Upto 60% off on summer Appliances",
    buttonLabel: "Grab now",
  },
  {
    text: "Upto 60% off on Appliances",
    text2: "Upto 60% off on summer Appliances",
    buttonLabel: "Grab now",
  },
];
const offerContent2 = [
  {
    text: "Upto 60% off on Appliances",
    text2: "Upto 60% off on summer Appliances",
    buttonLabel: "Grab now",
  },
  {
    text: "Upto 60% off on Appliances",
    text2: "Upto 60% off on summer Appliances",
    buttonLabel: "Grab now",
  },
  {
    text: "Upto 60% off on Appliances",
    text2: "Upto 60% off on summer Appliances",
    buttonLabel: "Grab now",
  },
  {
    text: "Upto 60% off on Appliances",
    text2: "Upto 60% off on summer Appliances",
    buttonLabel: "Grab now",
  },
];

const offerContent = [
  { text: "Amazon", text2: "Flat 30% off", buttonLabel: "Grab now" },
  { text: "Amazon", text2: "Flat 30% off", buttonLabel: "Grab now" },
  { text: "Amazon", text2: "Flat 30% off", buttonLabel: "Grab now" },
  { text: "Amazon", text2: "Flat 30% off", buttonLabel: "Grab now" },
];

const couponCategories = [
  { text: "Amazon", text2: "Flat 30% off", buttonLabel: "Grab now" },
  { text: "Amazon", text2: "Flat 30% off", buttonLabel: "Grab now" },
  { text: "Amazon", text2: "Flat 30% off", buttonLabel: "Grab now" },
  { text: "Amazon", text2: "Flat 30% off", buttonLabel: "Grab now" },
];

const popularNames = [
    ["Flight","bus", "Entertainment", "Jwellery"], 
    ["Medicines", "Hosting", "Flowers", "Beauty"],
    ["OTT", "Bills", "Kids", "Travel"],
    ["Food", "Eyewear", "Lifestyle", "Kitchen"],
    ["Recharge", "Electronics", "Hotel", "Footwear"],
    ["Lab", "Education", "Services", "Furniture"],
    ["Fashion", "Pizza", "Bike", "Novelties"]
]

const footerTexts = [
  { text: "Company", items: ["About Us", "Privacy policy", "Terms", "Blogs", "Branding", "Career"] },
  { text: "General", items: ["Partner With us", "Write to us", "Mobile App", "Site map"] },
  { text: "Pages", items: ["Amazon Offer", "Google Pay Offers", "PayPal Offers", "PhonePe Offers", "Festival Offers", "Bank Offers"] },
  { text: "More", items: ["City Offers", "Brand Offers", "Product Deals", "Gift Cards"] }
];





const Landingpage = () => {
  return (
    <div>
      <div>
        <header className="header">
          <div className="header-content">
            <div className="logo"></div>
            <div className="search">
              <img className="img"></img>
              <input
                type="text"
                name="search-box"
                id="search-box"
                placeholder="Search for brand, category, coupon"
              ></input>
            </div>
            <div>
              <button id="btn">Login / Sign up</button>
            </div>
          </div>

          <div className="menu">
            <div className="menus">
              <div className="menu-content">
                <p>Home</p>
              </div>
              <div className="menu-content">
                <p>Deals</p>
              </div>
              <div className="menu-content">
                <p>Coupon</p>
              </div>
              <div className="menu-content">
                <p>Stores</p>
              </div>
              <div className="menu-content">
                <p>Contact Us</p>
              </div>
            </div>
          </div>
        </header>




        <div className="banner">
          <div className="banner-container">
            <img className="banner-image"></img>
          </div>

          <div className="pagination">
            <div id="rectangle1"></div>
            <div id="rectangle2"></div>
            <div id="rectangle3"></div>
          </div>
        </div>





        <div className="popular-products">
          <div className="tabs">
            <div className="tab1">
              <img className="tab1-img"></img>
              <p className="tab-img-content1">Popular Coupons</p>
            </div>
            <div className="tab2">
              <img className="tab2-img"></img>
              <p className="tab-img-content">Ending Soon</p>
            </div>
            <div className="tab3">
              <img className="tab3-img"></img>
              <p className="tab-img-content">Latest Coupons</p>
            </div>
          </div>
          <div className="offers">
            <div className="r1">
              {offerContent1.map((item, index) => (
                <div className="offer" key={index}>
                  <div className="offer-container">
                    <p className="para1">{item.text}</p>
                    <img className="amazon-image"></img>
                    <p className="para2">{item.text2}</p>
                  </div>
                  <button className="btns" id="gr">
                    {item.buttonLabel}
                  </button>
                </div>
              ))}
            </div>
            <div className="r2">
              {offerContent2.map((item, index) => (
                <div className="offer" key={index}>
                  <div className="offer-container">
                    <p className="para1">{item.text}</p>
                    <img className="amazon-image"></img>
                    <p className="para2">{item.text2}</p>
                  </div>
                  <button className="btns" id="gr">
                    {item.buttonLabel}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="pagination2">
            <div id="rectangle1"></div>
            <div id="rectangle2"></div>
            <div id="rectangle3"></div>
          </div>
        </div>




        <div className="deals-of-the-day">
          <div className="deals-heading">
            <p className="deals-heading-content">Deals of the day</p>
            <div className="rectangle-four"></div>
          </div>
          <div className="deals-row">
            {offerContent.map((item, index) => (
              <div className="deals-row-content" key={index}>
                <div className="content-with-image">
                  <img className="content-amazon"></img>
                  <p className="with-image-content">{item.text}</p>
                </div>
                <p className="flat-off">{item.text2}</p>
                <button className="btns" id="gr">
                  {item.buttonLabel}
                </button>
              </div>
            ))}
          </div>
        </div>




        <div className="coupon-by-categories">
          <div className="coupon-heading">
            <p className="by-categories">Coupon By Categories</p>
            <div className="categories-rectangle"></div>
          </div>

          <div className="coupon">
            <div className="all-categories">
              <div className="single-category1">
                <img className="coupon-image1"></img>
                <p className="coupon-content">Fashion</p>
              </div>
              <div className="single-category">
                <img className="coupon-image2"></img>
                <p className="coupon-content">Food</p>
              </div>
              <div className="single-category">
                <img className="coupon-image3"></img>
                <p className="coupon-content">Beauty</p>
              </div>
              <div className="single-category">
                <img className="coupon-image4"></img>
                <p className="coupon-content">Toys</p>
              </div>
              <div className="single-category">
                <img className="coupon-image5"></img>
                <p className="coupon-content">Cloud</p>
              </div>
              <div className="single-category">
                <img className="coupon-image6"></img>
                <p className="coupon-content">Gaming</p>
              </div>
              <div className="single-category">
                <img className="coupon-image7"></img>
                <p className="coupon-content">Phones</p>
              </div>
              <div className="single-category">
                <img className="coupon-image8"></img>
                <p className="coupon-content">Travel</p>
              </div>
              <div className="single-category">
                <img className="coupon-image9"></img>
                <p className="coupon-content">Movies</p>
              </div>
            </div>

            <div className="coupon-row">
              <div className="coupon-row-1">
                {couponCategories.map((item, index) => (
                  <div className="coupon-row-content" key={index}>
                    <div className="content-with-image">
                      <img className="content-amazon"></img>
                      <p className="with-image-content">{item.text}</p>
                    </div>
                    <p className="flat-off">{item.text2}</p>
                    <button className="btns" id="gr">
                      {item.buttonLabel}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="coupon-pagination">
              <div id="rectangle1"></div>
              <div id="rectangle2"></div>
              <div id="rectangle3"></div>
            </div>
          </div>
        </div>




        <div className="sunglasses">
          <img className="sunglass-image"></img>
        </div>






        <div className="popular-membership">
          <div className="popular-heading">
            <p className="popular-heading-content">Popular Membership</p>
            <div className="rec-popular"></div>
          </div>

          <div className="popular-offers">
            <div className="popular-offers-row1">
              <div className="popular-offers-row1-content1">
                <img className="content1-img"></img>
              </div>
              <div className="popular-offers-row1-content1">
                <div className="group-2">
                  <img className="content2-img"></img>
                  </div>

                
              </div>
            </div>


            <div className="popular-offers-row1">
             <div className="popular-offers-row1-content1">
              <img className="item1-img"></img>
             </div>
             <div className="popular-offers-row1-content1">
              <img className="item2-img"></img>
             </div>
            </div>
          </div>

          <div className="coupon-pagination">
              <div id="rectangle1"></div>
              <div id="rectangle2"></div>
              <div id="rectangle3"></div>
            </div>
        </div>







        <div className="news-letter">
            <div className="news-letter-box">
                <div className="form-image">
                 <img className="actual-image"></img>
                </div>
                <div className="content">
                  <div className="texts">
                    <p className="text-content-1">Subscribe to our NewsLetter!</p>
                    <p className="text-content-2">Be the first to get exclusive offers ands the latest news</p>
                  </div>

                  <div className="email">
                   <div className="text-box">
                       <p className="email-p">Enter your email address</p>
                   </div>
                   <button className="news-button" id="button-text">subscribe</button>
                  </div>
                </div>
            </div>
        </div>






        <div className="how-it-works">
            <div className="how-it-works-heading">
               <p className="how-it-works-para">How it Works?</p> 
               <div className="how-it-works-rec">

               </div>
            </div>
            <div className="how-it-works-row">
                <div className="how-it-works-item">
                    <div className="how-it-works-icon">
                        <img className="how-it-works-image1"></img>
                    </div>
                    <p className="how-it-works-signup-box">Signup</p>
                    <p className="how-it-works-text">If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                </div>
                <div className="how-it-works-item">
                    <div className="how-it-works-icon">
                        <img className="how-it-works-image2"></img>
                    </div>
                    <p className="how-it-works-signup-box">Choose Coupon</p>
                    <p className="how-it-works-text">If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                </div>
                <div className="how-it-works-item"> 
                    <div className="how-it-works-icon">
                        <img className="how-it-works-image3"></img>
                    </div>
                    <p className="how-it-works-signup-box">Grab Coupon</p>
                    <p className="how-it-works-text">If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                </div>
                
            </div>
        </div>






        <div className="download-app">
            <div className="application-download">
                <div className="bg">
                    <div className="application-content">
                        <div className="application-content-texts">
                            <p className="text-para">Want to be a part of our team</p>
                            <p className="text-para2">Be a part of best site of discount coupons</p>
                        </div>
                        <div className="application-buttons">
                            <button className="application-button1">
                                <img className="apple-button"></img>
                                <div className="button-texts">
                                <span className="apple-text1">Download From</span>
                                <span className="apple-text2">app store</span>
                                </div>
                                
                            </button>
                            <button className="application-button1">
                                <img className="playstore-button"></img>
                                <div className="button-texts">
                                <span className="apple-text1">Download From</span>
                                <span className="apple-text2">play store</span>
                                </div>
                                
                            </button>
                            <img className="phone1"></img>
                            <img className="phone2"></img>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>




        <div className="popular-categories-main">
            <div className="popular-categories-container">
                <div className="popular-categories-image">
                  <img className="image-popular"></img>
                </div>
                
                <div className="content-right">
                    <div className="content-right-heading">
                        <p className="popular-categories">Popular Categories</p>
                        <div className="popular-rectangle"></div>
                    </div>
                    <div className="all-names">
                       {popularNames.map((column, columnIndex) => (
                        <div className="name-column-1" key={columnIndex}>
                          {column.map((item, index) => (
                            <div className="name-box" key={index}>
                              <p className="name-box-text">{item}</p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                   </div>
            </div>
        </div>







        <footer className="footer">
            <div className="footer-container">
              <div className="container-box1">
                <div className="container-box-logo"></div>
                 <p className="container-box-text">Lorem Ipsum is simply dummy of the printing and type setting.</p>
                 <div className="container-box-1-buttons">
                  <button className="button-one">
                    <img className="button-apple-icon"></img>
                    <div className="button-side-text">
                      <p className="p-first">Download From</p>
                      <p className="p-second">App Store</p>
                    </div>
                  </button>
                  <button className="button-one">
                    <img className="button-amazon-icon"></img>
                    <div className="button-side-text">
                      <p className="p-first">Download From</p>
                      <p className="p-second">App Store</p>
                    </div>
                  </button>
                 </div>
              </div>
              {footerTexts.map((column, columnIndex)=> (
                <div className="container-box2" key={columnIndex}>
                  <p className="company">{column.text}</p>
                  <ul className="ul">
                    {column.items.map((item, index) => (
                      <li className="li" key={index}>
                      <div id="arrow"></div>
                      <p id="textt">{item}</p>
                    </li>
                    ))
                      }
                    
                  </ul>
              </div>
              ))
                }
            </div>
       </footer>



       
      </div>
    </div>
  );
};

export default Landingpage;
