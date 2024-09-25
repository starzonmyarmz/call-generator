const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

document.querySelector("form").addEventListener("submit", (evt) => {
  evt.preventDefault()

  const items = document.querySelector("textarea").value.replace(/(\r\n|\n|\r| )/gm, "")
  const itemsShuffled = shuffle(items.split(','))
  const itemsPadded = [...itemsShuffled]

  itemsPadded.push(itemsShuffled[0], itemsShuffled[1])

  let html = ""

  for (const [i, item] of itemsShuffled.entries()) {
    html += `<li>${item} → ${itemsPadded[i + 1]}, ${itemsPadded[i + 2]}</li>`
  }

  document.querySelector("#output").innerHTML = html
})
