//////JAVASCRIPT FOR HEADER

document.querySelector('.nav-toggle').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
});


//HIGHLIGHTING HEADER ON MEDIA QUERY


document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-menu ul li a');
    const currentUrl = window.location.pathname.split('/').pop() || 'index.html'; // Get the current filename

    links.forEach(link => {
        // Check if the href of the link matches the current URL
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});




/////HERO IMAGE SECTION

let currentImageIndex = 0;
const images = ["image/1.jpg", "image/2.jpg", "image/3.jpg"];
const heroImage = document.querySelector(".hero-image img");

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    heroImage.src = images[currentImageIndex];
}

// Change image every 6 seconds
setInterval(changeImage, 6000);



///////////BEST EVENT JAVASCRIPT FOR CONTAINER BOX


// Select all content items
const contentItems = document.querySelectorAll('.content-item');

// Add click event listener to each content item's <h4>
contentItems.forEach(item => {
    const header = item.querySelector('h4');
    const paragraph = item.querySelector('p');

    header.addEventListener('click', () => {
        // Check if the clicked paragraph is currently active
        const isCurrentlyActive = paragraph.classList.contains('active');

        if (!isCurrentlyActive) {
            // Hide all paragraphs and remove 'active' class
            contentItems.forEach(innerItem => {
                innerItem.querySelector('p').style.display = 'none';
                innerItem.querySelector('p').classList.remove('active');
            });

            // Show the clicked paragraph and add 'active' class
            paragraph.style.display = 'block';
            paragraph.classList.add('active');
        }
    });
});


// JAVASCRIPT FOR NUMBER INCREASE


document.addEventListener('DOMContentLoaded', function() {
    const clientCount = document.getElementById('client-count');
    const satisfactionCount = document.getElementById('satisfaction-count');
    const satisfy = document.getElementById('satisfaction-coun');
    const clientTarget = 10;
    const satisfactionTarget = 250;
    const satisfyTarget = 100;
    let hasAnimated = false;

    function animateCount(element, target, suffix = '') {
        let count = 0;
        const duration = 2000;
        const increment = target / (duration / 60);

        function updateCount() {
            count += increment;
            if (count > target) count = target;
            element.textContent = Math.floor(count) + suffix;
            if (count < target) {
                requestAnimationFrame(updateCount);
            }
        }

        requestAnimationFrame(updateCount);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateCount(clientCount, clientTarget, '+');
                animateCount(satisfactionCount, satisfactionTarget, '+');
                animateCount(satisfy, satisfyTarget, '%');
            }
        });
    }, {
        threshold: 0.1 // Trigger when at least 10% of the section is in view
    });

    observer.observe(document.getElementById('satis'));
});


$(document).ready(function () {
    var owl = $(".owl-carousel").owlCarousel({
        items: 1, 
        loop: true,
        dots: false, 
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        margin: 10, 
        responsive: {
            728: {
                items: 2, 
                margin: 18 
            },
            1024: {
                items: 3, 
                margin: 10 
            }
        }
    });

    // Custom dots click event to trigger the carousel change
    $('.custom-dot').click(function () {
        var index = $(this).data('index'); // Get me the index of the clicked dot
        owl.trigger('to.owl.carousel', [index, 300]); // I want you to move to the corresponding dots
    });

    // Sync custom dots with the carousel's current state
    owl.on('changed.owl.carousel', function (event) {
        var currentIndex = event.item.index - event.relatedTarget._clones.length / 2; 
        currentIndex = currentIndex % event.item.count; 
        $('.custom-dot').removeClass('active'); 
        $('.custom-dot').eq(currentIndex).addClass('active');
    });
});



///=====================TESTIMONIAL

let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
let startX = 0;
let isSwiping = false;
let autoSlideInterval;

// Function to show the current testimonial
function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.transform = `translateX(-${index * 100}%)`;
        dots[i].classList.toggle('active', i === index);
    });
}

// Function to start the auto-slide interval
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 7000);
}

// Function to stop the auto-slide interval
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Dots navigation
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentTestimonial = i;
        showTestimonial(currentTestimonial);
    });
});

// Swipe detection
document.querySelector('.testimonial-section').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
});

document.querySelector('.testimonial-section').addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    const moveX = e.touches[0].clientX;
    const diff = startX - moveX;

    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            // Swipe left
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        } else {
            // Swipe right
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        }
        showTestimonial(currentTestimonial);
        isSwiping = false; 
    }
});

