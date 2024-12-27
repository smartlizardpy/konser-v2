<template>
    <div class="header">
        <h1>Piyano Ve Keman Konseri</h1>
        <h2>Canlı Yayın</h2>
        <a href="/" class="back"> Geri </a>
    </div>
    <h1 class="center text">Canlı Yayın</h1>
    <div class="video">
        <iframe id="videoIframe" src="https://vdo.ninja/?view=qV4XS4K"></iframe>
        <button class="fullscreen-btn" @click="toggleFullScreen">Tam Ekran</button>
    </div>

    <div class="footer bg-primary">
        <p> Made With ❤️ by Ozan Kaygusuz</p>
    </div>
</template>

<script>
export default {
    methods: {
        toggleFullScreen() {
            const iframe = document.getElementById('videoIframe');
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.mozRequestFullScreen) { // Firefox
                iframe.mozRequestFullScreen();
            } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, Opera
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) { // IE/Edge
                iframe.msRequestFullscreen();
            } else {
                window.location.href = iframe.src;
            }
        }
    }
};
</script>

<style>
.back {
    background-color: #FFF2C2;
    color: #000;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s ease;
}

.back:hover {
    background-color: #FFE594;
}

.text {
    margin-top: 12%;
    text-align: center;
}

.video {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
}

iframe {
    width: 100%;
    max-width: 600px;
    height: 315px;
    border: none;
}

.fullscreen-btn {
    margin-top: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
    width: 90%;
    max-width: 200px;
}

.fullscreen-btn:hover {
    background-color: #0056b3;
}

.footer {
    text-align: center;
    padding: 10px;
}

@media (max-width: 600px) {
    .text {
        margin-top: 20%;
    }

    .header h1,
    .header h2 {
        font-size: 1.2em;
        text-align: center;
    }

    .back {
        font-size: 14px;
        padding: 8px 15px;
    }

    .fullscreen-btn {
        font-size: 12px;
        padding: 8px 12px;
    }

    iframe {
        height: 200px;
    }

    .video {
        width: 100%;
    }
}
</style>
