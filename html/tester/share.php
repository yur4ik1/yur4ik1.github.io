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

    <?php
    if (isset($_GET['imageUrl'])) {
        $imageUrl = $_GET['imageUrl'];
    }
    ?>

    <meta property="og:image" content="<?php echo $imageUrl ?>" />

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

    <script>
        var domain = window.location.hostname;
        if (document.cookie.indexOf('shared') !== -1) {
            document.cookie = 'shared=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            sessionStorage.removeItem('shared');
        } else {
            setTimeout(function() {
                window.location.href = `https://${domain}/`;
            }, 1000);
        }
    </script>

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
            <div class="endgame-popup__main-container share" style="padding: 0;">
                <?php
                if (isset($_GET['imageUrl'])) {
                    $imageUrl = $_GET['imageUrl'];
                }
                ?>
                <img src="<?php echo $imageUrl ?>" alt="endgame image" class="endgame-popup__image">
            </div>

            <div class="endgame-popup__footer btns">
                <div class="addthis_toolbox addthis_default_style">
                    <a class="addthis_button_facebook at-share-btn"></a>
                    <a class="addthis_button_twitter at-share-btn"></a>
                    <a class="addthis_button_email at-share-btn"></a>
                    <a class="addthis_button_linkedin at-share-btn"></a>
                    <!-- <a class="addthis_button_compact at-share-btn"></a> -->
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

    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-63e75e23e01af07b"></script>

    <script type="text/javascript">
        addthis.addEventListener('addthis.menu.share', function(evt) {
            if (window.location.href.indexOf('/share.php') > -1) {
                evt.preventDefault();
            }
        });
    </script>

</body>

</html>