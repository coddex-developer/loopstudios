type Image = {
    url: string
}

type BackgroundMain = {
    imageMobile: string,
    imageDeskTop: string
}
//Logo
export const urlImage: Image = { url: '/images/logo.svg' }

//Backgroun do Main da Página
export const backgrounMain: BackgroundMain = {
    imageMobile: '/images/mobile/image-hero.jpg',
    imageDeskTop: '/images/desktop/image-hero.jpg'
}
