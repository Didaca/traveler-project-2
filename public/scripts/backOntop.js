function ShowBackToTop() {
    document.querySelector('.back-to-top').addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });      

    if(window.scrollY > 200) {
      document.querySelector('.back-to-top').style.visibility = "visible";
    }else {
      document.querySelector('.back-to-top').style.visibility = "hidden";
    }
  };
  window.onscroll = ShowBackToTop;