<template>
<b-overlay :show="show" rounded="sm">
  <div class="login" :aria-hidden="show ? 'true' : null">
    <h3 class="text-center">Welcome to FPNEKEDE Staff Management System</h3>
    <div class="container form">
      <form>
        <div class="form-group mt-5">
          <label for="email" class="form-label">Email</label>
          <input class="form-control" type="email" name="email" v-model="user.email" />
        </div>
        <div class="form-group mt-5">
          <label for="password" class="form-label">Pasword</label>
          <input class="form-control" name="password" type="password" v-model="user.password" />
        </div>
        <button class="mt-5" @click.prevent="loginUser">Sign In</button>
      </form>
      <div class="info mt-5">
        <p>
          Not registered?
          <router-link to="/sign-up">Sign up</router-link>
        </p>
      </div>
    </div>
  </div>
  </b-overlay>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginUser() {
      this.show = true
      this.isLoading = true
      this.$store.dispatch('LOGIN', this.user).then((response) => {
        if (response.data.success) {
          this.isLoading = false
          this.show = false
        }
      }).catch(err => {
        console.log(err)
        this.show = false
      })
    },
  },
};
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
