import ConnectionBadge from './components/ConnectionBadge';
import Heading from './components/Heading';
import Button from './components/Button';

function App() {
    // Event handler for button component
    const handleClick = event => {
        // The event object is available on the handler as parameter
        console.log(event);
        alert('Click! Do something here!');
    };

    return (
        <div className="grid place-items-center h-screen bg-indigo-100">
            <ConnectionBadge />

            <div className="text-center">
                <Heading margin="mt-4 mb-12">
                    Components with React and Tailwid
                </Heading>

                {/* As small button */}
                <Button size="small">Smallest</Button>

                {/* As button with click event and spacing */}
                <Button type="primary" click={handleClick} margin="mx-2">
                    Primary
                </Button>

                {/* As link with specific attributes */}
                <Button
                    link
                    size="large"
                    href="https://www.facebook.com/"
                    target="_blank"
                >
                    My Link
                </Button>
            </div>
        </div>
    );
}

export default App;
