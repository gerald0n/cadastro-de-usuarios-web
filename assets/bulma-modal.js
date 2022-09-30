document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active')
    }

    function closeModal($el) {
        $el.classList.remove('is-active')
    }

    function closeAllModals() {
        ;(document.querySelectorAll('.modal') || []).forEach($modal => {
            closeModal($modal)
        })
    }

    // Add a click event on buttons to open a specific modal
    ;(document.querySelectorAll('.js-modal-trigger') || []).forEach(
        $trigger => {
            const modal = $trigger.dataset.target
            const $target = document.getElementById(modal)

            $trigger.addEventListener('click', () => {
                openModal($target)
            })
        }
    )

    // Add a click event on various child elements to close the parent modal
    ;(
        document.querySelectorAll(
            '.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button'
        ) || []
    ).forEach($close => {
        const $target = $close.closest('.modal')

        $close.addEventListener('click', () => {
            closeModal($target)
        })
    })

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', event => {
        const e = event || window.event

        if (e.keyCode === 27) {
            // Escape key
            closeAllModals()
        }
    })
    document
        .querySelector('.addUserBtn')
        .addEventListener('click', closeAllModals)

    document.getElementById('avatar').addEventListener('input', () => {
        let img = document.getElementById('img-avatar')

        img.src = document.getElementById('avatar').value

        if (document.getElementById('avatar').value !== '')
            document.getElementById('loading').classList.add('is-loading')
        else document.getElementById('loading').classList.remove('is-loading')

        if (document.getElementById('avatar').value !== '') {
            document.getElementById(
                'alert'
            ).innerHTML = `<i class="fa-solid fa-circle-info"></i>
        <span style="font-size: 13px"
            >Se for informado um link quebrado ou
            inexistente, será atribuído um avatar
            padrão.
        </span>`
        } else {
            document.getElementById('alert').innerHTML = ''
        }
    })
})
