import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments, addComment } from "../../store/actions/actions";
import { BrowserRouter as Router, Link } from "react-router-dom";


const PhotoPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getComments());
    }, []);

    const comments = useSelector((state) => state.commentsReducer.data);
    const photoUrl = useSelector((state) => state.commentsReducer.newPhoto);
    const [newComment, setNewComment] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addComment(newComment));
      };
    return (
        <div className="center">
            <div className="navbar">
                <button>
                    <img
                        className="camera"
                        src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/camera-512.png"
                        alt="camera"
                        width="15%"
                    />
                </button>
                <img
                    className="insta"
                    src="https://thepracticaldev.s3.amazonaws.com/i/9dgus6e6o80pv1gx8y7t.png"
                    alt="logo"
                    width="25%"
                />
                <button>
                    <img
                        className="send"
                        src="https://pngimage.net/wp-content/uploads/2018/06/send-button-icon-png-6.png"
                        alt="dm"
                    />{" "}
                </button>
            </div>

            <div className="profile">
                <Link to="/">Back</Link>
                <img src={photoUrl} alt="images" width="100%" />
                {comments.length > 0 &&
                    comments.map((comment, index) => (
                        <>
                            <p className="photo-info" key={index}>
                            <span key={index} >{comment.name}</span> - {comment.body}
                            </p>
                        </>
                    ))}
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={(event) =>
                            setNewComment({ name: "Name", body: event.target.value })
                        }
                        value={newComment.body}
                    />
                    <button type="submit">Add New Comment</button>
                </form>
            </div>

            <div className="navbar2">
                <img className="bar" />
            </div>
        </div>
    );
};

export default PhotoPage;