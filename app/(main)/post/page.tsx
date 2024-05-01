import React from 'react';
import PostPage from '@/components/create post/post';
import EventsBar from '@/components/profile/EventsBar';

const Page = () => {
  return (
    <div className='flex'>
        <div className="flex row-auto"></div>
      <PostPage/>
      <EventsBar/>
    </div>
  );
};

export default Page;
