
let originalVars = null;
const lighterVars = {
    '--white-font-color': '#000000',
    '--black-font-color': '#ffffff',
    '--white-border-color': '#e1baf2',
    '--black-border-color': '#cccccc',
    '--container-bg-color': '#ffffff',
    '--resume-top-bg-color': '#ffffff',
    '--resume-details-bg-color': '#caf0f8',
    '--professionalSummary-bg-color': '#b1e9f3',
    '--chip-bg-color': '#70b4c8',
    '--actions-bg-color': '#cbc8e8',
    '--contacts-bg-color': '#afa7f3ff',
    '--contact-img-filter': 'invert(1)',
    '--button-bg-color': '#4f0071'
};

function getCurrentVars(vars) {
    const styles = getComputedStyle(document.documentElement);
    const result = {};
    for (const key in vars) {
        result[key] = styles.getPropertyValue(key).trim();
    }
    return result;
}

themeBtn.addEventListener('click', () => {
    if (!originalVars) {
        originalVars = getCurrentVars(lighterVars);
    }
    const isLighter = document.documentElement.dataset.lighter === 'true';
    const varsToApply = isLighter ? originalVars : lighterVars;
    for (const key in varsToApply) {
        document.documentElement.style.setProperty(key, varsToApply[key]);
    }
    document.documentElement.dataset.lighter = isLighter ? 'false' : 'true';
});

// printing the page 
document.getElementById('printBtn').addEventListener('click', () => {
    window.print();
});



// border animation for profile picture
const profilePicture = document.querySelector('.profilePicture');
const profileImg = profilePicture ? profilePicture.querySelector('img') : null;

if (profilePicture && profileImg) {
    // Create a style element for the animation if not already present
    if (!document.getElementById('profilePicture-anim-style')) {
        const style = document.createElement('style');
        style.id = 'profilePicture-anim-style';
        style.textContent = `
        .profilePicture {
            position: relative;
            border: 1px solid var(--white-border-color, #fff);
            transition: border-width 0.3s;
            overflow: visible;
        }
        .profilePicture__border-anim {
            pointer-events: none;
            position: absolute;
            top: -4px; left: -4px; right: -4px; bottom: -4px;
            width: calc(100% + 8px);
            height: calc(100% + 8px);
            border-radius: 50%;
            z-index: 2;
        }
        .profilePicture img {
            transition: transform 0.3s;
            position: relative;
            z-index: 1;
        }
        .profilePicture.scaled img {
            transform: scale(1.1);
        }
        `;
        document.head.appendChild(style);
    }

    // Create SVG border if not present
    let svgBorder = profilePicture.querySelector('.profilePicture__border-anim');
    if (!svgBorder) {
        svgBorder = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgBorder.classList.add('profilePicture__border-anim');
        svgBorder.setAttribute('width', '100%');
        svgBorder.setAttribute('height', '100%');
        svgBorder.setAttribute('viewBox', '0 0 108 108');
        svgBorder.innerHTML = `
            <circle
                cx="54" cy="54" r="52"
                fill="none"
                stroke="#ff69b4"
                stroke-width="3"
                stroke-dasharray="326.7256"
                stroke-dashoffset="326.7256"
                style="transition: stroke-dashoffset 3s linear;"
            />
        `;
        profilePicture.appendChild(svgBorder);
    }
    const circle = svgBorder.querySelector('circle');
    const circumference = 2 * Math.PI * 52;

    let animationTimeout = null;

    profilePicture.addEventListener('mouseenter', () => {
        profilePicture.style.borderWidth = '3px';
        // Animate SVG border
        circle.style.strokeDashoffset = circumference;
        // Force reflow for restart
        void circle.offsetWidth;
        circle.style.transition = 'stroke-dashoffset 3s linear';
        circle.style.strokeDashoffset = '0';
        svgBorder.style.opacity = '1';
        animationTimeout = setTimeout(() => {
            profilePicture.classList.add('scaled');
            svgBorder.style.transition = 'opacity 0.3s';
            svgBorder.style.opacity = '0';
        }, 3000);
    });

    profilePicture.addEventListener('mouseleave', () => {
        profilePicture.style.borderWidth = '';
        profilePicture.classList.remove('scaled');
        // Reset SVG border for next animation
        circle.style.transition = 'stroke-dashoffset 0.3s';
        circle.style.strokeDashoffset = circumference;
        svgBorder.style.transition = 'opacity 0.3s';
        svgBorder.style.opacity = '1';
        if (animationTimeout) {
            clearTimeout(animationTimeout);
            animationTimeout = null;
        }
    });
}