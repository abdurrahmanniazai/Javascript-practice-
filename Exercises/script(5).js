document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"
document.getElementByTagName("nav")[0].lastElementChild.style.color = "green"

Array.from(document.getElementByTagName("li")).forEach((element) => {
  element.style.background = 'yellow';
;})