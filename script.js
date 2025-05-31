// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navCenter = document.querySelector('.nav-center-container');
    const ctaButton = document.querySelector('.cta-button');
    
    navToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        navCenter.classList.toggle('active');
        document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });
    const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;
// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Create the mirror effect using CSS clip-path
    function updateMirrorPosition() {
        const hero = document.querySelector('.hero');
        const footer = document.querySelector('footer.site-footer');
        const mirror = document.querySelector('.video-mirror');
        
        if (!hero || !footer || !mirror) return;
        
        const heroRect = hero.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();
        
        // Calculate visible portion of footer
        const viewportHeight = window.innerHeight;
        const footerVisibleHeight = Math.min(
            viewportHeight - footerRect.top,
            footerRect.height
        );
        
        // Create mirror effect
        mirror.style.clipPath = `polygon(
            0% ${100 - (footerVisibleHeight / footerRect.height * 100)}%,
            100% ${100 - (footerVisibleHeight / footerRect.height * 100)}%,
            100% 100%,
            0% 100%
        )`;
    }
    
    // Initialize and update on scroll/resize
    updateMirrorPosition();
    window.addEventListener('scroll', updateMirrorPosition);
    window.addEventListener('resize', updateMirrorPosition);
});
// Initialize navbar state
updateNavbar();

function updateNavbar() {
    const scrollY = window.scrollY;
    
    // Scrolled state toggle
    if (scrollY > 30) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Parallax effect (subtle)
    const parallaxOffset = Math.min(scrollY * 0.1, 10);
    navbar.style.transform = `translate3d(0, ${parallaxOffset}px, 0)`;
    
    lastScrollY = scrollY;
    requestAnimationFrame(updateNavbar);
}

// Event listeners for fail-safes
window.addEventListener('scroll', () => {
    navbar.style.opacity = '1';
    navbar.style.visibility = 'visible';
});

// Start animation loop
requestAnimationFrame(updateNavbar);
    // Close menu when clicking on links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navCenter.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('#navbar') && navCenter.classList.contains('active')) {
            navCenter.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 900) {
            navCenter.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
});

// Book Now Modal Logic
document.getElementById('bookNowBtn').onclick = function() {
    openModal('bookNowModal');
}

document.getElementById('closeBookNowModal').onclick = function() {
    closeModal('bookNowModal');
}

window.onclick = function(event) {
    var modal = document.getElementById('bookNowModal');
    if (event.target == modal) {
        closeModal('bookNowModal');
    }
}
// Book Now Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('bookNowModal');
  const mobileBtn = document.getElementById('mobileBookNowBtn');
  const closeBtn = document.getElementById('modalCloseBtn');
  
  // Mobile button click handler
  mobileBtn.addEventListener('click', function() {
    // Open modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Force iframe reload (critical for mobile)
    const iframe = modal.querySelector('iframe');
    iframe.src = iframe.src + '?t=' + Date.now();
    
    // Close mobile menu if open
    const navContainer = document.querySelector('.nav-center-container');
    if (navContainer && navContainer.classList.contains('active')) {
      navContainer.classList.remove('active');
      document.querySelector('.nav-toggle').setAttribute('aria-expanded', 'false');
    }
  });
  
  // Close modal
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  // Close when clicking outside modal
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});

// Privacy Policy Modal
function openPrivacyModal() {
    openModal('privacyModal');
}

function closePrivacyModal() {
    closeModal('privacyModal');
}

// Terms of Service Modal
function openTermsModal() {
    openModal('termsModal');
}

function closeTermsModal() {
    closeModal('termsModal');
}
// Add this to your existing JS
function resizeVideoBackground() {
    const video = document.getElementById('heroVideo');
    const container = document.querySelector('.hero');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Calculate aspect ratios
    const videoRatio = 16 / 9; // YouTube default
    const containerRatio = containerWidth / containerHeight;
    
    // Adjust sizing based on container
    if (containerRatio > videoRatio) {
        // Wider than 16:9
        video.style.width = '100%';
        video.style.height = 'auto';
    } else {
        // Taller than 16:9
        video.style.width = 'auto';
        video.style.height = '100%';
    }
}

// Run on load and resize
window.addEventListener('load', resizeVideoBackground);
window.addEventListener('resize', resizeVideoBackground);

