<template>
  <div class="home">
    <!-- Title Bar Section -->
    <header>
      <!-- Navigation Bar -->
      <nav class="navbar">
        <!-- Logo (Link to Home) -->
        <router-link to="/">
          <img src="~/assets/logo.png" alt="Logo" class="logo">
        </router-link>

        <!-- Navigation Links -->
        <ul class="nav-links">
          <li><router-link to="/news">News</router-link></li>
          <li><router-link to="/wiki">Wiki</router-link></li>
          <li><router-link to="/downloads">Downloads</router-link></li>
          <!-- Add more links as needed -->
        </ul>
      </nav>
    </header>

    <!-- Horizontal Cycling Images Section -->
    <section class="image-slider">
      <!-- Horizontal image slider or cycling images -->
      <!-- Use a carousel or image slider component to display cycling images -->
      <!-- Example: -->
      <div class="slider">
        <img src="~/assets/image1.jpg" alt="Image 1">
        <img src="~/assets/image2.jpg" alt="Image 2">
        <img src="~/assets/image3.jpg" alt="Image 3">
      </div>
    </section>

    <!-- Embedded Video Section -->
    <section class="video">
      <!-- Embedded video from YouTube or other platforms -->
      <!-- Example: -->
      <div class="video-container">
        <iframe width="800" height="500" src="https://www.youtube.com/embed/VRUl4zM37H4" frameborder="0" allowfullscreen></iframe>
        <!-- Replace VIDEO_ID with the ID of your YouTube video -->
      </div>
    </section>

    <!-- News, Patch Notes, and Updates Section -->
    <section class="updates">
      <!-- News, Patch Notes, and Updates content -->
      <h2>Latest News and Updates</h2>
      <!-- Example: -->
      <div class="news">
        <h3>Recent Patch Notes</h3>
        <ul>
          <li><a href="/patches/patch1">Patch 1 - Title</a></li>
          <li><a href="/patches/patch2">Patch 2 - Title</a></li>
          <!-- Add more patch notes or news -->
        </ul>
      </div>
      <!-- You can add more sections for news, updates, or server announcements -->
    </section>

    <!-- Footer Section -->
    <footer>
      <!-- Your footer content -->
      <!-- Example: -->
      <p>&copy; 2023 YourMinecraftServerName. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  // Add any necessary Vue component logic or methods
}
</script>


<style scoped>
/* Add scoped styles for your index.vue component */
/* Customize styling based on your design preferences */

/* Global styles */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f4f4;
  color: #333;
}

/* Main container */
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Header styles */
header {
  text-align: center;
  padding: 20px 0;
  background-color: #333; /* Dark gray background color */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #fff; /* White text color */
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 100px; /* Adjust the logo size as needed */
}

.nav-links {
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
}

.nav-links li {
  margin-right: 20px;
}

.nav-links li:last-child {
  margin-right: 0;
}

.router-link-exact-active {
  /* Add styles for active links if needed */
  /* Example: font-weight: bold; */
}

/* Title styles */
h1 {
  font-size: 36px;
  margin: 0;
  color: #555;
}

/* Image slider styles */
.image-slider {
  margin-top: 20px;
  overflow: hidden;
}

.slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.slider img {
  flex: 0 0 auto;
  width: 100%;
  scroll-snap-align: start;
}

/* Video container styles */
.video {
  margin-top: 20px;
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* Aspect ratio 16:9 for responsive videos */
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Updates section styles */
.updates {
  margin-top: 20px;
}

.updates h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #444;
}

.updates ul {
  list-style: none;
  padding: 0;
}

.updates li {
  margin-bottom: 5px;
}

/* Footer styles */
footer {
  text-align: center;
  padding: 20px 0;
  background-color: #333; /* Dark gray background color */
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  color: #fff; /* White text color */
}
</style>
