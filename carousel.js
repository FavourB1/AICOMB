<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Experiments Portfolio</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to the CSS file -->
</head>
<body>
    <!-- Header Section -->
    <header>
        <img src="Designer (3).jpg" alt="Header Image" class="header-image">
        <h1>AI Experiments Portfolio</h1>
        <nav>
            <ul>
                <li><a href="#textual-ai">Textual AI</a></li>
                <li><a href="#visual-ai">Visual AI</a></li>
                <li><a href="#procedural-ai">Procedural AI</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Content -->
    <main>
        <!-- Textual AI Section -->
        <section id="textual-ai">
            <h2>Textual AI</h2>
            <p>Explore experiments with textual AI, such as sentiment analysis, natural language processing, and interactive narrative design.</p>
        </section>

        <!-- Visual AI Section with Image Carousel -->
        <section id="visual-ai">
            <h2>Visual AI</h2>
            <p>Discover the impact of visual AI in generating and analyzing images, exploring creative design workflows.</p>
            <div class="carousel">
                <div class="carousel-item">
                    <img src="image1.jpg" alt="AI-generated art">
                    <p class="caption">AI-Generated Artwork #1</p>
                </div>
                <div class="carousel-item">
                    <img src="image2.jpg" alt="Visual data analysis">
                    <p class="caption">Visual Data Analysis</p>
                </div>
                <div class="carousel-item">
                    <img src="image3.jpg" alt="Creative design with AI">
                    <p class="caption">Creative Design Workflow</p>
                </div>
            </div>
        </section>

        <!-- Procedural AI Section -->
        <section id="procedural-ai">
            <h2>Procedural AI</h2>
            <p>Experiment with procedural AI to create algorithms that drive generative systems for storytelling, design, and interactivity.</p>
        </section>
    </main>

    <!-- Footer Section -->
    <footer>
        <p>&copy; 2024 AI Experiments Portfolio. All rights reserved.</p>
    </footer>

    <script>
        // Basic carousel functionality (optional)
        const items = document.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        function showCarouselItem(index) {
            items.forEach((item, i) => {
                item.style.display = i === index ? 'block' : 'none';
            });
        }

        // Initialize carousel
        showCarouselItem(currentIndex);
    </script>
</body>
</html>
