

    // Callback function for initializing Google Translate API
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'es,fr,uk,tr,de', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
    }

    // Load the Google Translate API
    (function () {
        var googleTranslateScript = document.createElement('script');
        googleTranslateScript.type = 'text/javascript';
        googleTranslateScript.async = true;
        googleTranslateScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(googleTranslateScript);
    })();
