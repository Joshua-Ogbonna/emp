<template>
  <div class="dashboard">
    <div class="container mt-3">
      <div class="profile">
        <router-link to="/dashboard/profile">
          <h3>Staff Records</h3>
        </router-link>
      </div>

      <div class="leave__management">
        <router-link to="/dashboard/leave">
          <h3>Leave Applications</h3>
        </router-link>
      </div>

      <div class="complaint__management">
        <router-link to="complaints">
          <h3>Complaints</h3>
        </router-link>
      </div>

      <div class="self__service">
        <router-link to="/dashboard/">
          <h3>Attendance</h3>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  width: 100vw;
  justify-content: space-between;
}
.profile,
.leave__management,
.self__service,
.complaint__management {
  width: 24%;
  height: 20%;
  background: #185adb;
  text-align: center;
  padding: 20px 20px;
  color: #fff;
  cursor: pointer;
}
a {
    text-decoration: none;
    color: inherit;
}
</style>
