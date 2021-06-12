

/*

let menu=[
    'Fideos caseritos',
    'Fideos espinaca',
    'Fideos tirabuzon',
    'Ravioles carne',
    'Raviolones verdes espinaca y ricota'  
]

function ourMenu(array) {
    
    for( i=0 ; i<=array.length ; i++ ){ 
    
        swich(array[i]){       //array[i]==>es el valor de cada elemento   //Swich evalua un valor //El array vale el array
        case 'Fideos caseritos':


            break;
           
    }
}
}
*/
            
let menu=[
    'Fideos caseritos',
    'Fideos espinaca',
    'Fideos tirabuzon',
    'Ravioles carne',
    'Raviolones verdes espinaca y ricota' , 
    'Canelonis de calabaza asada y queso de cabra',
    'Cuatro quesos',
    'Boloñesa de la abuela',
    'Fileto de tomates naturales',
    'Cheesecake frutos rojos',
    'Muffin chocolate al 70%',
    'Panckakes tower'
]

function ourMenu(array){
    
    for( i=0 ; i<=array.length  ; i++ ){

        switch (array[i]) {
            //Fideos caseros
            case 'Fideos caseritos':
                alert("Fideos caseros:")
                alert("Precio: "  + array[i]  + "$120" );
                break;

            case 'Fideos espinaca':
                alert("Precio: " + " " + array[i] +":" + "$150" );
                break;

            case 'Fideos tirabuzon':
                alert("Precio:" + " " + array[i] +":" + "$180" );
                break;

            //Pastas rellenas
            case 'Ravioles carne':
                alert("Pastas rellenas:")
                alert("Precio:" + " " + array[i] +":" + "$200" );
                break;

            case 'Raviolones verdes espinaca y ricota':
                alert("Precio:" + " " + array[i] +":" + "$190" );
                break;

            case 'Canelonis de calabaza asada y queso de cabra':
                alert("Precio:" + " " + array[i] +":" + "$250" );
                break;

            //Salsas
            case 'Cuatro quesos':
                alert("Salsas:")
                alert("Precio:" + " " + array[i] +":" + "$120" );
                break;
    
            case 'Boloñesa de la abuela':
                alert("Precio:" + " " + array[i] +":" + "$150" );
                break;
    
            case 'Fileto de tomates naturales':
                alert("Precio:" + " " + array[i] +":" + "$100" );
                break;

            //Postres
            case 'Cheesecake frutos rojos':
                alert("Nuestros postres:")
                alert("Precio:" + " " + array[i] +":" + "$250" );
                break;
        
            case 'Muffin chocolate al 70%':
                alert("Precio:" + " " + array[i] +":" + "$220" );
                break;
        
            case 'Panckakes tower':
                alert("Precio:" + " " + array[i] +":" + "$280" );
                break;
                

                
        }
    }
}



alert(ourMenu(menu))



