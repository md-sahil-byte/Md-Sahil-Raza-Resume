
// about secction ---------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const aboutContentDiv = document.getElementById('aboutContent');
    const aboutNav = document.getElementById('aboutNav');

    // Centralized content data
    const contentData = {
        professionalSummary: `
                <div class="about-info">
                    <h5>A dedicated Web-Developer <br>based in Jharkhand, India &#x1F4CD;</h5>
                    <p>Enthusiastic and dedicated web developer with a strong foundation in front-end and back-end
                        technologies. Proficient in HTML, CSS, JavaScript, and frameworks like React and Node.js.
                        Experienced in building responsive and user-friendly web applications. Adept at collaborating with
                        cross-functional teams to deliver high-quality projects on time. Committed to continuous learning
                        and staying updated with the latest industry trends.</p>
                </div>
            `,
        education: `
                <div class="education">
                    <h4 class="section-title">Education</h4>
                    <div class="xp-item">
                        <div class="xp-title">
                            <span>Bachelor of Computer Application (BCA) — Karim City College, Jamshedpur</span>
                            <span class="when">07/2019 – 08/2022</span>
                        </div>
                        <ul class="bullets">
                            <li><strong>Score:</strong> 87.7%</li>
                        </ul>
                    </div>
                    <div class="xp-item">
                        <div class="xp-title">
                            <span>Post Graduate — RVS College of Engineering & Technology, Jamshedpur</span>
                            <span class="when">10/2022 – 2024</span>
                        </div>
                    </div>
                </div>
            `,
        certification: `
                <div class="certifications">
                    <h4 class="section-title">Certificates</h4>
                    <ul class="bullets">
                        <li>Willmark International — Artificial Intelligence Course (Internship) &nbsp;&nbsp;|&nbsp;&nbsp;  06/2023 – 07/2023</li>
                        <li>Full Stack Development (Techies Gateway) &nbsp;&nbsp;|&nbsp;&nbsp; 06/2024 – 09/2024</li>
                        <li>College Sports Meet — Cricket Championship &nbsp;&nbsp;|&nbsp;&nbsp; 12/2022</li>
                    </ul>
                </div>
            `,
        languages: `
                <div class="languages">
                    <h4 class="section-title">Languages</h4>
                    <div class="lang-grid">
                        <span class="chip">Hindi <span class="subhead">Native/Bilingual</span></span>
                        <span class="chip">English <span class="subhead">Native/Bilingual</span></span>
                        <span class="chip">Bengali <span class="subhead">Professional</span></span>
                        <span class="chip">Assamese <span class="subhead">Limited</span></span>
                        <span class="chip">Urdu <span class="subhead">Full Professional</span></span>
                        <span class="chip">Bhojpuri <span class="subhead">Elementary</span></span>
                    </div>
                </div>
            `,
        intrests: `<div class="intrests">
                <h2 class="section-title">Interests</h2>
                <ul class="two-col">
                    <li>Cricket</li>
                    <li>Volleyball</li>
                    <li>Painting</li>
                    <li>Reading</li>
                    <li>Video Games</li>
                    <li>Chess</li>
                </ul>
                </aside>
            </div>`
    };

    // Function to render content based on the section key
    const renderContent = (section) => {
        aboutContentDiv.innerHTML = contentData[section];
    };

    // Initial render on page load
    renderContent('professionalSummary');

    // Event delegation for the navigation menu
    aboutNav.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'LI') {
            // Update active class
            document.querySelectorAll('.tab-menu li').forEach(li => li.classList.remove('active'));
            target.classList.add('active');

            // Render content
            const section = target.getAttribute('data-section');
            renderContent(section);
        }
    });
});


// project section--------------------------------------------------------

