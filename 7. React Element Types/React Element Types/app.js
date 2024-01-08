// function Component
function Header(){
    return  (<div>
                <h1>Header</h1>
            </div>);
}
function Footer(){
    return (
        <div>
            <h1>Footer</h1>
        </div>
    )
}

//class Component
class Content extends React.Component{
    render(){
        return <div>
            <h1>Content</h1>
        </div>
    }
}


const reactDiv =(
    <div className="jsx">   
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
    </div>
)


var root = document.getElementById("root");
ReactDOM.render(reactDiv,root);

function PostItem(){
    return (
        <div className="post-item">
            <img src="https://files.fullstack.edu.vn/f8-prod/blog_posts/3524/62808ea3382fb.png"/>
            <h2 className="post-title">ReactJS with Typescript [Series]. Phần 1 Basic Typescript</h2>
            <p className="post-desc">Chào các bạn cộng đồng lập trình f8 mình cũng là một thành viên.Hôm nay mình muốn viết một series về ReactJS kết hợp với typescript...</p>
            <p className="post-published">2 năm trước.</p>
        </div>
    )
}
// bài tập:
const baitap =( <div className ="post-list">
    <PostItem></PostItem>
    <PostItem></PostItem>
    <PostItem></PostItem>
</div>)

const rootItem = document.getElementById("root-item");

ReactDOM.render(baitap,rootItem);