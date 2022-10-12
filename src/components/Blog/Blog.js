import React from 'react';

const Blog = () => {
    return (
        
        <div className='grid justify-items-center mt-5'>
                <h1 className='text-4xl font-semibold'>B L O G</h1>
            <div className="card md:w-10/12 bg-neutral text-neutral-content my-5">
            <div className="card-body items-center">
                <h2 className="card-title">1. What is the purpose of react router?</h2>
                <p>Answer: React Router is a JavaScript library used to handle client and server-side routing in React applications. It allows the creation of single-page web or mobile apps that allows navigation without the page refreshing.React Router also gives us access to browser history features while maintaining the correct view of the application.React Router uses a component-based approach to routing. It provides different routing components as needed by the application.</p>
            </div>
            </div>


            <div className="card md:w-10/12 bg-neutral text-neutral-content my-5">
            <div className="card-body items-center">
                <h2 className="card-title">2. How does Context API work? </h2>
                <p>Answer: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            </div>


            <div className="card md:w-10/12 bg-neutral text-neutral-content my-5">
            <div className="card-body items-center">
                <h2 className="card-title">3. What is UseRef? How does it work? </h2>
                <p>Answer: useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current.

                useRef() hook creates references.Calling const reference = useRef(initialValue) with the initial value returns a special object named reference. The reference object has a property current: you can use this property to read the reference value reference.current, or update reference.current = newValue.</p>
            </div>
            </div>
        </div>

    );
};

export default Blog;