import {searchInput} from "../support/pages/searchInput";

describe('Dropdown Test on Turbo.az', () => {
  it ('passes',()=>{
    cy.visit('https://www.turbo.az')
    searchInput.randomMarka()
    //searchInput.modelContains('335')
    searchInput.cityContains('Bakı')
    searchInput.used()
    searchInput.submit()
    cy.wait(5000)
    cy.get('.products-container > :nth-child(3) > .products > .products-i >.products-i__bottom .product-price').then(zz=>{
      let data = [];
      zz.each(val=>{
        data.push({"price": val})
      })
      cy.writeFile('cypress/data/data.json', JSON.stringify(data))
    })

    

   
  })

  });