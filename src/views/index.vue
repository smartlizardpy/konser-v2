<script setup>

</script>

<template>
  <div class="header">
    <h1>Piyano Ve Keman Konseri</h1>
    <p>Canlı yayını izlemek için <a href="live"> tıklayın </a></p>
  </div>

  <div class="center menu">
    <h1 class="greet">Hoşgeldiniz</h1>
    <a class="btn" href="/liste">Öğrenci Listesi</a>
    <a class="btn" href="/live"> Canlı Yayın</a>
    <a class="btn" href="/map"> Nasıl Giderim?</a>
  </div>

  <div class="footer bg-primary">
    <p> Made With ❤️ by Ozan Kaygusuz</p>
  </div>
</template>

<style>
.center {
  margin: auto;
  width: 50%;
  height: 50%;
}

.btn {
  font-size: 15px;
  width: 100%; /* Ensure buttons take full width */
  max-width: 400px; /* Limit max width for larger screens */
  margin: 10px auto; /* Center buttons and add spacing */
}

.menu {
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.greet {
  text-align: center;
  margin-bottom: 5%;
}

/* Responsive styles */
@media (max-width: 768px) {
  .center {
    width: 90%;
    height: auto;
  }

  .btn {
    font-size: 14px;
    padding: 10px 15px;
    max-width: 100%;
  }

  .menu {
    margin-top: 10%;
  }

  .footer {
    font-size: 14px;
    padding: 10px;
  }
}
</style>