// project1
document.addEventListener("DOMContentLoaded", () => {
    const projectContainer = document.getElementById("project1");
    const projectImage = projectContainer.querySelector("img");
    const leftButton = projectContainer.querySelector(".left");
    const rightButton = projectContainer.querySelector(".right");

    // Define the list of image URLs.
    // Replace these with your actual image paths, e.g., '/img/project1/image1.png'
    const images = [
        "/project1Img/project1Img1.png",
        "/project1Img/project1Img2.png"
    ];
    let currentIndex = 0;

    // Set the initial image
    projectImage.src = images[currentIndex];

    // Update the image source based on the current index
    const updateImage = () => {
        projectImage.src = images[currentIndex];
    };

    // Event listener for the left button
    leftButton.addEventListener("click", () => {
        // If it's the first image, loop to the last one
        if (currentIndex === 0) {
            currentIndex = images.length - 1;
        } else {
            currentIndex--;
        }
        updateImage();
    });

    // Event listener for the right button
    rightButton.addEventListener("click", () => {
        // If it's the last image, loop back to the first one
        if (currentIndex === images.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateImage();
    });
});


// project2
document.addEventListener("DOMContentLoaded", () => {
    const projectContainer = document.getElementById("project2");
    const projectImage = projectContainer.querySelector("img");
    const leftButton = projectContainer.querySelector(".left");
    const rightButton = projectContainer.querySelector(".right");

    // Define the list of image URLs.
    // Replace these with your actual image paths, e.g., '/img/project1/image1.png'
    const images = [
        "/project2Img/project2Img1.png",
        "/project2Img/project2Img2.png",
        "/project2Img/project2Img3.png",
        "/project2Img/project2Img4.png",
        "/project2Img/project2Img5.png"
    ];
    let currentIndex = 0;

    // Set the initial image
    projectImage.src = images[currentIndex];

    // Update the image source based on the current index
    const updateImage = () => {
        projectImage.src = images[currentIndex];
    };

    // Event listener for the left button
    leftButton.addEventListener("click", () => {
        // If it's the first image, loop to the last one
        if (currentIndex === 0) {
            currentIndex = images.length - 1;
        } else {
            currentIndex--;
        }
        updateImage();
    });

    // Event listener for the right button
    rightButton.addEventListener("click", () => {
        // If it's the last image, loop back to the first one
        if (currentIndex === images.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateImage();
    });
});



// project3
document.addEventListener("DOMContentLoaded", () => {
    const projectContainer = document.getElementById("project3");
    const projectImage = projectContainer.querySelector("img");
    const leftButton = projectContainer.querySelector(".left");
    const rightButton = projectContainer.querySelector(".right");

    // Define the list of image URLs.
    // Replace these with your actual image paths, e.g., '/img/project1/image1.png'
    const images = [
        "/project3Img/project3Img1.png",
    ];
    let currentIndex = 0;

    // Set the initial image
    projectImage.src = images[currentIndex];

    // Update the image source based on the current index
    const updateImage = () => {
        projectImage.src = images[currentIndex];
    };

    // Event listener for the left button
    leftButton.addEventListener("click", () => {
        // If it's the first image, loop to the last one
        if (currentIndex === 0) {
            currentIndex = images.length - 1;
        } else {
            currentIndex--;
        }
        updateImage();
    });

    // Event listener for the right button
    rightButton.addEventListener("click", () => {
        // If it's the last image, loop back to the first one
        if (currentIndex === images.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateImage();
    });
});


// copying 

const contactItem1 = document.querySelector('.contactsListItem1');
const contactItem2 = document.querySelector('.contactsListItem2');
const contactItem3 = document.querySelector('.contactsListItem3');

const copyTextElement1 = document.getElementById('copyTextClass1');
const copyTextElement2 = document.getElementById('copyTextClass2');
const copyTextElement3 = document.getElementById('copyTextClass3');

const copyButton1 = document.querySelector('.copy1');
const copyButton2 = document.querySelector('.copy2');
const copyButton3 = document.querySelector('.copy3');

// Handle the click event on the first item 
contactItem1.addEventListener("mouseenter", () => {
    copyButton1.style.display = "flex";
    // copyButton1.style.left = "5%";

})
copyButton1.addEventListener('click', () => {
    // Create a temporary input element to hold the text
    const tempInput = document.createElement('input');
    tempInput.value = copyTextElement1.textContent.trim();
    document.body.appendChild(tempInput);
    tempInput.select();

    try {
        // Execute the copy command
        document.execCommand('copy');

        // Provide user feedback
        copyButton1.textContent = 'Copied!';
        setTimeout(() => {
            copyButton1.textContent = 'Copy';
        }, 2000); // Change text back after 2 seconds

    } catch (err) {
        console.error('Failed to copy text:', err);
    } finally {
        // Clean up the temporary input element
        document.body.removeChild(tempInput);
    }
});

contactItem1.addEventListener("mouseleave", () => {
    setTimeout(() => {
        copyButton1.style.display = "none";
    }, 2000); // 
})


// Handle the click event on the second item  
contactItem2.addEventListener("mouseenter", () => {
    copyButton2.style.display = "flex";
    // copyButton2.style.left = "30%";

})
copyButton2.addEventListener('click', () => {
    // Create a temporary input element to hold the text
    const tempInput = document.createElement('input');
    tempInput.value = copyTextElement2.textContent.trim();
    document.body.appendChild(tempInput);
    tempInput.select();

    try {
        // Execute the copy command
        document.execCommand('copy');

        // Provide user feedback
        copyButton2.textContent = 'Copied!';
        setTimeout(() => {
            copyButton2.textContent = 'Copy';
        }, 2000); // Change text back after 2 seconds

    } catch (err) {
        console.error('Failed to copy text:', err);
    } finally {
        // Clean up the temporary input element
        document.body.removeChild(tempInput);
    }
});

contactItem2.addEventListener("mouseleave", () => {
    setTimeout(() => {
        copyButton2.style.display = "none";
    }, 2000); // 
})


// Handle the click event on the third item  
contactItem3.addEventListener("mouseenter", () => {
    copyButton3.style.display = "flex";
    // copyButton3.style.left = "60%";

})
copyButton3.addEventListener('click', () => {
    // Create a temporary input element to hold the text
    const tempInput = document.createElement('input');
    tempInput.value = copyTextElement3.textContent.trim();
    document.body.appendChild(tempInput);
    tempInput.select();

    try {
        // Execute the copy command
        document.execCommand('copy');

        // Provide user feedback
        copyButton3.textContent = 'Copied!';
        setTimeout(() => {
            copyButton3.textContent = 'Copy';
        }, 2000); // Change text back after 2 seconds

    } catch (err) {
        console.error('Failed to copy text:', err);
    } finally {
        // Clean up the temporary input element
        document.body.removeChild(tempInput);
    }
});

contactItem3.addEventListener("mouseleave", () => {
    setTimeout(() => {
        copyButton3.style.display = "none";
    }, 2000); // 
})


// nav bar link click redirecting
const navLinks = document.querySelectorAll('.navigationList a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Prevent the default anchor behavior
        event.preventDefault();

        const targetHref = link.getAttribute('href');
        let targetElement;

        // Handle selectors with both # and .
        if (targetHref.startsWith('#')) {
            targetElement = document.querySelector(targetHref);
        } else if (targetHref.startsWith('.')) {
            targetElement = document.querySelector(targetHref);
        } else {
            // For cases where the href is just a name, like "about"
            targetElement = document.getElementById(targetHref) || document.querySelector(`.${targetHref}`);
        }

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// to the top button
const toTheTopButton = document.querySelector('.toTheTop');
const scrollThreshold = window.innerHeight * 0.20;

window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        toTheTopButton.classList.add('visible');
    } else {
        toTheTopButton.classList.remove('visible');
    }
});

toTheTopButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// hamburger button --------------------------
const hamburgerButton = document.querySelector(".hamburgerSvg")
const nav450px = document.querySelector(".navBar-450px")
const nav = document.querySelector(".navBar")
const closeButton=document.querySelector('.closeButton')

hamburgerButton.addEventListener('click', () => {

        nav450px.style.position = "absolute";
        nav450px.style.top = "-80%";
        nav.style.display = "flex";
        nav.style.position = "fixed";
        nav.style.right = "0";
        nav.style.transition = 'right 3s linear ';
})
closeButton.addEventListener('click', () => {

        nav450px.style.position = "relative";
        nav450px.style.top = "0%";
        nav.style.display = "none";
        nav.style.position = "fixed";
        nav.style.right = "-200%";
        nav.style.transition = 'right 3s linear ';
})
