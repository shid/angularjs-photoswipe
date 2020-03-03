import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.js';

class HomeCtrl {
  constructor($scope) {
    'ngInject';

    $scope.openPhotoSwipe = function() {
      this.pswpElement = document.querySelectorAll('.pswp')[0];

      // build items array
      this.items = [
          {
              src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
              w: 964,
              h: 1024
          },
          {
              src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
              w: 1024,
              h: 683
          }
      ];
      
      // define options (if needed)
      this.options = {
              // history & focus options are disabled on CodePen        
          history: false,
          focus: false,

          showAnimationDuration: 0,
          hideAnimationDuration: 0
          
      };
      
      this.gallery = new PhotoSwipe( this.pswpElement, PhotoSwipeUI_Default, this.items, this.options);
      this.gallery.init();
    };
  }
}

export default HomeCtrl;