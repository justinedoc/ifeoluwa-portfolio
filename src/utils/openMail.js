function openMail() {
  const aTag = document.createElement("a");
  aTag.href = "mailto:ifeoluwa.designs@gmail.com";
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
}

export default openMail;
