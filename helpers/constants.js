// links to images of categories (movies/TV series) 
export const movieImageUrl = "https://upload.wikimedia.org/wikipedia/en/1/12/Jumanji_-The_Next_Level_film_poster.jpg"; 
export const seriesImageUrl = "https://upload.wikimedia.org/wikipedia/tr/thumb/0/02/The_Witcher_afi%C5%9F.jpg/640px-The_Witcher_afi%C5%9F.jpg"; 

// width and height of the images in main screen
export const imageHeightMain= 200; 
export const imageWidthMain = 200 ; 

// width and height of the images in listing screen
export const imageHeightListing = 150; 
export const imageWidthListing = 150;  

// number of programs displayed when no filters 
// from dropdown menu selected 
export const initialProgramLimit = 18; 

// all filtering options 
export const filterOptions = [
    { 
        value: "Yeniye Göre Sırala", 
        key: "new"
    }, 
    { 
        value: "Eskiye Göre Sırala", 
        key: "old"
    }, 
    { 
        value: "Puana Göre Sırala", 
        key: "score"
    }, 
    { 
        value: "Rastgele Sırala", 
        key: "random" 
    }, 
] 

// alert message 
export const alertMessage = "Bu bir deneme uygulaması olduğu için tıkladığınız yerin bir işlevi yoktur."; 
