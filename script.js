let todoBox = document.querySelector( '.todo-box' );
let btn = document.querySelectorAll( '.btn' );

let btnArr = Array.from( btn );
 


btnArr.map( ( item ) => {
    item.addEventListener( 'click', () => {
    if(todoBox.value == ''){
        alert( 'Please enter a task' );
    } else {
        let listValue = todoBox.value; 
        let todoList = document.querySelector( '.todo-list' );
        let li = document.createElement( 'li' ); 
        let appended = todoList.appendChild( li ); 
        appended.innerHTML = listValue;
        let span = document.createElement( 'span' ); 
        span.innerHTML = 'X'
        li.appendChild( span ); 
        li.addEventListener( 'click', () => {
            li.classList.toggle( 'checked' );
        } );
        span.addEventListener( 'click', () => {
            alert('Are you sure?')
            li.remove();
            
        } )


        

        }
        todoBox.value = '';
        
    
} ); 
})

let todoBtn = document.querySelector( '.todo-btn' );
let todoBtn2 = document.querySelector( '.todo-btn-2' );


todoBox.addEventListener( 'keyup', ( e ) => {
    if ( e.keyCode === 13 ) {
        todoBtn.click();
    }
})

todoBtn2.addEventListener( 'click', (e) => {
    if ( e.keyCode === 13 ) {
        todoBtn2.click();
    }
})
