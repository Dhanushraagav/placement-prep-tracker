function addTopic() {
  const input = document.getElementById("topicInput")
  const topic = input.value.trim()

  if (topic === "") return

  const li = document.createElement("li")
  li.innerText = topic

  document.getElementById("topicList").appendChild(li)
  input.value = ""
}
