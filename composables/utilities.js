export const showInModal = (url) => {

    const modal = document.getElementById('masterModal')
    let children = modal.children

    for (const child of children) {
        if (!child.classList.contains('modalNode')) {
            modal.removeChild(child)
        }
    }

    const _img = document.createElement('img')
    _img.setAttribute('src', url)

    _img.style.maxWidth = "95vw"
    _img.style.maxHeight = "95vh"
    // _img.style.objectFit = "contain"
    _img.style.margin = "auto"



    modal.appendChild(_img)
    modal.showModal()
}