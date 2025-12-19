const list = document.getElementById("topicList")

window.onload = () => {
  const saved = JSON.parse(localStorage.getItem("topics")) || []
  saved.forEach(t => renderTopic(t.text, t.completed))
  updateProgress()
}

function addTopic() {
  const input = document.getElementById("topicInput")
  const topic = input.value.trim()
  if (topic === "") return

  renderTopic(topic, false)
  input.value = ""
  saveTopics()
  updateProgress()
}

function renderTopic(text, completed) {
  const li = document.createElement("li")
  li.innerText = text
  if (completed) li.classList.add("completed")

  li.onclick = () => {
    li.classList.toggle("completed")
    saveTopics()
    updateProgress()
  }

  li.ondblclick = () => {
    const newText = prompt("Edit topic", li.firstChild.textContent)
    if (newText && newText.trim() !== "") {
      li.firstChild.textContent = newText.trim()
      saveTopics()
    }
  }

  const del = document.createElement("span")
  del.innerText = " ×"
  del.className = "delete"
  del.onclick = (e) => {
    e.stopPropagation()
    li.remove()
    saveTopics()
    updateProgress()
  }

  li.appendChild(del)
  list.appendChild(li)
}

function saveTopics() {
  const items = []
  document.querySelectorAll("#topicList li").forEach(li => {
    items.push({
      text: li.firstChild.textContent,
      completed: li.classList.contains("completed")
    })
  })
  localStorage.setItem("topics", JSON.stringify(items))
}

function updateProgress() {
  const items = document.querySelectorAll("#topicList li")
  const completed = document.querySelectorAll("#topicList li.completed")
  let percent = 0
  if (items.length > 0) {
    percent = Math.round((completed.length / items.length) * 100)
  }
  document.getElementById("progress").innerText = "Progress: " + percent + "%"
}
