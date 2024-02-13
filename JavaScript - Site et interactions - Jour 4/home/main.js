function openRandomPage() {
  var pages = [
    "../all cards/abcard.html",
    "../all cards/dcard.html",
    "../all cards/dmcard.html",
    "../all cards/hgcard.html",
    "../all cards/hgcard.html",
    "../all cards/llcard.html",
    "../all cards/nlcard.html",
    "../all cards/rhcard.html",
    "../all cards/rwcard.html",
    "../all cards/sbcard.html",
    "../all cards/sscard.html",
    "../all cards/vcard.html",
  ];
  var randomIndex = Math.floor(Math.random() * pages.length);
  var randomPage = pages[randomIndex];
  window.location.href = randomPage;
}
