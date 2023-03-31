import React, { useState } from "react";

 const Home = ({ onSubmit }) => {
   
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('content', content);
      formData.append('image', image);
      onSubmit(formData);
    };

    return(
        <div>
            <form>
                <div>
                    <label htmlFor="content">Post Content</label>
                    <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div>
                    
                </div>
            </form>
        </div>
    )
}

export default Home