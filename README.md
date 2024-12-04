# EvenUp Web Page
Landing page project

## Methodology
I went into this planning to use a framework (bootstrap) to build this, but ended up just handwriting it since the total project size didn't warrent the customization I'd need to do to make it look correct.
I also thought about using react to build this, but since we don't have any elements that are being changed out, it would be a lot to get the project set up.

## Prep Work
- Rename video to a suitable name
- Convert video to WebM
- Create a fallback image (WebP) to use while video loads (or if it doesn't)
- Adjust the figma icons to all have the same bounding box for sizing consistency
- Name icons appropriately
- Export icons as SVGs for minimal file size and maximum clarity/scalability
- No favicon in figma doc, so I grabbed from main website
- Needed to host files so I set them up on my portfolio so I could link to them

## Page Structure
- Setting up simple file structure with index.html, script.js, and style.css
- I use a structured css format in order to keep everything organized, so I always start with a base file I created a long time ago
- ~~Added Bootstrap v5.3 for some simple framework utilities (for the sake of time I didn't break it into pieces I just added the entire framework)~~
- Added metadata and links to prepare page
- Added sections and elements
- Removed Bootstrap because I wasn't really using it and it would only add to load time

## Styling
- I always start styles with CSS variables. While this page is short, it always pays to make things modular.
- Due to the simplicity of this site, I started from the bottom up 
- Footer is simple, just a centered block of text in a flex box 
- Took a bit of time to get the tiles to look visually correct, I had to adjust the total size of each tile to make sure they translated properly to the browser
- Used a css gradient to cover the edges of the slider
- Used flex to ensure consistent sizing
- Moved on to the Splash section
- Needed to use z-index (Stacking order) to ensure that the elements were in the correct locations
- Had to again make some adjustments to spacing to ensure that the content here translated to the desktop properly
- I used a span to wrap the word in the splash section that changes so that I can style it directly, as well as target it for the script that will swap the word out
- Finally I went back through to ensure that the site was as responsive as I wanted it to be

## Scripting
- Wrote function to update the copyright year. One of my least favorite things is when this is hard coded and a company forgets to update it
  - Just checks what the current year is and fills the innerText value of the copyright span container in the footer
- Needed to write script for the tile slider
  - A more simple script, just using event listeners to scroll through a div
- Needed to make sure that the script accounted for when the slider moved away from one edge or another to ensure it hid the arrow control on that side
  - Another event listener to check what if there was any scrolling in the div, then check if the user was currently all the way to the right or left
- Needed to write script for the text transition in and out on the splash section
  - I used chatGPT to help with this one, just because it is a bit more complicated conceptually for me and I didn't have the brain power at the end to write it
