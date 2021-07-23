<template>
  <b-overlay :show="show" rounded="sm">
    <div class="signup" :aria-hidden="show ? 'true' : null">
      <h3 class="text-center">Welcome to FPNEKEDE Staff Management System</h3>
      <div class="container form">
        <form>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group mt-3">
                <label for="Name" class="form-label">Name</label>
                <input
                  class="form-control"
                  type="text"
                  name="text"
                  v-model="staff.name"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group mt-3">
                <label for="email" class="form-label">Email</label>
                <input
                  class="form-control"
                  type="email"
                  name="email"
                  v-model="staff.email"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group mt-3">
                <label for="gender" class="form-label">Gender</label>
                <select class="form-select" v-model="staff.gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group mt-3">
                <label for="department" class="form-label">Department</label>
                <input
                  class="form-control"
                  for="department"
                  v-model="staff.department"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group mt-3">
                <label for="rank" class="form-label">Rank/Status</label>
                <input class="form-control" for="rank" v-model="staff.rank" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group mt-3">
                <label for="dateOfBirth" class="form-label"
                  >Date of Birth</label
                >
                <input
                  class="form-control"
                  type="date"
                  name="dateOfBirth"
                  v-model="staff.dateOfBirth"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group mt-3">
                <label for="stateOfOrigin" class="form-label"
                  >State of Origin</label
                >
                <input
                  class="form-control"
                  type="text"
                  name="stateOfOrigin"
                  v-model="staff.stateOfOrigin"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group mt-3">
                <label for="localGovernment" class="form-label"
                  >Local Government Origin</label
                >
                <input
                  class="form-control"
                  type="text"
                  name="localGovernment"
                  v-model="staff.localGovernmentOrigin"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group mt-3">
                <label for="code" class="form-label">Staff Code</label>
                <input
                  type="text"
                  name="code"
                  class="form-control"
                  v-model="staff.staffCode"
                />
              </div>
            </div>
            <div class="col-lg">
              <div class="form-group mt-3">
                <label for="password" class="form-label">Pasword</label>
                <input
                  class="form-control"
                  name="password"
                  type="password"
                  v-model="staff.password"
                />
              </div>
            </div>
          </div>

          <button class="mt-3" @click.prevent="signUpUser">Sign In</button>
        </form>
        <div class="info mt-3">
          <p>
            Have an account?
            <router-link to="/">Login</router-link>
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
      staff: {
        name: "",
        email: "",
        gender: "",
        department: "",
        rank: "",
        dateOfBirth: "",
        stateOfOrigin: "",
        localGovernmentOrigin: "",
        staffCode: "",
        password: "",
      },
      show: false,
    };
  },
  methods: {
    signUpUser() {
      this.show = true;
      this.$store
        .dispatch("SIGNUP", this.staff)
        .then((response) => {
          if (response.data.success) {
            this.isLoading = false;
            this.show = false;
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.signup {
  background-color: #185adb;
  height: 100vh;
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
