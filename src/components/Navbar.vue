<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" width="200" height="70" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" v-if="this.$store.getters.isLoggedIn">
              <a class="nav-link active"
                >Welcome {{ this.$store.getters.user.name }}
              </a>
            </li>
            <li
              class="nav-item"
              v-if="this.$store.getters.isLoggedIn"
              style=" cursor: pointer; "
              @click="logout"
            >
              <a class="nav-link active">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('SIGNOUT')
    }
  },
}
</script>


<style scoped></style>
