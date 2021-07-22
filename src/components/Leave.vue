<template>
  <b-overlay :show="show" rounded="sm">
    <div class="container leave" :aria-hidden="show ? 'true' : null">
      <div class="actions mt-5">
        <h4>Apply for Leave</h4>
        <button @click="toggleForm">New Leave</button>
      </div>
      <form action="" v-if="showForm">
        <div class="form-group mt-2">
          <label for="name" class="form-label">Staff Name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            v-model="leave.name"
          />
        </div>
        <div class="form-group mt-2">
          <label for="code" class="form-label">Staff Code</label>
          <input
            type="text"
            name="code"
            class="form-control"
            v-model="leave.staffCode"
          />
        </div>
        <div class="form-group mt-2">
          <label for="reason" class="form-label">Reason for Leave</label>
          <input
            type="text"
            name="reason"
            class="form-control"
            v-model="leave.reason"
          />
        </div>
        <div class="form-group mt-2">
          <label for="message" class="form-label">Message</label>
          <textarea
            name="message"
            cols="30"
            rows="5"
            class="form-control"
            v-model="leave.message"
          ></textarea>
        </div>
        <button class="mt-2" @click.prevent="leaveApply">Sumbit</button>
      </form>

      <div
        class="leave__table mt-5"
        v-if="this.$store.getters.user.leaves.length > 0"
      >
        <h4>Your leave applications</h4>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Reason</th>
              <th scope="col">Leave</th>
              <th scope="col">Approval Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="leave in this.$store.getters.user.leaves"
              :key="leave._id"
            >
              <th scope="row">{{ leave.reason }}</th>
              <td>{{ leave.message }}</td>
              <td>{{ leave.approved }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p class="text-center">You do not have any leave</p>
      </div>
    </div>
  </b-overlay>
</template>

<script>
export default {
  data() {
    return {
      leave: {
        name: this.$store.getters.user.name,
        staffCode: this.$store.getters.user.staffCode,
        reason: "",
        message: "",
      },
      show: false,
      showForm: false,
    };
  },
  methods: {
    toggleForm() {
      this.showForm = true;
    },
    leaveApply() {
      this.show = true;
      this.$store
        .dispatch("POSTLEAVE", this.leave)
        .then(() => {
          this.$store.dispatch("GETPROFILE");
          this.show = false;
          this.showForm = false;
          this.leave.reason = "";
          this.leave.message = "";
        })
        .catch((err) => {
          console.log(err);
          this.show = true;
        });
    },
  },
};
</script>

<style scoped>
.leave {
  padding: 10px 0;
  margin: 0 auto;
  width: 70%;
  display: block;
}
form {
  width: 100%;
}
button {
  background: #185adb;
  color: #fff;
  border: none;
  padding: 9px 18px;
}
.actions {
  display: flex;
  justify-content: space-between;
}
</style>
