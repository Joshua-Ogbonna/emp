<template>
  <div class="container leave">
    <h4>Submit a Complaint</h4>
    <form action="">
        <div class="form-group mt-2">
            <label for="name" class="form-label">Staff Name</label>
            <input type="text" name="name" class="form-control">
        </div>
        <div class="form-group mt-2">
            <label for="code" class="form-label">Staff Code</label>
            <input type="text" name="code" class="form-control">
        </div>
        
        <div class="form-group mt-2">
            <label for="message" class="form-label">Complaint</label>
            <textarea name="message" cols="30" rows="5" class="form-control"></textarea>
        </div>
        <button class="mt-2">Sumbit</button>
    </form>
  </div>
</template>

<script>
export default {};
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
