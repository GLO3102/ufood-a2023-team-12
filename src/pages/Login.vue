<template>
  <div
    class="d-flex flex-column h-75 justify-content-center align-items-center"
  >
    <div>
      <h2 class="text-light">Login</h2>
      <form @submit.prevent="handleSubmit" class="form-container">
        <div class="form-group">
          <label for="email" class="text-light">Email</label>
          <input type="email" id="email" v-model="email" class="form-control" />
        </div>

        <div class="form-group">
          <label for="password" class="text-light">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
          />
        </div>

        <button type="submit" class="btn button-yellow mt-3">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { useRouter } from "vue-router";
import { login } from "../api/user";

const email = ref("");
const password = ref("");
const router = useRouter();
const emit = defineEmits(["asLoggedIn"]);

const handleSubmit = () => {
  const user = {
    rating: 0,
    followers: [],
    following: [],
    name: "John Doe",
    email: "john.doe@gmail.com",
    id: "655049c55d5104359a2e6c19",
  };

  localStorage.setItem("user", JSON.stringify(user));
  emit("asLoggedIn", { isLoggedIn: true });
  router.push("/");
};
</script>

<style>
.h-75 {
  margin-top: 200px;
}

.btn.button-yellow {
  background-color: #daa00f;
  color: #fff;
}

.form-container {
  padding: 1rem;
  border: 1px solid #000;
  border-radius: 0.5rem;
  background-color: #333;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 350px;
}

.signup-link {
  text-decoration: underline;
  font-weight: 600;
}
</style>
