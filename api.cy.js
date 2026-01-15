import { faker } from '@faker-js/faker';

describe('test', () => {
    let token = 'B4ccuObm3TwlA7knXb5IvzLuDRvzw9KTvGJMvbX0'
    it('api', () => {

        cy.api({
            method: "GET",
            url: "https://dev-admin.starexglobal.com/" 
        }).then(response=>{
            expect(response.status).to.eq(200)
        })

        cy.api({
            method: "POST",
            url: "https://dev-api.starexglobal.com/api/v1/temu/store-delivery",
            headers: {
                token: token
            },
            body:
                {
                    "tracking_code": "bg-test-tool-4292167551710200210",
                    "delivery_type": 1,
                    "weight": 2.5,
                    "region_id": "Şəki Şəhər Ərazi Vahidi",
                    "pudo_point_id":1090,
                    "country": "AZ",
                    "quantity": 1,
                    "hs_categories": "6206300090",
                    "price": {
                        "package": {
                            "amount": 11.9,
                            "currency": "gel"
                        },
                        "shipping": {
                            "amount": 0.0,
                            "currency": "gel"
                        }
                    },
                    "products": [
                        {
                            "name": "blouse",
                            "hs_category": "6206300090",
                            "price": 11.9,
                            "shipping_price": 0.0,
                            "quantity": 1
                        }
                    ],
                    "additional": {
                        "receiver_first_name": "თამილა",
                        "receiver_last_name": "ფირაზოვა",
                        "receiver_id_type": "id",
                        "receiver_id_pin_code": "01010010455",
                        "receiver_address": "52 BARNOV STR. ჭვწზტპაცჟშბ მლჩქნოყხკ ფგეუძჯი რსღდთ ჟლწგსირდ ემქჩნღხავცბო ყჭშპუფკტჯთზძ ხსაღჯშჩკ ჟპბგნძმტუყრფ ეცლდჭწთქვ ოზი თატღოვხშლწ გცმჩსფრპზ ძნჟყბდ უიჯჭეკ ქ დხლბყჯვგქ აპფცთერუნ მზტიჟსშჩძკ წღოჭ ყვკწფნხსბჟძლ ცჭაღჩქმიე პტგჯზდთ როშუ ზნსლოაჭთღ იშცყქგრჩჟვტწ ჯ",
                        "receiver_address_2": "ლწნოშზძიცჯჟ ფთპჭემდ ღტქსგრვაუხჩ ბკყ ფუჟტნლზწჭთი რჩყგმქბ ცჯღსშოხ დავპძეკ რჟზეჭვმწოპცფ შყგბჩღქ ისთნდლუახჯ ტძკ დარვყგმშ ზჭქკბელნჯუჟ იღთფხტცპწსო ძჩ შცმეუფივლ თხღჯგდოჭტ პაწკძქნბ ჟზრჩსყ ყზვნქსორ ხკჩაშღწ ეპმთლგტდც ჯუფიძჭბჟ ჟგოქიზსფმა უთპჩბნდვ ეჭხკრჯღყტძშ ლცწ ვყმ",
                        "receiver_zip": "0186",
                        "receiver_phone_number": "593613909",
                        "receiver_email": "c7elpevujt1203d@us.shipping.temuemail.com"
                    
                }
            }
        }).then(response=>{
            expect(response.status).to.eq(200)
        })
})
});
