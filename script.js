let todoBox = document.querySelector( '.todo-box' );
let todoBtn = document.querySelector( '.todo-btn' );
 




todoBtn.addEventListener( 'click', () => {
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


        

    } todoBox.value = '';
    
} ); 



todoBox.addEventListener( 'keyup', ( e ) => {
    if ( e.keyCode === 13 ) {
        todoBtn.click();
    }
})
