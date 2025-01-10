<template>
    <div class="header">
        <h1>Piyano Ve Keman Konseri</h1>
        <h2>Canlı Yayın</h2>
        <a href="/" class="back"> Geri </a>
    </div>
    <h1 class="center text">Canlı Yayın</h1>
    <div class="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hTHn4jUC_iw?si=urwH7ga2BrSlEqg_"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    <div class="footer bg-primary">
        <p> Made With ❤️ by Ozan Kaygusuz</p>
    </div>
</template>

<script>
export default {
    // No methods needed as fullscreen functionality is removed
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

    iframe {
        height: 200px;
    }

    .video {
        width: 100%;
    }
}
</style>