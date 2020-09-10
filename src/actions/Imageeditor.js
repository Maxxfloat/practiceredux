
const uploadLogo = (logoWidth,logoHeight) => {
    return {
        type : 'LOGO',
        payload : {
            width : logoWidth,
            height : logoHeight
        }
    }
}

const backGroundImage = (backGroundWidth,backGroundHeight) => {
    return {
        type : 'BACKGROUND_IMAGE',
        payload : {
            width : backGroundWidth,
            height : backGroundHeight
        }
    }
}

const changingLogoPosition = (xPosition,yPosition) => {
    return {
        type : 'CHANGING_LOGO_POSITION',
        payload : {
            xposition : xPosition,
            yposition : yPosition
        }
    }
}

const scretch = (newWidth, newHeight) => {
    return {
    type : 'CHANGING_LOGO_SIZE',
    payload : {
        newWidth,
        newHeight
        }
    }
}    