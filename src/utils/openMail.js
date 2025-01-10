function openMail() {
  const aTag = document.createElement("a");
  aTag.href = "mailto:info@ifeoluwaportfolio.com";
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
}

export default openMail;
