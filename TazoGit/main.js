document.addEventListener('DOMContentLoaded', function() {

    const planets = {
        mercury: {
            name: "Mercury",
            description: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
            source: "https://en.wikipedia.org/wiki/Mercury_(planet)",
            rotation: "58.6 Days",
            revolution: "87.97 Days",
            radius: "2,439.7 Km",
            temperature: "430°C",
            color: "#419EBB",
            overviewImg: "https://chamumutezva.github.io/planets-fact-site/assets/planet-mercury.svg",
            internalImg: "https://chamumutezva.github.io/planets-fact-site/assets/planet-mercury-internal.svg",
            geologyImg: "https://chamumutezva.github.io/planets-fact-site/assets/geology-mercury.png"
        },
        venus: {
            name: "Venus",
            description: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. Venus orbits the Sun every 224.7 Earth days. It has the longest rotation period of any planet in the Solar System and rotates in the opposite direction to most other planets.",
            source: "https://en.wikipedia.org/wiki/Venus",
            rotation: "243 Days",
            revolution: "224.7 Days",
            radius: "6,051.8 Km",
            temperature: "471°C",
            color: "#EDA249",
            overviewImg: "https://chamumutezva.github.io/planets-fact-site/assets/planet-venus.svg",
            internalImg: "https://chamumutezva.github.io/planets-fact-site/assets/planet-venus-internal.svg",
            geologyImg: "https://chamumutezva.github.io/planets-fact-site/assets/geology-venus.png"
        },
        earth: {
            name: "Earth",
            description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also lakes, rivers and other fresh water.",
            source: "https://en.wikipedia.org/wiki/Earth",
            rotation: "0.99 Days",
            revolution: "365.26 Days",
            radius: "6,371 Km",
            temperature: "16°C",
            color: "#6D2ED5",
            overviewImg: "https://chamumutezva.github.io/planets-fact-site/assets/planet-earth.svg",
            internalImg: "https://chamumutezva.github.io/planets-fact-site/assets/planet-earth-internal.svg",
            geologyImg: "https://chamumutezva.github.io/planets-fact-site/assets/geology-earth.png"
        },
        mars: {
            name: "Mars",
            description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. Mars is often called the 'Red Planet' because of iron oxide prevalent on its surface, which gives it a reddish appearance.",
            source: "https://en.wikipedia.org/wiki/Mars",
            rotation: "1.03 Days",
            revolution: "1.88 Years",
            radius: "3,389.5 Km",
            temperature: "-28°C",
            color: "#D14C32",
            overviewImg: "https://chamumutezva.github.io/planets-fact-site/assets/planet-mars.svg",
            internalImg: "https://chamumutezva.github.io/planets-fact-site/assets/planet-mars-internal.svg",
            geologyImg: "https://chamumutezva.github.io/planets-fact-site/assets/geology-mars.png"
        },
        jupiter: {
            name: "Jupiter",
            description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.",
            source: "https://en.wikipedia.org/wiki/Jupiter",
            rotation: "0.41 Days",
            revolution: "11.86 Years",
            radius: "69,911 Km",
            temperature: "-108°C",
            color: "#D83A34",
            overviewImg: "https://chamumutezva.github.io/planets-fact-site/assets/planet-jupiter.svg",
            internalImg: "https://chamumutezva.github.io/planets-fact-site/assets/planet-jupiter-internal.svg",
            geologyImg: "https://chamumutezva.github.io/planets-fact-site/assets/geology-jupiter.png"
        },
        saturn: {
            name: "Saturn",
            description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. It has a prominent ring system that consists of nine continuous main rings and three discontinuous arcs.",
            source: "https://en.wikipedia.org/wiki/Saturn",
            rotation: "0.45 Days",
            revolution: "29.46 Years",
            radius: "58,232 Km",
            temperature: "-138°C",
            color: "#CD5120",
            overviewImg: "https://chamumutezva.github.io/planets-fact-site/assets/planet-saturn.svg",
            internalImg: "https://chamumutezva.github.io/planets-fact-site/assets/planet-saturn-internal.svg",
            geologyImg: "https://chamumutezva.github.io/planets-fact-site/assets/geology-saturn.png"
        },
        uranus: {
            name: "Uranus",
            description: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn.",
            source: "https://en.wikipedia.org/wiki/Uranus",
            rotation: "0.72 Days",
            revolution: "84.01 Years",
            radius: "25,362 Km",
            temperature: "-195°C",
            color: "#1EC1A2",
            overviewImg: "https://chamumutezva.github.io/planets-fact-site/assets/planet-uranus.svg",
            internalImg: "https://chamumutezva.github.io/planets-fact-site/assets/planet-uranus-internal.svg",
            geologyImg: "https://chamumutezva.github.io/planets-fact-site/assets/geology-uranus.png"
        },
        neptune: {
            name: "Neptune",
            description: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.",
            source: "https://en.wikipedia.org/wiki/Neptune",
            rotation: "0.67 Days",
            revolution: "164.8 Years",
            radius: "24,622 Km",
            temperature: "-201°C",
            color: "#2D68F0",
            overviewImg: "https://chamumutezva.github.io/planets-fact-site/assets/planet-neptune.svg",
            internalImg: "https://chamumutezva.github.io/planets-fact-site/assets/planet-neptune-internal.svg",
            geologyImg: "https://chamumutezva.github.io/planets-fact-site/assets/geology-neptune.png"
        }
    };

    // DOM elements
    const planetNameEl = document.querySelector('.planet-name');
    const planetDescEl = document.querySelector('.planet-description');
    const planetSourceEl = document.querySelector('.source a');
    const rotationTimeEl = document.querySelectorAll('.stat-value')[0];
    const revolutionTimeEl = document.querySelectorAll('.stat-value')[1];
    const radiusEl = document.querySelectorAll('.stat-value')[2];
    const temperatureEl = document.querySelectorAll('.stat-value')[3];
    const planetLinks = document.querySelectorAll('.planet-nav a');
    const tabs = document.querySelectorAll('.tab');
    const planetImage = document.querySelector('.planet-image');
    const internalImage = document.querySelector('.internal-image');
    const geologyImage = document.querySelector('.geology-image');
    const planetImageContainer = document.querySelector('.planet-image-container');

    // Change planet function
    function changePlanet(planetKey) {
        const planet = planets[planetKey];
        
        // Update text content
        planetNameEl.textContent = planet.name;
        planetDescEl.textContent = planet.description;
        planetSourceEl.href = planet.source;
        rotationTimeEl.textContent = planet.rotation;
        revolutionTimeEl.textContent = planet.revolution;
        radiusEl.textContent = planet.radius;
        temperatureEl.textContent = planet.temperature;

        // Update images
        planetImage.src = planet.overviewImg;
        internalImage.src = planet.internalImg;
        geologyImage.src = planet.geologyImg;

        // Update active nav link
        planetLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.planet === planetKey) {
                link.classList.add('active');
            }
        });

        // Update planet color
        document.documentElement.style.setProperty('--current-planet-color', planet.color);

        // Reset to overview view
        showOverview();
    }

    // Show overview view
    function showOverview() {
        planetImage.classList.add('active');
        internalImage.classList.remove('active');
        geologyImage.classList.remove('active');
        
        tabs.forEach(tab => tab.classList.remove('active'));
        tabs[0].classList.add('active');
    }

   
    function showInternal() {
        planetImage.classList.remove('active');
        internalImage.classList.add('active');
        geologyImage.classList.remove('active');
        
        tabs.forEach(tab => tab.classList.remove('active'));
        tabs[1].classList.add('active');
    }

    // Show geology view
    function showGeology() {
        planetImage.classList.remove('active');
        internalImage.classList.remove('active');
        geologyImage.classList.add('active');
        
        tabs.forEach(tab => tab.classList.remove('active'));
        tabs[2].classList.add('active');
    }

    // Planet navigation
    planetLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const planetKey = this.dataset.planet;
            changePlanet(planetKey);
        });
    });

    // Tab switching
    tabs[0].addEventListener('click', showOverview);
    tabs[1].addEventListener('click', showInternal);
    tabs[2].addEventListener('click', showGeology);

    // Initialize with Mercury
    changePlanet('mercury');
});