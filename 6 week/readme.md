        import './App.css'

        function App() {

        return (
            <>
            <Header title="Hello"/>
            </>
        )
        }

        function Header({title}) {
        return <div>
            <h1>{title}</h1>
        </div>
        }

        export default App

useEffect renders only one time when component mounts