import React from "react";
import cutecharts from '../assets/images/blog/cutecharts.webp';
import counter_loop from '../assets/images/blog/counter.png';
import pregex from '../assets/images/blog/pregex.webp';
import snoop from '../assets/images/blog/snoop.png';
import repr from '../assets/images/blog/repr_v_str.png';
import isinstance from '../assets/images/blog/isinstance.png';
import '../assets/styles/Blog.scss';

function Blog() {
    return(
    <div className="blogs-container" id="blogs">
        <h1>Blog Posts</h1>
        <div className="blogs-grid">
            <div className="blog">
                <a href="https://medium.com/python-in-plain-english/creating-interactive-data-visualizations-with-cutecharts-97b0c9e041f6" target="_blank" rel="noreferrer"><img src={cutecharts} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://medium.com/python-in-plain-english/creating-interactive-data-visualizations-with-cutecharts-97b0c9e041f6" target="_blank" rel="noreferrer"><h2>Creating Interactive Data Visualizations with CuteCharts</h2></a>
                <p>Data visualization is an essential tool for communicating insights effectively. While traditional libraries like Matplotlib or Seaborn are excellent for technical visualizations, sometimes you need a simpler, more interactive, and yet visually appealing approach. That’s where CuteCharts comes in.</p>
            </div>
            <div className="blog">
                <a href="https://medium.com/python-in-plain-english/simplifying-regular-expressions-with-pregex-feb3a1d8d368" target="_blank" rel="noreferrer"><img src={pregex} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://medium.com/python-in-plain-english/simplifying-regular-expressions-with-pregex-feb3a1d8d368" target="_blank" rel="noreferrer"><h2>Simplifying Regular Expressions with PRegEx</h2></a>
                <p>Writing regular expressions can often feel like solving a complex puzzle — frustrating, error-prone, and difficult to read. PRegEx addresses this challenge by providing a more intuitive and programmatic approach to creating regular expressions. With its readable syntax and modular components, it simplifies the process of building, debugging, and maintaining even the most complex patterns.</p>
            </div>
            <div className="blog">
                <a href="https://medium.com/python-in-plain-english/simplify-your-code-with-counter-a-better-way-to-count-items-in-python-70291ac276db" target="_blank" rel="noreferrer"><img src={counter_loop} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://medium.com/python-in-plain-english/simplify-your-code-with-counter-a-better-way-to-count-items-in-python-70291ac276db" target="_blank" rel="noreferrer"><h2>Simplify Your Code with Counter A Better Way to Count Items in Python</h2></a>
                <p>When you need to count the occurrences of items in a list or any iterable, the natural approach for many is to use a for loop. While this works, it can lead to verbose and repetitive code. Python's collections.Counter provides a more concise, readable, and efficient solution.</p>
            </div>
            <div className="blog">
                <a href="https://medium.com/python-in-plain-english/debugging-made-easy-with-snoop-3f0b9e4e106b" target="_blank" rel="noreferrer"><img src={snoop} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://medium.com/python-in-plain-english/debugging-made-easy-with-snoop-3f0b9e4e106b" target="_blank" rel="noreferrer"><h2>Debugging Made Easy with snoop</h2></a>
                <p>Debugging is an essential part of programming, and while the classic print statement often gets the job done, it's not always the most efficient or elegant solution. Snoopis a powerful Python library that provides detailed insights into your code's execution with minimal effort. snoop offers an easy, readable way to trace function calls, variable values, and more, making it an excellent tool for debugging.</p>
            </div>            
            <div className="blog">
                <a href="https://medium.com/python-in-plain-english/why-you-should-use-isinstance-over-type-in-python-8096d15e7a43" target="_blank" rel="noreferrer"><img src={isinstance} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://medium.com/python-in-plain-english/why-you-should-use-isinstance-over-type-in-python-8096d15e7a43" target="_blank" rel="noreferrer"><h2>Why You Should Use isinstance Over type in Python</h2></a>
                <p>When checking the type of a variable or object in Python, you might naturally reach for the type() function. While this works for simple use cases, it's not always the best approach, especially when dealing with inheritance or needing a more flexible and readable check. The isinstance() function is a better, more Pythonic alternative for type-checking.</p>
            </div>
            <div className="blog">
                <a href="https://medium.com/@dimejishekoni/understanding-repr-and-str-in-python-b65859562ed6" target="_blank" rel="noreferrer"><img src={repr} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://medium.com/@dimejishekoni/understanding-repr-and-str-in-python-b65859562ed6" target="_blank" rel="noreferrer"><h2>Understanding Representation(__repr__) and String(__str__) in Python</h2></a>
                <p>When you create classes in Python, it’s important to specify how the objects of those classes will be represented. This is where the methods __repr__ and __str__ become useful, as they enable us to manage how objects appear in various situations.</p>
            </div>            
        </div>
    </div>
    );
}

export default Blog;