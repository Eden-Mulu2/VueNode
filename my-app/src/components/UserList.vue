<template>
  <div>
    <h4 class="mb-4 text-center mt-4">User List</h4>
    <div class="mx-auto" style="max-width: 70%;">
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div class="fw-bold" style="width: 33.33%;">First Name</div>
          <div class="fw-bold" style="width: 33.33%;">Last Name</div>
          <div class="fw-bold" style="width: 33.33%;">Email</div>
        </li>
        <li
          v-for="user in userList"
          :key="user.email"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <div style="width: 33.33%;">{{ user.firstName }}</div>
          <div style="width: 33.33%;">{{ user.lastName }}</div>
          <div style="width: 33.33%;">{{ user.email }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>




<script>
import axios from 'axios';

export default {
  name: 'UserList',
  data() {
    return {
      userList: [],
    };
  },
  mounted() {
    // Fetch user data from your server's API endpoint
    axios.get('/api/users')
      .then(response => {
        this.userList = response.data; // Assuming your data structure matches the response
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  },
};
</script>