// Also trigger after YouTube player loads
function onPlayerReady(event) {
    resizeVideoBackground();
    // ... rest of your existing onPlayerReady code
}
// Shared event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Click outside to close
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('privacyModal')) {
            closePrivacyModal();
        }
        if (event.target === document.getElementById('termsModal')) {
            closeTermsModal();
        }
    });

    // ESC key to close
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            if (document.getElementById('privacyModal').style.display === 'flex') {
                closePrivacyModal();
            }
            if (document.getElementById('termsModal').style.display === 'flex') {
                closeTermsModal();
            }
        }
    });
});

// YouTube Volume Control Implementation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

   // Ultra-Smooth YouTube Volume Control
const heroSection = document.querySelector('.hero');
const heroHeight = heroSection.offsetHeight;
let ytPlayer;
let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
let lastVolume = 100;
let isMuted = true; // Start muted
let hasUserInteracted = false;
const smoothingFactor = 0.05;

// Load YouTube API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// YouTube Player Setup
window.onYouTubeIframeAPIReady = function() {
    ytPlayer = new YT.Player('heroVideo', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        },
        playerVars: {
            autoplay: 1,
            mute: 1, // Force mute initially
            playsinline: 1,
            controls: 0
        }
    });
};

function onPlayerReady(event) {
    // Force mute initially
    event.target.mute();
    event.target.setVolume(100);
    isMuted = true;
    
    // Start smooth volume updates
    smoothVolumeUpdate();
    
    // Universal interaction handler
    function enableAudio() {
        if (!hasUserInteracted) {
            hasUserInteracted = true;
            
            // Multiple attempts to unmute (mobile can be stubborn)
            const attemptUnmute = () => {
                try {
                    event.target.unMute();
                    event.target.setVolume(lastVolume);
                    event.target.playVideo();
                    isMuted = false;
                } catch (e) {
                    console.log('Unmute attempt failed:', e);
                }
            };
            
            attemptUnmute();
            
            // Try again after a short delay
            setTimeout(attemptUnmute, 100);
            setTimeout(attemptUnmute, 500);
            
            // Remove all listeners
            ['click', 'touchstart', 'touchmove', 'scroll', 'keydown', 'mousemove'].forEach(eventType => {
                document.removeEventListener(eventType, enableAudio);
            });
            window.removeEventListener('scroll', enableAudio);
        }
    }
    
    // Add listeners for all interaction types
    ['click', 'touchstart', 'touchmove', 'scroll', 'keydown', 'mousemove'].forEach(eventType => {
        document.addEventListener(eventType, enableAudio, { once: false });
    });
    window.addEventListener('scroll', enableAudio, { once: false });
}

function calculateTargetVolume() {
    const heroRect = heroSection.getBoundingClientRect();
    const visibleHeight = Math.min(heroRect.bottom, window.innerHeight) - Math.max(heroRect.top, 0);
    const visiblePercent = Math.max(0, Math.min(1, visibleHeight / heroHeight));
    
    return Math.pow(visiblePercent, 3) * 100;
}

function smoothVolumeUpdate() {
    if (!ytPlayer || typeof ytPlayer.setVolume !== 'function') {
        requestAnimationFrame(smoothVolumeUpdate);
        return;
    }
    
    const targetVolume = calculateTargetVolume();
    lastVolume = lastVolume * (1 - smoothingFactor) + targetVolume * smoothingFactor;
    
    // Only apply volume changes if user has interacted
    if (hasUserInteracted) {
        ytPlayer.setVolume(Math.round(lastVolume));
        
        // Handle mute/unmute based on scroll position
        if (lastVolume < 5 && !isMuted) {
            ytPlayer.mute();
            isMuted = true;
        } else if (lastVolume >= 5 && isMuted) {
            ytPlayer.unMute();
            isMuted = false;
        }
    }
    
    requestAnimationFrame(smoothVolumeUpdate);
}

function onPlayerStateChange(event) {
    // Force unmute if user has interacted and video is playing
    if (hasUserInteracted && event.data === YT.PlayerState.PLAYING) {
        setTimeout(() => {
            if (ytPlayer.isMuted()) {
                ytPlayer.unMute();
                isMuted = false;
            }
        }, 100);
    }
}

