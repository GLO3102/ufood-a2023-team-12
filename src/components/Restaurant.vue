<template>
<div class="restaurant">


  <div class="restaurant_info">
    <!-- Nom du restaurant -->
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

    <!-- Conteneur flex pour les éléments principaux -->
    <div class="restaurant_flex_container">


      <!-- Boîte pour les détails -->
      <div class="restaurant_details">
        <h3>Genre: Fast Food</h3>
        <h3>Price Range: Cheap</h3>
        <div class="restaurant_star">
          <h3>Reviews:</h3>
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star-half-stroke"></i></span>
        </div>
        <p>Address: 123 Republic Street</p>
        <p>Phone: 555-555-5555</p>
        <p>Hours: Mon-Sat: 10:00 AM - 8:00 PM</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.1661655905073!2d-82.60887542352775!3d41.261717803780115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883a3c4b2518bb67%3A0x3068af63e0b6f8e2!2s123%20Republic%20St%2C%20Norwalk%2C%20OH%2044857%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sca!4v1695670880939!5m2!1sfr!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>
  </div>

</div>
</template>

<style scoped>

.restaurant {
  background-image: url("https://images.unsplash.com/photo-1678924587662-d8c63e57eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
  background-size: cover;

}

.mosaic {
  display: flex;
  width: auto;
  height: 400px;
  margin: 0 200px;
}

.big-img {
  flex: 1;

}

.big-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;



}

.small-img {
  flex: 1;
  overflow:hidden;
  justify-content: space-between;
  object-fit: cover;
  align-items: flex-start;
}

.small-img img {
  height: 50%;
  max-width: 100%;
  flex-wrap: wrap;

  flex-grow: 1;
}


.restaurant_info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:  auto;

}


.restaurant_flex_container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;

}


.restaurant_box {
  flex: 1;
  margin: 10px;
  padding: 10px;
}

.restaurant_image {
  width: 100%;
  height: auto;
}


.restaurant_details {
  flex: 1;
  margin: 10px;
  padding: 20px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}


.restaurant_map {
  flex: 1;
  margin: 10px;
  padding: 10px;
}

.restaurant_star {
  display: flex;
  align-items: center;
}


</style>
<script setup>
</script>
