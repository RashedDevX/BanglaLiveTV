/**
 * BanglaLive TV - Updated Logic
 * Author: RashedDevX
 */

// 1. Channel Database with Logo Links
const channels = [
    { id: 1, name: "SonyTen-1", url: "http://stvlive.net:8080/sonyten1/index.m3u8", category: "News", logo: "https://cdn.smartads.in/images/product/television/Sony-Ten-1-HD.png" },
    { id: 2, name: "Channel i", url: "http://stvlive.net:8080/channeli/index.m3u8", category: "News", logo: "https://images.seeklogo.com/logo-png/42/1/channel-i-logo-png_seeklogo-427745.png" },
    { id: 3, name: "NTV", url: "http://stvlive.net:8080/ntv/index.m3u8", category: "Sports", logo: "https://images.seeklogo.com/logo-png/39/1/ntv-channel-logo-png_seeklogo-396286.png" },
    { id: 4, name: "Sony Aath", url: "http://stvlive.net:8080/sonyaath/index.m3u8", category: "Sports", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Sony_AATH_Logo_%282022%29.png" },
    { id: 5, name: "Zee Bangla", url: "http://103.175.242.10:8080/zeebangla/index.m3u8", category: "General", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Zee_Bangla_logo.png" },
    { id: 6, name: "Banglavision", url: "http://stvlive.net:8080/banglavision/index.m3u8", category: "News", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Banglavision.svg/963px-Banglavision.svg.png" },
    { id: 7, name: "Zee Cinema", url: "http://stvlive.net:8080/zeecinema/index.m3u8", category: "News", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Zee_Cinema_logo.png?20230802074221" },
    { id: 8, name: "Zee TV", url: "http://103.175.242.10:8080/zeetv/index.m3u8", category: "News", logo: "https://i.postimg.cc/3JsQdg7M/zeetv.png" },
    { id: 9, name: "ATN Bangla", url: "http://stvlive.net:8080/atnbangla/index.m3u8", category: "News", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_of_ATN_Bangla.svg/1200px-Logo_of_ATN_Bangla.svg.png" },
];

const channelGrid = document.getElementById('channelGrid');
const searchInput = document.getElementById('searchInput');

// 2. Render Channels Logic
function renderChannels(list) {
    channelGrid.innerHTML = '';
    list.forEach(channel => {
        const card = document.createElement('div');
        card.className = 'channel-card';
        
        // লোগো থাকলে ইমেজ দেখাবে, না থাকলে নামের প্রথম অক্ষর
        const channelIcon = channel.logo 
            ? `<img src="${channel.logo}" alt="${channel.name}" class="channel-logo-img">`
            : channel.name.charAt(0);

        card.innerHTML = `
            <div class="icon-wrapper">${channelIcon}</div>
            <h3>${channel.name}</h3>
            <p style="font-size: 0.7rem; color: #a0a0a0;">${channel.category}</p>
        `;
        card.onclick = () => openPlayer(channel);
        channelGrid.appendChild(card);
    });
}

// 3. Search Functionality
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = channels.filter(c => c.name.toLowerCase().includes(term));
    renderChannels(filtered);
});

// 4. Page Routing Logic
function showView(viewId, navEl = null) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');

    const video = document.getElementById('mainPlayer');
    if (viewId === 'home-view') {
        video.pause();
        video.src = "";
        video.load();
        
        const playPauseBtn = document.getElementById('playPauseBtn');
        if (playPauseBtn) {
            playPauseBtn.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
        }
    }

    if (navEl) {
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        navEl.classList.add('active');
    }
    window.scrollTo(0, 0);
}

// 5. Video Player Logic with HLS Support
function openPlayer(channel) {
    showView('player-view');
    document.getElementById('currentChannelName').innerText = channel.name;
    const video = document.getElementById('mainPlayer');
    const streamUrl = channel.url;

    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(streamUrl);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play();
        });
    } 
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = streamUrl;
        video.play();
    }
}

// Global Video Controls
const video = document.getElementById('mainPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const videoWrapper = document.getElementById('videoWrapper');

function togglePlay() {
    if (video.paused) {
        video.play();
        playPauseBtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
    } else {
        video.pause();
        playPauseBtn.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
    }
}

document.getElementById('volumeSlider').addEventListener('input', (e) => {
    video.volume = e.target.value;
});

function toggleTheater() {
    videoWrapper.classList.toggle('theater');
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        videoWrapper.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderChannels(channels);
});