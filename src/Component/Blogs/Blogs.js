import React from 'react';
import Header from '../Header/Header';

const Blogs = () => {
    return (
        <div>
            <Header></Header>

            <h1 className='text-center text-5xl text-green-600 font-bold'> what is semantic tag?</h1>
            <p className='text-2xl'>Answer: semantic tag explains the meaning to both browser and developers.By using semantic tag a browser can understand how the website should be look like.Its easy to handle for a browser and developers also.It helps developers to maintain the code easily.Developers can easily handle their website when it needs to update anything.
                The example of semantic tag: form , table, article ,nav
                if any developer makes a article by using nav , it hard to understand code for browser and other developers also .Thats why we need semantic tag for get best result</p>
        </div>
    );
};

export default Blogs;