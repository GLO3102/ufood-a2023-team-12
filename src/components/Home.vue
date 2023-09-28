<template>
<div class="main-container">
    <div class="header-container">
      <div class="text-center header-content">
        <h1 class="header-title alt-font">Taste the World. One Restaurant at a Time.</h1>
        <div class="mt-3">
          <input type="search" class="form-control searchbar" placeholder="Search..." />
        </div>
      </div>
    </div>

    <div class="home">
        <div class="content px-5">
      <div class="filters pe-5">
        <div class="pb-3">
          <h4>Filters</h4>
          <p class="clear-filters"><i class="fa-solid fa-xmark"></i> clear filters</p>
        </div>

        <h6>Price</h6>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="filterPrice1" />
          <label class="form-check-label" for="filterPrice1"> $ </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="filterPrice2"
            checked
          />
          <label class="form-check-label" for="filterPrice2"> $$ </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="filterPrice3"
            checked
          />
          <label class="form-check-label" for="filterPrice3"> $$$ </label>
        </div>
        <hr />
        <h6>Cuisine / Food Types</h6>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="filterType1" />
          <label class="form-check-label" for="filterType1"> Asian </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="filterType2"
            checked
          />
          <label class="form-check-label" for="filterType2"> Italian </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="filterType3"
            checked
          />
          <label class="form-check-label" for="filterType3"> American </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="filterType4" />
          <label class="form-check-label" for="filterType4"> French </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="filterType5" />
          <label class="form-check-label" for="filterType5"> Japanese </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="filterType6"
            checked
          />
          <label class="form-check-label" for="filterType6"> Californian </label>
        </div>
        <hr />
        <h6>Ratings</h6>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="filterRatings1" />
          <label class="form-check-label" for="filterRatings1">
            <i class="fa-solid fa-star"></i>
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="filterRatings2" />
          <label class="form-check-label" for="filterRatings2">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="filterRatings3" />
          <label class="form-check-label" for="filterRatings3">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="filterRatings4"
            checked
          />
          <label class="form-check-label" for="filterRatings4">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="filterRatings5" />
          <label class="form-check-label" for="filterRatings5">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </label>
        </div>
      </div>
    </div>

    <!-- Restaurant -->

    <section class="restaurant" id="restaurant">
        <!-- <h1>Find Your <span> Restaurant </span></h1> -->
        <div class="restaurant_box">
            <div class="restaurant_card">
            <div class="restaurant_image">
                 <router-link class="nav-link" to="/restaurant">
                <img
                    src="https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    alt="Restaurant A Image"
                />
                </router-link>
            </div>

            <div class="restaurant_info">
                <h2>Gourmet Corner</h2>
                <p>Address: 123 Republic Street</p>
                <h3>Price Range: Cheap</h3>
                <h3>Genre: Fast Food</h3>
                <div class="restaurant_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                </div>
            </div>
            </div>

            <div class="restaurant_card">
            <div class="restaurant_image">
                <a href="#">
                <img
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    alt="Restaurant A Image"
                />
                </a>
            </div>
            <div class="restaurant_info">
                <h2>Savory Delights</h2>
                <p>Address: 456 Elm Avenue</p>
                <h3>Price Range: Expensive</h3>
                <h3>Genre: Healthy Food</h3>
                <div class="restaurant_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                </div>
            </div>
            </div>

            <div class="restaurant_card">
            <div class="restaurant_image">
                <a href="#">
                <img
                    src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
                    alt="Restaurant A Image"
                />
                </a>
            </div>


            <div class="restaurant_info">
                <h2>Taste Sensations</h2>
                <p>Address: 999 Savor Street</p>
                <h3>Price Range: Moderate</h3>
                <h3>Genre: Pastry Food</h3>
                <div class="restaurant_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
            </div>
            </div>

            <div class="restaurant_card">
            <div class="restaurant_image">
                <a href="#">
                <img
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                    alt="Restaurant A Image"
                />
                </a>
            </div>

            <div class="restaurant_info">
                <h2>Street Cafe</h2>
                <p>Address: 101 Gourmet Road</p>
                <h3>Price Range: Moderate</h3>
                <h3>Genre: Cafe</h3>
                <div class="restaurant_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                </div>
            </div>
            </div>

            <div class="restaurant_card">
            <div class="restaurant_image">
                <a href="#">
                <img
                    src="https://images.unsplash.com/photo-1653542773816-3922a928b28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
                    alt="Restaurant A Image"
                />
                </a>
            </div>
            <div class="restaurant_info">
                <h2>The Gourmet</h2>
                <p>Address: 555 Delight Drive</p>
                <h3>Price Range: Expensive</h3>
                <h3>Genre: Asian Food</h3>
                <div class="restaurant_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                </div>
            </div>
            </div>

            <div class="restaurant_card">
            <div class="restaurant_image">
                <a href="#">
                <img
                    src="https://images.unsplash.com/photo-1565299543923-37dd37887442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1981&q=80"
                    alt="Restaurant A Image"
                />
                </a>
            </div>
            <div class="restaurant_info">
                <h2>Palace of Tastes</h2>
                <p>Address: 369 Foodie Lane</p>
                <h3>Price Range: Cheap</h3>
                <h3>Genre: Pastry Food</h3>
                <div class="restaurant_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
            </div>
            </div>

            <div class="restaurant_card">
            <div class="restaurant_image">
                <a href="#">
                <img
                    src="https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                    alt="Restaurant A Image"
                />
                </a>
            </div>
            <div class="restaurant_info">
                <h2>Yummy Pizza</h2>
                <p>Address: 777 Star Street</p>
                <h3>Price Range: Cheap</h3>
                <h3>Genre: Fast Food</h3>
                <div class="restaurant_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                </div>
            </div>
            </div>

            <div class="restaurant_card">
            <div class="restaurant_image">
                <a href="#">
                <img
                    src="https://images.unsplash.com/photo-1610441009633-b6ca9c6d4be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                    alt="Restaurant A Image"
                />
                </a>
            </div>

            <div class="restaurant_info">
                <h2>Savory Delights</h2>
                <p>Address: 55 Republic Street</p>
                <h3>Price Range: Moderate</h3>
                <h3>Genre: Healthy Food</h3>
                <div class="restaurant_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                </div>
            </div>
            </div>

            <div class="restaurant_card">
            <div class="restaurant_image">
                <a href="#">
                <img
                    src="https://images.unsplash.com/photo-1564327368633-151ef1d45021?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                    alt="Restaurant A Image"
                />
                </a>
            </div>

            <div class="restaurant_info">
                <h2>Cafe Serendipity</h2>
                <p>Address: 123 Republic Street</p>
                <h3>Price Range: Cheap</h3>
                <h3>Genre: Cafe</h3>
                <div class="restaurant_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                </div>
            </div>
            </div>

            <div class="restaurant_card">
            <div class="restaurant_image">
                <a href="#">
                <img
                    src="https://images.unsplash.com/photo-1617196034596-33d3311524c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80"
                    alt="Restaurant A Image"
                />
                </a>
            </div>
            <div class="restaurant_info">
                <h2>Suchi and Movie</h2>
                <p>Address: 587 Star Street</p>
                <h3>Price Range: Moderate</h3>
                <h3>Genre: Asian Food</h3>
                <div class="restaurant_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                </div>
            </div>
            </div>

            <div class="restaurant_card">
            <div class="restaurant_image">
                <a href="#">
                <img
                    src="https://plus.unsplash.com/premium_photo-1675806257134-2d3e30833d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
                    alt="Restaurant A Image"
                />
                </a>
            </div>

            <div class="restaurant_info">
                <h2>Parisian Choice </h2>
                <p>Address: 789 Oak Lane</p>
                <h3>Price Range: Moderate</h3>
                <h3>Genre: Pastry Food</h3>
                <div class="restaurant_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
            </div>
            </div>

            <div class="restaurant_card">
            <div class="restaurant_image">
                <a href="#">
                <img
                    src="https://images.unsplash.com/photo-1625940951329-4e8d09f87692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
                    alt="Restaurant A Image"
                />
                </a>
            </div>

            <div class="restaurant_info">
                <h2>G_star</h2>
                <p>Address: 78 Gourmet Road</p>
                <h3>Price Range: Moderate</h3>
                <h3>Genre: Fast Food</h3>
                <div class="restaurant_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                </div>
            </div>
            </div>

        </div>
    </section>

    </div>

