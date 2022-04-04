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

            <h1 className='text-center text-5xl mt-16 text-green-600 font-bold'> What is difference between inline , block  and inline-block?</h1>

            <div className='grid grid-cols-3 gap-3'>

                <div>
                    <h1 className='text-5xl'>Inline</h1>
                    <p className='text-2xl'> In inline elemnets , when we use any height, width , it doesnt effect on this element. This element display in same line . It takes as much  width as its content.thats why we can not use height and width.



                    </p>
                    <p className='mt-8'> ex: img, a, span, small</p>



                </div>

                <div>
                    <h1 className='text-5xl'>Inline-block</h1>
                    <p className='text-2xl'> Its displays as a block container. we can set height and width. Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.


                    </p>




                </div>

                <div>
                    <h1 className='text-5xl'>block</h1>
                    <p className='text-2xl'>Block starts with a new line. it takes full width.we can set its height and width.So that means block elements will occupy the entire width of its parent element.


                    </p>

                    <p className='mt-8'> example: div, article, p,h1,li,section</p>


                </div>


            </div>



        </div>
    );
};

export default Blogs;