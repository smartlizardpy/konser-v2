<template>
    <div v-if="valid" class="page">
        <div class="header">
            <h3><span class="highlight">İzlem Bayraktar</span> ve Öğrencilerinin Piyano Ve Keman Konseri</h3>

        </div>
        <h1 class=" name">{{ $route.params.name ? Object.entries(json).find(([_, data]) => data.id === $route.params.name)?.[0] : '' }}</h1>
    
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
            { "composer": "American Folk Song (Arr.H.G.HEUMANN)", "piece": "Polly Wolly Doodle" },
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
        font-size: 1.9rem;
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
    font-size: 1.9rem;
    margin-top: 8%;
    word-wrap: break-word;
    margin-bottom: 10%;
    text-align: center;
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
