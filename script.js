// Update text in splash section
    // document.addEventListener('DOMContentLoaded', function() {
    //     document.getElementById('copyYear').innerText = new Date().getFullYear()
    // }, false);

// Controls for gallery
    let leftScrollButton
    let rightScrollButton
    let scrollableArea

    function scrollLeft() {
        scrollableArea.scrollBy(500, 0);
    }

    function scrollRight() {
        scrollableArea.scrollBy(-500, 0);
    }

// Update copyright year in footer
    document.addEventListener('DOMContentLoaded', function() {

        document.getElementById('copyYear').innerText = new Date().getFullYear()

        leftScrollButton = document.getElementById("arrowLeft");
        rightScrollButton = document.getElementById("arrowRight");
        scrollableArea = document.getElementById("tile-wrapper");

        leftScrollButton.addEventListener("click", scrollRight);
        rightScrollButton.addEventListener("click", scrollLeft);
        scrollableArea.addEventListener("scroll", arrowVisibility);



        // JavaScript Typewriter Effect Function
            const words = ['demands', 'medical chronologies','case summaries'];
            let index = 0; // Current word index
            let currentWord = ""; // Current word being typed
            let letterIndex = 0; // Current letter index

            const spanElement = document.getElementById("services");

            function type() {
                if (letterIndex < words[index].length) {
                    currentWord += words[index].charAt(letterIndex);
                    spanElement.textContent = currentWord;
                    letterIndex++;
                    setTimeout(type, 100); // Adjust typing speed here (100ms)
                } else {
                    setTimeout(deleteWord, 1000); // Delay before deleting the word
                }
            }

            function deleteWord() {
                if (letterIndex > 0) {
                    currentWord = currentWord.slice(0, -1);
                    spanElement.textContent = currentWord;
                    letterIndex--;
                    setTimeout(deleteWord, 50); // Adjust deleting speed here (50ms)
                } else {
                    index = (index + 1) % words.length; // Move to the next word
                    letterIndex = 0; // Reset letter index
                    setTimeout(type, 500); // Delay before starting to type the next word
                }
            }

            // Start the typewriter effect
            type();

    }, false);

    function arrowVisibility() {
        const left = document.getElementById("arrowLeft")
        const right = document.getElementById("arrowRight")
        const scrollDepth = scrollableArea.scrollLeft
        const maxScroll = scrollableArea.scrollWidth - scrollableArea.clientWidth
        // Hide/Reveal Left arrow
        if (scrollDepth) {
            left.style.visibility = "visible";
        } else {
            left.style.visibility = "hidden";
        }

        // Hide/Reveal Right arrow
        if (scrollDepth != maxScroll) {
            right.style.visibility = "visible";
        } else {
            right.style.visibility = "hidden";
        }
    }
       

    
