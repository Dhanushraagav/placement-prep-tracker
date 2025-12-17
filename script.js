function addTopic() {
  const input = document.getElementById("topicInput")
  const topic = input.value.trim()
  if (topic === "") return

  const li = document.createElement("li")
  li.innerText = topic

  li.onclick = () => {
    li.classList.toggle("completed")
    updateProgress()
  }

  const del = document.createElement("span")
  del.innerText = " ×"
  del.className = "delete"
  del.onclick = (e) => {
    e.stopPropagation()
    li.remove()
    updateProgress()
  }

  li.appendChild(del)
  document.getElementById("topicList").appendChild(li)
  input.value = ""

  updateProgress()
}

function updateProgress() {
  const items = document.querySelectorAll("#topicList li")
  const completed = document.querySelectorAll("#topicList li.completed")

  let percent = 0
  if (items.length > 0) {
    percent = Math.round((completed.length / items.length) * 100)
  }

  document.getElementById("progress").innerText =
    "Progress: " + percent + "%"
}
