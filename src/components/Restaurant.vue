<template>
<div class="restaurant">
  <div class="restaurant_info">
      <div class="restaurant_name">
        <h2>Gourmet Corner</h2>
      </div>
      <div class="mosaic" id="mosaic">
        <div class="big-img">
          <img
            src="https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            alt=""
          />
        </div>
        <div class="small-img">
          <img
            src="https://images.unsplash.com/photo-1612392061981-9d086fe894ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1622431062669-ed38267b6de5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1613985216255-a26ecf1df4a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            alt=""
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1683657860186-6afce5df3c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt=""
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1683657860305-86cc79472f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1922&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1598679253544-2c97992403ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt=""
          />
        </div>
      </div>
      <div class="restaurant_flex_container">
        <div class="restaurant_details">
          <h3>Genre: Fast Food</h3>
          <h3>Price Range: Cheap</h3>
          <div class="restaurant_star">
            <h3>Reviews:</h3>
            <span><font-awesome-icon icon="fa-solid fa-star"></font-awesome-icon></span>
            <span><font-awesome-icon icon="fa-solid fa-star"></font-awesome-icon></span>
            <span><font-awesome-icon icon="fa-solid fa-star"></font-awesome-icon></span>
            <span><font-awesome-icon icon="fa-solid fa-star-half-stroke "></font-awesome-icon></span>
          </div>
          <h3>Address: 123 Republic Street</h3>
          <h3>Phone: 555-555-5555</h3>
          <h3>Hours: Mon-Sat: 10:00 AM - 8:00 PM</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3506223.7967033475!2d-80.61081281458323!3d43.727125527406656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4cb896c469ff32f9%3A0x15feb853bd2f8247!2sUniversit%C3%A9%20Laval%2C%20Rue%20de%20l&#39;Universit%C3%A9%2C%20Qu%C3%A9bec%20City%2C%20QC!3m2!1d46.781746299999995!2d-71.2747424!4m5!1s0x883a3c4b2518bb67%3A0x3068af63e0b6f8e2!2s123%20Republic%20St%20Norwalk%2C%20OH%2044857%20%C3%89tats-Unis!3m2!1d41.261713799999995!2d-82.6063005!5e0!3m2!1sen!2sca!4v1695849772118!5m2!1sen!2sca" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>      
        </div>
    </div>
  </div>
</div>
</template>

<style scoped>

.restaurant {
  margin-top: 50px;
  background-image: url("https://images.unsplash.com/photo-1678924587662-d8c63e57eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
  background-size: cover;
}

.restaurant_info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 200px;
}

.restaurant_name  {
  white-space: nowrap; 
  width: 100%;
}

.restaurant_name h2{
  font-size: 4vw;
}

.mosaic {
  display: flex;
  flex-wrap: wrap;
  height: 400px;
  overflow: hidden;
  margin-bottom: 20px;
}

.big-img {
  flex: 1 1 50%; 
  height: 400px;
  margin-top: 2px;
}

.small-img {
  flex: 1 1 50%; 
  height: 400px;
  display: flex;
  flex-wrap: wrap;
}

.small-img img {
  height: 50%; 
  object-fit: cover;
  flex-grow: 1;
  margin: 2px;
}

.big-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.restaurant_flex_container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
}

.restaurant_details {
  flex: 1;
  padding: 20px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 10px solid transparent;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: rgba(255,255,255,0.5);
}

.restaurant_star {
  display: flex;
  align-items: center;
}

iframe {
    width: 70%;       
    height: 600px;     
    margin-top:30px;
}

@media (max-width: 820px) {


    .restaurant_info {
        margin: 0 20px; 
    }
    iframe {
        height: 400px;  
    }
  }

@media (max-width: 480px) {

  .restaurant_name h2{
    font-size: 5vw;
    }

  .mosaic{
    height:200px;
  }

  .big-img{
    height:200px;
  }
    
  .restaurant_info {
        margin: 0 20px; 
    }
  
    iframe{
      height:300px;
      width: 90%;
    }
}

</style>

