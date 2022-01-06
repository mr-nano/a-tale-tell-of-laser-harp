import 'regenerator-runtime/runtime'

console.log("I'm Connected")

const main = document.getElementsByClassName('main')[0]
const currentMainHeight = main.offsetHeight

const motivation = document.getElementsByClassName('motivation')[0]
const theory = document.getElementsByClassName('theory')[0]
const experience = document.getElementsByClassName('experience')[0]
const lessonsLearned = document.getElementsByClassName('lessons-learned')[0]
const aftermath = document.getElementsByClassName('aftermath')[0]

const motivationMarker =
  document.getElementsByClassName('motivation-marker')[0]
const theoryMarker = document.getElementsByClassName('theory-marker')[0]
const experienceMarker =
  document.getElementsByClassName('experience-marker')[0]
const lessonsLearnedMarker = document.getElementsByClassName(
  'lessons-learned-marker'
)[0]
const aftermathMarker = document.getElementsByClassName('aftermath-marker')[0]

motivation.marker = motivationMarker
theory.marker = theoryMarker
experience.marker = experienceMarker
lessonsLearned.marker = lessonsLearnedMarker
aftermath.marker = aftermathMarker

const inView = function (event) {
  const targets = [motivation, theory, experience, lessonsLearned, aftermath]
  targets.forEach((target) => {
    const boundingClientRect = target.getBoundingClientRect()
    const y = boundingClientRect.y

    if (y > 0 && y < currentMainHeight) {
      target.marker.classList.add('current-section')
    } else {
      target.marker.classList.remove('current-section')
    }
  })
}

main.addEventListener('scroll', inView)
