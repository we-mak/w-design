import { crossOriginType } from "src/AvatarPicker"

function isDataURL(str: string) {
  if (str === null) return false
  const regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i
  return !!str.match(regex)
}

export function loadImageURL(imageURL: string, crossOrigin?: crossOriginType) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = reject
    if (isDataURL(imageURL) === false && crossOrigin) {
      image.crossOrigin = crossOrigin
    }
    image.src = imageURL
  })
}

export default function loadImageFile(imageFile: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    
    reader.onload = (e: ProgressEvent<any>) => {
      try {
        const image = loadImageURL(e.target.result)
        resolve(image)
      } catch (e) {
        reject(e)
      }
    }
    reader.readAsDataURL(imageFile)
  })
}