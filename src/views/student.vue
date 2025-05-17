<template>
    <div v-if="valid" class="page">
        <div class="header">
            <h3><span class="highlight">İzlem Bayraktar</span> ve Öğrencilerinin Piyano Ve Keman Konseri</h3>

        </div>
        <h1 class="center name">{{ $route.hash ? Object.entries(json).find(([_, data]) => data.id === decodeURIComponent($route.hash.substring(1)))?.[0] : '' }}</h1>
        <h2 class="center">Enstrüman: {{ instrument }} {{ instrument === 'Piano' ? '🎹' : instrument === 'Violin' ? '🎻' : instrument === 'Piano Duet' ? '🎹' : '🎹' }}</h2>

        <div class="songs">
            <h1>Çalacağı Parçalar:</h1>
            <ul class="song-list">
            <li v-for="(piece, index) in pieces" :key="index">
                <div class="piece">{{ piece.piece }}</div>
                <div class="composer">{{ piece.composer }}</div>
            </li>
            </ul>
        </div>
        <button class="cool_button" @click="$router.push('/live')">Canlı Yayını Izle</button>
        <div class="footer">
            <p>Made With ❤️ by Ozan Kaygusuz</p>
        </div>
    </div>
    <div v-else>
        <img src="/404.jpg" alt="404 Not Found" style="width: 100%; max-width: 500px; display: block; margin: 0 auto;">
    </div>
</template>
<script>
const json = {
    "Güneş Demir & Ateş Demir": {
        "id": "st_231",
        "instrument": "Piano Duet",
        "pieces": [
            { "composer": "American Folk Song (Arr.H.G. Heumann)", "piece": "Aura Lee" }
        ]
    },
    "Alin Diktaş": {
        "id": "st_542",
        "instrument": "Piano",
        "pieces": [
            { "composer": "Anonymous", "piece": "Flea Waltz" }
        ]
    },
    "Neşe Okan": {
        "id": "st_873",
        "instrument": "Piano",
        "pieces": [
            { "composer": "J. Thompson", "piece": "Kızılderili Davulu" },
            { "composer": "J. Offenbach", "piece": "Barkarole" }
        ]
    },
    "Alya İnce": {
        "id": "st_124",
        "instrument": "Piano",
        "pieces": [
            { "composer": "J. Thompson", "piece": "Dansçı Ayı" },
            { "composer": "J. Thompson", "piece": "London Bridge" },
            { "composer": "J. Thompson", "piece": "Neşeli Hindi" },
            { "composer": "American Folk Song (Arr.H.G. Heumann)", "piece": "Yankee Doodle", "accompanist": "Aras İnce" }
        ]
    },
    "Beren Susuzlu": {
        "id": "st_665",
        "instrument": "Piano",
        "pieces": [
            { "composer": "J. Thompson", "piece": "Kızılderili Davulu" },
            { "composer": "Traditional", "piece": "When the Saints Go Marchin' in" },
            { "composer": "French Folk Song", "piece": "Alouette (Piano Duet)" }
        ]
    },
    "Özgü Lena Ferhanoğlu": {
        "id": "st_396",
        "instrument": "Piano",
        "pieces": [
            { "composer": "W.A. Mozart", "piece": "Andante grazioso" },
            { "composer": "M.A. Charpentier", "piece": "Prelude" }
        ]
    },
    "Asya Geniş": {
        "id": "st_947",
        "instrument": "Piano",
        "pieces": [
            { "composer": "Traditional (Arr.H.G. Heumann)", "piece": "Sailor" }
        ]
    },
    "Defne İlter": {
        "id": "st_218",
        "instrument": "Piano",
        "pieces": [
            { "composer": "Traditional", "piece": "When the Saints Go Marchin' in" },
            { "composer": "J.S. Bach", "piece": "Musette" }
        ]
    },
    "Güneş Demir": {
        "id": "st_759",
        "instrument": "Piano",
        "pieces": [
            { "composer": "J. Strauss", "piece": "Radetzky March" },
            { "composer": "J. Offenbach", "piece": "Cancan" }
        ]
    },
    "Selin Acer": {
        "id": "st_480",
        "instrument": "Piano",
        "pieces": [
            { "composer": "Traditional", "piece": "Santa Lucia" },
            { "composer": "L.W. Beethoven", "piece": "Für Elise" }
        ]
    },
    "Aram Ronas Çetin": {
        "id": "st_311",
        "instrument": "Piano",
        "pieces": [
            { "composer": "Traditional", "piece": "Morning Has Broken" },
            { "composer": "L.V. Beethoven", "piece": "Ode to Joy (9th Symphony)" }
        ]
    },
    "Defne Bilge Ateş": {
        "id": "st_632",
        "instrument": "Piano",
        "pieces": [
            { "composer": "J. Strauss", "piece": "The Blue Danube Waltz" },
            { "composer": "W.A. Mozart", "piece": "Vivat Bacchus, Bacchus lebe" },
            { "composer": "American Folk Song (Arr.H.G. Heumann)", "piece": "Polly Wolly Doodle (Piano Duet)" }
        ]
    },
    "Doğa Adebalı": {
        "id": "st_853",
        "instrument": "Piano",
        "pieces": [
            { "composer": "J. Strauss", "piece": "Waltz Op.39 No.15" },
            { "composer": "G. Verdi", "piece": "La Donna e Mobile (Rigoletto)" }
        ]
    },
    "Aras İnce": {
        "id": "st_174",
        "instrument": "Piano",
        "pieces": [
            { "composer": "W.A. Mozart", "piece": "Dance in F Major" },
            { "composer": "W.A. Mozart", "piece": "Rondo Alla Turca" }
        ]
    },
    "Lara Aybar": {
        "id": "st_595",
        "instrument": "Violin",
        "pieces": [
            { "composer": "S. Suzuki", "piece": "Long Long Ago" }
        ]
    },
    "Layra Bayraktar": {
        "id": "st_916",
        "instrument": "Piano",
        "pieces": [
            { "composer": "W.A. Mozart", "piece": "Eine Kleine Nachtmusik" },
            { "composer": "American Folk Song (Arr.H.G. Heumann)", "piece": "Little Brown Jug", "accompanist": "Defne Kaygusuz" }
        ]
    },
    "Defne Kaygusuz": {
        "id": "st_437",
        "instrument": "Piano",
        "pieces": [
            { "composer": "P.I. Tchaikovsky", "piece": "The Swan Lake" },
            { "composer": "R. Schumann", "piece": "Wild Rider" }
        ]
    },
    "Noyan Okan": {
        "id": "st_758",
        "instrument": "Piano",
        "pieces": [
            { "composer": "W.A. Mozart", "piece": "Rondo Alla Turca" }
        ]
    },
    "Ateş Demir": {
        "id": "st_279",
        "instrument": "Piano",
        "pieces": [
            { "composer": "J.S. Bach", "piece": "Prelude in C Major" },
            { "composer": "T. Fox (Arr. Manel Navola)", "piece": "Undertale – Megalovania" }
        ]
    },
    "İpek Kuru": {
        "id": "st_890",
        "instrument": "Piano",
        "pieces": [
            { "composer": "H.G. Heumann", "piece": "Mazurka" }
        ]
    },
    "Dila Okay & İpek Kuru": {
        "id": "st_111",
        "instrument": "Piano Duet",
        "pieces": [
            { "composer": "R. Djawadi", "piece": "Game of Thrones Theme" }
        ]
    },
    "Dila Okay": {
        "id": "st_732",
        "instrument": "Piano",
        "pieces": [
            { "composer": "W.A. Mozart", "piece": "Fantasia in D Minor, KV.397, No.1" }
        ]
    }
}
    
