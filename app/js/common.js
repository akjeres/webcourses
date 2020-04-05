// NodeElement.prototype.closest() polyfill
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();
(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;

            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }

})();
// NodeElement.prototype.closest() polyfill ends
(function($) {
    // Code goes here
    window.addEventListener('load', () => {
        const nav = '.navigation_item';
        $(nav + ' button').on('click', (e) => {
            e.preventDefault();
            const target = $(e.target.closest("li"));
            const switcher = 'active';
            $(nav).not(target).removeClass(switcher);
            target.addClass(switcher);
        });
        const user_selector = '.header_user';
        const user_tag = document.querySelector(user_selector);
        document.addEventListener('click', (e) => {
            const switcher = 'active';
            if (!user_tag) return;
            if (e.target.closest(user_selector)) return;

            user_tag.classList.remove(switcher);
        });
        $('.user').on('click', function () {
            const switcher = 'active';
            this.closest(user_selector).classList.toggle(switcher);
        });
        $('input')
            .on('mouseover', (e) => {
                const switcher = 'hover';
                const parent = '.input_wrapper';
                const method = 'add';
                const parent_tag = e.target.closest(parent);
                if (parent_tag) parent_tag.classList[method](switcher);
            })
            .on('mouseout', (e) => {
                const switcher = 'hover';
                const parent = '.input_wrapper';
                const method = 'remove';
                const parent_tag = e.target.closest(parent);
                if (parent_tag) parent_tag.classList[method](switcher);
            })
            .on('input', (e) => {
                const switcher = 'filled';
                const parent = '.input_wrapper';
                const method = (e.target.value) ? 'add' : 'remove';
                const parent_tag = e.target.closest(parent);
                if (parent_tag) parent_tag.classList[method](switcher);
            })
            .on('change', (e) => {
                const switcher = 'filled';
                const parent = '.input_wrapper';
                const method = (e.target.value) ? 'add' : 'remove';
                const parent_tag = e.target.closest(parent);
                if (parent_tag) parent_tag.classList[method](switcher);
            })
            .on('focus', (e) => {
                const switcher = 'active';
                const parent = '.input_wrapper';
                $($('input').closest(parent)).removeClass(switcher);
                $($(e.target).closest(parent)).addClass(switcher);
            })
            .on('blur', () => {
                const switcher = 'active';
                const parent = '.input_wrapper';
                $($('input').closest(parent)).removeClass(switcher);
            });
    });
})( jQuery );