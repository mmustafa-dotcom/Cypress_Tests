class SearchInput{

    markaContains(markaname){
        cy.get('[data-id="q_make"]').find('.tz-dropdown__option-label').contains(markaname).click({force:true})
    }

    randomMarka(){
        cy.get('[data-id="q_make"]').find('.tz-dropdown__option-label').as('dropdownOptions');
        
        cy.get('@dropdownOptions').then(val=>{
            let randomNumber= Math.floor(Math.random() * parseInt(val.length)+1)
            cy.get('@dropdownOptions').eq(randomNumber).click({force:true})
        })
    }

    modelContains(modelname){
        cy.get('[data-id="q_model"]').find('.tz-dropdown__option-label').contains(modelname).click({force:true})
    }
    cityContains(cityname){
        cy.get('[data-id="q_region"]').find('.tz-dropdown__option-label').contains(cityname).click({force:true})
    }

    typeContains(typename){
        cy.get('[data-id="q_category"]').find('.tz-dropdown__option-label').contains(typename).click({force:true})   //Offroader / SUV, 5 qapı
 
    }
    currencyContains(currencyname){
        cy.get('[data-id="q_currency"]').find('.tz-dropdown__option-label').contains(currencyname).click({force:true})  //USD
    }
    
    
    barter(){
        cy.get('#q_barter').next('.tz-form__check-label')
    }

    kredit(){
        cy.get('#q_loan').next('.tz-form__check-label')
    }

    priceFrom(price){
        cy.get('[for="q_price_from"]').click({force:true})
        cy.get('[name="q[price_from]"]').type(price);
    }


    priceTo(price){
        cy.get('[for="q_price_to"]').click({force:true})
        cy.get('[name="q[price_to]"]').type(price)
    }


    yearFrom(year){
        cy.get('[data-id="q_year_from"]').find('.tz-dropdown__option-label').contains(year).click({force:true})
 
    }
    
    yearTo(year){
        cy.get('[data-id="q_year_to"]').find('.tz-dropdown__option-label').contains(year).click({force:true})
    }

    used(){
        cy.get(".main-search__control").find("label").contains("Sürülmüş").click({force:true})
    }

    new(){
        cy.get(".main-search__control").find("label").contains("Yeni").click({force:true})
    }

    submit(){
        cy.contains('Elanları göstər').click()
    }

}
 
 export const searchInput= new SearchInput()