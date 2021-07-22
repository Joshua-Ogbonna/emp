<template>
  <b-overlay :show="show" rounded="sm">
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      This alert will dismiss after {{ dismissCountDown }} seconds...
    </b-alert>
    <div class="container leave" :aria-hidden="show ? 'true' : null">
      <div class="actions">
        <h4>Submit a Complaint</h4>
        <button @click="toggleForm">Add Complaint</button>
      </div>
      <form action="" v-if="showForm">
        <div class="form-group mt-2">
          <label for="name" class="form-label">Staff Name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            v-model="complaint.name"
          />
        </div>
        <div class="form-group mt-2">
          <label for="code" class="form-label">Staff Code</label>
          <input
            type="text"
            name="code"
            class="form-control"
            v-model="complaint.staffCode"
          />
        </div>

        <div class="form-group mt-2">
          <label for="message" class="form-label">Complaint</label>
          <textarea
            name="message"
            cols="30"
            rows="5"
            class="form-control"
            v-model="complaint.complaint"
          ></textarea>
        </div>
        <button class="mt-2" @click.prevent="postComplaint">Sumbit</button>
      </form>

      <!-- Complaints table -->
      <div class="complaints" v-if="!showForm">
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Complaint</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(complain, index) in this.$store.getters.user.complaints" :key="index">
              <th scope="row"> {{ index == 0 ? 1 : index+= 1 }} </th>
              <td>{{ complain.complaint}}</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </b-overlay>
</template>

<script>
export default {
  data() {
    return {
      complaint: {
        name: this.$store.getters.user.name,
        staffCode: this.$store.getters.user.staffCode,
        complaint: "",
      },
      show: false,
      showForm: false,
      dismissSecs: 5,
      dismissCountDown: 0,
    };
  },
  methods: {
    postComplaint() {
      this.show = true;
      this.$store.dispatch("POSTCOMPLAINT", this.complaint).then(() => {
        this.$store.dispatch("GETPROFILE");
        this.show = false;
        this.complaint = "";
        this.showForm = false;
        this.showAlert();
      });
    },
    toggleForm() {
      this.showForm == false ? (this.showForm = true) : (this.showForm = false);
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>

<style scoped>
.leave {
  padding: 10px 0;
  margin: 0 auto;
  width: 100%;
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
