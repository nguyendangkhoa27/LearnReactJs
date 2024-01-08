const courses = [
    {
        name : "Html-CSS"
    },
    {
        name : "Javascript"
    },
    {
        name : "ReactJS"
    }
]
const reactDiv =(
    <div className="jsx">   
        <ul className="jsx">
            {courses.map((x,index)=>{
                return <li key={index}>{x.name}</li>
            })}
        </ul>
    </div>
)


var root = document.getElementById("root");
ReactDOM.render(reactDiv,root);


// dùng component React.Fragment để bao bọc nhiều ReactElement.



const classDiv = (
    <React.Fragment>
        <h1>Javascript</h1>
        <h2>ReactJs</h2>     
    </React.Fragment>
)

ReactDOM.render(classDiv,root);