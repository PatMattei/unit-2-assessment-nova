const React = require('react');

class Index extends React.Component {
    render() {
        const toDos = this.props.toDos;
        
        return (
            <html>
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                </head>
                <body>
                    <h1>To Do List</h1>
                    {/*can't get the ul tags to work within the below ternary for some reason*/}
                    <ul>
                    {
                        toDos.length < 1 ? <h3>There are no To Dos yet!</h3> : toDos.map((singleTodo) => {
                            return(
                                <li>{singleTodo.todo} - {
                                    singleTodo.done === false ? "Not Done" : "Done"
                                }</li>
                            )})
                    }
                    </ul>
                    <hr/>
                    <form action="/" method="POST">
                        <input type="text" name="todo" required/>

                        <input type="submit" name="" value="ADD A TO DO" />
                    </form>
                </body>
            </html>
        )
    }
}

module.exports = Index;