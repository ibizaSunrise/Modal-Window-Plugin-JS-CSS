const modal = $.modal({
    title: 'My Modal',
    closable: true,
    content: `
    <p>Lorem ipsum dolor sit.</p>
    `,
    width: '400px',
    footerButtons: [
        {
            text: 'Ok',
            type: 'primary',
            handler(){
                console.log('Primary btn clicked')
            }
        },
        {
            text: 'Cansel',
            type: 'danger',
            handler(){
                console.log('Danger btn clicked')
            }
        }
    ]
})