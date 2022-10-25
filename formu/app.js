const $form = document.querySelector('#formulario')

$form.addEventListener('submit',handleSubmit )

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'accept': 'application/json'
        }
    })
    if(response.ok)
    {
        this.reset()
        alert('gracias por contactarnos')
    }
}