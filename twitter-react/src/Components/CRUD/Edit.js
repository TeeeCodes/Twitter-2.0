import React from 'react';
import PostForm from './PostForm';

const API_ENDPOINT = '/api/posts';

const CreatePost = () => {
  const handleSubmit = async (formData) => {
    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) {
        throw new Error('Error creating post.');
      }
      const data = await response.json();
      console.log('Created post:', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePost;
