function addTopic() {
  const input = document.getElementById("topicInput")
  const topic = input.value.trim()
  if (topic === "") return

  const li = document.createElement("li")
  li.innerText = topic

  li.onclick = () => {
    li.classList.toggle("completed")
  }

  const del = document.createElement("span")
  del.innerText = " ×"
  del.className = "delete"
  del.onclick = (e) => {
    e.stopPropagation()
    li.remove()
  }

  li.appendChild(del)
  document.getElementById("topicList").appendChild(li)
  input.value = ""
}
