<template>
  <div>
    <!-- Fixed Header -->
    <header class="head bg-primary">
      <a href="/" class="back-button">← Geri</a>
      <h1 class="header-title">Student Performances</h1>
      <a href="https://chatgpt.com/g/g-6759c59c545081919a5d4d18fcd844f7-concert-gpt" class="ai-button" target="_blank"
        rel="noopener noreferrer">
        Need Help?
      </a>
    </header>

    <!-- The main content -->
    <ul class="hkm">
      <li v-for="(student, name) in json" :key="name">
        <h2>{{ name }}</h2>
        <a :href="'/student' + '/' + student.id">Paylaş →</a>
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

    <div class="footer bg-primary">
      <p>Made With ❤️ by Ozan Kaygusuz</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      json: {
        "Alya & Aras İnce": {
          "id": "st_10234",
          "instrument": "Piano Duet",
          "pieces": [
            { "composer": "L. V. BEETHOVEN (Arr.H.G.HEUMANN)", "piece": "Turkish March" }
          ]
        },
        "Mehmet Kaan Koç": {
          "id": "st_37429",
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. THOMPSON", "piece": "Mary had a little lamb" },
            { "composer": "Anonymous", "piece": "Flea Waltz" }
          ]
        },
        "Alin Diktaş": {
          "id": "st_49283",
          "instrument": "Piano",
          "pieces": [
            { "composer": "Traditional", "piece": "Lightly Row" }
          ]
        },
        "Neşe Okan": {
          "id": "st_58293",
          "instrument": "Piano",
          "pieces": [
            { "composer": "Traditional", "piece": "When the Saints Go Marchin’ in" },
            { "composer": "J.S. BACH", "piece": "Musette" }
          ]
        },
        "Alya İnce": {
          "id": "st_39483",
          "instrument": "Piano",
          "pieces": [
            { "composer": "L. V. BEETHOVEN", "piece": "Ode to Joy 9th Symphony" },
            { "composer": "L. V. BEETHOVEN", "piece": "Für Elise" }
          ]
        },
        "Beren Susuzlu": {
          "id": "st_11238",
          "instrument": "Piano",
          "pieces": [
            { "composer": "W.A. MOZART", "piece": "Andante grazioso" },
            { "composer": "Albinoni", "piece": "Adagio" },
            { "composer": "S.C. FOSTER (Arr.H.G.HEUMANN)", "piece": "Oh Susanna" }
          ]
        },
        "Özgü Lena Ferhanoğlu": {
          "id": "st_88812",
          "instrument": "Piano",
          "pieces": [
            { "composer": "Traditional (Arr.H.G.HEUMANN)", "piece": "Sailor" },
            { "composer": "W.A. MOZART", "piece": "Champagne Aria from “Don Giovanni”" }
          ]
        },
        "Asya Geniş": {
          "id": "st_71624",
          "instrument": "Piano",
          "pieces": [
            { "composer": "G. VERDI", "piece": "La Donna e Mobile “Rigoletto”" }
          ]
        },
        "Defne İlter": {
          "id": "st_93812",
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. STRAUSS", "piece": "Radetzky March" },
            { "composer": "J. OFFENBACH", "piece": "Cancan" }
          ]
        },
        "Ela Bayrak": {
          "id": "st_27182",
          "instrument": "Violin",
          "pieces": [
            { "composer": "S. Suzuki", "piece": "Song of the Wind" },
            { "composer": "S. Suzuki", "piece": "Go Tell Aunt Rhody" },
            { "composer": "S. Suzuki", "piece": "O Come Little Children" }
          ]
        },
        "Güneş Demir": {
          "id": "st_83471",
          "instrument": "Piano",
          "pieces": [
            { "composer": "L.W. BEETHOVEN", "piece": "Für Elise" },
            { "composer": "W.A. MOZART", "piece": "Rondo" },
            { "composer": "American Folksong (Arr.H.G.HEUMANN)", "piece": "Little Brown Jug" }
          ]
        },
        "Zeynep Öner": {
          "id": "st_47821",
          "instrument": "Piano",
          "pieces": [
            { "composer": "Traditional", "piece": "Santa Lucia" },
            { "composer": "W.A. MOZART", "piece": "The Marriage of Figaro" },
            { "composer": "A. Diabelli", "piece": "Piano Duet Opus 149 No: 6" }
          ]
        },
        "Selin Acer": {
          "id": "st_34912",
          "instrument": "Piano",
          "pieces": [
            { "composer": "Traditional (Arr.H.G.HEUMANN)", "piece": "Sailor" },
            { "composer": "Anonymous", "piece": "Tarantella Napolitana" }
          ]
        },
        "Lara Aybar (Violin)": {
          "id": "st_56564",
          "instrument": "Violin",
          "pieces": [
            { "composer": "S. Suzuki", "piece": "Allegro" }
          ]
        },
        "Doğa Adebali": {
          "id": "st_10294",
          "instrument": "Piano",
          "pieces": [
            { "composer": "L.W. BEETHOVEN", "piece": "Küçük Rondo" },
            { "composer": "M.A. Charpentier", "piece": "Prelude" }
          ]
        },
        "Layra Bayraktar": {
          "id": "st_78361",
          "instrument": "Piano",
          "pieces": [
            { "composer": "F. Burgmüller", "piece": "La Tarantella" }
          ]
        },
        "Defne Kaygusuz": {
          "id": "st_21117",
          "instrument": "Piano",
          "pieces": [
            { "composer": "J.S. BACH", "piece": "Prelude No.3, BWV 999" },
            { "composer": "K. Chovan", "piece": "Gypsy Legend" }
          ]
        },
        "Noyan Okan": {
          "id": "st_67234",
          "instrument": "Piano",
          "pieces": [
            { "composer": "M. Clementi", "piece": "Sonatine Op. 36. No. 1" }
          ]
        },
        "Aras İnce": {
          "id": "st_33983",
          "instrument": "Piano",
          "pieces": [
            { "composer": "Y. Kimura", "piece": "Always With Me" },
            { "composer": "W.A. MOZART", "piece": "Allegro in F, K15" }
          ]
        },
        "Lara Aybar (Piano)": {
          "id": "st_11728",
          "instrument": "Piano",
          "pieces": [
            { "composer": "H. Zimmer", "piece": "Pirates of the Caribbean" }
          ]
        },
        "Ateş Demir": {
          "id": "st_84328",
          "instrument": "Piano",
          "pieces": [
            { "composer": "F. Chopin", "piece": "Waltz in A Minor, No.19" },
            { "composer": "D. Brubeck", "piece": "Take Five" }
          ]
        },
        "Dila Okay": {
          "id": "st_30128",
          "instrument": "Piano",
          "pieces": [
            { "composer": "S. Rachmaninoff", "piece": "Prelude C sharp minor, Op.3, No.2" }
          ]
        }
      }

    };
  }
};


