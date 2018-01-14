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

const boundaddComment = (text, userId, postId) => dispatch(addComment(text, userId, postId));
// addComment('Hey, that is an awesome picture!', User123, PostXYZ);



function editComment(text, commentId) {

    return {
        type: 'EDIT_COMMENT',
        text,
        commentId,
    }
} 

const boundeditComment = (text, commentId) => dispatch(editComment(text, commentId));


function deleteComment(commentId) {
    
    return {
        type: 'DELETE_COMMENT',
        commentId
    }
} 

const bounddeleteComment = (commentId) => dispatch(deleteComment(commentId));


function thumbsUp(commentId, userId){

    return{

        type: 'THUMBS_UP_COMMENT',
        commentId,
        userId,
    }
}

const boundthumbsUp = (commentId, userId) => dispatch(thumbsUp(commentId, userId))




function thumbsDown(commentId, userId){

    return{

        type: 'THUMBS_DOWN_COMMENT',
        commentId,
        userId,
    }
}

const boundthumbsDown = (commentId, userId) => dispatch(thumbsDown(commentId, userId))