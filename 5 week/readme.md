## way to make a button counter

        import './App.css';
        import { useState } from 'react';

        function App() {
        const [count, setCount] = useState(0);

        function CustomButton(props) {
            function onClickHandler() {
            props.setCount(props.count+1);
            }
            return <button onClick={onClickHandler}>Counter {props.count}</button>
        }

        return (
            <>
            <div>
                <CustomButton count={count} setCount={setCount}></CustomButton>
            </div>
            </>
        )
        }

        export default App