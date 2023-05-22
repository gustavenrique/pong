// gambiarra para corrigir bug de scrolling do carousel
const arrowButtons = document.querySelectorAll('.arrow__btn')

if (arrowButtons.length)
    arrowButtons.forEach(arrow =>
        arrow.addEventListener('click', e =>
            setTimeout(() => window.scrollTo(0, window.scrollY - 70), 1000)
        )
    )