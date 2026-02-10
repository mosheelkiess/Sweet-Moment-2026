function openImage(img) {
    // חסימת גלילת המסך
    document.body.style.overflow = 'hidden';

    // יצירת אלמנט overlay עם התמונה
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '10000';
    overlay.style.backdropFilter = 'blur(6px)';
    overlay.style.webkitBackdropFilter = 'blur(6px)';

    // יצירת התמונה בתוך ה-overlay
    const image = document.createElement('img');
    image.src = img.src;
    image.style.maxWidth = '92%';
    image.style.maxHeight = '75vh';
    image.style.borderRadius = '16px';
    image.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)';
    image.style.marginBottom = '20px';
    overlay.appendChild(image);

    // יצירת כפתור סגירה
    const closeButton = document.createElement('div');
    closeButton.innerHTML = '✕';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '16px';
    closeButton.style.left = '50%';
    closeButton.style.transform = 'translateX(-50%)';
    closeButton.style.fontSize = '28px';
    closeButton.style.color = 'white';
    closeButton.style.cursor = 'pointer';
    closeButton.style.width = '44px';
    closeButton.style.height = '44px';
    closeButton.style.display = 'flex';
    closeButton.style.alignItems = 'center';
    closeButton.style.justifyContent = 'center';
    closeButton.style.borderRadius = '50%';
    closeButton.style.background = 'rgba(255,255,255,0.15)';
    closeButton.style.transition = 'background 0.2s';
    closeButton.onmouseover = function() {
        closeButton.style.background = 'rgba(255,255,255,0.3)';
    };
    closeButton.onmouseout = function() {
        closeButton.style.background = 'rgba(255,255,255,0.15)';
    };
    closeButton.onclick = function() {
        document.body.style.overflow = 'auto';
        document.body.removeChild(overlay);
    };
    overlay.appendChild(closeButton);

    // סגירה בלחיצה על הרקע
    overlay.onclick = function(e) {
        if (e.target === overlay) {
            document.body.style.overflow = 'auto';
            document.body.removeChild(overlay);
        }
    };

    // יצירת כפתור שיתוף ממורכז
    const shareButton = document.createElement('div');
    shareButton.innerHTML = '📤  שיתוף התמונה בוואצפ';
    shareButton.style.backgroundColor = '#25d366';
    shareButton.style.color = 'white';
    shareButton.style.padding = '14px 28px';
    shareButton.style.borderRadius = '50px';
    shareButton.style.fontSize = '16px';
    shareButton.style.fontFamily = "'Heebo', sans-serif";
    shareButton.style.fontWeight = '600';
    shareButton.style.cursor = 'pointer';
    shareButton.style.boxShadow = '0 4px 16px rgba(37, 211, 102, 0.4)';
    shareButton.style.transition = 'transform 0.3s, box-shadow 0.3s';
    shareButton.onmouseover = function() {
        shareButton.style.transform = 'scale(1.06)';
        shareButton.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.5)';
    };
    shareButton.onmouseout = function() {
        shareButton.style.transform = 'scale(1)';
        shareButton.style.boxShadow = '0 4px 16px rgba(37, 211, 102, 0.4)';
    };
    shareButton.onclick = function(e) {
        e.stopPropagation();
        if (navigator.share) {
            navigator.share({
                title: 'תמונה לשיתוף',
                url: img.src
            }).catch(console.error);
        } else {
            alert('השיתוף לא נתמך בדפדפן שלך.');
        }
    };
    overlay.appendChild(shareButton);

    // הוספת ה-overlay לגוף הדף
    document.body.appendChild(overlay);
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'he',
            includedLanguages: 'en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        },
        'google_translate_element'
    );
}
