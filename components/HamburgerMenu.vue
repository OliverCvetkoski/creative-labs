<template>
  <header>
    <input type="checkbox" id="menu-toggle" class="menu-toggle-checkbox" />
    <label for="menu-toggle" class="menu-toggle-label">
      <div class="menu-icon">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </label>
    <nav class="menu">
      <ul class="flex">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #33333362;
}

.menu-toggle-checkbox {
  display: none;
}

.menu-toggle-label {
  display: none;
}

.menu-icon {
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bar {
  width: 30px;
  height: 4px;
  background-color: white;
  transition: 0.4s;
}

.menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  top: 0;
  right: 0; /* Changed from -250px to 0 for desktop */
  width: 100%;
  height: 5em;
  background-color: transparent;
  transition: 0.4s;
}

.menu ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  margin-right: 2em;
}

.menu li {
  display: flex;
  justify-content: center;
  padding: 15px;
}

.menu a {
  text-decoration: none;
  color: #fff;
  font-size: 18px;
}

/* Media query to show the hamburger menu on screens smaller than 768px */
@media (max-width: 768px) {
  .menu {
    display: none;
    width: 250px;
    height: 100vh;
    background-color: black;
    position: absolute;
    z-index: 1;
  }

  .menu ul {
    display: block;
    margin-top: 5em;
  }

  .menu-toggle-label {
    display: block;
    position: fixed;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 2;
  }

  .menu-toggle-checkbox:checked + .menu-toggle-label .bar:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }

  .menu-toggle-checkbox:checked + .menu-toggle-label .bar:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle-checkbox:checked + .menu-toggle-label .bar:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }

  .menu-toggle-checkbox:checked ~ .menu {
    display: block;
  }
}
</style>
