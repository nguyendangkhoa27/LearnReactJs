// Component trong Object
// const Form = {
//     Input(){
//         return <input />
//     },
//     CheckBox(){
//         return <input type="checkbox" />
//     }
// }
// function App({prop}){
//     console.log(prop)
//     const ComponentTEST = Form[prop]
//     console.log(ComponentTEST);
//     return <ComponentTEST />
        
// }
// var root = document.getElementById("root");
// ReactDOM.render(<App prop="CheckBox" title="3" />,root);

const Button = ({text,title,href,onClick})=>{
    let style = {
        display:"flex",
        width: "100px",
        height: "70px",
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        color:"black"
    }
    let Component = "button";
    let prop = {};
    prop.style = style;
    if(href){
        Component = "a"
        prop.href = href;
        prop.style = {
            ...prop.style,
            border: "2px solid black",
            textAlign:"center",
            textDecoration: "none",
        } 
        console.log(style)
    }
    if(onClick){
        prop.onClick = ()=> onClick(text);
    }
    return (<Component {...prop}>
                {text}
            </Component>
        )
}
function App(){
        function handleClick(a){
            alert(a)
        }
        return <div>
            <Button text={"click me!"}   onClick={handleClick} />
        </div>
}
var root = document.getElementById("root");
ReactDOM.render(<App prop="CheckBox" title="3" />,root);