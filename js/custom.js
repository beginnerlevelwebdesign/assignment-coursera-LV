// https://getbootstrap.com/docs/5.1/components/offcanvas/#via-javascript
var galleryItems = [].slice.call(document.querySelectorAll('[data-bs-toggle="gallery"]'));
galleryItems.map(function (galleryItem) {
    var modalSelector = galleryItem.getAttribute('data-bs-target');

    if (modalSelector) {
        var modalElement = document.querySelector(modalSelector);

        if (modalElement) {
            var modal = bootstrap.Modal.getInstance(modalElement);

            if (! modal) {
                modal = new bootstrap.Modal(modalElement);
            }

            galleryItem.addEventListener('click', function() {
                if (modalElement.getAttribute('aria-labelledby') && galleryItem.getAttribute('alt')) {
                    var labelElement = document.querySelector('#' + modalElement.getAttribute('aria-labelledby'));

                    if (labelElement) {
                        labelElement.innerHtml = 'Gallery of ' + galleryItem.getAttribute('alt');
                    }
                }

                if (modalElement.getAttribute('data-bs-target') && galleryItem.getAttribute('src')) {
                    var imgElement = modalElement.querySelector(modalElement.getAttribute('data-bs-target'));

                    if (imgElement) {
                        imgElement.src = galleryItem.getAttribute('src');
                    }
                }

                modal.show();
            });
        }
    }
});