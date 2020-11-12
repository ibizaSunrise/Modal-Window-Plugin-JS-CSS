let fruits = [
    { id: 1, title: 'Pineapple', price: 4, img: 'img/pineapple.jpg' },
    { id: 2, title: 'Apple', price: 1, img: 'img/apple.jpg' },
    { id: 3, title: 'Melon', price: 5, img: 'img/melon.jpg' }
]

const toHTML = fruit => `
            <div class="col">
                <div class="card">
                    <img src='${fruit.img}'
                    alt='${fruit.title}' class="card-img-top">
                    <div class="card-body">
                      <h5 class="card-title">${fruit.title}</h5>
                      <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Price</a>
                      <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Delete</a>
                    </div>
                  </div>
            </div>
`

function render() {
    const html = fruits.map(toHTML).join('')
    document.querySelector('#fruits').innerHTML = html;
}
render();

const priceModal = $.modal({
    title: 'Price',
    closable: true,
    width: '400px',
    footerButtons: [
        {
            text: 'Close',
            type: 'primary',
            handler() {
                priceModal.close()
            }
        }
    ]
})

document.addEventListener('click', e => {
    e.preventDefault()
    const btnType = e.target.dataset.btn;
    const id = +e.target.dataset.id;
    const fruit = fruits.find(f => f.id === id);

    if (btnType === 'price') {
        priceModal.setContent(`
        <p>Price for ${fruit.title}: <strong>${fruit.price}$</strong></p>  
    `)
        priceModal.open()
    } else if (btnType === 'remove') {
        $.confirm({
            title: 'Are You sure?',
            content: `<p>You delet the <strong>${fruit.title}</strong></p>`,
        }).then(() => {
            fruits = fruits.filter(f => f.id !== id);
            render();
        }).catch(() => {
            console.log('cansel')
        })
    }
})