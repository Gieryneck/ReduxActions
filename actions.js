/* 
Stwórz plik actions.js, w którym zdefiniujesz typy akcji oraz kreatory akcji dla następujących zdarzeń:

tworzenie komentarza,
edycja komentarza,
usuwanie komentarza,
ocenianie +1 / -1 (kciuk w górę/kciuk w dół) komentarza
 */

function addComment(text, userId, postId) {

    return {
        type: 'ADD_COMMENT',
        text,
        userId,
        postId,
        commentId: uuid.v4()    
    }
}  

const addComment = (text, userId, postId) => dispatch(addComment(text, userId, postId));
// addComment('Hey, that is an awesome picture!', User123, PostXYZ);



function editComment(text, commentId) {

    return {
        type: 'EDIT_COMMENT',
        text,
        commentId,
    }
} 

const editComment = (text, commentId) => dispatch(addComment(text, commentId));


function deleteComment(commentId) {
    
    return {
        type: 'DELETE_COMMENT',
        commentId
    }
} 

const deleteComment = (commentId) => dispatch(deleteComment(commentId));


function thumbsUp(commentId, userId){

    return{

        type: 'THUMBS_UP_COMMENT',
        commentId,
        userId,
    }
}

const thumbsUp = (commentId, userId) => dispatch(thumbsUp(commentId, userId))




function thumbsDown(commentId, userId){

    return{

        type: 'THUMBS_DOWN_COMMENT',
        commentId,
        userId,
    }
}

const thumbsDown = (commentId, userId) => dispatch(thumbsDown(commentId, userId))