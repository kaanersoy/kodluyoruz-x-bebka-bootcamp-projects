export const getPhotos = () => {
    return (dispatch) => {
      dispatch({ type: "GET_PHOTO_REQUEST" });
      fetch("https://picsum.photos/v2/list?page=2&limit=10")
        .then((response) => response.json())
        .then((data) => dispatch({ type: "GET_PHOTO_SUCCESS", payload: data }))
        .catch((error) => dispatch({ type: "GET_PHOTO_ERROR", payload: error }));
    };
  };

export const addPhoto = (photo) => {
    return{
        type: "ADD_PHOTO",
        payload: photo
    };
};

export const getComments = () => {
    //same as we did for getPhotos
    return (dispatch) => {
        dispatch( { type: "GET_COMMENTS_REQUEST"});
        fetch("https://jsonplaceholder.typicode.com/posts/2/comments")
        .then((response) => response.json())
        .then((data) => dispatch( { type: "GET_COMMENTS_SUCCESS", payload: data}))
        .catch((error) => dispatch( { type: "GET_COMMENTS_ERROR", payload: error}))
    };

};

export const addComment = (post) => {
    return( dispatch ) => {
        fetch("https://jsonplaceholder.typicode.com/posts/2/comments", {
            method: "POST",
            headers: {
                "contect-type": "application/json"
            },
            body: JSON.stringify(post)
        })
        .then((response) => response.json())
        .then((data) => dispatch({ type: "ADD_NEW_COMMENT", payload: data}))
        .catch((error) => console.log(error));
    }
};

