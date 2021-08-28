<template>
  <div class="container">
    <div class="card shadow p-1 mb-5 bg-body rounded mt-5">
      <div class="card-body">
        <div class="row">
          <div class="col-lg-6">
            <p>Name: {{ data.name }}</p>
          </div>
          <div class="col-lg-6">
            <p>Staff Code: {{ data.staffCode }}</p>
          </div>
          <div class="col-lg-6">
            <p>State of Origin: {{ data.stateOfOrigin }} State</p>
          </div>
          <div class="col-lg-6">
            <p>Local Government Area: {{ data.localGovernmentOrigin }}</p>
          </div>
          <div class="col-lg-6">
            <p>Gender: {{ data.gender }}</p>
          </div>
          <div class="col-lg-6">
            <p>Date of Birth: {{ data.dateOfBirth }}</p>
          </div>
          <div class="col-lg-6">
            <p>Department: {{ data.department }}</p>
          </div>
          <div class="col-lg-6">
            <p>Rank: {{ data.rank }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.$store.getters.user,
    };
  },
  methods: {},
  created() {
    this.$store.dispatch("GETPROFILE");
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  border: none;
}
</style>