</script>
<style scoped>
/* Make the header fixed */
.head {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  /* so it stays on top of other elements */
  display: flex;
  align-items: center;
  background-color: #007bff;
  /* or use your .bg-primary color */
  padding: 10px;
  color: #fff;
  /* optional: add shadow or borders if you like */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Back link to the left */
.back-button {
  margin-right: 10px;
  text-decoration: none;
  color: #fff;
}

/* Header title grows to fill the space, pushing .ai-button to the right */
.header-title {
  flex: 1;
  margin: 0;
  font-size: 1.25rem;
}

/* "Need Help?" button to the right */
.ai-button {
  position: relative;
  display: inline-block;
  padding: 14px 32px;
  font-size: 16px;
  color: #fff;
  background: #111;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;

  /* Pulse Glow Animation on the button itself */
  animation: pulseGlow 2.5s infinite ease-in-out;
}

/* Glowing gradient overlay behind the button */
.ai-button::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 30px;
  background: linear-gradient(120deg,
      #2ecc71,
      #9b59b6,
      #3498db,
      #e74c3c,
      #f1c40f,
      #2ecc71);
  background-size: 400% 400%;
  z-index: -2;
  opacity: 0.8;
  /* Slightly higher for a bolder glow */
  animation: gradientFlow 5s linear infinite;
  /* Slower or faster as desired */
}

/* Solid center area inside the gradient border */
.ai-button::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  right: 4px;
  bottom: 4px;
  border-radius: 26px;
  background: #111;
  z-index: -1;
}

/* Hover effect: you can change text color or other properties */
.ai-button:hover {
  color: #fff;
}

/* Keyframes for the animated gradient */
@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }

  25% {
    background-position: 50% 100%;
  }

  50% {
    background-position: 100% 50%;
  }

  75% {
    background-position: 50% 0%;
  }

  100% {
    background-position: 0% 50%;
  }
}

/* Keyframes for the pulsing glow effect around the button */
@keyframes pulseGlow {

  0%,
  100% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }

  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.9);
  }
}

/* -------------------------------------------------
   Optional Mobile-Friendly Adjustments (Smaller)
   ------------------------------------------------- */
@media (max-width: 576px) {
  .ai-button {
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 24px;
  }

  .ai-button::before {
    border-radius: 24px;
  }

  .ai-button::after {
    border-radius: 20px;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
  }
}
/* Because the header is fixed, add top padding to your main content */
.hkm {
  /* adjust based on your header’s height */
  padding-top: 60px;
  list-style: none;
  margin: 0;
  margin-bottom:6rem;
}

/* Optional footer styling */
.footer {
  margin-top: 12rem;
  text-align: center;
  color: #fff;
  padding: 1rem;
}
</style>
