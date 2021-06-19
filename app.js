const App = () => (
        <div>
            <h2>TWO CUTE CATS, TWICE</h2>
            <Ribbert />
            <Ribbert />
            <Buddy />
            <Buddy />
            <RandomNum />
            <RandomNum />
            <RandomNum />
            <RandomNum />
            <RandomNum />
            <Animal emoji="https://e7.pngegg.com/pngimages/75/490/png-clipart-wild-boar-emojipedia-emoticon-text-messaging-pig-mammal-animals.png" name="Boss Hog" species="Boar"/>
            <ToDoList todos={["Walk cats", "Feed cats", "Nap with cats"]}/>
        </div>
    )

ReactDOM.render(<App />, document.getElementById("root"))