document.addEventListener('DOMContentLoaded', () => {
  //Высота мейн
  const main = document.querySelector('main');
  const header = document.querySelector('.header');
  const h1aPage = document.querySelector('.scand');

  let screenHeight = screen.height / 100 * 80;


  //получаем список итемов для анимаций.
  let animationItems = document.querySelectorAll('.animation');



  // console.log(animationItems);
  const ScrollAnimmations = () => {
    animationItems.forEach(el => {
      //высота каждого элемента
      let cordinateElement = getCoords(el).heightelement;
      //наша текущая высота + 65% от высоты экрана(ловим примерно низ экрана);
      let scrollTop = window.scrollY + screenHeight;

      if (scrollTop * 1 >= cordinateElement * 1) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  };


  // ScrollAnimmations();




  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY + screenHeight;

    ScrollAnimmations();
    // console.log(scrollTop);




    console.log(scrollTop);









    if (scrollTop*1 - screenHeight*1 >= 700) {
      if (header.classList.contains('fixed')) {

      } else {
        header.classList.add('fixed');
        main.style.marginTop = '' + header.offsetHeight + 'px';
      }

    } else {

      header.classList.remove('fixed');
      main.style.marginTop = '0px';

    }


    ///


  });
});






// определяет высоту блдока
function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  let heightelement = box.top + pageYOffset;
  // let heightY = height['top'];
  return {
    heightelement
    // left: box.left + pageXOffset
  };

}
