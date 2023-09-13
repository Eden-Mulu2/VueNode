
<template>
  <div class="display-board">
    <h4>Users Created</h4>
    <div class="number">
      {{ numberOfUsers }}
    </div>
    <div class="btn">
      <button @click="getAllUsers" type="button" class="btn btn-primary">
        Get all Users
      </button>
      <button @click="confirmDelete" type="button" class="btn btn-danger">
        Delete All Users
      </button>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "DisplayBoard",
  props: ["numberOfUsers"],
  methods: {
    getAllUsers() {
      // Instead of navigating, emit an event or call a method to display users on the same route
      this.$router.push("/user-list");
    },
    confirmDelete() {
      // Show a confirmation dialog
      const confirmed = window.confirm("Are you sure you want to delete all users?");
      if (confirmed) {
        // User confirmed, proceed with deletion
        this.deleteAllUsers();
      }
    },
    deleteAllUsers() {
      // Make an API request to delete all users
      // You should implement this API endpoint on your backend
      // Example using Axios:
      axios
        .delete("http://localhost:3000/api/users") // Replace with your actual API endpoint
        .then((response) => {
          // Handle success (e.g., show a success message)
          console.log("All users deleted successfully!");
          console.log(response.data);
          this.$router.push("/delete-success");
        })
        .catch((error) => {
          // Handle errors (e.g., show an error message)
          console.error("Error deleting users:", error);
        });
    },
  },
};
</script>
