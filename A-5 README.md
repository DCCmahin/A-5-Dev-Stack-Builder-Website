# project Name : 
A-5-Dev-Stack-Builder-Website

# A little description : 
Build your ideal development stack by exploring different technologies, comparing their features, and selecting 
the tools that best fit your projects. Create your personalized stack with
ease and discover the technologies that power modern web development.

# Technology that you use:
html,tailwindcss,react,Ts

# 3 features about your project:
   1. Build Your Stack
   Select your favorite development technologies and create your own personalized tech stack.
   2. Easy Technology Selection
   Explore different technologies with useful details, ratings, categories, and difficulty levels.
   3. Manage Your Stack
   Easily add or delete technologies, view your selected stack, and clear all selections with one click.



//Also answer these React questions at the end of your Readme (write the answers in your own words, short and simple):

# What is JSX, and why is it used in React?
=> we are write javascript inside html and return anything is called jsx . JSX helps us create reusable UI components.
    we are create one component and use different component
    
# What is the difference between props and state?
  =>Props are used to pass data from a parent component to a child component, 
    while state is used to manage a component’s own data that can change over time.
    
# What does the useState hook do, and where did you use it in this project?
 =>useState hook manages changing data in a React component, and I used it in my 
 project to store and update the selected technologies in the development stack.

 
# What does the useEffect hook do, and why did you need it to load the JSON data?
=>useEffect hook handles side effects in React, but in my project, I used useState to store a Promise and 
Suspense to load the JSON data, so useEffect was not needed.

# Why does every item in a .map() list need a unique key prop?
=>unique key helps React identify each item and efficiently update the list when items are added, removed, or changed.

# What is conditional rendering? Show one place you used it (example: the empty stack message).
=>Conditional rendering means displaying UI based on a condition; I used it to show an empty stack message when no technologies are selected


# How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
=>parent passes data through props, and a child communicates back by calling a callback function passed from the parent as a prop.
⚙️
