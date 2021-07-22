<template>
<b-overlay :show="show" rounded="sm">
  <div class="container leave" :aria-hidden="show ? 'true' : null">
    <h4>Apply for Leave</h4>
    <form action="">
        <div class="form-group mt-2">
            <label for="name" class="form-label">Staff Name</label>
            <input type="text" name="name" class="form-control" v-model="leave.name">
        </div>
        <div class="form-group mt-2">
            <label for="code" class="form-label">Staff Code</label>
            <input type="text" name="code" class="form-control" v-model="leave.staffCode">
        </div>
        <div class="form-group mt-2">
            <label for="reason" class="form-label">Reason for Leave</label>
            <input type="text" name="reason" class="form-control" v-model="leave.reason">
        </div>
        <div class="form-group mt-2">
            <label for="message" class="form-label">Message</label>
            <textarea name="message" cols="30" rows="5" class="form-control" v-model="leave.message"></textarea>
        </div>
        <button class="mt-2" @click.prevent="leaveApply">Sumbit</button>
    </form>
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
                reason: '',
                message: ''
            },
            show: false
        }
    },
    methods: {
        leaveApply() {
            this.show = true
            this.$store.dispatch('POSTLEAVE', this.leave).then(() => {
                this.show = false
                this.$store.dispatch('GETPROFILE')
            }).catch(err => {
                console.log(err)
                this.show= true
            })
        }
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
form button {
    background: #185adb;
    color: #fff;
    border: none;
    padding: 9px 18px;
}
</style>