</div>
</template>

<style>

.header-container {
  background-image: url("https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3570&q=80;");
  height: 400px;
  width:100%;

  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.header-content {
  z-index: 2;
}

.header-title {
  color: #fff;
  margin-bottom: 20px;
}

.searchbar {
  max-width: 400px;
  margin: 0 auto;
  border-radius: 25px;
}

.header-container:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.content {
  display: flex;
  padding-top: 40px;
  padding-bottom: 40px;
}


.filters h6 {
  text-wrap: nowrap;
}

.form-check-label {
  font-size: 14px;
  color: #777;
}

.clear-filters {
  font-size: 14px;
  color: #aaa;
}

/* Home_restaurant */

body{
    background-color: rgb(136, 128, 128);
}

.home{
    display: grid;
    grid-template-columns: 160px 1fr; 
    gap: 20px;
    background-image: url("https://images.unsplash.com/photo-1678924587662-d8c63e57eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
    background-size: cover;
}




.restaurant-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
 
}

.restaurant h1 {
  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}

.restaurant h1 span {
  color: #daa00f;
  margin-left: 40px;
  font-family: mv boli;
}

.restaurant_box {
    width:95%;
    margin :0 auto ;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
    padding: 10px 10px;     
}

.restaurant_card {
  width: 325px;
  height: 425px;
  padding-top: 20px;
  margin-right: 30px;
  margin-bottom: 20px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;

}

.restaurant_image {
  width: 300px;
  height: 200px;
  margin: 10px 10px;
  overflow: hidden;
  object-position: center;
}

.restaurant_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s;
  border-radius: 20px;
}
.restaurant_image:hover img {
  transform: scale(1.1);
}

