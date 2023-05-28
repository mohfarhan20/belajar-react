import '../css/style.css';

function Mybutton (props){
return (
    <button className='my-button' onClick={()=>props.isClickButton()}> Click This </button>
)
}
export default Mybutton;