export default {
    data() {
        let valid = true;
        let pieces = [];
        let instrument = '';
        
        if (this.$route.params.name) {
            const studentId = this.$route.params.name;
            const studentEntry = Object.entries(json).find(([_, data]) => data.id === studentId);
            if (studentEntry) {
            const [_, student] = studentEntry;
            pieces = student.pieces;
            instrument = student.instrument;
            } else {
            valid = false;
            }
        } else {
            valid = false;
        }
        return {
            valid,
            pieces,
            instrument,
            json
        }
    }
}
</script>
<style>
/* Mobile responsive styles */
@media only screen and (max-width: 768px) {
    .header h3 {
        font-size: 1rem;
        padding: 0 0.5rem;
        text-align: center;
    }

    .name {
        font-size: 1.4rem;
    }

    .center {
        font-size: 1.1rem;
        padding: 0 0.5rem;
    }

    .songs h1 {
        font-size: 1.2rem;
    }

    .piece {
        font-size: 1rem;
    }

    .composer {
        font-size: 0.9rem;
    }
}
.cool_button {
    display: block;
    margin: 2rem auto;
    padding: 15px 30px;
    font-size: 1.2rem;
    background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
    color: white;
    border: none;
    border-radius: 25px;
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;
}

.cool_button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
    background: linear-gradient(45deg, #ff8e8e, #ff6b6b);
}

.cool_button:active {
    transform: translateY(1px);
    box-shadow: 0 2px 10px rgba(255, 107, 107, 0.2);
}
/* Base styles */
.page {
    max-width: 100%;
    padding: 0.5rem;
}

.name {
    font-size: 1.8rem;
    margin-top: 8%;
    word-wrap: break-word;
}

.center {
    font-size: 1.4rem;
    text-align: center;
}

.songs h1 {
    font-size: 1.4rem;
    text-align: center;
    margin-top: 6%;
}

.song-list {
    list-style: none;
    padding: 0;
    text-align: center;
    margin-top: 0.8rem;
}

.piece {
    font-size: 1.2rem;
    margin: 0.8rem 0 0.4rem;
    word-wrap: break-word;
}

.composer {
    font-size: 1rem;
    color: #666;
    font-style: italic;
    word-wrap: break-word;
}
</style>
