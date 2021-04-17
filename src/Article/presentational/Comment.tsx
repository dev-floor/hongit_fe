import React from "react";

const CommentArea = (onRegisterComment, onPressFavorite) => (
    <div>
        <button type = "submit" onClick = {onRegisterComment}>Register</button>
        <button type = "submit" onClick = {onPressFavorite}>Register</button>
    </div>
)

export default CommentArea;