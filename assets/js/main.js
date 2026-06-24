document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Scroll Effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = navLinks.classList.contains('active');
      menuBtn.setAttribute('aria-expanded', isExpanded);
      // Toggle menu icon
      const icon = menuBtn.querySelector('svg');
      if (icon) {
        if (isExpanded) {
          icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
        } else {
          icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>';
        }
      }
    });

    // Close menu when link clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (menuBtn.querySelector('svg')) {
          menuBtn.querySelector('svg').innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>';
        }
      });
    });
  }

  // 3. Tab Switcher (Mobile / Android TV Installation Guide)
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  if (tabBtns.length > 0 && tabPanes.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        // Toggle Buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Toggle Content Panes
        tabPanes.forEach(pane => {
          if (pane.id === targetTab) {
            pane.classList.add('active');
          } else {
            pane.classList.remove('active');
          }
        });
      });
    });
  }

  // 4. About Mobile Screenshot Carousel / Slider
  const slides = document.querySelector('.about-slides');
  const dots = document.querySelectorAll('.slider-dot');
  if (slides && dots.length > 0) {
    let currentSlide = 0;
    const slideCount = dots.length;

    const goToSlide = (index) => {
      currentSlide = index;
      slides.style.transform = `translateX(-${currentSlide * 100}%)`;
      dots.forEach((dot, idx) => {
        if (idx === currentSlide) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    };

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => goToSlide(index));
    });

    // Auto rotate slides
    let slideInterval = setInterval(() => {
      let nextSlide = (currentSlide + 1) % slideCount;
      goToSlide(nextSlide);
    }, 4000);

    // Pause on hover
    const imgContainer = document.querySelector('.about-img-container');
    if (imgContainer) {
      imgContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
      imgContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
          let nextSlide = (currentSlide + 1) % slideCount;
          goToSlide(nextSlide);
        }, 4000);
      });
    }
  }

  // 5. Smooth Scroll Reveal / Fade-in effect on elements
  const revealElements = document.querySelectorAll('.step-card, .feature-card, .about-media, .about-content, .guide-step-row');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      revealObserver.observe(el);
    });
  }

  // 6. MULTI-LANGUAGE TRANSLATION DICTIONARY & CLIENT ENGINE
  const translations = {
    en: {
      "nav-home": "Home",
      "nav-download": "Download",
      "nav-guide": "Install Guide",
      "nav-github": "GitHub",
      "hero-title": "Download IPTVMine Pro",
      "hero-desc": "The ultimate open-source streaming companion for Android and Android TV. Access your M3U playlists, movies, and TV shows with zero restrictions, zero fees, and no ad clutter.",
      "hero-cta-download": "Download IPTVMine Pro APK",
      "hero-cta-tv": "Setup Android TV",
      "stat-login-val": "No Login",
      "stat-login-label": "Required",
      "stat-source": "Open Source",
      "stat-ads": "Subscription Ads",
      "steps-title": "Install IPTVMine Pro in 3 Easy Steps",
      "steps-desc": "Get the app up and running on your Android device in just a few clicks.",
      "step1-num": "Step 1",
      "step1-title": "Download APK",
      "step1-desc": "Click the download button to save the IPTVMine Pro APK file to your device.",
      "step2-num": "Step 2",
      "step2-title": "Allow Unknown Apps",
      "step2-desc": "Open the downloaded file and click \"Install\". If prompted, enable \"Install from Unknown Sources\" in settings.",
      "step3-num": "Step 3",
      "step3-title": "Launch & Play",
      "step3-desc": "Open the app, load your playlist, or run JavaScript scrapers (Vega) to fetch HD streams immediately.",
      "about-tag": "Open Source IPTV Player",
      "about-title": "Your Premium Android Streaming Companion",
      "about-text1": "Most streaming applications come bundled with trackers, heavy ads, and locking walls. IPTVMine Pro changes the rules: it is completely free, community-driven, and designed for ultimate device optimization.",
      "about-text2": "Built natively using Jetpack Compose, the player delivers rapid channel filtering, responsive movie browsing, and local offline downloads. With the advanced Vega scraper engine, you can aggregate streams safely in a sandboxed execution environment.",
      "about-bullet1": "Rapid Playlist Filtering",
      "about-bullet2": "Headless Scraper Execution",
      "about-bullet3": "ExoPlayer with PiP Support",
      "about-bullet4": "Mobile-TV Synchronized Pairing",
      "about-bullet5": "Double-Tap seek overlay",
      "about-bullet6": "Local Offline Downloads",
      "guide-title": "Step-by-Step Installation Manual",
      "guide-desc": "Learn how to easily sideload the APK client on either your phone or Android TV.",
      "tab-mobile": "Android Mobile / Tablet",
      "tab-tv": "Android TV / FireStick",
      "mstep1": "Open the Download page from the top menu and select the Mobile Version APK.",
      "mstep2": "Tap the Download IPTVMine Pro APK button to start downloading the file.",
      "mstep3": "Once the download finishes, navigate to your device's Settings > Security & Privacy.",
      "mstep4": "Enable the option Allow Install from Unknown Sources for your browser or file manager.",
      "mstep5": "Locate the downloaded APK in your Downloads folder and tap it, then select Install.",
      "mstep6": "Open IPTVMine Pro, import your M3U playlist file, and start streaming TV channels immediately!",
      "tstep1": "Go to the Download page and download the dedicated Android TV Client APK.",
      "tstep2": "Transfer the downloaded APK to your TV using a USB flash drive, or via local Wi-Fi casting (e.g., using the \"Send Files to TV\" app).",
      "tstep3": "On your Android TV, open the file explorer app, locate the APK file, and click it.",
      "tstep4": "If prompted, grant the file explorer permission to install files from unknown sources in TV developer options.",
      "tstep5": "Select Install. Once completed, launch the TV app from your dashboard.",
      "tstep6": "Open the pairing menu, scan the QR code using your phone's IPTVMine app, and synchronize your playlists and watch history instantly!",
      "features-title": "Core Performance Features",
      "features-desc": "A streaming experience engineered for speed, utility, and user privacy protection.",
      "feat1-title": "No Limits",
      "feat1-desc": "Stream live TV, sports news, and movies without volume throttles, session limits, or hidden subscription gates. You are in complete control.",
      "feat2-title": "Completely Free",
      "feat2-desc": "The code is fully open source. There are no registration forms, no subscription fees, no locked channels, and zero in-app purchases.",
      "feat3-title": "High Speed ExoPlayer",
      "feat3-desc": "Utilizes custom AndroidX Media3 streaming wrappers to buffer HLS / M3U8 video streams fast, with double-tap gesture seek overlays.",
      "feat4-title": "Android TV Leanback",
      "feat4-desc": "Includes a custom TV app dashboard optimized for remote controls (D-pads), built-in network speed tests, and localized weather forecasts.",
      "feat5-title": "100% User Privacy",
      "feat5-desc": "All watch history, bookmarked lists, and settings are saved locally on your hardware. We do not transmit or collect user tracking data.",
      "feat6-title": "Vega Extension Support",
      "feat6-desc": "Import custom JavaScript scrapers securely. Playback links are resolved dynamically with sandboxed execution to protect your device.",
      "footer-support": "Email Support:",
      "download-title": "IPTVMine Pro Releases",
      "download-desc": "Select and download the target client designed for your specific Android hardware platform.",
      "dl-box-mobile-title": "IPTVMine Pro (Mobile & Tablet)",
      "dl-box-mobile-sub": "Stable Release Client",
      "dl-box-tv-title": "IPTVMine Pro (Android TV & FireStick)",
      "dl-box-tv-sub": "Leanback D-Pad Client",
      "tbl-filename": "File Name",
      "tbl-filesize": "File Size",
      "tbl-system": "System OS",
      "tbl-arch": "Architecture",
      "tbl-md5": "MD5 Signature",
      "btn-dl-mobile": "Download Mobile APK",
      "btn-dl-tv": "Download Android TV APK",
      "btn-source": "View Source Code",
      "legacy-title": "IPTVMine Pro Older Versions",
      "tbl-hdr-version": "Version",
      "tbl-hdr-date": "Release Date",
      "tbl-hdr-size": "Size",
      "tbl-hdr-dl": "Download File",
      "comp-title": "System Compatibility Guidelines",
      "comp-li1": "Architecture: universal package works with all ARM and x86 chips automatically.",
      "comp-li2": "Storage space required: At least 60 MB of available storage for runtime video buffers and playlist database.",
      "comp-li3": "Permissions: Internet and network access required. Storage permission needed for VOD downloads.",
      "comp-li4": "Vega Extensions: Headless extension execution requires WebView (v74 or newer) to run JS engines correctly.",
      "movies-title": "Explore M3U VOD Content",
      "movies-desc": "Search and preview millions of movies and TV shows supported for instant streaming in IPTVMine Pro.",
      "movie-search-btn-text": "Search"
    },
    hi: {
      "nav-home": "मुख्य पृष्ठ",
      "nav-download": "डाउनलोड",
      "nav-guide": "इंस्टॉल गाइड",
      "nav-github": "गिटहब",
      "hero-title": "IPTVMine Pro डाउनलोड करें",
      "hero-desc": "एंड्रॉइड और एंड्रॉइड टीवी के लिए बेहतरीन ओपन-सोर्स स्ट्रीमिंग साथी। बिना किसी प्रतिबंध, बिना किसी शुल्क और बिना किसी विज्ञापन के अपने M3U प्लेलिस्ट, फिल्मों और टीवी शोज तक पहुंचें।",
      "hero-cta-download": "IPTVMine Pro APK डाउनलोड",
      "hero-cta-tv": "एंड्रॉइड टीवी सेटअप",
      "stat-login-val": "कोई लॉगिन नहीं",
      "stat-login-label": "आवश्यक",
      "stat-source": "ओपन सोर्स",
      "stat-ads": "विज्ञापन रहित",
      "steps-title": "IPTVMine Pro को 3 आसान चरणों में इंस्टॉल करें",
      "steps-desc": "बस कुछ ही क्लिक में अपने एंड्रॉइड डिवाइस पर ऐप चालू करें।",
      "step1-num": "चरण 1",
      "step1-title": "APK डाउनलोड करें",
      "step1-desc": "अपने डिवाइस पर सुरक्षित इंस्टॉलर APK फाइल को सहेजने के लिए डाउनलोड बटन पर क्लिक करें।",
      "step2-num": "चरण 2",
      "step2-title": "अज्ञात स्रोतों को सक्षम करें",
      "step2-desc": "डाउनलोड की गई फ़ाइल को खोलें और \"इंस्टॉल\" पर क्लिक करें। यदि संकेत दिया जाए, तो सेटिंग्स में \"अज्ञात स्रोतों से इंस्टॉल\" सक्षम करें।",
      "step3-num": "चरण 3",
      "step3-title": "लॉन्च और प्ले करें",
      "step3-desc": "ऐप खोलें, अपनी प्लेलिस्ट लोड करें, या तुरंत एचडी स्ट्रीम प्राप्त करने के लिए जावास्क्रिप्ट स्क्रेपर्स (वेगा) चलाएं।",
      "about-tag": "ओपन सोर्स आईपीटीवी प्लेयर",
      "about-title": "आपका प्रीमियम एंड्रॉइड स्ट्रीमिंग साथी",
      "about-text1": "अधिकांश स्ट्रीमिंग एप्लिकेशन ट्रैकर्स, भारी विज्ञापनों और प्रीमियम ब्लॉकों के साथ आते हैं। IPTVMine Pro नियमों को बदलता है: यह पूरी तरह से मुफ्त, समुदाय-संचालित और अधिकतम डिवाइस अनुकूलन के लिए डिज़ाइन किया गया है।",
      "about-text2": "जेटपैक कंपोज़ का उपयोग करके मूल रूप से निर्मित, यह प्लेयर तेज़ चैनल फ़िल्टरिंग, उत्तरदायी मूवी ब्राउज़िंग और स्थानीय ऑफ़लाइन डाउनलोड प्रदान करता है। उन्नत वेगा स्क्रेपर इंजन के साथ, आप सैंडबॉक्स वातावरण में सुरक्षित रूप से स्ट्रीम एकत्रित कर सकते हैं।",
      "about-bullet1": "तेज़ प्लेलिस्ट फ़िल्टरिंग",
      "about-bullet2": "सैंडबॉक्स्ड स्क्रेपर निष्पादन",
      "about-bullet3": "PiP समर्थन के साथ ExoPlayer",
      "about-bullet4": "मोबाइल-टीवी सिंक्रनाइज़ पेयरिंग",
      "about-bullet5": "डबल-टैप सीक ओवरले",
      "about-bullet6": "स्थानीय ऑफ़लाइन डाउनलोड",
      "guide-title": "चरण-दर-चरण स्थापना मार्गदर्शिका",
      "guide-desc": "जानें कि कैसे आसानी से अपने फोन या एंड्रॉइड टीवी पर एपीके क्लाइंट लोड करें।",
      "tab-mobile": "एंड्रॉइड मोबाइल / टैबलेट",
      "tab-tv": "एंड्रॉइड टीवी / फायरस्टिक",
      "mstep1": "शीर्ष मेनू से डाउनलोड पृष्ठ खोलें और मोबाइल संस्करण एपीके चुनें।",
      "mstep2": "फ़ाइल डाउनलोड करना शुरू करने के लिए डाउनलोड एपीके बटन पर टैप करें।",
      "mstep3": "डाउनलोड समाप्त होने पर, अपने डिवाइस की सेटिंग्स > सुरक्षा और गोपनीयता पर जाएं।",
      "mstep4": "अपने ब्राउज़र या फ़ाइल प्रबंधक के लिए अज्ञात स्रोतों से ऐप इंस्टॉल करने की अनुमति सक्षम करें।",
      "mstep5": "अपने डाउनलोड फ़ोल्डर में एपीके फ़ाइल ढूंढें, उस पर टैप करें और इंस्टॉल चुनें।",
      "mstep6": "ऐप खोलें, अपनी M3U प्लेलिस्ट आयात करें, और तुरंत लाइव टीवी चैनल देखना शुरू करें!",
      "tstep1": "डाउनलोड पृष्ठ पर जाएं और समर्पित एंड्रॉइड टीवी क्लाइंट एपीके डाउनलोड करें।",
      "tstep2": "यूएसबी ड्राइव या वाई-फाई शेयरिंग ऐप (जैसे Send Files to TV) का उपयोग करके एपीके को अपने टीवी में स्थानांतरित करें।",
      "tstep3": "अपने एंड्रॉइड टीवी पर, फ़ाइल एक्सप्लोरर खोलें, एपीके फ़ाइल ढूंढें और उस पर क्लिक करें।",
      "tstep4": "यदि संकेत दिया जाए, तो टीवी डेवलपर विकल्पों में फ़ाइल एक्सप्लोरर को अज्ञात ऐप्स इंस्टॉल करने की अनुमति दें।",
      "tstep5": "इंस्टॉल चुनें। काम पूरा होने पर, टीवी ऐप लॉन्च करें।",
      "tstep6": "पेयरिंग मेनू खोलें, अपने फोन के ऐप से क्यूआर कोड स्कैन करें, और अपनी प्लेलिस्ट तुरंत सिंक्रनाइज़ करें!",
      "features-title": "मुख्य प्रदर्शन सुविधाएँ",
      "features-desc": "गति, उपयोगिता और उपयोगकर्ता गोपनीयता सुरक्षा के लिए इंजीनियर किया गया एक स्ट्रीमिंग अनुभव।",
      "feat1-title": "कोई सीमा नहीं",
      "feat1-desc": "बिना डेटा थ्रॉटल, सत्र सीमा या छिपे हुए सदस्यता शुल्क के लाइव टीवी, खेल और फिल्में स्ट्रीम करें। आप पूर्ण नियंत्रण में हैं।",
      "feat2-title": "पूरी तरह से मुफ़्त",
      "feat2-desc": "कोड पूरी तरह से ओपन सोर्स है। कोई पंजीकरण फॉर्म नहीं, कोई सदस्यता शुल्क नहीं, कोई बंद चैनल नहीं और शून्य इन-ऐप खरीदारी।",
      "feat3-title": "हाई स्पीड ExoPlayer",
      "feat3-desc": "एचएलएस / M3U8 वीडियो स्ट्रीम को तेजी से बफर करने के लिए एंड्रॉइडएक्स मीडिया3 रैपर्स का उपयोग करता है, जिसमें डबल-टैप जेस्चर सीक शामिल है।",
      "feat4-title": "एंड्रॉइड टीवी लीनबैक",
      "feat4-desc": "रिमोट कंट्रोल (डी-पैड) के लिए अनुकूलित टीवी ऐप डैशबोर्ड, निर्मित नेटवर्क स्पीड टेस्ट और स्थानीय मौसम पूर्वानुमान शामिल हैं।",
      "feat5-title": "100% उपयोगकर्ता गोपनीयता",
      "feat5-desc": "सभी इतिहास, बुकमार्क सूचियाँ और सेटिंग्स स्थानीय रूप से संग्रहीत की जाती हैं। हम आपका कोई भी डेटा एकत्र या साझा नहीं करते हैं।",
      "feat6-title": "वेगा एक्सटेंशन समर्थन",
      "feat6-desc": "कस्टम जावास्क्रिप्ट स्क्रेपर्स सुरक्षित रूप से आयात करें। आपके डिवाइस की सुरक्षा के लिए लिंक सैंडबॉक्स्ड वातावरण में हल किए जाते हैं।",
      "footer-support": "ईमेल समर्थन:",
      "download-title": "IPTVMine Pro रिलीज़",
      "download-desc": "अपने विशिष्ट एंड्रॉइड हार्डवेयर प्लेटफ़ॉर्म के लिए डिज़ाइन किए गए एपीके क्लाइंट का चयन और डाउनलोड करें।",
      "dl-box-mobile-title": "IPTVMine Pro (मोबाइल और टैबलेट)",
      "dl-box-mobile-sub": "स्थिर रिलीज क्लाइंट",
      "dl-box-tv-title": "IPTVMine Pro (एंड्रॉइड टीवी और फायरस्टिक)",
      "dl-box-tv-sub": "लीनबैक डी-पैड क्लाइंट",
      "tbl-filename": "फ़ाइल का नाम",
      "tbl-filesize": "फ़ाइल का आकार",
      "tbl-system": "सिस्टम ओएस",
      "tbl-arch": "आर्किटेक्चर",
      "tbl-md5": "MD5 सिग्नेचर",
      "btn-dl-mobile": "मोबाइल एपीके डाउनलोड",
      "btn-dl-tv": "एंड्रॉइड टीवी एपीके डाउनलोड",
      "btn-source": "स्रोत कोड देखें",
      "legacy-title": "IPTVMine Pro पुराने संस्करण",
      "tbl-hdr-version": "संस्करण",
      "tbl-hdr-date": "रिलीज़ की तारीख",
      "tbl-hdr-size": "आकार",
      "tbl-hdr-dl": "फ़ाइल डाउनलोड",
      "comp-title": "सिस्टम अनुकूलता दिशानिर्देश",
      "comp-li1": "आर्किटेक्चर: यूनिवर्सल पैकेज सभी एआरएम और x86 चिप्स के साथ काम करता है।",
      "comp-li2": "भंडारण स्थान: वीडियो बफर और डेटाबेस के लिए कम से कम 60 एमबी खाली स्थान की आवश्यकता है।",
      "comp-li3": "अनुमतियाँ: इंटरनेट और नेटवर्क एक्सेस आवश्यक। वीओडी डाउनलोड के लिए स्टोरेज अनुमति की आवश्यकता।",
      "comp-li4": "वेगा एक्सटेंशन: हेडलेस रनर को जावास्क्रिप्ट इंजन चलाने के लिए एंड्रॉइड वेबव्यू (v74+) की आवश्यकता होती है।",
      "movies-title": "M3U वीडियो प्रिव्यू",
      "movies-desc": "लाखों फिल्मों और टीवी शोज को खोजें और देखें जो IPTVMine Pro में सीधे स्ट्रीम की जा सकती हैं।",
      "movie-search-btn-text": "खोजें"
    },
    bn: {
      "nav-home": "হোম",
      "nav-download": "ডাউনলোড",
      "nav-guide": "ইনস্টল গাইড",
      "nav-github": "গিটহাব",
      "hero-title": "IPTVMine Pro ডাউনলোড করুন",
      "hero-desc": "অ্যান্ড্রয়েড এবং অ্যান্ড্রয়েড টিভির জন্য সেরা ওপেন সোর্স স্ট্রিমিং অ্যাপ। কোনো বিজ্ঞাপন ছাড়াই আপনার M3U প্লেলিস্ট, মুভি এবং সিরিজ সরাসরি অ্যাক্সেস করুন সম্পূর্ণ বিনামূল্যে।",
      "hero-cta-download": "IPTVMine Pro APK ডাউনলোড করুন",
      "hero-cta-tv": "অ্যান্ড্রয়েড টিভি সেটআপ করুন",
      "stat-login-val": "লগইন নেই",
      "stat-login-label": "প্রয়োজন নেই",
      "stat-source": "오পেন সোর্স",
      "stat-ads": "বিজ্ঞাপন মুক্ত",
      "steps-title": "৩টি সহজ ধাপে IPTVMine Pro ইনস্টল করুন",
      "steps-desc": "কয়েকটি ক্লিকের মাধ্যমে আপনার অ্যান্ড্রয়েড ডিভাইসে অ্যাপটি চালু করুন।",
      "step1-num": "ধাপ ১",
      "step1-title": "APK ডাউনলোড করুন",
      "step1-desc": "আপনার ডিভাইসে নিরাপদ APK ফাইলটি সংরক্ষণ করতে ডাউনলোড বোতামে ক্লিক করুন।",
      "step2-num": "ধাপ ২",
      "step2-title": "অজানা অ্যাপ অনুমতি দিন",
      "step2-desc": "ডাউনলোড করা ফাইলটি খুলুন এবং \"ইনস্টল\" এ ক্লিক করুন। অনুরোধ করা হলে সেটিংস থেকে \"Unknown Sources\" অন করুন।",
      "step3-num": "ধাপ ৩",
      "step3-title": "চালু করুন ও উপভোগ করুন",
      "step3-desc": "অ্যাপটি খুলুন, আপনার প্লেলিস্ট ইম্পোর্ট করুন অথবা এইচডি স্ট্রিমিং শুরু করতে জাভাস্ক্রিপ্ট স্ক্র্যাপার (Vega) চালু করুন।",
      "about-tag": "ওপেন সোর্স আইপিটিভি প্লেয়ার",
      "about-title": "আপনার প্রিমিয়াম অ্যান্ড্রয়েড স্ট্রিমিং সঙ্গী",
      "about-text1": "বেশিরভাগ স্ট্রিমিং অ্যাপ্লিকেশন ট্র্যাকার এবং ভারী বিজ্ঞাপন নিয়ে আসে। IPTVMine Pro সম্পূর্ণ আলাদা: এটি সম্পূর্ণ বিনামূল্যে এবং কোনো বিজ্ঞাপন ছাড়াই কাজ করে।",
      "about-text2": "জেটপ্যাক কম্পোজ দিয়ে তৈরি এই প্লেয়ারটি দ্রুত চ্যানেল ফিল্টারিং এবং স্থানীয় অফলাইন ডাউনলোড সমর্থন করে। উন্নত ভেগা স্ক্র্যাপার ইঞ্জিনের সাথে সুরক্ষিতভাবে স্ট্রিমিং উপভোগ করুন।",
      "about-bullet1": "দ্রুত প্লেলিস্ট ফিল্টারিং",
      "about-bullet2": "সুরক্ষিত স্ক্র্যাপার রানার",
      "about-bullet3": "PiP মোড সহ ExoPlayer",
      "about-bullet4": "মোবাইল-টিভি সিঙ্ক পেয়ারিং",
      "about-bullet5": "ডবল-ট্যাপ সিক ওভারলে",
      "about-bullet6": "স্থানীয় অফলাইন ডাউনলোড",
      "guide-title": "ধাপ-বাই-ধাপ ইনস্টলেশন নির্দেশিকা",
      "guide-desc": "সহজেই আপনার ফোন বা অ্যান্ড্রয়েড টিভিতে APK ফাইল কীভাবে ইনস্টল করবেন তা শিখুন।",
      "tab-mobile": "অ্যান্ড্রয়েড মোবাইল / ট্যাবলেট",
      "tab-tv": "অ্যান্ড্রয়েড টিভি / ফায়ারস্টিক",
      "mstep1": "ডাউনলোড পেজে যান এবং আপনার মোবাইলের জন্য APK ফাইলটি বেছে নিন।",
      "mstep2": "ডাউনলোড শুরু করতে বোতামে আলতো চাপুন।",
      "mstep3": "ডাউনলোড শেষ হলে ফোনের সেটিংস > সিকিউরিটিতে যান।",
      "mstep4": "অজানা উৎস থেকে অ্যাপ ইনস্টল করার পারমিশনটি অন করুন।",
      "mstep5": "ডাউনলোড ফোল্ডার থেকে APK ফাইলে ক্লিক করে ইনস্টল সম্পন্ন করুন।",
      "mstep6": "প্লেয়ারটি চালু করে আপনার M3U প্লেলিস্ট ইম্পোর্ট করুন ও চ্যানেল দেখা শুরু করুন!",
      "tstep1": "ডাউনলোড পৃষ্ঠা থেকে অ্যান্ড্রয়েড টিভি ক্লায়েন্ট APK টি ডাউনলোড করুন।",
      "tstep2": "ইউএসবি ড্রাইভ বা ওয়াই-ফাই শেয়ারিং অ্যাপের সাহায্যে APK টি টিভিতে পাঠান।",
      "tstep3": "টিভিতে ফাইল ম্যানেজার খুলে APK টি খুঁজুন এবং ক্লিক করুন।",
      "tstep4": "জিজ্ঞাসা করা হলে অজানা উৎস থেকে ইনস্টল করার পারমিশনটি অন করুন।",
      "tstep5": "ইনস্টল বোতামে ক্লিক করে টিভি অ্যাপটি চালু করুন।",
      "tstep6": "পেয়ারিং কোডটি আপনার মোবাইলের অ্যাপ দিয়ে স্ক্যান করে সিঙ্ক সম্পন্ন করুন।",
      "features-title": "মূল পারফরম্যান্স বৈশিষ্ট্যসমূহ",
      "features-desc": "গতি, নির্ভরযোগ্যতা এবং ব্যবহারকারীর গোপনীয়তা রক্ষার জন্য তৈরি বিশেষ স্ট্রিমিং অভিজ্ঞতা।",
      "feat1-title": "কোনো সীমা নেই",
      "feat1-desc": "কোনো অতিরিক্ত চার্জ বা ডাটা লিমিট ছাড়াই লাইভ স্পোর্টস ও মুভি স্ট্রিমিং করুন আনলিমিটেড।",
      "feat2-title": "সম্পূর্ণ বিনামূল্যে",
      "feat2-desc": "কোডটি ১০০% ওপেন সোর্স। কোনো সাবস্ক্রিপশন ফি বা কোনো ইন-অ্যাপ পারচেজ নেই।",
      "feat3-title": "উচ্চ গতির ExoPlayer",
      "feat3-desc": "ভিডিও বাফার কমানোর জন্য মিডিয়া৩ ফ্রেমওয়ার্ক ব্যবহার করে এবং ডবল-ট্যাপ সিক সাপোর্ট করে।",
      "feat4-title": "অ্যান্ড্রয়েড টিভি লীনব্যাক",
      "feat4-desc": "টিভির রিমোট কন্ট্রোল ব্যবহারের জন্য বিশেষ ইন্টারফেস, স্পিড টেস্ট এবং স্থানীয় আবহাওয়ার পূর্বাভাস।",
      "feat5-title": "১০০% ব্যবহারকারীর গোপনীয়তা",
      "feat5-desc": "আপনার সমস্ত হিস্ট্রি এবং প্লেলিস্ট স্থানীয়ভাবে আপনার ফোনেই জমা থাকে। আমরা কোনো তথ্য ট্র্যাক করি না।",
      "feat6-title": "ভেগা এক্সটেনশন সমর্থন",
      "feat6-desc": "কাস্টম স্ক্র্যাপার ফাইল নিরাপদে রান করুন। স্যান্ডবক্সড উপায়ে প্লেব্যাক লিংক জেনারেট করা হয়।",
      "footer-support": "ইমেল সহায়তা:",
      "download-title": "IPTVMine Pro রিলিজ সংস্করণ",
      "download-desc": "আপনার অ্যান্ড্রয়েড ডিভাইসের জন্য সঠিক ক্লায়েন্ট APK টি ডাউনলোড করুন।",
      "dl-box-mobile-title": "IPTVMine Pro (মোবাইল ও ট্যাবলেট)",
      "dl-box-mobile-sub": "স্থিতিশীল মোবাইল রিলিজ",
      "dl-box-tv-title": "IPTVMine Pro (অ্যান্ড্রয়েড টিভি)",
      "dl-box-tv-sub": "টিভি লীনব্যাক রিলিজ",
      "tbl-filename": "ফাইলের নাম",
      "tbl-filesize": "ফাইলের সাইজ",
      "tbl-system": "সিস্টেম ওএস",
      "tbl-arch": "আর্কিটেকচার",
      "tbl-md5": "MD5 স্বাক্ষর",
      "btn-dl-mobile": "মোবাইল APK ডাউনলোড",
      "btn-dl-tv": "টিভি APK डाउनलोड",
      "btn-source": "উৎস কোড দেখুন",
      "legacy-title": "IPTVMine Pro পুরোনো সংস্করণ",
      "tbl-hdr-version": "সংস্করণ",
      "tbl-hdr-date": "রিলিজের তারিখ",
      "tbl-hdr-size": "সাইজ",
      "tbl-hdr-dl": "ডাউনলোড লিংক",
      "comp-title": "ডিভাইস সামঞ্জস্যের নির্দেশিকা",
      "comp-li1": "আর্কিটেকচার: ইউনিভার্সাল প্যাকেজটি সব ARM ও x86 প্রসেসরে কাজ করে।",
      "comp-li2": "স্টোরেজ: ভিডিও বাফার ও ডেটাবেসের জন্য কমপক্ষে ৬০ এমবি খালি জায়গা প্রয়োজন।",
      "comp-li3": "পারমিশন: ওয়ান লাইনে ইন্টারনেট এবং লোকাল স্টোরেজ অ্যাক্সেস পারমিশন প্রয়োজন।",
      "comp-li4": "ভেগা স্ক্র্যাপার: রান করার জন্য অ্যান্ড্রয়েড ওয়েবভিউ (v74+) ইনস্টল থাকা আবশ্যক।",
      "movies-title": "মুভি ও ভিডিও প্রিভিউ",
      "movies-desc": "IPTVMine Pro তে স্ট্রিমিং যোগ্য লক্ষ লক্ষ মুভি এবং টিভি শো সার্চ করুন ও প্রিভিউ দেখুন।",
      "movie-search-btn-text": "অনুসন্ধান"
    },
    ta: {
      "nav-home": "முகப்பு",
      "nav-download": "பதிவிறக்கம்",
      "nav-guide": "நிறுவல் வழிகாட்டி",
      "nav-github": "கிட்ஹப்",
      "hero-title": "IPTVMine Pro பதிவிறக்கு",
      "hero-desc": "ஆண்ட்ராய்டு மற்றும் ஆண்ட்ராய்டு டிவிக்கான சிறந்த ஓப்பன் சோர்ஸ் மீடியா பிளேயர். விளம்பரங்கள் இன்றி உங்கள் M3U பிளேலிஸ்ட்கள், திரைப்படங்கள் மற்றும் தொலைக்காட்சி நிகழ்ச்சிகளை இலவசமாகப் பார்க்கலாம்.",
      "hero-cta-download": "IPTVMine Pro APK பதிவிறக்கு",
      "hero-cta-tv": "ஆண்ட்ராய்டு டிவி அமைப்பு",
      "stat-login-val": "Login இல்லை",
      "stat-login-label": "தேவையில்லை",
      "stat-source": "ஓப்பன் சோர்ஸ்",
      "stat-ads": "விளம்பரங்கள் இல்லை",
      "steps-title": "3 எளிய படிகளில் IPTVMine Pro நிறுவவும்",
      "steps-desc": "உங்கள் ஆண்ட்ராய்டு சாதனத்தில் சில நொடிகளில் இந்த செயலியை நிறுவலாம்.",
      "step1-num": "படி 1",
      "step1-title": "APK பதிவிறக்கவும்",
      "step1-desc": "உங்கள் மொபைலில் பாதுகாப்பான ஏபிகே கோப்பைச் சேமிக்க பதிவிறக்க பொத்தானை அழுத்தவும்.",
      "step2-num": "படி 2",
      "step2-title": "அறியப்படாத செயலிகளை அனுமதி",
      "step2-desc": "பதிவிறக்கிய கோப்பை திறந்து 'Install' கொடுக்கவும். கேட்டால் Settings-ல் 'Unknown Sources' அனுமதிக்கவும்.",
      "step3-num": "படி 3",
      "step3-title": "இயக்கி மகிழுங்கள்",
      "step3-desc": "செயலியைத் திறந்து, உங்கள் பிளேலிஸ்ட்டை உள்ளிட்டு நேரலையாக எச்டி தரத்தில் வீடியோக்களைப் பார்க்கவும்.",
      "about-tag": "ஓப்பன் சோர்ஸ் ஐபிடிவி பிளேயர்",
      "about-title": "உங்களின் சிறந்த ஸ்டீமிங் துணை",
      "about-text1": "மற்ற ஸ்டீமிங் செயலிகள் போலன்றி, IPTVMine Pro முற்றிலும் இலவசமாகவும் விளம்பரங்கள் மற்றும் கண்காணிப்புகள் இன்றியும் செயல்படுகிறது.",
      "about-text2": "Jetpack Compose கொண்டு உருவாக்கப்பட்ட இந்த செயலி அதிவேகச் சேனல் தேடலையும் ஆஃப்லைன் பதிவிறக்கங்களையும் ஆதரிக்கிறது.",
      "about-bullet1": "வேகமான பிளேலிஸ்ட் தேடல்",
      "about-bullet2": "பாதுகாப்பான ஸ்கிராப்பர் ரன்",
      "about-bullet3": "பிஐபி ஆதரவுடன் எக்சோபிளேயர்",
      "about-bullet4": "மொபைல்-டிவி ஒத்திசைவு இணைப்பு",
      "about-bullet5": "இருமுறை தட்டினால் தேடும் வசதி",
      "about-bullet6": "ஆஃப்லைன் பதிவிறக்கம்",
      "guide-title": "விரிவான நிறுவல் வழிகாட்டி",
      "guide-desc": "மொபைல் அல்லது ஆண்ட்ராய்டு டிவியில் செயலியை நிறுவுவது எப்படி என்று எளிதாகக் கற்றுக்கொள்ளுங்கள்.",
      "tab-mobile": "ஆண்ட்ராய்டு மொபைல் / டேப்லெட்",
      "tab-tv": "ஆண்ட்ராய்டு டிவி / பயர்ஸ்டிக்",
      "mstep1": "Download பக்கத்திற்குச் சென்று மொபைலுக்கான APK-வை தேர்ந்தெடுக்கவும்.",
      "mstep2": "பதிவிறக்கம் செய்ய Download பொத்தானை அழுத்தவும்.",
      "mstep3": "பதிவிறக்கம் முடிந்ததும், செட்டிங்ஸ் > செக்யூரிட்டி பக்கத்திற்குச் செல்லவும்.",
      "mstep4": "அங்கு 'Allow Install from Unknown Sources' என்பதை இயக்கவும்.",
      "mstep5": "பதிவிறக்கங்கள் கோப்புறையில் உள்ள ஏபிகே கோப்பைத் தொட்டு நிறுவவும்.",
      "mstep6": "செயலியைத் திறந்து, உங்கள் M3U பிளேலிஸ்ட்டைச் சேர்த்து உடனே பார்க்கத் தொடங்குங்கள்!",
      "tstep1": "பதிவிறக்கப் பக்கத்திலிருந்து பிரத்யேக ஆண்ட்ராய்டு டிவி ஏபிகே கோப்பைப் பதிவிறக்கவும்.",
      "tstep2": "யூஎஸ்பி அல்லது ஒய்-பை கோப்புப் பரிமாற்ற செயலி மூலம் அதை டிவிக்கு அனுப்பவும்.",
      "tstep3": "டிவியில் ஃபைல் மேனேஜர் திறந்து ஏபிகே கோப்பைத் தேர்ந்தெடுக்கவும்.",
      "tstep4": "கேட்டால் டிவி செட்டிங்ஸில் தெரியாத செயலிகளை நிறுவ அனுமதி வழங்கவும்.",
      "tstep5": "நிறுவி முடித்ததும், டிவி திரையில் இருந்து செயலியைத் திறக்கவும்.",
      "tstep6": "இணைப்புப் பக்கத்தைத் திறந்து, மொபைல் செயலி மூலம் கியூஆர் குறியீட்டை ஸ்கேன் செய்து இணைக்கவும்.",
      "features-title": "முக்கிய செயல்திறன் அம்சங்கள்",
      "features-desc": "வேகம், பாதுகாப்பு மற்றும் பயனர் தனியுரிமைக்காக வடிவமைக்கப்பட்ட ஒரு சிறந்த அனுபவம்.",
      "feat1-title": "எல்லையே இல்லை",
      "feat1-desc": "எந்தவொரு கட்டுப்பாடுகளும் சந்தாக்களும் இன்றி வரம்பற்ற நேரலைச் சேனல்களை கண்டு மகிழுங்கள்.",
      "feat2-title": "முற்றிலும் இலவசம்",
      "feat2-desc": "இதன் குறியீடு ஓப்பன் சோர்ஸ் ஆகும். எந்தவித மறைமுகக் கட்டணங்களோ விளம்பரங்களோ இல்லை.",
      "feat3-title": "அதிவேக எக்சோபிளேயர்",
      "feat3-desc": "வீடியோக்களை தடையின்றி இயக்க மீடியா3 தொழில்நுட்பத்தைப் பயன்படுத்துகிறது.",
      "feat4-title": "ஆண்ட்ராய்டு டிவி லீன்பேக்",
      "feat4-desc": "டிவி ரிமோட்டிற்காக பிரத்யேகமாக வடிவமைக்கப்பட்ட வடிவமைப்பு மற்றும் இணைய வேகச் சோதனை வசதி.",
      "feat5-title": "100% தனியுரிமைப் பாதுகாப்பு",
      "feat5-desc": "உங்கள் தேடல் மற்றும் பட்டியல் விவரங்கள் அனைத்தும் உங்கள் சாதனத்திலேயே பாதுகாப்பாகச் சேமிக்கப்படும்.",
      "feat6-title": "வேகா எக்ஸ்டென்ஷன் ஆதரவு",
      "feat6-desc": "கஸ்டம் ஜாவாஸ்கிரிப்ட் ஸ்கிராப்பர்களை பாதுகாப்பான முறையில் இயக்கிப் பயன்பெறலாம்.",
      "footer-support": "மின்னஞ்சல் ஆதரவு:",
      "download-title": "IPTVMine Pro வெளியீடுகள்",
      "download-desc": "உங்கள் ஆண்ட்ராய்டு சாதனத்திற்கு ஏற்ற ஏபிகே கோப்பினைத் தேர்ந்தெடுத்துப் பதிவிறக்கவும்.",
      "dl-box-mobile-title": "IPTVMine Pro (மொபைல் பதிப்பு)",
      "dl-box-mobile-sub": "நிலையான மொபைல் செயலி",
      "dl-box-tv-title": "IPTVMine Pro (ஆண்ட்ராய்டு டிவி பதிப்பு)",
      "dl-box-tv-sub": "டிவி ரிமோட் செயலி",
      "tbl-filename": "கோப்பு பெயர்",
      "tbl-filesize": "கோப்பு அளவு",
      "tbl-system": "இயங்குதளம்",
      "tbl-arch": "கட்டமைப்பு",
      "tbl-md5": "MD5 கையெழுத்து",
      "btn-dl-mobile": "மொபைல் ஏபிகே பதிவிறக்கு",
      "btn-dl-tv": "டிவி ஏபிகே பதிவிறக்கு",
      "btn-source": "மூலக் குறியீட்டைப் பார்",
      "legacy-title": "முந்தைய பதிப்புகள்",
      "tbl-hdr-version": "பதிப்பு",
      "tbl-hdr-date": "வெளியீட்டு தேதி",
      "tbl-hdr-size": "அளவு",
      "tbl-hdr-dl": "பதிவிறக்கக் கோப்பு",
      "comp-title": "சாதனத் தகுதி நெறிமுறைகள்",
      "comp-li1": "கட்டமைப்பு: இந்த யுனிவர்சல் கோப்பு அனைத்து எஆர்எம் மற்றும் எக்ஸ்86 சிப்களிலும் வேலை செய்யும்.",
      "comp-li2": "சேமிப்பகம்: வீடியோ சேமிப்பிற்காக குறைந்தபட்சம் 60 எம்பி இடம் தேவைப்படும்.",
      "comp-li3": "அனுமதிகள்: இணையம் மற்றும் சேமிப்பக அணுகல் அனுமதிகள் தேவைப்படும்.",
      "comp-li4": "வலைக் காட்சி: ஸ்கிராப்பர் இயக்க ஆண்ட்ராய்டு வெப்காட்சி (v74+) அவசியம்.",
      "movies-title": "திரைப்படங்கள் முன்னோட்டம்",
      "movies-desc": "IPTVMine Pro செயலி மூலம் உடனடியாகப் பார்க்கக்கூடிய மில்லியன் கணக்கான திரைப்படங்களைத் தேடிப் பாருங்கள்.",
      "movie-search-btn-text": "தேடுக"
    },
    te: {
      "nav-home": "హోమ్",
      "nav-download": "డౌన్‌లోడ్",
      "nav-guide": "ఇన్‌స్టాలేషన్ గైడ్",
      "nav-github": "గిట్‌హబ్",
      "hero-title": "IPTVMine Pro డౌన్‌లోడ్",
      "hero-desc": "ఆండ్రాయిడ్ మరియు ఆండ్రాయిడ్ టీవీల కొరకు అత్యుత్తమ ఓపెన్ సోర్స్ మీడియా ప్లేయర్. ఎటువంటి ప్రకటనలు లేకుండా మీ M3U ప్లేలిస్టులు, సినిమాలు మరియు టీవీ షోలను ఉచితంగా వీక్షించండి.",
      "hero-cta-download": "IPTVMine Pro APK డౌన్‌లోడ్",
      "hero-cta-tv": "ఆండ్రాయిడ్ టీవీ సెటప్",
      "stat-login-val": "లాగిన్ లేదు",
      "stat-login-label": "అవసరం లేదు",
      "stat-source": "ఓపెన్ సోర్స్",
      "stat-ads": "ప్రకటనలు లేవు",
      "steps-title": "3 సులువైన దశల్లో IPTVMine Pro ఇన్‌స్టాల్ చేసుకోండి",
      "steps-desc": "కేవలం కొన్ని క్లిక్‌లలో మీ ఆండ్రాయిడ్ పరికరంలో ఈ యాప్‌ను రన్ చేయండి.",
      "step1-num": "దశ 1",
      "step1-title": "APK డౌన్‌లోడ్ చేయండి",
      "step1-desc": "మీ మొబైల్‌లో సురక్షితమైన ఏపీకే ఫైల్‌ను సేవ్ చేయడానికి డౌన్‌లోడ్ బటన్ క్లిక్ చేయండి.",
      "step2-num": "దశ 2",
      "step2-title": "గుర్తుతెలియని యాప్స్ అనుమతించు",
      "step2-desc": "డౌన్‌లోడ్ చేసిన ఫైల్ ఓపెన్ చేసి 'ఇన్‌స్టాల్' చేయండి. అడిగితే Settings లో 'Unknown Sources' ఎనేబుల్ చేయండి.",
      "step3-num": "దశ 3",
      "step3-title": "యాప్ రన్ చేయండి",
      "step3-desc": "యాప్ ఓపెన్ చేసి మీ ప్లేలిస్ట్ ఇంపోర్ట్ చేసుకుని నేరుగా హెచ్‌డీ క్వాలిటీలో లైవ్ ఛానెళ్లను చూడండి.",
      "about-tag": "ఓపెన్ సోర్స్ ఐపీటీవీ ప్లేయర్",
      "about-title": "మీ ప్రీమియం ఆండ్రాయిడ్ స్ట్రీమింగ్ తోడు",
      "about-text1": "చాలా యాప్స్ ప్రకటనలతో నిండి ఉంటాయి. కానీ IPTVMine Pro ఎటువంటి యాడ్స్ లేకుండా పూర్తిగా ఉచితంగా పనిచేస్తుంది.",
      "about-text2": "Jetpack Compose తో డెవలప్ చేయబడిన ఈ యాప్ వేగంగా ఛానెళ్లను లోడ్ చేస్తుంది మరియు ఆఫ్లైన్ డౌన్‌లోడ్స్‌ను సపోర్ట్ చేస్తుంది.",
      "about-bullet1": "వేగవంతమైన ప్లేలిస్ట్ ఫిల్టరింగ్",
      "about-bullet2": "సురక్షితమైన స్క్రాపర్ ఎగ్జిక్యూషన్",
      "about-bullet3": "PiP సపోర్ట్‌తో ఎక్సోప్లేయర్",
      "about-bullet4": "మొబైల్-టీవీ సింక్ పెయిరింగ్",
      "about-bullet5": "డబుల్-టాప్ సీక్ ఓవర్లే",
      "about-bullet6": "స్థానిక ఆఫ్లైన్ డౌన్‌లోడ్స్",
      "guide-title": "వివరణాత్మక ఇన్‌స్టాలేషన్ గైడ్",
      "guide-desc": "మొబైల్ లేదా ఆండ్రాయిడ్ టీవీలలో ఈ యాప్ ఎలా ఇన్‌స్టాల్ చేయాలో సులభంగా తెలుసుకోండి.",
      "tab-mobile": "ఆండ్రాయిడ్ మొబైల్ / టాబ్లెట్",
      "tab-tv": "ఆండ్రాయిడ్ టీవీ / ఫైర్‌స్టిక్",
      "mstep1": "డౌన్‌లోడ్ పేజీకి వెళ్లి మొబైల్ కొరకు APK ఫైల్ ఎంచుకోండి.",
      "mstep2": "డౌన్‌లోడ్ ప్రారంభించడానికి బటన్ ప్రెస్ చేయండి.",
      "mstep3": "డౌన్‌లోడ్ పూర్తయిన తర్వాత సెట్టింగ్స్ > సెక్యూరిటీ కి వెళ్లండి.",
      "mstep4": "అక్కడ 'Allow Install from Unknown Sources' ఆప్ชั่น ఆన్ చేయండి.",
      "mstep5": "డౌన్‌లోడ్ ఫోల్డర్ లో ఉన్న ఏపీకే ఫైల్ పై క్లిక్ చేసి ఇన్‌స్టాల్ చేయండి.",
      "mstep6": "యాప్ ఓపెన్ చేసి మీ M3U ప్లేలిస్ట్ లోడ్ చేసుకోండి మరియు లైవ్ ఛానెళ్లను ఆస్వాదించండి!",
      "tstep1": "డౌన్‌లోడ్ పేజీ నుండి ఆండ్రాయిడ్ టీవీ ఏపీకే ఫైల్ డౌన్‌లోడ్ చేయండి.",
      "tstep2": "యుఎస్‌బి లేదా వైఫై ఫైల్ షేరింగ్ యాప్ ద్వారా దాన్ని టీవీకి పంపండి.",
      "tstep3": "టీవీలో ఫైల్ మేనేజర్ ఓపెన్ చేసి ఏపీకే ఫైల్ ఎంచుకోండి.",
      "tstep4": "అడిగితే టీవీ సెట్టింగ్స్‌లో తెలియని యాప్స్ ఇన్‌స్టాల్ చేయడానికి अनुमति ఇవ్వండి.",
      "tstep5": "ఇన్‌స్టాల్ చేసి టీవీ డ్యాష్‌బోర్డ్ నుండి యాప్ ఓపెన్ చేయండి.",
      "tstep6": "పెయిరింగ్ మెనూ ఓపెన్ చేసి, మొబైల్ యాప్ ద్వారా క్యూఆర్ కోడ్ స్కాన్ చేసి సింక్ చేయండి.",
      "features-title": "ముఖ్యమైన యాప్ ఫీచర్స్",
      "features-desc": "వేగం, భద్రత మరియు వినియోగదారుల ప్రైవసీని దృష్టిలో ఉంచుకుని తయారు చేయబడింది.",
      "feat1-title": "పరిమితులు లేవు",
      "feat1-desc": "ఎటువంటి అదనపు ఛార్జీలు లేకుండా అపరిమితంగా లైవ్ స్పోర్ట్స్, ఛానెళ్లను వీక్షించండి.",
      "feat2-title": "పూర్तीగా ఉచితం",
      "feat2-desc": "యాప్ కోడ్ పూర్తిగా ఓపెన్ సోర్స్. ఎటువంటి రిజిస్ట్రేషన్ లేదా సబ్‌స్క్రిప్షన్ ఫీజు లేదు.",
      "feat3-title": "హై స్పీడ్ ఎక్సోప్లేయర్",
      "feat3-desc": "తక్కువ బఫరింగ్‌తో వీడియోలు ప్లే కావడానికి ఉపయోగపడుతుంది.",
      "feat4-title": "ఆండ్రాయిడ్ టీవీ లీన్‌బ్యాక్",
      "feat4-desc": "టీవీ రిమోట్ ఉపయోగించడానికి అనుకూలంగా డిజైన్ చేయబడింది మరియు స్పీడ్ టెస్ట్ ఫీచర్ ఉంది.",
      "feat5-title": "100% వినియోగదారుల ప్రైవసీ",
      "feat5-desc": "మీ హిస్టరీ మరియు ప్లేలిస్ట్స్ మీ మొబైల్ మెమరీ లోనే భద్రంగా ఉంటాయి.",
      "feat6-title": "వేగా ఎక్స్టెన్షన్ సపోర్ట్",
      "feat6-desc": "కస్టమ్ స్క్రాపర్ ఫైల్స్ ద్వారా సురક્ષितంగా వీడియో లింక్స్ ప్లే చేసుకోవచ్చు.",
      "footer-support": "ఈమెయిల్ సపోర్ట్:",
      "download-title": "IPTVMine Pro వర్షన్స్",
      "download-desc": "మీ పరికరానికి తగిన ఏపీకే ఫైల్‌ను డౌన్‌లోడ్ చేసుకోండి.",
      "dl-box-mobile-title": "IPTVMine Pro (మొబైల్ వర్షన్)",
      "dl-box-mobile-sub": "స్టేబుల్ మొబైల్ క్లయింట్",
      "dl-box-tv-title": "IPTVMine Pro (టీవీ వర్షన్)",
      "dl-box-tv-sub": "టీవీ రిమోట్ క్లయింట్",
      "tbl-filename": "ఫైల్ పేరు",
      "tbl-filesize": "ఫైల్ సైజు",
      "tbl-system": "ఆపరేటింగ్ సిస్టమ్",
      "tbl-arch": "ఆర్కిటెక్చర్",
      "tbl-md5": "MD5 సిగ్నేచర్",
      "btn-dl-mobile": "మొబైల్ ఏపీకే డౌన్‌లోడ్",
      "btn-dl-tv": "టీవీ ఏపీకే డౌన్‌లోడ్",
      "btn-source": "యాప్ కోడ్ చూడండి",
      "legacy-title": "మునుపటి వర్షన్లు",
      "tbl-hdr-version": "వర్షన్",
      "tbl-hdr-date": "విడుదల తేదీ",
      "tbl-hdr-size": "సైజు",
      "tbl-hdr-dl": "డౌన్‌లోడ్ లింక్",
      "comp-title": "సిస్టమ్ రిక్వైర్మెంట్స్ గైడ్‌లైన్స్",
      "comp-li1": "ఆర్కిటెక్చర్: ఈ ఫైల్ అన్ని రకాల మొబైల్ ప్రాసెసర్లలో రన్ అవుతుంది.",
      "comp-li2": "స్టోరేజ్: యాప్ రన్ అవ్వడానికి కనీసం 60 ఎంబీ స్పేస్ అవసరం.",
      "comp-li3": "పర్మిషన్స్: ఇంటర్నెట్ మరియు స్టోरेజ్ పర్మిషన్స్ అవసరం.",
      "comp-li4": "వెబ్‌వ్యూ: స్క్రాపర్ల కొరకు ఆండ్రాయిడ్ వెబ్‌వ్యూ (v74+) ఇన్‌స్టాల్ అయి ఉండాలి.",
      "movies-title": "సినిమాలు & వీఓడీ ప్రివ్యూ",
      "movies-desc": "IPTVMine Pro యాప్ ద్వారా నేరుగా ప్లే చేయగల లక్షలాది సినిమాలు మరియు టీవీ షోలను శోధించండి.",
      "movie-search-btn-text": "సెర్చ్"
    },
    id: {
      "nav-home": "Beranda",
      "nav-download": "Unduh",
      "nav-guide": "Panduan Instal",
      "nav-github": "GitHub",
      "hero-title": "Unduh IPTVMine Pro",
      "hero-desc": "Pendamping streaming sumber terbuka terbaik untuk Android dan Android TV. Akses playlist M3U, film, dan serial TV Anda tanpa batas, gratis, dan tanpa iklan.",
      "hero-cta-download": "Unduh IPTVMine Pro APK",
      "hero-cta-tv": "Siapkan Android TV",
      "stat-login-val": "Tanpa Login",
      "stat-login-label": "Diperlukan",
      "stat-source": "Sumber Terbuka",
      "stat-ads": "Bebas Iklan",
      "steps-title": "Instal IPTVMine Pro dalam 3 Langkah Mudah",
      "steps-desc": "Jalankan aplikasi di perangkat Android Anda hanya dengan beberapa klik.",
      "step1-num": "Langkah 1",
      "step1-title": "Unduh APK",
      "step1-desc": "Klik tombol unduh untuk menyimpan file APK installer yang aman ke perangkat Anda.",
      "step2-num": "Langkah 2",
      "step2-title": "Izinkan Sumber Tidak Dikenal",
      "step2-desc": "Buka file yang diunduh dan klik \"Instal\". Jika diminta, aktifkan \"Izinkan Instalasi dari Sumber Tidak Dikenal\" di pengaturan.",
      "step3-num": "Langkah 3",
      "step3-title": "Buka & Putar",
      "step3-desc": "Buka aplikasi, masukkan daftar putar Anda, atau jalankan scraper JavaScript (Vega) untuk memutar streaming HD secara instan.",
      "about-tag": "Pemutar IPTV Sumber Terbuka",
      "about-title": "Pendamping Streaming Android Premium Anda",
      "about-text1": "Sebagian besar aplikasi streaming dilengkapi pelacak, iklan berat, dan langganan mahal. IPTVMine Pro berbeda: aplikasi ini sepenuhnya gratis, dikembangkan oleh komunitas, dan dioptimalkan untuk perangkat Anda.",
      "about-text2": "Dibuat menggunakan Jetpack Compose, pemutar ini menghadirkan pencarian saluran yang cepat, penjelajahan film yang responsif, dan pengunduhan luring lokal.",
      "about-bullet1": "Penyaringan Daftar Putar Cepat",
      "about-bullet2": "Eksekusi Scraper Aman",
      "about-bullet3": "ExoPlayer dengan Dukungan PiP",
      "about-bullet4": "Penyandingan Sinkron Mobile-TV",
      "about-bullet5": "Ketuk Dua Kali untuk Mencari",
      "about-bullet6": "Pengunduhan Luring Lokal",
      "guide-title": "Panduan Instalasi Langkah demi Langkah",
      "guide-desc": "Pelajari cara memasang file APK dengan mudah di ponsel atau Android TV Anda.",
      "tab-mobile": "Android Seluler / Tablet",
      "tab-tv": "Android TV / FireStick",
      "mstep1": "Buka halaman Unduh dari menu atas dan pilih APK Versi Seluler.",
      "mstep2": "Ketuk tombol Unduh APK IPTVMine Pro untuk mulai mengunduh file.",
      "mstep3": "Setelah unduhan selesai, buka Pengaturan > Keamanan & Privasi perangkat Anda.",
      "mstep4": "Aktifkan opsi Izinkan Penginstalan Aplikasi dari Sumber Tidak Dikenal.",
      "mstep5": "Temukan file APK di folder Unduhan ponsel Anda, ketuk, dan pilih Instal.",
      "mstep6": "Buka aplikasi, masukkan file playlist M3U Anda, dan mulai streaming saluran TV segera!",
      "tstep1": "Buka halaman Unduh dan unduh APK Klien Android TV khusus.",
      "tstep2": "Transfer APK yang diunduh to TV Anda menggunakan flashdisk USB atau melalui Wi-Fi (misalnya menggunakan aplikasi \"Send Files to TV\").",
      "tstep3": "Di Android TV Anda, buka pengelola file, temukan file APK, lalu klik.",
      "tstep4": "Jika diminta, berikan izin kepada pengelola file untuk memasang aplikasi dari sumber tidak dikenal di opsi pengembang TV.",
      "tstep5": "Pilih Instal. Setelah selesai, buka aplikasi TV dari dasbor Anda.",
      "tstep6": "Buka menu penyandingan, pindai kode QR dengan aplikasi ponsel Anda, dan sinkronkan daftar putar Anda seketika!",
      "features-title": "Fitur Performa Utama",
      "features-desc": "Pengalaman streaming yang dirancang untuk kecepatan, kegunaan, dan perlindungan privasi pengguna.",
      "feat1-title": "Tanpa Batas",
      "feat1-desc": "Streaming TV langsung, olahraga, dan film tanpa batasan bandwidth, batas sesi, atau biaya langganan tersembunyi.",
      "feat2-title": "Sepenuhnya Gratis",
      "feat2-desc": "Kode ini sepenuhnya sumber terbuka. Tanpa registrasi, tanpa biaya langganan, dan tanpa pembelian dalam aplikasi.",
      "feat3-title": "ExoPlayer Berkecepatan Tinggi",
      "feat3-desc": "Menggunakan wrapper AndroidX Media3 untuk buffering video yang cepat, dengan gestur ketuk dua kali.",
      "feat4-title": "Android TV Leanback",
      "feat4-desc": "Termasuk dasbor TV yang dioptimalkan untuk remote control, pengujian kecepatan jaringan terintegrasi, dan ramalan cuaca lokal.",
      "feat5-title": "100% Privasi Pengguna",
      "feat5-desc": "Semua riwayat, daftar putar favorit, dan pengaturan disimpan secara lokal di perangkat Anda. Kami tidak mengumpulkan data pelacakan.",
      "feat6-title": "Dukungan Ekstensi Vega",
      "feat6-desc": "Impor scraper JavaScript khusus dengan aman. Tautan putar diselesaikan dalam lingkungan terisolasi untuk keamanan perangkat.",
      "footer-support": "Dukungan Email:",
      "download-title": "Rilis IPTVMine Pro",
      "download-desc": "Pilih dan unduh file APK klien yang dirancang untuk perangkat Android Anda.",
      "dl-box-mobile-title": "IPTVMine Pro (Seluler & Tablet)",
      "dl-box-mobile-sub": "Klien Rilis Stabil",
      "dl-box-tv-title": "IPTVMine Pro (Android TV & FireStick)",
      "dl-box-tv-sub": "Klien TV Remote",
      "tbl-filename": "Nama File",
      "tbl-filesize": "Ukuran File",
      "tbl-system": "Sistem OS",
      "tbl-arch": "Arsitektur",
      "tbl-md5": "Tanda Tangan MD5",
      "btn-dl-mobile": "Unduh APK Seluler",
      "btn-dl-tv": "Unduh APK Android TV",
      "btn-source": "Lihat Kode Sumber",
      "legacy-title": "Versi Lama IPTVMine Pro",
      "tbl-hdr-version": "Versi",
      "tbl-hdr-date": "Tanggal Rilis",
      "tbl-hdr-size": "Ukuran",
      "tbl-hdr-dl": "Unduh File",
      "comp-title": "Panduan Kompatibilitas Sistem",
      "comp-li1": "Arsitektur: paket universal berfungsi di semua chipset ARM dan x86 secara otomatis.",
      "comp-li2": "Penyimpanan: setidaknya 60 MB penyimpanan kosong diperlukan untuk database playlist dan buffer video.",
      "comp-li3": "Izin: memerlukan akses internet dan penyimpanan lokal untuk pengunduhan VOD.",
      "comp-li4": "Ekstensi Vega: membutuhkan Android WebView (v74+) untuk menjalankan scraper dengan benar.",
      "movies-title": "Jelajahi Konten VOD",
      "movies-desc": "Cari dan pratinjau jutaan film dan serial TV yang didukung untuk streaming instan di IPTVMine Pro.",
      "movie-search-btn-text": "Cari"
    },
    mr: {
      "nav-home": "मुख्य पृष्ठ",
      "nav-download": "डाउनलोड",
      "nav-guide": "इन्स्टॉलेशन मार्गदर्शिका",
      "nav-github": "गिटहब",
      "hero-title": "IPTVMine Pro डाउनलोड करा",
      "hero-desc": "अँड्रॉइड आणि अँड्रॉइड टीव्हीसाठी अंतिम मुक्त-स्रोत स्ट्रीमिंग सोबती. तुमच्या M3U प्लेलिस्ट, चित्रपट आणि टीव्ही शो कोणत्याही निर्बंधांशिवाय, विनामूल्य आणि जाहिरातींशिवाय पहा.",
      "hero-cta-download": "IPTVMine Pro APK डाउनलोड करा",
      "hero-cta-tv": "अँड्रॉइड टीव्ही सेटअप",
      "stat-login-val": "लॉगिन नाही",
      "stat-login-label": "आवश्यकता नाही",
      "stat-source": "मुक्त स्रोत",
      "stat-ads": "जाहिरात विरहित",
      "steps-title": "३ सोप्या चरणांमध्ये IPTVMine Pro स्थापित करा",
      "steps-desc": "फक्त काही क्लिकमध्ये तुमच्या अँड्रॉइड डिव्हाइसवर ॲप सुरू करा.",
      "step1-num": "पायरी १",
      "step1-title": "APK डाउनलोड करा",
      "step1-desc": "तुमच्या डिव्हाइसवर सुरक्षित इंस्टॉलर APK फाईल जतन करण्यासाठी डाउनलोड बटणावर क्लिक करा.",
      "step2-num": "पायरी २",
      "step2-title": "अपरिचित ॲप्सना परवानगी द्या",
      "step2-desc": "डाउनलोड केलेली फाईल उघडा आणि \"स्थापित करा\" (Install) वर क्लिक करा. विचारल्यास, सेटिंग्जमध्ये \"अपरिचित स्त्रोतांकडून स्थापित करा\" सुरू करा.",
      "step3-num": "पायरी ३",
      "step3-title": "ॲप उघडा आणि पहा",
      "step3-desc": "ॲप उघडा, तुमची प्लेलिस्ट लोड करा किंवा थेट एचडी प्रवाह पाहण्यासाठी जावास्क्रिप्ट स्क्रॅपर्स (वेगा) चालवा.",
      "about-tag": "मुक्त स्रोत आयपीटीव्ही प्लेयर",
      "about-title": "तुमचा प्रीमियम अँड्रॉइड स्ट्रीमिंग सोबती",
      "about-text1": "बऱ्याच स्ट्रीमिंग ॲप्लिकेशन्समध्ये ट्रॅकर्स, जड जाहिराती आणि प्रीमियम ब्लॉक्स असतात. IPTVMine Pro हे नियम बदलतो: हे पूर्णपणे विनामूल्य, समुदाय-चालित आणि सर्वोत्तम डिव्हाइस कार्यक्षमतेसाठी डिझाइन केलेले आहे.",
      "about-text2": "जेटपॅक कंपोज वापरून बनवलेले, हे प्लेयर जलद वाहिनी फिल्टरिंग, प्रतिसाद देणारे चित्रपट ब्राउझिंग आणि स्थानिक ऑफलाइन डाउनलोड प्रदान करते. प्रगत वेगा स्क्रॅपर इंजिनसह, तुम्ही सुरक्षित वातावरणात प्रवाह एकत्रित करू शकता.",
      "about-bullet1": "जलद प्लेलिस्ट फिल्टरिंग",
      "about-bullet2": "सुरक्षित स्क्रॅपर चालवणे",
      "about-bullet3": "PiP समर्थनासह ExoPlayer",
      "about-bullet4": "मोबाईल-टीव्ही सिंक्रोनाइझ पेअरिंग",
      "about-bullet5": "डबल-टॅपने शोधण्याची सुविधा",
      "about-bullet6": "स्थानिक ऑफलाइन डाउनलोड",
      "guide-title": "चरण-दर-चरण स्थापना मार्गदर्शिका",
      "guide-desc": "तुमच्या फोनवर किंवा अँड्रॉइड टीव्हीवर एपीके क्लायंट सहज कसा स्थापित करायचा ते शिका.",
      "tab-mobile": "अँड्रॉइड मोबाईल / टॅब्लेट",
      "tab-tv": "अँड्रॉइड टीव्ही / फायरस्टिक",
      "mstep1": "वरच्या मेनूमधून डाउनलोड पृष्ठ उघडा आणि मोबाईल आवृत्ती एपीके निवडा.",
      "mstep2": "फाईल डाउनलोड करणे सुरू करण्यासाठी डाउनलोड एपीके बटणावर टॅप करा.",
      "mstep3": "डाउनलोड पूर्ण झाल्यावर, तुमच्या डिव्हाइसच्या सेटिंग्ज > सुरक्षा आणि गोपनीयता वर जा.",
      "mstep4": "तुमच्या ब्राउझर किंवा फाईल व्यवस्थापकासाठी अपरिचित स्त्रोतांकडून ॲप स्थापित करण्याची परवानगी सुरू करा.",
      "mstep5": "तुमच्या डाउनलोड फोल्डरमध्ये एपीके फाईल शोधा, त्यावर टॅप करा आणि स्थापित करा निवडा.",
      "mstep6": "ॲप उघडा, तुमची M3U प्लेलिस्ट आयात करा आणि थेट टीव्ही चॅनेल पाहणे सुरू करा!",
      "tstep1": "डाउनलोड पृष्ठावर जा आणि समर्पित अँड्रॉइड टीव्ही क्लायंट एपीके डाउनलोड करा.",
      "tstep2": "यूएसबी ड्राईव्ह किंवा वाई-फाई शेअरिंग ॲप (उदा. Send Files to TV) वापरून एपीके तुमच्या टीव्हीवर हस्तांतरित करा.",
      "tstep3": "तुमच्या अँड्रॉइड टीव्हीवर, फाईल व्यवस्थापक उघडा, एपीके फाईल शोधा आणि त्यावर क्लिक करा.",
      "tstep4": "विचारल्यास, टीव्ही डेव्हलपर पर्यायांमध्ये फाईल व्यवस्थापकाला अपरिचित ॲप्स स्थापित करण्याची परवानगी द्या.",
      "tstep5": "स्थापित करा निवडा. काम पूर्ण झाल्यावर, टीव्ही ॲप सुरू करा.",
      "tstep6": "पेयरिंग मेनू उघडा, तुमच्या फोनच्या ॲपमधून क्यूआर कोड स्कॅन करा आणि तुमची प्लेलिस्ट त्वरित सिंक्रोनाइझ करा!",
      "features-title": "मुख्य कार्यप्रदर्शन वैशिष्ट्ये",
      "features-desc": "वेग, उपयुक्तता आणि वापरकर्ता गोपनीयता सुरक्षिततेसाठी डिझाइन केलेला एक स्ट्रीमिंग अनुभव.",
      "feat1-title": "मर्यादा नाही",
      "feat1-desc": "डेटा थ्रॉटल, सत्र मर्यादा किंवा लपविलेल्या सदस्यता शुल्काशिवाय थेट टीव्ही, क्रीडा आणि चित्रपट प्रवाहित करा. तुम्ही पूर्ण नियंत्रणात आहात.",
      "feat2-title": "पूर्णपणे विनामूल्य",
      "feat2-desc": "कोड पूर्णपणे मुक्त स्रोत आहे. कोणतेही नोंदणी फॉर्म नाही, कोणतीही सदस्यता फी नाही आणि शून्य इन-ॲप खरेदी.",
      "feat3-title": "हाय स्पीड ExoPlayer",
      "feat3-desc": "व्हिडिओ प्रवाह वेगाने बफर करण्यासाठी अँड्रॉइडएक्स मीडिया३ रॅपर्स वापरतो, ज्यामध्ये डबल-टॅपने शोधण्याची सुविधा समाविष्ट आहे.",
      "feat4-title": "अँड्रॉइड टीव्ही लीनबॅक",
      "feat4-desc": "रिमोट कंट्रोलसाठी अनुकूलित टीव्ही ॲप डॅशबोर्ड, अंगभूत नेटवर्क स्पीड टेस्ट आणि स्थानिक हवामान अंदाज समाविष्ट आहे.",
      "feat5-title": "१००% वापरकर्ता गोपनीयता",
      "feat5-desc": "सर्व इतिहास, बुकमार्क सूची आणि सेटिंग्ज स्थानिक पातळीवर साठवल्या जातात. आम्ही तुमचा कोणताही डेटा गोळा किंवा सामायिक करत नाही.",
      "feat6-title": "वेगा एक्सटेंशन समर्थन",
      "feat6-desc": "सानुकूल जावास्क्रिप्ट स्क्रॅपर्स सुरक्षितपणे आयात करा. तुमच्या डिव्हाइसच्या सुरक्षिततेसाठी दुवे सँडबॉक्स वातावरणात सोडवले जातात.",
      "footer-support": "ईमेल समर्थन:",
      "download-title": "IPTVMine Pro प्रकाशने",
      "download-desc": "तुमच्या विशिष्ट अँड्रॉइड डिव्हाइससाठी डिझाइन केलेले एपीके क्लायंट निवडा आणि डाउनलोड करा.",
      "dl-box-mobile-title": "IPTVMine Pro (मोबाईल आणि टॅब्लेट)",
      "dl-box-mobile-sub": "स्थिर आवृत्ती क्लायंट",
      "dl-box-tv-title": "IPTVMine Pro (अँड्रॉइड टीव्ही आणि फायरस्टिक)",
      "dl-box-tv-sub": "लीनबॅक डी-पैड क्लायंट",
      "tbl-filename": "फाईलचे नाव",
      "tbl-filesize": "फाईलचा आकार",
      "tbl-system": "सिस्टम ओएस",
      "tbl-arch": "आर्किटेक्चर",
      "tbl-md5": "MD5 स्वाक्षरी",
      "btn-dl-mobile": "मोबाईल एपीके डाउनलोड करा",
      "btn-dl-tv": "अँड्रॉइड टीव्ही एपीके डाउनलोड करा",
      "btn-source": "स्रोत कोड पहा",
      "legacy-title": "IPTVMine Pro जुन्या आवृत्त्या",
      "tbl-hdr-version": "आवृत्ती",
      "tbl-hdr-date": "प्रकाशन तारीख",
      "tbl-hdr-size": "आकार",
      "tbl-hdr-dl": "फाईल डाउनलोड",
      "comp-title": "सिस्टम अनुकूलता मार्गदर्शक तत्त्वे",
      "comp-li1": "आर्किटेक्चर: युनिव्हर्सल पॅकेज सर्व एआरएम आणि x86 चिप्ससह स्वयंचलितपणे कार्य करते.",
      "comp-li2": "स्टोरेज जागा: व्हिडिओ बफर आणि डेटाबेससाठी किमान ६० एमबी रिकामी जागा आवश्यक आहे.",
      "comp-li3": "परवानग्या: इंटरनेट आणि नेटवर्क प्रवेश आवश्यक. ऑफलाइन डाउनलोडसाठी स्टोरेज परवानगी आवश्यक.",
      "comp-li4": "वेगा एक्सटेंशन: जावास्क्रिप्ट इंजिन चालवण्यासाठी अँड्रॉइड वेबव्ह्यू (v74+) आवश्यक आहे.",
      "movies-title": "चित्रपट आणि व्हीओडी पूर्वावलोकन",
      "movies-desc": "IPTVMine Pro वर थेट प्रवाहित करण्यासाठी कोट्यवधी चित्रपट आणि टीव्ही शो शोधा आणि त्यांचे पूर्वावलोकन पहा.",
      "movie-search-btn-text": "शोधा"
    }
  };

  // Language Switcher Logic
  const langBtn = document.querySelector('.lang-btn');
  const langList = document.querySelector('.lang-list');
  
  function translatePage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        // Handle input placeholders
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else {
          // Keep inner structures like SVGs if they exist, or just swap text
          const svg = el.querySelector('svg');
          if (svg) {
            // If it contains a child SVG (e.g. download buttons), replace only the text sibling
            const span = el.querySelector('span');
            if (span) {
              span.textContent = translations[lang][key];
            } else {
              el.innerHTML = svg.outerHTML + ' ' + translations[lang][key];
            }
          } else {
            el.innerHTML = translations[lang][key];
          }
        }
      }
    });
    
    // Save language to localStorage
    localStorage.setItem('iptvmine_lang', lang);
    document.documentElement.lang = lang;
  }

  if (langBtn && langList) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langList.classList.toggle('show');
    });

    // Close on click outside
    document.addEventListener('click', () => {
      langList.classList.remove('show');
    });

    // Language list items click selector
    const langItems = langList.querySelectorAll('.lang-item');
    langItems.forEach(item => {
      item.addEventListener('click', () => {
        langItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const langName = item.querySelector('span:last-child').textContent;
        const langFlag = item.querySelector('span:first-child').textContent;
        langBtn.querySelector('span').innerHTML = `${langFlag} <span style="margin-left: 4px;">${langName}</span>`;
        
        // Find selected language key
        let selectedLang = 'en';
        if (langName === 'हिन्दी') selectedLang = 'hi';
        else if (langName === 'বাংলা') selectedLang = 'bn';
        else if (langName === 'தமிழ்') selectedLang = 'ta';
        else if (langName === 'తెలుగు') selectedLang = 'te';
        else if (langName === 'Bahasa') selectedLang = 'id';
        else if (langName === 'मराठी') selectedLang = 'mr';
        
        translatePage(selectedLang);
      });
    });
  }

  // Load language preference from localStorage on init
  const savedLang = localStorage.getItem('iptvmine_lang');
  if (savedLang && savedLang !== 'en') {
    translatePage(savedLang);
    
    // Update button visual state
    if (langBtn && langList) {
      const items = langList.querySelectorAll('.lang-item');
      items.forEach(item => {
        item.classList.remove('active');
        const langName = item.querySelector('span:last-child').textContent;
        
        let match = false;
        if (savedLang === 'hi' && langName === 'हिन्दी') match = true;
        else if (savedLang === 'bn' && langName === 'বাংলা') match = true;
        else if (savedLang === 'ta' && langName === 'தமிழ்') match = true;
        else if (savedLang === 'te' && langName === 'తెలుగు') match = true;
        else if (savedLang === 'id' && langName === 'Bahasa') match = true;
        else if (savedLang === 'mr' && langName === 'मराठी') match = true;
        
        if (match) {
          item.classList.add('active');
          const langFlag = item.querySelector('span:first-child').textContent;
          langBtn.querySelector('span').innerHTML = `${langFlag} <span style="margin-left: 4px;">${langName}</span>`;
        }
      });
    }
  }

  // 7. AUTOMATIC GITHUB RELEASES VERSION FETCHER
  function fetchLatestRelease() {
    const mobileDlBtn = document.getElementById('btn-dl-mobile');
    const tvDlBtn = document.getElementById('btn-dl-tv');
    
    // Only execute on pages that have these download buttons (e.g. download.html)
    if (!mobileDlBtn && !tvDlBtn) return;
    
    const cacheKey = 'iptvmine_latest_release';
    const cacheTimeKey = 'iptvmine_latest_release_time';
    const oneHour = 60 * 60 * 1000;
    
    const cachedData = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);
    const now = Date.now();
    
    if (cachedData && cachedTime && (now - cachedTime < oneHour)) {
      try {
        const release = JSON.parse(cachedData);
        updateDownloadDOM(release);
        return;
      } catch (e) {
        console.error('Failed to parse cached release data', e);
      }
    }
    
    fetch('https://api.github.com/repos/samyak2403/IPTVMine-Pro/releases/latest')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        if (!data || !data.tag_name) throw new Error('Invalid release data structure');
        
        // Prepare release object with tag_name and asset info
        const release = {
          tag: data.tag_name,
          assets: (data.assets || []).map(asset => ({
            name: asset.name,
            size: asset.size, // in bytes
            browser_download_url: asset.browser_download_url
          }))
        };
        
        // Cache to localStorage
        localStorage.setItem(cacheKey, JSON.stringify(release));
        localStorage.setItem(cacheTimeKey, now.toString());
        
        updateDownloadDOM(release);
      })
      .catch(err => {
        console.warn('Could not fetch latest release from GitHub API. Falling back to default values.', err);
      });
  }

  function updateDownloadDOM(release) {
    const tagName = release.tag; // e.g. v1.0.2
    
    // Find assets matching Mobile and TV
    const mobileAsset = release.assets.find(a => 
      (a.name.toLowerCase().includes('mobile') || a.name.toLowerCase().includes('app-release') || a.name.toLowerCase().includes('phone')) 
      && a.name.endsWith('.apk')
    );
    const tvAsset = release.assets.find(a => 
      (a.name.toLowerCase().includes('tv') || a.name.toLowerCase().includes('television') || a.name.toLowerCase().includes('leanback')) 
      && a.name.endsWith('.apk')
    );
    
    // Fallback links if specific matching assets are not found in the release
    const mobileUrl = mobileAsset ? mobileAsset.browser_download_url : `https://github.com/samyak2403/IPTVMine-Pro/releases/download/${tagName}/app-release.apk`;
    const tvUrl = tvAsset ? tvAsset.browser_download_url : `https://github.com/samyak2403/IPTVMine-Pro/releases/download/${tagName}/television-release.apk`;
    
    // 1. Update Mobile Section
    const mobileDlBtn = document.getElementById('btn-dl-mobile');
    if (mobileDlBtn) {
      mobileDlBtn.setAttribute('href', mobileUrl);
    }
    const mobileTag = document.getElementById('mobile-version-tag');
    if (mobileTag) {
      mobileTag.textContent = `${tagName} Stable`;
    }
    const mobileFilename = document.getElementById('mobile-filename-val');
    if (mobileFilename) {
      mobileFilename.textContent = mobileAsset ? mobileAsset.name : 'app-release.apk';
    }
    const mobileSize = document.getElementById('mobile-filesize-val');
    if (mobileSize && mobileAsset) {
      mobileSize.textContent = `${(mobileAsset.size / (1024 * 1024)).toFixed(1)} MB`;
    }
    
    // 2. Update TV Section
    const tvDlBtn = document.getElementById('btn-dl-tv');
    if (tvDlBtn) {
      tvDlBtn.setAttribute('href', tvUrl);
    }
    const tvTag = document.getElementById('tv-version-tag');
    if (tvTag) {
      tvTag.textContent = `${tagName}-tv Stable`;
    }
    const tvFilename = document.getElementById('tv-filename-val');
    if (tvFilename) {
      tvFilename.textContent = tvAsset ? tvAsset.name : 'television-release.apk';
    }
    const tvSize = document.getElementById('tv-filesize-val');
    if (tvSize && tvAsset) {
      tvSize.textContent = `${(tvAsset.size / (1024 * 1024)).toFixed(1)} MB`;
    }
  }

  // Call the version fetcher
  fetchLatestRelease();

  // 8. INTERACTIVE MOVIES SHOWCASE (6 ROWS OMDb API)
  function initMoviesShowcase() {
    const apiKey = 'da954011';
    const queries = ['Marvel', 'Batman', 'Star Wars', 'Bollywood', 'Disney', 'Avengers'];
    
    function fetchAndRenderRow(query, rowNum) {
      const track = document.getElementById(`track-row-${rowNum}`);
      if (!track) return;
      
      const url = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}&type=movie`;
      
      fetch(url)
        .then(response => {
          if (!response.ok) throw new Error('API request failed');
          return response.json();
        })
        .then(data => {
          if (data.Response === 'False' || !data.Search) {
            track.innerHTML = `<div class="movie-error">No content available</div>`;
            return;
          }
          
          let movies = data.Search;
          
          // Duplicate the list 3 times (total 30 items) to guarantee seamless looping
          const duplicatedMovies = [...movies, ...movies, ...movies];
          
          renderRowTrack(duplicatedMovies, track);
        })
        .catch(err => {
          console.error(`Error fetching movies for row ${rowNum}:`, err);
          track.innerHTML = '<div class="movie-error">Failed to load</div>';
        });
    }
    
    function renderRowTrack(movies, track) {
      track.innerHTML = '';
      
      movies.forEach(movie => {
        const posterUrl = (movie.Poster && movie.Poster !== 'N/A') ? movie.Poster : 'assets/images/logo.png';
        
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
          <div class="movie-poster-wrap">
            <img class="movie-poster" src="${posterUrl}" alt="${movie.Title}" loading="lazy">
            <div class="movie-card-overlay">${movie.Type}</div>
          </div>
          <div class="movie-info-panel">
            <h3>${movie.Title}</h3>
            <div class="movie-meta">
              <span>${movie.Year}</span>
              <div class="movie-btn-play-overlay">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="6 3 20 12 6 21 6 3"/></svg>
              </div>
            </div>
          </div>
        `;
        
        card.addEventListener('click', () => {
          alert(`IPTVMine Pro will load and stream "${movie.Title}" (${movie.Year})! Make sure you have the app installed on your Android device.`);
        });
        
        track.appendChild(card);
      });
    }
    
    // Fetch and render all 6 rows
    queries.forEach((q, index) => {
      fetchAndRenderRow(q, index + 1);
    });
  }
  
  initMoviesShowcase();
});