.restaurant_info {
  margin: -10px 20px;
  overflow: hidden;
  object-position: center;
}

.restaurant_box .small_card .fa-heart {
    position : relative;
    top:-200px; 
    right:-270px; 
    font-size: larger;
    color: rgb(136, 128, 128);
    display: flex ;
    transition:0.3s; 
    cursor: pointer;

}

.restaurant_box .small_card:hover .fa-heart {
    color: #da4b0a;
}

.restaurant_info h2 {
 
    width: 60%;
    text-align:center;
    margin:10px auto 10px auto;
    font-size: 22px;
    color:#f9bd26;  
}

.restaurant_info p {
 
    text-align:center;
    margin-top: 8px;
    line-height: 21px;
    font-size: 15px;
}

.restaurant_info h3 {
 
    text-align:center;
    margin-top: 10px;
    font-size:15px;
}

.restaurant .restaurant_box .restaurant_card .restaurant_info .restaurant_star {
 
    text-align:center;
    margin: 10px 0 20px 0;
    color:#fac031; 
}


@media screen and (max-width:768px) {


    /* .filters {
        display: none;
    } */

    .restaurant_box {
        flex-direction: column; 
        padding: 10px auto;
        align-items: center;
    }
    
    .restaurant_card {
        width: 90%; 
        margin-right: 0px; 
        height: auto;
    }

    .restaurant_image {
        /* width: 280px;
        height: 200px;  */
        width: 95%;  
        height: auto; 
        margin: auto; 

    }

     .restaurant_info h2 {
        font-size: 17px;
    }

.restaurant_info p {
 
    font-size: 14px;
}

.restaurant_info h3 {
 
    font-size: 15px;
}  
}
</style>
