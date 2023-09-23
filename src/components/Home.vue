<template>
<div>
    <div class="header-container">
      <div class="text-center header-content">
        <h1 class="header-title alt-font">Taste the World. One Restaurant at a Time.</h1>
        <div class="mt-3">
          <input type="text" class="form-control searchbar" placeholder="Search..." />
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
        <h1>Find Your <span> Restaurant </span></h1>
        <ul class="restaurant_box">
            <div class="restaurant_card">
            <div class="restaurant_image">
                <a href="#">
                <img
                    src="https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    alt="Restaurant A Image"
                />
                </a>
            </div>

            <div class="restaurant_info">
                <h2>Restaurant A</h2>
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
                <h2>Restaurant A</h2>
                <p>Address: 123 Republic Street</p>
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
                <h2>Restaurant A</h2>
                <p>Address: 123 Republic Street</p>
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
                <h2>Restaurant A</h2>
                <p>Address: 123 Republic Street</p>
                <h3>Price Range: Moderate</h3>
                <h3>Genre: Cafe</h3>
                <div class="restaurant_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                </div>
            </div>
            </div>
        </ul>

        <ul class="restaurant_box">
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
                <h2>Restaurant A</h2>
                <p>Address: 123 Republic Street</p>
                <h3>Price Range: Expensive</h3>
                <h3>Genre: Suchi</h3>
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
                <h2>Restaurant A</h2>
                <p>Address: 123 Republic Street</p>
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
                <h2>Restaurant A</h2>
                <p>Address: 123 Republic Street</p>
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
                <h2>Restaurant A</h2>
                <p>Address: 123 Republic Street</p>
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
        </ul>

        <ul class="restaurant_box">
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
                <h2>Restaurant A</h2>
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
                <h2>Restaurant A</h2>
                <p>Address: 123 Republic Street</p>
                <h3>Price Range: Moderate</h3>
                <h3>Genre: Suchi</h3>
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
                    src="https://images.unsplash.com/photo-1558326567-98ae2405596b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1959&q=80"
                    alt="Restaurant A Image"
                />
                </a>
            </div>

            <div class="restaurant_info">
                <h2>Restaurant A</h2>
                <p>Address: 123 Republic Street</p>
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
                <h2>Restaurant A</h2>
                <p>Address: 123 Republic Street</p>
                <h3>Price Range: Moderate</h3>
                <h3>Genre: Fast Food</h3>
                <div class="restaurant_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                </div>
            </div>
            </div>
        </ul>
    </section> 
            
    </div>

</div>
</template>

<style>
.header-container {
  background-image: url("https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3570&q=80;");
  height: 400px;
  
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
</style>
