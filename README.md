# Ledesma_finalProject
Ledesma_finalProject
Intro to Computing — Final Project (1st Semester)

Original Folder Structure (from project instructions):

According to the provided instructions, the required file structure should look like this:

<pre>

Main
├── pages
├── css
├── js
└── images

</pre>

However, in my initial setup, this structure didn’t work as expected the CSS and JS files weren’t linking properly when accessed from the pages folder.
The console indicated path errors whenever I tried to connect them.

To troubleshoot, I reorganized my folders like this:
<pre>
Ledesma_finalProject
|   README.md
|   .gitattributes
|   
\---pages
    |   index.html
    |   
    +---css
    |       style.css
    |
    +---js
    |       script.js
    |
    \---images
        +---Projects
        |       Project 1.png
        |       Project 2.png
        |       Project 3.png
        |       Project 4.png
        |       Project 5.png
        |       Project 6.png
        |       Project 7.png
        |       Project 8.png
        |
        +---Pictures
        |       Picture1.jpg
        |       Picture2.jpg
        |
        \---Icons
                instagram.svg
                facebook.svg
                icons8-github-24.png
                youtube.svg

```
</pre>
        
With this structure, everything worked fine because the CSS and JS were located within the same directory level as index.html.

PS. 
    I have just added JS as additional to make the menu bar work for smaller screens.

UPDATE:
    learned that the issue wasn’t with the folder structure itself — it was with how I was linking files across directories.

    By using the correct relative path syntax (../ to go up one level), I realized I could follow my teacher’s original structure without errors.
    For example:

        <link rel="stylesheet" href="../css/style.css">
        <script src="../js/script.js"></script>

<pre>

```
Ledesma_finalProject
│   .gitattributes
│   README.md
│
├───pages
│       index.html
│
├───css
│       style.css
│       projects.css
│
├───js
│       script.js
│
└───images
    ├───Projects
    │       Project 2.png
    │       Project 3.png
    │       Project 4.png
    │       Project 5.png
    │       Project 6.png
    │       Project 7.png
    │       Project 8.png
    │       Project 1.png
    │
    └───Pictures
            Picture1.jpg
            Picture2.jpg

```

</pre>

Note: 
    - I added a small JavaScript file to make the menu bar responsive for smaller screens.

  - I referenced a few tutorials for inspiration and learning, then combined those ideas with my own styling and layout decisions.

   - I’m still learning front-end development, but this project helped me understand folder structuring and file linking much better.

   -3d sliding images inspiration from lundev
   -Web design and layout inspiraton from How to Web Dev