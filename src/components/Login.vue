<template>
  <div class="login">
    <h3 class="text-center">Welcome to FPNEKEDE Staff Management System</h3>
    <div class="container form">
      <form>
        <div class="form-group mt-5">
          <label for="email" class="form-label">Email</label>
          <input class="form-control" type="email" name="email" />
        </div>
        <div class="form-group mt-5">
          <label for="password" class="form-label">Pasword</label>
          <input class="form-control" name="password" type="password" />
        </div>
        <button class="mt-5">Sign In</button>
      </form>
      <div class="info mt-5">
        <p>
          Not registered?
          <router-link to="/sign-up">Sign up</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login {
  background-color: #185adb;
  height: 82.2vh;
  color: #fff;
}
.form {
  width: 40%;
  margin: 0 auto;
}
.form form button {
  background-color: white;
  color: #185adb;
  padding: 10px 30px;
  border: none;
}
.form .info a {
    color: #fff;
}
</style>
