const Slider = (slides, parentSelector, callback = null) => {
    const slider = `
        <div class="slider-container">
            <div class="arrow arrow-left" onclick="sliderArrow('left', '${parentSelector}')">
                <i class="fas fa-arrow-left"></i>
            </div>

            <div class="slider slider-transition">
                ${slides}
            </div>

            <div class="arrow arrow-right" onclick="sliderArrow('right', '${parentSelector}')">
                <i class="fas fa-arrow-right"></i>
            </div>
        </div>`

    document.querySelector(parentSelector).innerHTML = slider

    if (callback) callback()

    setupSlider(parentSelector)
}

const setupSlider = parentSelector => {
    const container = document.querySelector(`${parentSelector} > .slider-container`)
    const slider = container.querySelector('.slider')
    
    let pressed = false, initialX, lastDraggingDate;
    
    const dragStart = e => {
        setSliderEffects(false, parentSelector)
    
        pressed = true
        initialX = e.offsetX - slider.offsetLeft
        container.style.cursor = 'grabbing'
    }
    
    const drag = e => {
        if (!pressed) return
        
        e.preventDefault()
    
        left = slider.style.left
        nextLeft = e.offsetX - initialX
    
        slider.style.left = `${nextLeft}px`
    
        let mayContinue = (() => {
            let wrapper = container.getBoundingClientRect()
    
            let lastDistance = window.innerWidth - slider.querySelector('.slide:last-child').getBoundingClientRect().right
            let wrapperDistance = window.innerWidth - wrapper.right
    
            return !((parseInt(slider.style.left) > 0) || (lastDistance > wrapperDistance))
        })()
    
        if (!mayContinue)
            slider.style.left = `${left}`
    }
    
    const dragEnd = () => {
        container.style.cursor = 'default'
        pressed = false
    
        lastDraggingDate = new Date()
    
        slider.classList.add('slider-transition')
    
        // establish delay of 1.5s for reactivating hover and transition, in order to avoid a dragging bug
        setTimeout(() => {
            if (lastDraggingDate <= new Date() - 1500)
                setSliderEffects(true, parentSelector)
        }, 1500)
    }
    
    container.addEventListener('mousedown', dragStart)
    container.addEventListener('touchstart', dragStart)
    
    container.addEventListener('mousemove', drag)
    container.addEventListener('touchmove', drag)
    
    container.addEventListener('mouseup', dragEnd)
    container.addEventListener('touchend', dragEnd)
}

const sliderArrow = (side, parentSelector) => {
    const container = document.querySelector(`${parentSelector} > .slider-container`)
    const slider = container.querySelector('.slider')

    let newLeft
    if (side == 'right') {
        newLeft = `${(parseInt(slider.style.left) || 0) - window.innerWidth}px`

        slider.style.left = newLeft

        setTimeout(() => {
            let last = slider.querySelector('.slide:last-child').getBoundingClientRect()
            let wrapper = container.getBoundingClientRect()

            if (last.right <= wrapper.right) {
                let goBackPixels = wrapper.right + (last.right * (-1))

                slider.style.left = `${parseInt(slider.style.left) + goBackPixels}px`
            }
        }, 200) // 200ms = tempo de css transition do slider
    } else {
        newLeft = (parseInt(slider.style.left) || 0) + window.innerWidth

        slider.style.left = `${newLeft}px`

        setTimeout(() => {
            if (newLeft > 0) slider.style.left = '0px'
        }, 200)
    }

    setSliderEffects(true, parentSelector)
}

const setSliderEffects = (activate, parentSelector) => {
    const slider = document.querySelector(`${parentSelector} > .slider-container > .slider`)

    if (activate) {
        slider.classList.add('slider-transition')
        slider.style.pointerEvents = 'auto'
    } else {
        slider.classList.remove('slider-transition')
        slider.style.pointerEvents = 'none'
    }
}