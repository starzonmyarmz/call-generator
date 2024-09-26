const loadButton = document.querySelector("#load")
const form = document.querySelector("form")
const textarea = document.querySelector("textarea")

textarea.focus()

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

form.addEventListener("submit", (evt) => {
  evt.stopImmediatePropagation()
  evt.preventDefault()

  const items = textarea.value.replace(/(\r\n|\n|\r| )/gm, "")
  const itemsShuffled = shuffle(items.split(','))
  const itemsPadded = [...itemsShuffled]

  localStorage.items = items

  itemsPadded.push(itemsShuffled[0], itemsShuffled[1])

  let html = ""

  for (const [i, item] of itemsShuffled.entries()) {
    html += `<li><strong>${item}</strong> → ${itemsPadded[i + 1]}, ${itemsPadded[i + 2]}</li>`
  }

  document.querySelector("ul").innerHTML = html
  document.querySelector("#output").hidden = false
})

loadButton.addEventListener("click", () => {
  textarea.value = localStorage.items
})

document.addEventListener("DOMContentLoaded", () => {
  loadButton.hidden = !localStorage.items
})
