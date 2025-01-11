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
        "Güneş Demir & Ateş Demir": {
          "instrument": "Piano Duet",
          "pieces": [
            { "composer": "American Folk Song (Arr.H.G. Heumann)", "piece": "Aura Lee" }
          ]
        },
        "Alin Diktaş": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "Anonymous", "piece": "Flea Waltz" }
          ]
        },
        "Neşe Okan": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. Thompson", "piece": "Kızılderili Davulu" },
            { "composer": "J. Offenbach", "piece": "Barkarole" }
          ]
        },
        "Alya İnce": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. Thompson", "piece": "Dansçı Ayı" },
            { "composer": "J. Thompson", "piece": "London Bridge" },
            { "composer": "J. Thompson", "piece": "Neşeli Hindi" },
            { "composer": "American Folk Song (Arr.H.G. Heumann)", "piece": "Yankee Doodle", "accompanist": "Aras İnce" }
          ]
        },
        "Beren Susuzlu": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. Thompson", "piece": "Kızılderili Davulu" },
            { "composer": "Traditional", "piece": "When the Saints Go Marchin’ in" },
            { "composer": "French Folk Song", "piece": "Alouette (Piano Duet)" }
          ]
        },
        "Özgü Lena Ferhanoğlu": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "W.A. Mozart", "piece": "Andante grazioso" },
            { "composer": "M.A. Charpentier", "piece": "Prelude" }
          ]
        },
        "Asya Geniş": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "Traditional (Arr.H.G. Heumann)", "piece": "Sailor" }
          ]
        },
        "Defne İlter": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "Traditional", "piece": "When the Saints Go Marchin’ in" },
            { "composer": "J.S. Bach", "piece": "Musette" }
          ]
        },
        "Güneş Demir": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. Strauss", "piece": "Radetzky March" },
            { "composer": "J. Offenbach", "piece": "Cancan" }
          ]
        },
        "Selin Acer": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "Traditional", "piece": "Santa Lucia" },
            { "composer": "L.W. Beethoven", "piece": "Für Elise" }
          ]
        },
        "Aram Ronas Çetin": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "Traditional", "piece": "Morning Has Broken" },
            { "composer": "L.V. Beethoven", "piece": "Ode to Joy (9th Symphony)" }
          ]
        },
        "Defne Bilge Ateş": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. Strauss", "piece": "The Blue Danube Waltz" },
            { "composer": "W.A. Mozart", "piece": "Vivat Bacchus, Bacchus lebe" },
            { "composer": "American Folk Song (Arr.H.G. Heumann)", "piece": "Polly Wolly Doodle (Piano Duet)" }
          ]
        },
        "Doğa Adebalı": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "J. Strauss", "piece": "Waltz Op.39 No.15" },
            { "composer": "G. Verdi", "piece": "La Donna e Mobile (Rigoletto)" }
          ]
        },
        "Aras İnce": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "W.A. Mozart", "piece": "Dance in F Major" },
            { "composer": "W.A. Mozart", "piece": "Rondo Alla Turca" }
          ]
        },
        "Lara Aybar": {
          "instrument": "Violin",
          "pieces": [
            { "composer": "S. Suzuki", "piece": "Long Long Ago" }
          ]
        },
        "Layra Bayraktar": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "W.A. Mozart", "piece": "Eine Kleine Nachtmusik" },
            { "composer": "American Folk Song (Arr.H.G. Heumann)", "piece": "Little Brown Jug", "accompanist": "Defne Kaygusuz" }
          ]
        },
        "Defne Kaygusuz": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "P.I. Tchaikovsky", "piece": "The Swan Lake" },
            { "composer": "R. Schumann", "piece": "Wild Rider" }
          ]
        },
        "Noyan Okan": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "W.A. Mozart", "piece": "Rondo Alla Turca" }
          ]
        },
        "Ateş Demir": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "J.S. Bach", "piece": "Prelude in C Major" },
            { "composer": "T. Fox (Arr. Manel Navola)", "piece": "Undertale – Megalovania" }
          ]
        },
        "İpek Kuru": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "H.G. Heumann", "piece": "Mazurka" }
          ]
        },
        "Dila Okay & İpek Kuru": {
          "instrument": "Piano Duet",
          "pieces": [
            { "composer": "R. Djawadi", "piece": "Game of Thrones Theme" }
          ]
        },
        "Dila Okay": {
          "instrument": "Piano",
          "pieces": [
            { "composer": "W.A. Mozart", "piece": "Fantasia in D Minor, KV.397, No.1" }
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
