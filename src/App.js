import Button from './components/Button';

function App() {
    // Event handler for button component
    const handleClick = event => {
        console.log(event);
        alert('Do Something Here...');
    };

    return (
        <div className="grid place-items-center h-screen">
            <div className="text-center">
                <h1 className="mt-4 mb-8 text-4xl text-gray-400">
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
        </div>
    );
}

export default App;
