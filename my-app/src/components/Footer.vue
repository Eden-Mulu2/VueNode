<template>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <p>&copy; 2016 my Website</p>
            <p>Contact: eden@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 5px 0;
    font-size: 12px;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  
  .footer p {
    margin: 0;
    padding: 2px 0;
  }
  </style>
  