document.querySelector('.testimonial-section').addEventListener('touchend', () => {
    isSwiping = false;
});

// Pause auto-slide on hover
const testimonialSection = document.querySelector('.testimonial-section');
testimonialSection.addEventListener('mouseenter', stopAutoSlide);
testimonialSection.addEventListener('mouseleave', startAutoSlide);

// Initial display
showTestimonial(currentTestimonial);
startAutoSlide();




//JAVASCRIPT FOR FREQUENTLY ASKED QUESTIONS


function toggleAnswer(id) {
    const answer = document.getElementById(`answer-${id}`);
    const icon = document.getElementById(`icon-${id}`);

    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.classList.remove("ti-close");
        icon.classList.add("ti-plus");
    } else {
        answer.style.display = "block";
        icon.classList.remove("ti-plus");
        icon.classList.add("ti-close");
    }
}



//JAVASCRIPT FOR YOUTUBE POPUP


// document.addEventListener("DOMContentLoaded", function () {
//     var modal = document.getElementById("videoModal");
//     var videoFrame = document.getElementById("videoFrame");
//     var playButton = document.querySelector(".video-popup");
//     var closeButton = document.querySelector(".close");

//     playButton.addEventListener("click", function (event) {
//         event.preventDefault(); // Prevent default anchor click behavior
//         var videoId = playButton.getAttribute("href").split("https://youtu.be/")[1];
//         var embedUrl = "https://youtu.be/C9NvtXDb95I" + videoId + "?autoplay=1";
//         videoFrame.setAttribute("src", embedUrl);
//         modal.style.display = "block";
//     });

//     closeButton.addEventListener("click", function () {
//         modal.style.display = "none";
//         videoFrame.setAttribute("src", ""); // Stop the video
//     });

//     window.addEventListener("click", function (event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//             videoFrame.setAttribute("src", ""); // Stop the video
//         }
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("videoModal");
    var videoFrame = document.getElementById("videoFrame");
    var playButton = document.querySelector(".video-popup");
    var closeButton = document.querySelector(".close");

    playButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor click behavior
        var videoId = playButton.getAttribute("href").split("vimeo.com/")[1];
        var embedUrl = "https://player.vimeo.com/video/" + videoId + "?autoplay=1";
        videoFrame.setAttribute("src", embedUrl);
        modal.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
        videoFrame.setAttribute("src", ""); // Stop the video
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            videoFrame.setAttribute("src", ""); // Stop the video
        }
    });
});





////////SCROLL FOR SERVICE PAGE

document.querySelectorAll('.clt2 a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000; // Adjust this value for slower or faster scrolling (in milliseconds)
        let start = null;

        window.requestAnimationFrame(step);

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const stepPosition = easeInOutQuad(progress, startPosition, distance, duration);
            window.scrollTo(0, stepPosition);
            if (progress < duration) window.requestAnimationFrame(step);
        }

        // Easing function for smooth effect
        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
    });
});



////FOR SERVICE PAGE

//////PROCESS JAVASCRIPT 

const processContents = [
    {
        title: "01. LET'S MEET",
        description: "Relationship building is important so we work closely with each client to curate events that reflect their personalities and style."
    },
    {
        title: "02. PLANNING",
        description: "We'll work hand in hand with you to design and organize every detail of your event, ensuring it aligns perfectly with your vision."
    },
    {
        title: "03. EXECUTION",
        description: "Our team will be there on the day of the event to coordinate and manage all the logistics, making sure everything runs smoothly."
    },
    {
        title: "04. FOLLOW-UP",
        description: "After the event, we'll review everything to gather feedback and ensure that we continue to provide the highest quality service."
    }
];

const processTitle = document.querySelector(".proc3 h3");
const processDescription = document.querySelector(".proc3 p");
const nextButton = document.querySelector(".nxt span");
const processContainer = document.querySelector(".proc3");

let currentIndex = 0;

function updateContent() {
    processContainer.classList.add("hidden");

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % processContents.length;
        processTitle.textContent = processContents[currentIndex].title;
        processDescription.textContent = processContents[currentIndex].description;
        processContainer.classList.remove("hidden");
    }, 250); 
}

nextButton.addEventListener("click", updateContent);




////////JAVASCRIPT FOR VIEWING GALLERY/LIGHTBOX


