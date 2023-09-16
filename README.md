# Course Resigtration Webpage
<!-- 
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->


## Features

- Choose some courses
- Calculate their credit hour and remaing hour
- Calculate total price of these course
- cannot choose a course twice
- Maximum Credit hour can be 20.

# Management of the state in my assignment project

In my project, I use two react hooks. They are :
- useState 
- useEffect.

# useState
In my project, I have used five useState to control the state. Using this hook, I can add a state variable in Componenet. 1st useStae is used for getting all the 9 card values where the initial state is an empty array. Here, for updating the 1st state variable, I need to call the 2nd variable, where I pass the current value as a parameter in the 2nd state function. I used this same process for all the state hooks. The second useState is used for selected courses, and the next useState is used for remaining credit hours, where the default value is 20. Next, states are used for total credit hour and total price, where the initial value is zero.

# useEffect
useEffect performs asynchonas tasks that handle the side effects of the system.In useEffect, I pass two values: a callback function and a dependency array.Actually, I used this hook to fetch data and set it in the state.