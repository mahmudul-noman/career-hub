import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons'

const Blog = () => {

    return (
        <>
            <h1 className='bg-gray font-extrabold text-4xl text-sky-600 py-20'>Blog <FontAwesomeIcon icon={faBookOpenReader} /></h1>
            <div className='cmn-width blog-container grid grid-cols-2 gap-4 my-20'>
                <div className="blog-one blog-single">
                    <h4 className="ques">When should you use context API?</h4>
                    <p className="ans">The React Context API should be used when you have data or state that needs to be shared between components that are not directly connected in the component tree, or when you want to avoid prop drilling. It's particularly useful for managing global state, theming, localization, and other scenarios where you need to pass data down to multiple components. However, it's important to use the Context API judiciously, as overusing it can lead to a complex and hard-to-maintain codebase. Therefore, it's crucial to balance the benefits of using the Context API with the need for simplicity and clarity in your code.</p>
                </div>
                <div className="blog-two blog-single">
                    <h4 className='ques'>What is a custom hook?</h4>
                    <p className="ans">A custom hook in React is a reusable JavaScript function that encapsulates stateful logic using one or more built-in hooks or other custom hooks. Custom hooks are prefixed with the word "use" and can be used to avoid code duplication, make code more modular, and share complex logic between components.</p>
                </div>
                <div className="blog-three blog-single">
                    <h4 className="ques">What is useRef?</h4>
                    <p className="ans">useRef is a built-in hook in React that returns a mutable ref object that can be used to store a value that persists across component renders. It allows you to reference a DOM element or any other value that may change over time and still maintain a stable reference to it. useRef is commonly used to access DOM elements or to store values that should not trigger a re-render of the component when they change.</p>
                </div>
                <div className="blog-four blog-single">
                    <h4 className="ques">What is useMemo? </h4>
                    <p className="ans">useMemo is a built-in hook in React that memoizes the result of a function call and returns the cached result when the inputs to the function have not changed. It is used to optimize expensive calculations or operations that are dependent on certain values or props in the component. useMemo takes two arguments: a function to be executed and an array of dependencies, and returns a memoized value that is only re-computed when the dependencies change. By using useMemo, you can avoid unnecessary re-renders and improve the performance of your React application.</p>
                </div>
            </div>
        </>
    );
};

export default Blog; 