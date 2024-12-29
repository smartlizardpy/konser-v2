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
.btn{
  font-size:15px
}
.menu{
  margin-top:20%;

}
.greet{
  text-align: center;
  margin-bottom: 5%;
}


</style>