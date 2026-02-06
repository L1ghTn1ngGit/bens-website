/**
 * Ambrose Sukraj Portfolio
 * JavaScript for interactivity
 */


document.addEventListener('DOMContentLoaded', function() {
    // ===================================
    // Mobile Navigation Toggle
    // ===================================
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const navList = document.querySelector('.nav-list');
    
    console.log('Script loaded');
    console.log('navToggle:', navToggle);
    console.log('nav:', nav);
    console.log('navList:', navList);
    
    if (navToggle && navList) {
        console.log('Adding click listener');
        navToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Toggle clicked!');
            navToggle.classList.toggle('active');
            navList.classList.toggle('active');
            
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            
            console.log('Toggle classes:', navToggle.className);
            console.log('List classes:', navList.className);
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navList.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navList.contains(e.target) && !nav.contains(e.target)) {
                navToggle.classList.remove('active');
                navList.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    } else {
        console.log('Elements not found!');
    }

    // ===================================
    // Card Stack Carousel - Reusable Function
    // ===================================
    function initCardStack(containerId, toggleId, pauseBtnId, isExtra = false) {
        const container = document.getElementById(containerId);
        if (!container) return null;
        
        const cards = container.querySelectorAll('.stack-card');
        const toggle = document.getElementById(toggleId);
        const pauseBtn = document.getElementById(pauseBtnId);
        
        // Find controls - they're now siblings after the card-stack container
        const parent = container.parentElement;
        const controlsContainer = parent.querySelector('.card-stack__controls');
        const dots = controlsContainer ? controlsContainer.querySelectorAll('.card-stack__dot') : [];
        const prevBtn = controlsContainer ? controlsContainer.querySelector('.card-stack__btn--prev') : null;
        const nextBtn = controlsContainer ? controlsContainer.querySelector('.card-stack__btn--next') : null;
        
        // Mobile navigation elements (inside container)
        const mobileNav = container.querySelector('.card-stack__mobile-nav');
        const mobileUpBtn = mobileNav ? mobileNav.querySelector('.card-stack__mobile-btn--up') : null;
        const mobileDownBtn = mobileNav ? mobileNav.querySelector('.card-stack__mobile-btn--down') : null;
        const mobileDots = mobileNav ? mobileNav.querySelectorAll('.card-stack__mobile-dot') : [];
        
        let currentCard = 1;
        const totalCards = cards.length;
        let autoScrollInterval = null;
        let isSpreadView = false;
        let isPaused = false;
        let isHovering = false; // Track hover state separately from manual pause
        let hoverTimeout = null; // Track hover exit timeout to prevent spam
        
        // Check if we're on mobile
        const isMobile = () => window.innerWidth <= 768;
        
        // Different offsets for extra (smaller) cards
        const offsets = isExtra ? {
            second: { x: 20, rot: 4, top: 12 },
            third: { x: 40, rot: 8, top: 24 }
        } : {
            second: { x: 30, rot: 4, top: 15 },
            third: { x: 60, rot: 8, top: 30 }
        };

        function updateStack(newIndex) {
            if (isSpreadView) return;
            
            // On mobile, all cards are visible, so just update dots
            if (isMobile()) {
                // Update desktop dots
                dots.forEach(dot => dot.classList.remove('card-stack__dot--active'));
                if (dots[newIndex - 1]) dots[newIndex - 1].classList.add('card-stack__dot--active');
                
                // Update mobile dots
                mobileDots.forEach(dot => dot.classList.remove('card-stack__mobile-dot--active'));
                if (mobileDots[newIndex - 1]) mobileDots[newIndex - 1].classList.add('card-stack__mobile-dot--active');
                
                currentCard = newIndex;
                return;
            }
            
            cards.forEach((card, i) => {
                card.classList.remove('stack-card--active');
                const offset = (i - (newIndex - 1) + totalCards) % totalCards;
                if (offset === 0) {
                    card.style.zIndex = 10;
                    card.style.transform = 'translateX(-50%) rotate(-1deg)';
                    card.style.top = 'var(--space-sm)';
                    card.style.opacity = '1';
                    card.classList.add('stack-card--active');
                } else if (offset === 1) {
                    card.style.zIndex = 2;
                    card.style.transform = `translateX(calc(-50% + ${offsets.second.x}px)) rotate(${offsets.second.rot}deg)`;
                    card.style.top = `calc(var(--space-sm) + ${offsets.second.top}px)`;
                    card.style.opacity = '0.92';
                } else {
                    card.style.zIndex = 1;
                    card.style.transform = `translateX(calc(-50% + ${offsets.third.x}px)) rotate(${offsets.third.rot}deg)`;
                    card.style.top = `calc(var(--space-sm) + ${offsets.third.top}px)`;
                    card.style.opacity = '0.85';
                }
            });

            // Update desktop dots
            dots.forEach(dot => dot.classList.remove('card-stack__dot--active'));
            if (dots[newIndex - 1]) dots[newIndex - 1].classList.add('card-stack__dot--active');
            
            // Update mobile dots
            mobileDots.forEach(dot => dot.classList.remove('card-stack__mobile-dot--active'));
            if (mobileDots[newIndex - 1]) mobileDots[newIndex - 1].classList.add('card-stack__mobile-dot--active');
            
            currentCard = newIndex;
        }

        function next() {
            const newIndex = currentCard === totalCards ? 1 : currentCard + 1;
            updateStack(newIndex);
        }

        function startAutoScroll() {
            if (autoScrollInterval) clearInterval(autoScrollInterval);
            // Don't auto-scroll on mobile or when paused/hovering
            if (!isPaused && !isHovering && !isMobile()) {
                autoScrollInterval = setInterval(() => {
                    if (!isSpreadView && !isPaused && !isHovering && !isMobile()) next();
                }, 5000);
            }
        }
        
        function stopAutoScroll() {
            if (autoScrollInterval) {
                clearInterval(autoScrollInterval);
                autoScrollInterval = null;
            }
        }
        
        // Update pause button visual state
        function updatePauseButtonVisual() {
            if (pauseBtn) {
                if (isPaused || isHovering) {
                    pauseBtn.classList.remove('card-stack__pause--playing');
                } else {
                    pauseBtn.classList.add('card-stack__pause--playing');
                }
            }
        }
        
        function togglePause() {
            isPaused = !isPaused;
            updatePauseButtonVisual();
            if (isPaused) {
                stopAutoScroll();
            } else {
                startAutoScroll();
            }
        }
        
        // Hover pause handlers
        function handleCardMouseEnter() {
            if (isMobile()) return;
            isHovering = true;
            // Clear any pending hover exit timeout
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
                hoverTimeout = null;
            }
            stopAutoScroll();
            updatePauseButtonVisual();
        }
        
        function handleCardMouseLeave() {
            if (isMobile()) return;
            isHovering = false;
            updatePauseButtonVisual();
            // Clear any existing timeout to prevent spam
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
                hoverTimeout = null;
            }
            if (!isPaused) {
                // Switch to next card after 1 second, then continue with normal 5s interval
                hoverTimeout = setTimeout(() => {
                    if (!isHovering && !isPaused) {
                        next();
                        startAutoScroll();
                    }
                    hoverTimeout = null;
                }, 1000);
            }
        }

        function toggleView() {
            isSpreadView = !isSpreadView;
            
            // Get the experience-split container for layout changes
            const experienceSplit = document.querySelector('.experience-split');
            const experienceExtra = document.querySelector('.experience-extra');
            
            if (isSpreadView) {
                // SPREADING: Animate from stack to spread
                
                // Step 1: Get current positions of all cards
                const cardPositions = [];
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    cardPositions.push({
                        left: rect.left,
                        top: rect.top,
                        width: rect.width
                    });
                });
                
                // Step 1b: Get current position of experience-extra section (for main cards only)
                let extraOldPos = null;
                if (!isExtra && experienceExtra) {
                    const extraRect = experienceExtra.getBoundingClientRect();
                    extraOldPos = {
                        left: extraRect.left,
                        top: extraRect.top,
                        width: extraRect.width,
                        height: extraRect.height
                    };
                }
                
                // Step 2: Add spread class to enable flex layout
                container.classList.add('card-stack--spread');
                if (toggle) toggle.querySelector('.toggle-label').textContent = 'Stack';
                
                if (!isExtra && experienceSplit) {
                    experienceSplit.classList.add('experience-split--main-spread');
                }
                
                // Step 3: Get new positions
                const newPositions = [];
                cards.forEach(card => {
                    card.style.transform = 'none';
                    card.style.top = '';
                    card.style.left = '';
                    card.style.zIndex = '';
                    card.classList.remove('stack-card--active');
                });
                
                // Force reflow to get new positions
                container.offsetHeight;
                
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    newPositions.push({
                        left: rect.left,
                        top: rect.top,
                        width: rect.width
                    });
                });
                
                // Step 3b: Get new position of experience-extra and animate it
                if (!isExtra && experienceExtra && extraOldPos) {
                    const extraNewRect = experienceExtra.getBoundingClientRect();
                    const extraDx = extraOldPos.left - extraNewRect.left;
                    const extraDy = extraOldPos.top - extraNewRect.top;
                    
                    experienceExtra.style.transition = 'none';
                    experienceExtra.style.transform = `translate(${extraDx}px, ${extraDy}px)`;
                    
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            experienceExtra.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                            experienceExtra.style.transform = 'none';
                        });
                    });
                }
                
                // Step 4: Set cards to old positions using transforms
                cards.forEach((card, i) => {
                    const dx = cardPositions[i].left - newPositions[i].left;
                    const dy = cardPositions[i].top - newPositions[i].top;
                    const scaleX = cardPositions[i].width / newPositions[i].width;
                    card.style.transition = 'none';
                    card.style.transform = `translate(${dx}px, ${dy}px) scaleX(${scaleX})`;
                    card.style.opacity = '1';
                });
                
                // Step 5: Animate to new positions
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        cards.forEach(card => {
                            card.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease';
                            card.style.transform = 'none';
                        });
                    });
                });
                
            } else {
                // STACKING: Animate from spread to stack
                
                // Step 1: Get current spread positions
                const cardPositions = [];
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    cardPositions.push({
                        left: rect.left,
                        top: rect.top,
                        width: rect.width
                    });
                });
                
                // Step 1b: Get current position of experience-extra section (for main cards only)
                let extraOldPos = null;
                if (!isExtra && experienceExtra) {
                    const extraRect = experienceExtra.getBoundingClientRect();
                    extraOldPos = {
                        left: extraRect.left,
                        top: extraRect.top,
                        width: extraRect.width,
                        height: extraRect.height
                    };
                }
                
                // Step 2: Remove spread class
                container.classList.remove('card-stack--spread');
                if (toggle) toggle.querySelector('.toggle-label').textContent = 'Spread';
                
                if (!isExtra && experienceSplit) {
                    experienceSplit.classList.remove('experience-split--main-spread');
                }
                
                // Step 3: Apply stack positions immediately (no animation yet)
                updateStack(currentCard);
                
                // Force reflow
                container.offsetHeight;
                
                // Step 3b: Get new position of experience-extra and animate it back to sidebar
                if (!isExtra && experienceExtra && extraOldPos) {
                    const extraNewRect = experienceExtra.getBoundingClientRect();
                    const extraDx = extraOldPos.left - extraNewRect.left;
                    const extraDy = extraOldPos.top - extraNewRect.top;
                    
                    experienceExtra.style.transition = 'none';
                    experienceExtra.style.transform = `translate(${extraDx}px, ${extraDy}px)`;
                    
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            experienceExtra.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                            experienceExtra.style.transform = 'none';
                        });
                    });
                }
                
                // Step 4: Get new stack positions
                const newPositions = [];
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    newPositions.push({
                        left: rect.left,
                        top: rect.top,
                        width: rect.width
                    });
                });
                
                // Step 5: Set cards to old (spread) positions using transforms
                cards.forEach((card, i) => {
                    const dx = cardPositions[i].left - newPositions[i].left;
                    const dy = cardPositions[i].top - newPositions[i].top;
                    const scaleX = cardPositions[i].width / newPositions[i].width;
                    
                    // Get current stack transform and add offset
                    const currentTransform = card.style.transform || '';
                    card.style.transition = 'none';
                    
                    // Override with offset from spread position
                    if (card.classList.contains('stack-card--active')) {
                        card.style.transform = `translateX(calc(-50% + ${dx}px)) translateY(${dy}px) rotate(-1deg) scaleX(${scaleX})`;
                    } else {
                        const idx = Array.from(cards).indexOf(card);
                        const offset = (idx - (currentCard - 1) + totalCards) % totalCards;
                        if (offset === 1) {
                            card.style.transform = `translateX(calc(-50% + ${offsets.second.x}px + ${dx}px)) translateY(${dy}px) rotate(${offsets.second.rot}deg) scaleX(${scaleX})`;
                        } else {
                            card.style.transform = `translateX(calc(-50% + ${offsets.third.x}px + ${dx}px)) translateY(${dy}px) rotate(${offsets.third.rot}deg) scaleX(${scaleX})`;
                        }
                    }
                });
                
                // Step 6: Animate to stack positions
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        cards.forEach((card, i) => {
                            card.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease';
                            
                            // Animate to final stack position
                            if (card.classList.contains('stack-card--active')) {
                                card.style.transform = 'translateX(-50%) rotate(-1deg)';
                            } else {
                                const idx = Array.from(cards).indexOf(card);
                                const offset = (idx - (currentCard - 1) + totalCards) % totalCards;
                                if (offset === 1) {
                                    card.style.transform = `translateX(calc(-50% + ${offsets.second.x}px)) rotate(${offsets.second.rot}deg)`;
                                } else {
                                    card.style.transform = `translateX(calc(-50% + ${offsets.third.x}px)) rotate(${offsets.third.rot}deg)`;
                                }
                            }
                        });
                    });
                });
            }
        }

        // Event listeners
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                const newIndex = currentCard === 1 ? totalCards : currentCard - 1;
                updateStack(newIndex);
                startAutoScroll();
            });
            // Pause autoplay on arrow hover
            prevBtn.addEventListener('mouseenter', handleCardMouseEnter);
            prevBtn.addEventListener('mouseleave', handleCardMouseLeave);
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                next();
                startAutoScroll();
            });
            // Pause autoplay on arrow hover
            nextBtn.addEventListener('mouseenter', handleCardMouseEnter);
            nextBtn.addEventListener('mouseleave', handleCardMouseLeave);
        }

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.dataset.dot);
                updateStack(index);
                startAutoScroll();
            });
        });

        // Mobile navigation event listeners
        if (mobileUpBtn) {
            mobileUpBtn.addEventListener('click', () => {
                const newIndex = currentCard === 1 ? totalCards : currentCard - 1;
                updateStack(newIndex);
            });
        }

        if (mobileDownBtn) {
            mobileDownBtn.addEventListener('click', () => {
                const newIndex = currentCard === totalCards ? 1 : currentCard + 1;
                updateStack(newIndex);
            });
        }

        mobileDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.dataset.dot);
                updateStack(index);
            });
        });

        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (!isSpreadView && !card.classList.contains('stack-card--active')) {
                    e.preventDefault();
                    const index = parseInt(card.dataset.card);
                    updateStack(index);
                    startAutoScroll();
                }
            });
            
            // Pause carousel on hover
            card.addEventListener('mouseenter', handleCardMouseEnter);
            card.addEventListener('mouseleave', handleCardMouseLeave);
        });

        if (toggle) {
            toggle.addEventListener('click', toggleView);
        }
        
        if (pauseBtn) {
            pauseBtn.addEventListener('click', togglePause);
            pauseBtn.classList.add('card-stack__pause--playing'); // Start as playing
        }

        // Initialize
        if (cards.length > 0) {
            updateStack(1);
            startAutoScroll();
        }

        return { updateStack, toggleView, startAutoScroll, stopAutoScroll, togglePause };
    }

    // Initialize main experience card stack
    initCardStack('mainCardStack', 'viewToggle', 'mainPauseBtn', false);
    
    // Initialize extra experience card stack
    initCardStack('extraCardStack', 'extraViewToggle', 'extraPauseBtn', true);

    // ===================================
    // Mobile Card Stack - Vertical Layout with Sticky Scroll Nav
    // ===================================
    function initMobileCardStackScroll() {
        const isMobile = () => window.innerWidth <= 768;
        
        // Get all mobile navs
        const mainCardStack = document.getElementById('mainCardStack');
        const extraCardStack = document.getElementById('extraCardStack');
        const experienceSection = document.getElementById('experience');
        
        if (!experienceSection) return;
        
        const mainMobileNav = mainCardStack ? mainCardStack.querySelector('.card-stack__mobile-nav') : null;
        const extraMobileNav = extraCardStack ? extraCardStack.querySelector('.card-stack__mobile-nav') : null;
        
        // Get all cards for scrolling
        const mainCards = mainCardStack ? mainCardStack.querySelectorAll('.stack-card') : [];
        const extraCards = extraCardStack ? extraCardStack.querySelectorAll('.stack-card') : [];
        
        // Function to check if user is within experience section
        function updateMobileNavVisibility() {
            if (!isMobile()) {
                // Hide on desktop
                if (mainMobileNav) mainMobileNav.classList.remove('mobile-nav--visible');
                if (extraMobileNav) extraMobileNav.classList.remove('mobile-nav--visible');
                return;
            }
            
            const rect = experienceSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Show nav when experience section is in view
            const isInView = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;
            
            if (mainMobileNav) {
                if (isInView) {
                    mainMobileNav.classList.add('mobile-nav--visible');
                } else {
                    mainMobileNav.classList.remove('mobile-nav--visible');
                }
            }
            
            // For extra nav, check if that section specifically is in view
            if (extraMobileNav && extraCardStack) {
                const extraRect = extraCardStack.getBoundingClientRect();
                const extraInView = extraRect.top < windowHeight * 0.8 && extraRect.bottom > windowHeight * 0.2;
                
                if (extraInView) {
                    extraMobileNav.classList.add('mobile-nav--visible');
                } else {
                    extraMobileNav.classList.remove('mobile-nav--visible');
                }
            }
        }
        
        // Function to update dots based on which card is most visible
        function updateActiveDotOnScroll(cardStack, mobileNav) {
            if (!isMobile() || !cardStack || !mobileNav) return;
            
            const cards = cardStack.querySelectorAll('.stack-card');
            const dots = mobileNav.querySelectorAll('.card-stack__mobile-dot');
            const windowCenter = window.innerHeight / 2;
            
            let closestCard = null;
            let closestDistance = Infinity;
            
            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const cardCenter = rect.top + rect.height / 2;
                const distance = Math.abs(cardCenter - windowCenter);
                
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestCard = index;
                }
            });
            
            // Update active dot
            dots.forEach((dot, index) => {
                if (index === closestCard) {
                    dot.classList.add('card-stack__mobile-dot--active');
                } else {
                    dot.classList.remove('card-stack__mobile-dot--active');
                }
            });
        }
        
        // Function to scroll to a specific card
        function scrollToCard(cardStack, cardIndex) {
            if (!cardStack) return;
            
            const cards = cardStack.querySelectorAll('.stack-card');
            if (cards[cardIndex]) {
                const headerHeight = 72; // Header height
                const targetCard = cards[cardIndex];
                const targetPosition = targetCard.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
        
        // Setup mobile navigation click handlers
        function setupMobileNavClickHandlers(cardStack, mobileNav) {
            if (!mobileNav || !cardStack) return;
            
            const upBtn = mobileNav.querySelector('.card-stack__mobile-btn--up');
            const downBtn = mobileNav.querySelector('.card-stack__mobile-btn--down');
            const dots = mobileNav.querySelectorAll('.card-stack__mobile-dot');
            const cards = cardStack.querySelectorAll('.stack-card');
            
            // Find currently visible card
            function getCurrentCardIndex() {
                const windowCenter = window.innerHeight / 2;
                let currentIndex = 0;
                let closestDistance = Infinity;
                
                cards.forEach((card, index) => {
                    const rect = card.getBoundingClientRect();
                    const cardCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(cardCenter - windowCenter);
                    
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        currentIndex = index;
                    }
                });
                
                return currentIndex;
            }
            
            // Up button - scroll to previous card
            if (upBtn) {
                upBtn.addEventListener('click', () => {
                    if (!isMobile()) return;
                    const currentIndex = getCurrentCardIndex();
                    const prevIndex = Math.max(0, currentIndex - 1);
                    scrollToCard(cardStack, prevIndex);
                });
            }
            
            // Down button - scroll to next card
            if (downBtn) {
                downBtn.addEventListener('click', () => {
                    if (!isMobile()) return;
                    const currentIndex = getCurrentCardIndex();
                    const nextIndex = Math.min(cards.length - 1, currentIndex + 1);
                    scrollToCard(cardStack, nextIndex);
                });
            }
            
            // Dot clicks - scroll to specific card
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    if (!isMobile()) return;
                    scrollToCard(cardStack, index);
                });
            });
        }
        
        // Setup handlers for both card stacks
        setupMobileNavClickHandlers(mainCardStack, mainMobileNav);
        setupMobileNavClickHandlers(extraCardStack, extraMobileNav);
        
        // Scroll event listener
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            updateMobileNavVisibility();
            
            // Debounce the dot update
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                updateActiveDotOnScroll(mainCardStack, mainMobileNav);
                updateActiveDotOnScroll(extraCardStack, extraMobileNav);
            }, 50);
        }, { passive: true });
        
        // Resize listener
        window.addEventListener('resize', () => {
            updateMobileNavVisibility();
        });
        
        // Initial check
        updateMobileNavVisibility();
    }
    
    // Initialize mobile scroll navigation
    initMobileCardStackScroll();

    // ===================================
    // Dynamic Confetti & Interactive Effects
    // ===================================
   
    // Cursor tracking for cards
    const cards = document.querySelectorAll('.experience-card, .skill-card, .small-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate tilt, but clamp to a subtle maximum
            const maxTilt = 2; // degrees, very subtle
            let rotateX = (e.clientY - centerY) * 0.01;
            let rotateY = (e.clientX - centerX) * 0.01;
            rotateX = Math.max(Math.min(rotateX, maxTilt), -maxTilt);
            rotateY = Math.max(Math.min(rotateY, maxTilt), -maxTilt);

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;

            // Subtle glow effect from mouse position
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const glowSize = 60; // px, small
            const glowColor = 'rgba(38,25,209,0.13)';
            card.style.setProperty('--mouse-glow', `${glowSize}px ${glowSize}px 40px 0px ${glowColor}`);
            card.style.setProperty('--mouse-glow', `0 0 40px 10px ${glowColor}, 0 0 60px 20px ${glowColor}`);
        });
       
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            card.style.removeProperty('--mouse-glow');
        });
    });
   
    // Bouncy section headers on scroll into view
    const bounceObserverOptions = {
        threshold: 0.3,
    };
   
    const bounceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.classList.contains('section-header')) {
                entry.target.style.animation = 'bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            }
        });
    }, bounceObserverOptions);
   
    document.querySelectorAll('.section-header').forEach(el => {
        bounceObserver.observe(el);
    });
   
    // ===================================
    // Header scroll behavior
    // ===================================
    const header = document.querySelector('.header');
    let lastScroll = 0;
   
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
       
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
       
        lastScroll = currentScroll;
    });
   
    // ===================================
    // Video Play/Pause Toggle
    // ===================================
    const video = document.getElementById('marbleVideo');
    const playBtn = document.getElementById('videoPlayBtn');
   
    if (video && playBtn) {
        playBtn.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                this.classList.add('playing');
            } else {
                video.pause();
                this.classList.remove('playing');
            }
        });
       
        video.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                playBtn.classList.add('playing');
            } else {
                video.pause();
                playBtn.classList.remove('playing');
            }
        });
       
        video.addEventListener('ended', function() {
            playBtn.classList.remove('playing');
        });
    }
   
    // ===================================
    // Smooth scroll for anchor links
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
           
            e.preventDefault();
            const target = document.querySelector(targetId);
           
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
               
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
   
    // ===================================
    // Intersection Observer for animations
    // ===================================
    const animObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
   
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const rect = element.getBoundingClientRect();
                const elementX = rect.left + rect.width / 2;
                const screenCenter = window.innerWidth / 2;
                const distanceFromCenter = Math.abs(elementX - screenCenter);
               
                let animationName = 'slideInFromCenter';
                let delay = 0;
               
                // Featured card slides from left
                if (element.classList.contains('experience-card--featured')) {
                    animationName = 'slideInFromLeft';
                    delay = 0;
                }
                // Primary cards (UN, NYU) determine direction
                else if (element.classList.contains('experience-card--primary')) {
                    if (element.classList.contains('experience-card--nyu')) {
                        animationName = 'slideInFromCenter'; // NYU slides up from center
                        delay = 0;
                    } else {
                        animationName = 'slideInFromRight'; // UN slides from right
                        delay = 0.1;
                    }
                }
                // Extra experience cards alternate: left, center, right
                else if (element.classList.contains('small-card')) {
                    const cards = element.parentElement.querySelectorAll('.small-card');
                    const cardIndex = Array.from(cards).indexOf(element);
                   
                    if (cardIndex % 3 === 0) {
                        animationName = 'slideInFromLeft';
                    } else if (cardIndex % 3 === 1) {
                        animationName = 'slideInFromCenter';
                    } else {
                        animationName = 'slideInFromRight';
                    }
                    delay = (cardIndex % 3) * 0.1;
                }
                // Other elements
                else {
                    animationName = 'slideInFromCenter';
                }
               
                element.style.animation = `${animationName} 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s forwards`;
                element.style.opacity = '1';
            }
        });
    }, animObserverOptions);
   
    // Observe all experience and skill elements
    const animatedElements = document.querySelectorAll('.experience-card, .skill-card, .small-card, .project-showcase, .section-header, .about-text, .contact-info');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
   
    // ===================================
    // Active navigation link highlighting
    // ===================================
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');
   
    window.addEventListener('scroll', () => {
        let current = '';
        const headerHeight = document.querySelector('.header').offsetHeight;
       
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
           
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
                current = section.getAttribute('id');
            }
        });
       
        navItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
   
    // ===================================
    // Console Easter Egg
    // ===================================
    console.log('%c👋 Hello!', 'font-size: 24px; font-weight: bold;');
    console.log('%cThanks for checking out my portfolio!', 'font-size: 14px;');
    console.log('%c— Ambrose Sukraj', 'font-size: 12px; color: #2619D1;');
});

// Prevent body overflow
document.body.style.overflowX = 'hidden';
document.documentElement.style.overflowX = 'hidden';



