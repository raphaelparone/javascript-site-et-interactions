document.addEventListener('DOMContentLoaded', function () {
    const filterItems = document.querySelectorAll('.filters li');
    const portfolioElements = document.querySelectorAll('.portfolio-elements');

    filterItems.forEach(function (filterItem) {
        filterItem.addEventListener('click', function () {
            const category = this.getAttribute('data-filter');

            filterItems.forEach(function (item) {
                item.classList.remove('active');
            });

            this.classList.add('active');

            portfolioElements.forEach(function (element) {
                element.classList.remove('active');
            });

            document.getElementById(category).classList.add('active');
        });
    });
});
