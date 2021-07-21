<template>
  <div class="signup">
    <h3 class="text-center">Welcome to FPNEKEDE Staff Management System</h3>
    <div class="container form">
      <form>
        <div class="row">
          <div class="col-lg-6">
            <div class="form-group mt-3">
              <label for="Name" class="form-label">Name</label>
              <input class="form-control" type="text" name="text" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mt-3">
              <label for="email" class="form-label">Email</label>
              <input class="form-control" type="email" name="email" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mt-3">
              <label for="gender" class="form-label">Gender</label>
              <select class="form-select">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mt-3">
              <label for="department" class="form-label">Department</label>
              <input class="form-control" for="department" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mt-3">
              <label for="rank" class="form-label">Rank/Status</label>
              <input class="form-control" for="rank" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mt-3">
              <label for="dateOfBirth" class="form-label">Date of Birth</label>
              <input class="form-control" type="date" name="dateOfBirth" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mt-3">
              <label for="stateOfOrigin" class="form-label"
                >State of Origin</label
              >
              <input class="form-control" type="text" name="stateOfOrigin" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mt-3">
              <label for="localGovernment" class="form-label"
                >Local Government Origin</label
              >
              <input class="form-control" type="text" name="localGovernment" />
            </div>
          </div>
          <div class="col-lg">
            <div class="form-group mt-3">
              <label for="password" class="form-label">Pasword</label>
              <input class="form-control" name="password" type="password" />
            </div>
          </div>
        </div>

        <button class="mt-3">Sign In</button>
      </form>
      <div class="info mt-3">
        <p>
          Have an account?
          <router-link to="/">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.signup {
  background-color: #185adb;
  height: 82.2vh;
  color: #fff;
}
.form {
  width: 60%;
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
