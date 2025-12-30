// ===================================
// グローバル変数
// ===================================
let hasAnimated = false;

// ===================================
// DOMContentLoaded
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // 背景フェードイン実行
    initBackgroundFadeIn();
    
    // ヘッダーアニメーション（左からフェードイン）
    initHeaderAnimation();
    
    // スクロールアニメーション設定
    initScrollAnimations();
    
    // ホバー効果設定
    initHoverEffects();
    
    // スムーズスクロール
    initSmoothScroll();
});

// ===================================
// 背景フェードイン
// ===================================
function initBackgroundFadeIn() {
    const heroBackground = document.querySelector('.hero-background');
    const heroSky = document.querySelector('.hero-sky');
    const heroBuilding = document.querySelector('.hero-building');
    const heroWindow = document.querySelector('.hero-window');
    
    if (heroBackground) {
        // 背景要素を初期状態で非表示
        heroSky.style.opacity = '0';
        heroBuilding.style.opacity = '0';
        heroWindow.style.opacity = '0';
        
        // 段階的にフェードイン
        setTimeout(() => {
            heroSky.style.transition = 'opacity 1s ease-out';
            heroSky.style.opacity = '1';
        }, 100);
        
        setTimeout(() => {
            heroBuilding.style.transition = 'opacity 1s ease-out';
            heroBuilding.style.opacity = '1';
        }, 400);
        
        setTimeout(() => {
            heroWindow.style.transition = 'opacity 1s ease-out';
            heroWindow.style.opacity = '1';
        }, 700);
    }
}

// ===================================
// ヘッダーと見出しの左からフェードイン
// ===================================
function initHeaderAnimation() {
    const heroText = document.querySelector('.hero-text');
    
    if (heroText) {
        // 初期状態
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateX(-50px)';
        
        // 背景が表示された後にアニメーション開始
        setTimeout(() => {
            heroText.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateX(0)';
        }, 1000);
    }
    
    // ムービーセクションのテキストも左からフェードイン
    const introText = document.querySelector('.intro-text');
    if (introText) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateX(-50px)';
                    
                    setTimeout(() => {
                        entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                        entry.target.classList.add('animated');
                    }, 100);
                }
            });
        }, {
            threshold: 0.2
        });
        
        observer.observe(introText);
    }
}

// ===================================
// スクロール時の下からフェードイン
// ===================================
function initScrollAnimations() {
    // セクションヘッダーのアニメーション
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(50px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.classList.add('animated');
                }, 100);
            }
        });
    }, {
        threshold: 0.3
    });
    
    sectionHeaders.forEach(header => headerObserver.observe(header));
    
    // 各要素の下からフェードイン
    animateElements('.news-item', 100);
    animateElements('.interview-card', 150);
    animateElements('.service-card', 200);
    animateElements('.vm-item', 200);
    animateElements('.welfare-card', 100);
    animateElements('.number-card', 100);
    animateElements('.about-card', 150);
    animateElements('.faq-item', 80);
    animateElements('.sns-card', 150);
}

// ===================================
// 要素ごとの下からフェードイン汎用関数
// ===================================
function animateElements(selector, staggerDelay = 100) {
    const elements = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const element = entry.target;
                
                // 初期状態を設定
                element.style.opacity = '0';
                element.style.transform = 'translateY(50px)';
                
                // 遅延を計算（要素のインデックスに基づく）
                const delay = Array.from(elements).indexOf(element) * staggerDelay;
                
                setTimeout(() => {
                    element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                    element.classList.add('animated');
                }, delay);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => observer.observe(element));
}

// ===================================
// ホバー効果（線が左からフェードイン）
// ===================================
function initHoverEffects() {
    // ナビゲーションリンク
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const line = document.createElement('div');
        line.className = 'hover-line';
        line.style.cssText = `
            position: absolute;
            bottom: 5px;
            left: 0;
            width: 0;
            height: 2px;
            background: white;
            transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        `;
        
        link.style.position = 'relative';
        
        link.addEventListener('mouseenter', () => {
            if (!link.querySelector('.hover-line')) {
                link.appendChild(line);
            }
            setTimeout(() => {
                line.style.width = '100%';
            }, 10);
        });
        
        link.addEventListener('mouseleave', () => {
            line.style.width = '0';
            setTimeout(() => {
                if (line.parentNode) {
                    line.parentNode.removeChild(line);
                }
            }, 600);
        });
    });
    
    // Aboutカードの下線効果
    const aboutCards = document.querySelectorAll('.about-card');
    aboutCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const line = this.querySelector('::before');
            // CSS transitionで処理されるため、追加のJSは不要
        });
    });
    
    // ニュース項目のホバー効果
    const newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach(item => {
        const line = document.createElement('div');
        line.className = 'news-hover-line';
        line.style.cssText = `
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 2px;
            background: rgba(255, 255, 255, 0.5);
            transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        `;
        
        item.style.position = 'relative';
        item.style.overflow = 'hidden';
        
        item.addEventListener('mouseenter', () => {
            if (!item.querySelector('.news-hover-line')) {
                item.appendChild(line);
            }
            setTimeout(() => {
                line.style.width = '100%';
            }, 10);
        });
        
        item.addEventListener('mouseleave', () => {
            line.style.width = '0';
        });
    });
    
    // FAQアイテムのホバー効果
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const line = document.createElement('div');
        line.className = 'faq-hover-line';
        line.style.cssText = `
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 2px;
            background: rgba(168, 255, 220, 0.5);
            transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        `;
        
        item.style.position = 'relative';
        item.style.overflow = 'hidden';
        
        item.addEventListener('mouseenter', () => {
            if (!item.querySelector('.faq-hover-line')) {
                item.appendChild(line);
            }
            setTimeout(() => {
                line.style.width = '100%';
            }, 10);
        });
        
        item.addEventListener('mouseleave', () => {
            line.style.width = '0';
        });
    });
}

// ===================================
// スムーズスクロール
// ===================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            if (targetId === '#' || targetId === '#apply') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// ヘッダーのスクロール時の背景変更
// ===================================
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(0, 147, 246, 1)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(0, 147, 246, 0.95)';
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===================================
// パララックス効果（オプション）
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===================================
// コンパスアニメーション
// ===================================
const compassArrow = document.querySelector('.compass-arrow');
if (compassArrow) {
    let rotation = 0;
    
    setInterval(() => {
        rotation += 1;
        compassArrow.style.transform = `rotate(${rotation}deg)`;
    }, 50);
}

// ===================================
// ページロード完了時の処理
// ===================================
window.addEventListener('load', () => {
    // ローディング完了後の追加処理があればここに記述
    document.body.classList.add('loaded');
});

// ===================================
// リサイズ時の処理
// ===================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // リサイズ完了後の処理
        console.log('Resize complete');
    }, 250);
});

// ===================================
// フォーカス管理（アクセシビリティ）
// ===================================
document.addEventListener('keydown', (e) => {
    // Tabキーでのフォーカス時にアウトラインを表示
    if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('user-is-tabbing');
});

// ===================================
// デバッグ用（開発時のみ）
// ===================================
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('Development mode');
    
    // スクロール位置をログ
    window.addEventListener('scroll', () => {
        // console.log('Scroll position:', window.pageYOffset);
    });
}

