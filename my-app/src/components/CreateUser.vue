<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7 mrgnbtm">
        <h2>Create User</h2>
        <form>
          <div class="row">
            <div class="form-group col-md-6">
              <label htmlFor="exampleInputEmail1">First Name</label>
              <input
                type="text"
                class="form-control"
                v-model="firstName"
                name="firstname"
                id="firstname"
                aria-describedby="emailHelp"
                placeholder="First Name"
              />
            </div>
            <div class="form-group col-md-6">
              <label htmlFor="exampleInputPassword1">Last Name</label>
              <input
                type="text"
                class="form-control"
                v-model="lastName"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-12">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                type="text"
                class="form-control"
                v-model="email"
                name="email"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
          </div>
          <button type="button" @click="createUser()" class="btn btn-danger">
            Create
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateUser",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
    };
  },
  methods: {
    createUser() {
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      };

      // Make an HTTP POST request to the Node.js backend
      fetch("http://localhost:3000/api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user }), // Wrap the user data in a 'user' object
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("User created:", data);

          // Optionally, you can perform additional actions here after receiving the response
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      this.clearForm();
    },
    clearForm() {
      this.firstName = "";
      this.lastName = "";
      this.email = "";
    },
  },
};
</script>
