const Animal = (props) => {
    return (
        <div>
            <img src={ props.emoji }></img>
            <h3>Name: { props.name }</h3>
            <h3>Species: { props.species }</h3>
        </div>
    )
}