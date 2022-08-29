describe('Mediante este caso de prueba se verificara el orden de aparicion de la URL: tedxbariloche.com en el browser Chorme',function(){
    it('Se busca una URL determinada para observar su orden de aparicion de acuerdo al SEO', function() {
        cy.visit('https://www.google.com/');
        cy.get('.gLFyf.gsfi').type('tedxbariloche.com');
        cy.get('.FPdoLc > center > .gNO89b').click();
        
    })
})