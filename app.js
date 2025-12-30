/**
 * BanglaLive TV - Updated Logic
 * Author: RashedDevX
 */

// 1. Channel Database with Logo Links
const channels = [
    { id: 1, name: "Deshi TV", url: "https://deshitv.deshitv24.net/live/myStream/playlist.m3u8", category: "News", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTafxpwguuooaNvSPlORtVlz61sk4bo5Px7w&s" },
    
    { id: 2, name: "ATN Bangla", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/index.m3u8", category: "News", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_of_ATN_Bangla.svg/1200px-Logo_of_ATN_Bangla.svg.png" },

    { id: 3, name: "ATN NEWS", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/index.m3u8", category: "Sports", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/ATN_News_logo.svg/1200px-ATN_News_logo.svg.png" },

    { id: 4, name: "JAMUNA TV", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/index.m3u8", category: "Sports", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThnVTGTS7dX3rjTijOIpVh-oUAnzdzKX_9-g&s" },

    { id: 5, name: "Ekattor TV", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/index.m3u8", category: "General", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Ekattor_TV_logo.svg/1200px-Ekattor_TV_logo.svg.png" },

    { id: 6, name: "INDEPENDENT TV", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8", category: "News", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Independent_Television_Logo.svg/1200px-Independent_Television_Logo.svg.png" },

    { id: 7, name: "Channel 24", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8", category: "News", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Logo_of_Channel_24_%28Bangladesh%29.svg/1200px-Logo_of_Channel_24_%28Bangladesh%29.svg.png" },

    { id: 8, name: "Somoy Tv", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8", category: "News", logo: "https://i.postimg.cc/05ZRxbcF/ac176d9b-0a00-4cc4-ba3b-fadf1d0130d3.png" },

    { id: 10, name: "T SPORTS HD", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8", category: "News", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/T_Sports_logo.svg/1200px-T_Sports_logo.svg.png" },

    { id: 11, name: "BTV", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8", category: "News", logo: "https://i.postimg.cc/NF1G0bVQ/btv.png" },

    { id: 11, name: "Ekattor TV", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/index.m3u8", category: "News", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Ekattor_TV_logo.svg/1200px-Ekattor_TV_logo.svg.png" },

    { id: 12, name: "Duronto TV", url: "https://tvsen4.aynaott.com/durontotv/index.m3u8", category: "News", logo: "https://upload.wikimedia.org/wikipedia/en/d/d7/Duronto_TV_Logo.png" },

    { id: 13, name: "Motu Patlu", url: "https://cloudfrontnet.vercel.app/tplay/playout/209622/master.m3u8", category: "News", logo: "https://upload.wikimedia.org/wikipedia/sco/c/cc/Motu_Patlu_official_logo.png" },

    { id: 14, name: "Live Quran TV", url: "https://live.kwikmotion.com/sharjahtvquranlive/shqurantv.smil/playlist.m3u8", category: "News", logo: "https://yt3.googleusercontent.com/ZBEWh2D3-svajojcA9eKyK995kuHn20JwiZ1dMBUDVp8TgAvV2Kyv9wkamwmEWM3dt-6hylJ=s900-c-k-c0x00ffffff-no-rj" },

    { id: 15, name: "Bollywood Movies", url: "https://cloudfrontnet.vercel.app/tplay/playout/209593/master.m3u8", category: "News", logo: "https://daex9l847wg3n.cloudfront.net/shemoutputimages/Shemaroo-Bollywood-Classic/5bebef3ca609d202b30000d9/large_16_9_1725445788.jpg" },

    { id: 16, name: "B4U Movies", url: "https://cdnb4u.wiseplayout.com/B4U_Movies/HD1080/HD1080.m3u8", category: "News", logo: "https://i.postimg.cc/J7qhH7zR/86b4d49f-6529-4646-ace0-a32857189bbb.webp" },

    { id: 17, name: "Dhoom Music", url: "https://mumt03.tangotv.in/DHOOM/index.m3u8", category: "News", logo: "https://i.postimg.cc/sDbCvb7h/2512103006001.jpg" },

    { id: 18, name: "T Sports HD", url: "https://live.mncdn.shop/fc95d30e-5323-4c12-bb38-7a1e3f04acc2/index.m3u8", category: "News", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/T_Sports_logo.svg/1200px-T_Sports_logo.svg.png" },

    { id: 19, name: "Nick HD", url: "https://live20.bozztv.com/giatvplayout7/giatv-209622/tracks-v1a1/mono.ts.m3u8", category: "News", logo: "https://i.postimg.cc/Qt70YnVY/download.png" },

    { id: 20, name: "South Movies", url: "https://live20.bozztv.com/giatvplayout7/giatv-209593/tracks-v1a1/mono.ts.m3u8", category: "News", logo: "https://i.postimg.cc/25ZQCLmY/images.jpg" },

    { id: 21, name: "Doraemon", url: "https://live20.bozztv.com/giatvplayout7/giatv-209902/tracks-v1a1/mono.ts.m3u8", category: "News", logo: "https://www.nicepng.com/png/full/397-3975039_get-free-high-quality-hd-wallpapers-doraemon-logo.png" },

    { id: 22, name: "Makka TV", url: "https://media2.streambrothers.com:1936/8122/8122/playlist.m3u8", category: "News", logo: "https://i.postimg.cc/pdLdBgcV/images.jpg" },

    { id: 23, name: "SONY TV", url: "http://cors.tundracast.com:2000/https://streamer2.nexgen.bz/SONYMAX/index.m3u8", category: "News", logo: "https://upload.wikimedia.org/wikipedia/en/d/de/Sony_TV_new.png" },

    { id: 24, name: "Yrf Music", url: "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01412-xiaomiasia-yrfmusic-xiaomi/playlist.m3u8", category: "News", logo: "https://i.postimg.cc/RZndZDQp/download.png" },

    { id: 25, name: "BBC News", url: "https://cdn4.skygo.mn/live/disk1/BBC_News/HLSv3-FTA/BBC_News-avc1_3000000=8-mp4a_208000_eng=2.m3u8", category: "News", logo: "https://download.logo.wine/logo/BBC_News/BBC_News-Logo.wine.png" },

    { id: 26, name: "ILT20 2025-26", url: "https://bd-mc-fdlive.fancode.com/mumbai/138639_english_hls_822cb0754554888_1ta-di_h264/index.m3u8", category: "News", logo: "https://i.postimg.cc/NFCF9Yw2/download.png" },

    { id: 27, name: "BPL 2026", url: "https://tvsen1.aynaott.com/YNMn5kZz8aLm/index.m3u8", category: "News", logo: "https://i.postimg.cc/Sxg4mVkF/download.jpg" },

    { id: 28, name: "WAZ TV", url: "https://tplay.live/originals/ilm-tv/index.m3u8", category: "News", logo: "https://i.postimg.cc/zGvzb4dn/6c4e96af4accba29802169b12629168e.jpg" },
    
    
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