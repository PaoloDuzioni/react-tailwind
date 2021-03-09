import Button from './components/Button';

function App() {
    // Event handler for button component
    const handleClick = event => {
        console.log(event);
        alert('Do Something Here...');
    };

    return (
        <div className="container">
            <h1 className="mt-4 mb-8 text-4xl text-indigo-500">
                React with Tailwind
            </h1>

            {/* As Button with click event and spacing */}
            <Button primary click={handleClick} margin="mr-2">
                My Button
            </Button>

            {/* As Link with specific attributes */}
            <Button link href="https://www.facebook.com/" target="_blank">
                My Link
            </Button>
        </div>
    );
}

export default App;
