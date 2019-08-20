# React Tutorial
## Part 1
Sat 17 Aug 2019 [https://youtu.be/FmpJ1D6Z9Ys]
- Introduction
- Installation
  - `npm install -g create-react-app`
  - `npx create-react-app my-first-react`
- React Component -- class
- React States Object

Note: copy public/index.html & src/index.js files in respective directories

- start app 
`npm start`

## Part 2
Sun 18 Aug 2019 [https://youtu.be/HR-tYYG5RkE]
- Props
- State
- Separation of Component 

## Part 3 
Tue 20 Aug 2019 [https://youtu.be/gP5PHdeLsyE]
- Component Lifecycle Methods
  - Mounting phase
    - constructor(props)
    - getDerivedStateFromProps(nextProps, prevState) 
    - render()
    - componentDidMount()
  - Updating Phase
    - getDerivedStateFromProps(nextProps, prevState)
    - shouldComponentUpdate()
    - getSnapshotBeforeUpdate(prevProps, prevState)
    - componentDidUpdate()
  - Unmounting
    - componentWillUnmount()
  
  Run `npm install` from the app(component-lifecycle) directory