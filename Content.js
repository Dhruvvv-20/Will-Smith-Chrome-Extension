const willSmithImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TechCrunch_Disrupt_2019_%2884834434641%29_%28cropped%29.jpg/640px-TechCrunch_Disrupt_2019_%2884834434641%29_%28cropped%29.jpg",
    "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/1650_v9_bb.jpg",
    "https://www.hollywoodreporter.com/wp-content/uploads/2023/08/Will-Smith-getty-H-2023.jpg?w=1296",
    "https://www.imdb.com/imdbpicks/will-smith-through-the-years/rg2815990528/mediaviewer/rm3281374720?ref_=nm_ecw_tty_wsmith_i",
    "https://www.imdb.com/name/nm0000226/mediaviewer/rm3838454017/?ref_=nm_md_1"
];

const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * willSmithImages.length);
    imgs[i].src = willSmithImages[randomImg];
}