// document.addEventListener('DOMContentLoaded', () => {
//     const images = document.querySelectorAll('.fsimge img');
//     const lightbox = document.getElementById('lightbox');
//     const lightboxImage = document.getElementById('lightbox-image');
//     const imageNumber = document.getElementById('image-number');
//     const closeLightbox = document.getElementById('close-lightbox');
//     const zoomIn = document.getElementById('zoom-in');
//     const zoomOut = document.getElementById('zoom-out');
//     const prevArrow = document.getElementById('prev-arrow');
//     const nextArrow = document.getElementById('next-arrow');
//     const lightboxImageContainer = document.getElementById('lightbox-image-container');
//     let currentIndex = 0;
//     let isZoomed = false;
//     let scale = 1;
//     let startX = 0;
//     let startY = 0;
//     let originX = 0;
//     let originY = 0;

//     images.forEach(image => {
//         image.addEventListener('click', () => {
//             currentIndex = parseInt(image.dataset.index) - 1;
//             openLightbox(image.src, currentIndex + 1);
//         });
//     });

//     closeLightbox.addEventListener('click', () => {
//         lightbox.classList.add('hidden');
//         resetZoom();
//     });

//     zoomIn.addEventListener('click', () => {
//         if (!isZoomed) {
//             scale = 2;
//             isZoomed = true;
//             lightboxImage.style.transform = `scale(${scale})`;
//             lightboxImageContainer.style.overflow = 'auto';
//         }
//     });

//     zoomOut.addEventListener('click', () => {
//         if (isZoomed) {
//             resetZoom();
//         }
//     });

//     prevArrow.addEventListener('click', () => {
//         if (!isZoomed) {
//             currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
//             updateLightboxImage();
//         }
//     });

//     nextArrow.addEventListener('click', () => {
//         if (!isZoomed) {
//             currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
//             updateLightboxImage();
//         }
//     });

//     lightbox.addEventListener('wheel', (e) => {
//         e.preventDefault();
//     }, { passive: false });

//     function openLightbox(src, index) {
//         lightboxImage.src = src;
//         imageNumber.textContent = `Image ${index}`;
//         lightbox.classList.remove('hidden');
//     }

//     function updateLightboxImage() {
//         lightboxImage.src = images[currentIndex].src;
//         imageNumber.textContent = `Image ${currentIndex + 1}`;
//         resetZoom();
//     }

//     function resetZoom() {
//         scale = 1;
//         isZoomed = false;
//         lightboxImage.style.transform = `scale(${scale})`;
//         lightboxImage.style.left = `0px`;
//         lightboxImage.style.top = `0px`;
//         lightboxImageContainer.style.overflow = 'hidden';
//     }

//     // Move image when zoomed
//     lightboxImageContainer.addEventListener('mousedown', (e) => {
//         if (isZoomed) {
//             e.preventDefault();
//             startX = e.clientX - originX;
//             startY = e.clientY - originY;
//             lightboxImageContainer.addEventListener('mousemove', moveImage);
//         }
//     });

//     window.addEventListener('mouseup', () => {
//         lightboxImageContainer.removeEventListener('mousemove', moveImage);
//     });

//     function moveImage(e) {
//         if (isZoomed) {
//             originX = e.clientX - startX;
//             originY = e.clientY - startY;
//             lightboxImage.style.transform = `translate(${originX}px, ${originY}px) scale(${scale})`;
//         }
//     }

//     // Pinch to zoom
//     let initialDistance = 0;

//     lightboxImageContainer.addEventListener('touchstart', (e) => {
//         if (e.touches.length === 2) {
//             initialDistance = getDistance(e.touches[0], e.touches[1]);
//         }
//     });

//     lightboxImageContainer.addEventListener('touchmove', (e) => {
//         if (e.touches.length === 2) {
//             const currentDistance = getDistance(e.touches[0], e.touches[1]);
//             const scaleChange = currentDistance / initialDistance;
//             scale = Math.min(Math.max(1, scale * scaleChange), 3); // limit zoom level between 1 and 3
//             lightboxImage.style.transform = `scale(${scale})`;
//             initialDistance = currentDistance;
//             isZoomed = scale > 1;
//         }
//     });

//     function getDistance(touch1, touch2) {
//         return Math.sqrt(
//             Math.pow(touch2.clientX - touch1.clientX, 2) +
//             Math.pow(touch2.clientY - touch1.clientY, 2)
//         );
//     }
// })