// Start everything when ready
document.addEventListener('DOMContentLoaded', () => {
    // Pre-warm the volume smoothing
    if (document.readyState === 'complete') {
        smoothVolumeUpdate();
    } else {
        window.addEventListener('load', smoothVolumeUpdate);
    }
});
    // Portfolio filter functionality
    const filterButtons = document.querySelectorAll('.filter-button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Video Modal functionality
function openVideoModal(videoId, title) {
  const videoModal = document.getElementById('video-modal');
  videoModal.classList.add('active');
  document.body.style.overflow = 'hidden';

  const playerDiv = document.getElementById('youtube-player');
  playerDiv.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&modestbranding=1&rel=0&controls=0&showinfo=0&vq=hd1080"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      title="${title}"
    ></iframe>
  `;
}

function closeVideoModal() {
  const videoModal = document.getElementById('video-modal');
  videoModal.classList.remove('active');
  document.body.style.overflow = 'auto';
  document.getElementById('youtube-player').innerHTML = '';
}

// Event Listeners
document.querySelectorAll('.video-container').forEach(container => {
  container.addEventListener('click', function() {
    const videoId = this.getAttribute('data-youtube-id');
    const title = this.closest('.portfolio-item').querySelector('h3').textContent;
    openVideoModal(videoId, title);
  });
});

window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('video-modal')) {
    closeVideoModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.getElementById('video-modal').classList.contains('active')) {
    closeVideoModal();
  }
});

   // ===== FORM SUBMISSION HANDLER =====
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    
    // Validate form
    if (!validateForm()) return;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        });
        
        if (response.ok) {
            form.reset();
            showSuccessModal();
        } else {
            throw new Error('Submission failed');
        }
    } catch (error) {
        console.error('Error:', error);
        showErrorModal();
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
    }
});

// ===== MODAL FUNCTIONS =====
function showSuccessModal() {
    const modal = document.getElementById('formSuccessModal');
    document.body.classList.add('modal-open');
    
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
    
    // Auto-close after 10 seconds
    const timer = setTimeout(hideSuccessModal, 10000);
    
    // Click handler
    modal.addEventListener('click', function handleClick() {
        clearTimeout(timer);
        hideSuccessModal();
        modal.removeEventListener('click', handleClick);
    });
}

function hideSuccessModal() {
    const modal = document.getElementById('formSuccessModal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }, 300);
}

function showErrorModal() {
    const modal = document.createElement('div');
    modal.className = 'error-modal';
    modal.innerHTML = `
        <div class="error-modal-content">
            <div class="error-icon"><i class="fas fa-exclamation-circle"></i></div>
            <h3>Submission Error</h3>
            <p>There was an issue sending your message. Please try again.</p>
            <button class="cta-button error-close-btn">Try Again</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.classList.add('modal-open');
    
    setTimeout(() => modal.classList.add('active'), 10);
    
    // Close handlers
    modal.querySelector('.error-close-btn').addEventListener('click', () => hideErrorModal(modal));
    modal.addEventListener('click', (e) => e.target === modal && hideErrorModal(modal));
}

function hideErrorModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
        document.body.removeChild(modal);
        document.body.classList.remove('modal-open');
    }, 300);
}

// ===== FORM VALIDATION =====
function validateForm() {
    let isValid = true;
    
    const validateField = (fieldId, errorId) => {
        const field = document.getElementById(fieldId);
        const error = document.getElementById(errorId);
        
        if (!field.value.trim()) {
            error.style.display = 'block';
            isValid = false;
        } else {
            error.style.display = 'none';
        }
    };
    
    validateField('name', 'name-error');
    validateField('email', 'email-error');
    validateField('message', 'message-error');
    
    // Email format validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.textContent = 'Please enter a valid email';
        emailError.style.display = 'block';
        isValid = false;
    }
    
    return isValid;
}
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

// === Parallax + Dynamic Effects ===
function updateNavbar() {
    const scrollY = window.scrollY;
    const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';

    // Scrolled State Toggle
    if (scrollY > 30) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Ultra-Smooth Parallax Effect
    const parallaxOffset = scrollY * 0.1;
    navbar.style.transform = `translate3d(0, ${Math.min(parallaxOffset, 10)}px, 0)`;

    lastScrollY = scrollY;
    requestAnimationFrame(updateNavbar);
}

// === Initialize ===
updateNavbar();

// === Scroll Resilience (Never Disappears) ===
window.addEventListener('scroll', () => {
    navbar.style.opacity = '1';
    navbar.style.visibility = 'visible';
});

// === Mouse-Tilt Effect (Advanced 3D) ===
navbar.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    navbar.style.transform = `translate3d(0, ${Math.min(lastScrollY * 0.1, 10)}px, 0) rotateX(${y * 2}deg) rotateY(${x * 2}deg)`;
});

navbar.addEventListener('mouseleave', () => {
    navbar.style.transform = `translate3d(0, ${Math.min(lastScrollY * 0.1, 10)}px, 0)`;
});
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    location.hash = targetId;
                }
            }
        });
    });
});