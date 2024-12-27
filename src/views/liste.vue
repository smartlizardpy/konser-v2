<template>
  <div>
    <header class="head bg-primary">
      <a href="/" class="back-button">← Back</a>
      <h1 class="header-title">Student Performances</h1>
    </header>
    <ul class="hkm">
      <li v-for="(student, name) in students" :key="name">
        <h2>{{ name }}</h2>
        <p><strong>Instrument:</strong> {{ student.instrument }}</p>
        <ul>
          <li v-for="(piece, index) in student.pieces" :key="index">
            <p>
              <strong>Piece:</strong> {{ piece.piece }} <br />
              <strong>Composer:</strong> {{ piece.composer }}
              <span v-if="piece.accompanist">
                <br /><strong>Accompanist:</strong> {{ piece.accompanist }}
              </span>
            </p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="footer bg-primary">
    <p> Made With ❤️ by Ozan Kaygusuz</p>
  </div>
</template>
<script setup>


</script>
<script>
export default {
  data() {
    return {
      students: {
        "Deniz Gürşen": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. Thompson", "piece": "Mary Had A Little Lamb", "accompanist": "Defne Gürşen" },
            { "composer": "J. Thompson", "piece": "Yankee Doodle" }
          ]
        },
        "Mira Çongara": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. Thompson", "piece": "Bells" }
          ]
        },
        "Nazlıhan Çakıroğlu": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. Thompson", "piece": "Old MacDonald" }
          ]
        },
        "Aslıhan Çakıroğlu": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. Thompson", "piece": "Mary Had A Little Lamb" },
            { "composer": "S. Suzuki", "piece": "Twinkle Twinkle Little Star (4 El)" }
          ]
        },
        "Mete Erberdi": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. Offenbach", "piece": "Barkarole" },
            { "composer": "A. Ifukube", "piece": "Godzilla (Main Theme)" }
          ]
        },
        "Özgü Lena Ferhanoğlu": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. Thompson", "piece": "Old MacDonald" },
            { "composer": "J. Offenbach", "piece": "Can Can" }
          ]
        },
        "Layra Bayraktar": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "Anonymous", "piece": "Happy Birthday Song" }
          ]
        },
        "Defne Bilge Ateş": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. Thompson", "piece": "Row, Row" },
            { "composer": "J. Thompson", "piece": "Gün Doğarken" }
          ]
        },
        "Selin Acer": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. Thompson", "piece": "Ten Little Indians" },
            { "composer": "L. V. Beethoven", "piece": "Ode to Joy" }
          ]
        },
        "Noyan Okan": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. Thompson", "piece": "Gayda Çalgıcıları" },
            { "composer": "Anonymous", "piece": "Flea Waltz" }
          ]
        },
        "Güneş Demir": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "German Folk Song", "piece": "Lightly Row" },
            { "composer": "Y. Johnson", "piece": "Dance For Two", "accompanist": "Ateş Demir" }
          ]
        },
        "Doğa Adebalı": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. Thompson", "piece": "Bir Varmış Bir Yokmuş" },
            { "composer": "A. Diabelli", "piece": "Piano Duet Opus 149 No: 6" }
          ]
        },
        "Lara Aybar & Defne Gürşen": {
          "instrument": "Piano and Violin",
          "pieces": [
            { "composer": "S. Suzuki", "piece": "Twinkle Twinkle Variation A" }
          ]
        },
        "Ahmet Kartal Çakıroğlu": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. S. Bach", "piece": "Musette" }
          ]
        },
        "İpek Gedik": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "Anonymous", "piece": "Flea Waltz" }
          ]
        },
        "İpek Kuru": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "S. Suzuki", "piece": "Allegro" }
          ]
        },
        "Defne Kaygusuz": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "W.A. Mozart", "piece": "Andante Grazioso" },
            { "composer": "A. Diabelli", "piece": "Piano Duet Op.149 No: 5" }
          ]
        },
        "Defne Uluçay": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "Traditional", "piece": "When the Saints Go Marchin’ in" },
            { "composer": "L. V. Beethoven", "piece": "Ode to Joy" }
          ]
        },
        "Elif Beyza Yılmaz": {
          "instrument": "Keman",
          "pieces": [
            { "composer": "S. Suzuki", "piece": "Lightly Row" },
            { "composer": "S. Suzuki", "piece": "Song of the Wind" }
          ]
        },
        "Mehmet Cem Öztürk": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. Strauss", "piece": "Radetzky March" }
          ]
        },
        "Mira Cığızoğlu": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "W. A. Mozart", "piece": "Eine Kleine Nachtmusik" }
          ]
        },
        "Defne Gürşen": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "W. A. Mozart", "piece": "Rondo alla Turca" }
          ]
        },
        "Lara Aybar": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "L. V. Beethoven", "piece": "Für Elise" },
            { "composer": "J. Brahms", "piece": "Hungarian Dance" }
          ]
        },
        "Ateş Demir": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "L. V. Beethoven", "piece": "Sonatina in G Major" }
          ]
        },
        "Ayka Blazhenkova": {
          "instrument": "Violin",
          "pieces": [
            { "composer": "J. S. Bach", "piece": "Gavotte in G Minor", "accompanist": "Ateş Demir" },
            { "composer": "K. Bohm", "piece": "Perpetual Motion - Little Suite No.6" }
          ]
        },
        "Lina Göğüş": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "R. Schumann", "piece": "Wild Rider" },
            { "composer": "E. Grinko", "piece": "Valse" }
          ]
        },
        "Dila Okay": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "F. Chopin", "piece": "Waltz in A Minor, B 150" }
          ]
        },
        "Mina Nehir Tekin": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. S. Bach", "piece": "Prelude No:3 from 12 Short Preludes" },
            { "composer": "W. A. Mozart", "piece": "Sonata No.16, in C Major, K 545" }
          ]
        }
      }

    };
  }
};


</script>

<style scoped>
h1 {
  text-align: center;
}

h2 {
  color: #2c3e50;
}

p {
  margin: 5px 0;
}

.head {
  display: flex;
  align-items: center;

  padding: 10px 15px;
  border-bottom: 1px solid #ddd;
}

.back-button {
  background-color: #FFF2C2;
  color: rgb(2, 0, 0);
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 15px;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #ffe483;
}

.header-title {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: #333;
}
.hkm{
  margin-bottom: 3cm;
}
</style>
