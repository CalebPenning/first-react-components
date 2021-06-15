const Ribbert = () => {
    return <img src="https://lostcatventuracounty.com/feline/wp-content/uploads/IMG_1302-585x1024.jpg" />
}

const Buddy = () => {
    return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Nebelung_Cat_at_10.JPG/1024px-Nebelung_Cat_at_10.JPG" />
}

const App = () => {
    return (
        <div>
            <Ribbert />
            <Ribbert />
            <Buddy />
            <Buddy />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))