<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typing Speed Test - One Minute Typing Test (WPM)</title>
    <meta name="robots" content="index,follow">
    <meta name="GOOGLEBOT" content="INDEX,FOLLOW">
    <meta name="description" content="Discover how to quickly and easily improve your typing speed, skill, and accuracy with a simple yet fun and effective typing speed test.">
    <meta name="author" content="Typing Speed Test">
    <meta name="referrer" content="origin">
    <meta name="application-name" content="Typing Speed Test">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Typing Speed Test">
    <meta property="og:title" content="Typing Speed Test - One Minute Typing Test (WPM)">
    <meta property="og:description" content="Discover how to quickly and easily improve your typing speed, skill, and accuracy with a simple yet fun and effective typing speed test.">
    <meta name="twitter:title" content="Typing Speed Test - One Minute Typing Test (WPM)">
    <meta name="twitter:description" content="Discover how to quickly and easily improve your typing speed, skill, and accuracy with a simple yet fun and effective typing speed test.">


    <link rel="stylesheet" href="./css/style.css">
    <link rel="shortcut icon" href="https://typingspeedtest.app/img/favicon.ico" title="Favicon" />

    <style>
        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: local(''),
                url('./fonts/roboto-v30-latin-regular.woff2') format('woff2')
        }

        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: local(''),
                url('./fonts/roboto-v30-latin-500.woff2') format('woff2')
        }

        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: local(''),
                url('./fonts/roboto-v30-latin-700.woff2') format('woff2')
        }

        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: local(''),
                url('./fonts/roboto-v30-latin-900.woff2') format('woff2')
        }
    </style>

</head>

<body>
    <header>
        <div class="wrapper">
            <button aria-label="toggle menu" class="header__burger">
                <span></span>
            </button>
            <a href="/" class="header__logo">
                <img width="400" height="64" src="https://typingspeedtest.app/img/logo.webp" alt="Typing Speed Test APP">
            </a>

            <nav>
                <ul class="header__nav">
                    <li><a class="active" href="/">Home</a></li>
                    <li><a href="#"> </a></li>
                    <li><a href="#"> </a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <div class="wrapper">
            <div class="endgame-popup__main-container" id="screenshot-div">
                <img width="330" height="345" src="#" alt="endgame image" id="image-path" class="endgame-popup__image">
                <p class="endgame-popup__uptitle"><span id="uptitle-text"></span></p>
                <div class="main-container__content">
                    <h2 class="endgame-popup__title">Your speed resembles <span id="title-text"></span></h2>
                    <div class="endgame-popup__scores">
                        <div class="scores__score">
                            <p>Speed</p>
                            <p><span id="speed-num"></span>WPM</p>
                        </div>
                        <div class="scores__score">
                            <p>Accuracy</p>
                            <p><span id="accuracy-num"></span>%</p>
                        </div>
                        <div class="scores__score">
                            <p>Time Taken</p>
                            <p><span id="time-num"></span></p>
                        </div>
                    </div>
                    <div class="endgame-popup__share">

                        <p style="cursor: pointer;" onclick="share()" class="share__title" id="share__link">
                            Share your score
                        </p>

                        <!-- <div class="addthis_toolbox addthis_default_style">
                            <a class="addthis_button_facebook at-share-btn"></a>
                            <a class="addthis_button_twitter at-share-btn"></a>
                            <a class="addthis_button_email at-share-btn"></a>
                            <a class="addthis_button_linkedin at-share-btn"></a>
                            <!-- <a class="addthis_button_compact at-share-btn"></a>
                        </div> -->

                    </div>
                </div>
            </div>
            <div class="endgame-popup__footer">
                <button class="button" onclick="location.href='/'">Try Again</button>
            </div>
        </div>
    </main>

    <footer>
        <div class="wrapper">
            <p class="footer-text">Copyright © 2022 - All rights reserved</p>
            <ul class="footer__links">
                <li><a class="footer-text" href="#">Contact Us</a></li>
                <li><a class="footer-text" href="#">Privacy</a></li>
                <li><a class="footer-text" href="#">T.O.S</a></li>
                <li><a class="footer-text" href="#">Cookie</a></li>
                <li><a class="footer-text" href="#">Disclaimer</a></li>
                <li><a class="footer-text" href="#">About Us</a></li>
                <li><a class="footer-text" href="#">Blog</a></li>
            </ul>
        </div>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.min.js"></script>

    <script src="./result.js" defer></script>
    <script src="./speed-typing-script.js" defer></script>

    <script src="./script.js" defer></script>

</body>

</html>