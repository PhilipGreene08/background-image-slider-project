const rightClicker = document.querySelector('.btn-right')
const leftClicker = document.querySelector('.btn-left')
const image = document.querySelector('.img-container')

let picCounter = 0

//data (pics)
const pictures = [
  'contBcg-0',
  'contBcg-1',
  'contBcg-2',
  'contBcg-3',
  'contBcg-4',
]

function nextPic(e) {
  picCounter++
  if (picCounter > pictures.length - 1) {
    picCounter = 0
    image.style.backgroundImage = `url('./img/${pictures[picCounter]}.jpeg')`
  } else {
    image.style.backgroundImage = `url('./img/${pictures[picCounter]}.jpeg')`
    console.log(picCounter);
  }
  e.preventDefault()
}

function previousPic(e) {
  picCounter--
  if (picCounter < 0) {
    picCounter = pictures.length - 1
    image.style.backgroundImage = `url('./img/${pictures[picCounter]}.jpeg')`
  } else {
    image.style.backgroundImage = `url('./img/${pictures[picCounter]}.jpeg')`
    console.log(picCounter);
  }
  e.preventDefault()
}

rightClicker.addEventListener('click', nextPic)
leftClicker.addEventListener('click', previousPic)
