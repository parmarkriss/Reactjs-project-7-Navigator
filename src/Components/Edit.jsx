import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


    
const Edit = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const  getRecord = () => {
        let all = JSON.parse(localStorage.getItem('crud'));
        if(all === null) {
            return [];
        }else{
            return all;
        }
    }
    const [record,setRecord] = useState(getRecord);
    const [input,setInput] = useState({
        title : '',
        des : ''
    })
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setInput({
            ...input,[name] : value
        })
    }
    const handleSubmit = () => {
        let title = input.title;
        let des = input.des;
        let ans = record.map((item)=>{
                if(item.id == parseInt(id)){
                    return {
                        ...item,
                        title : title,
                        des : des
                    }
                }
            return item
        })
        setRecord(ans);
        localStorage.setItem('crud',JSON.stringify(ans));
        alert("Record successfully update");
        navigate('/')
        setInput({
            title : '',
            des : ''
        })
    }
    useEffect(()=>{
        let ans = record.filter((item)=>{
            return item.id == id;
        })
        setInput(ans[0]);
    },[])

   
    return(
        <div className="container">
            <h2 className="mt-2">Edit Todo</h2>
                <div class="row g-3 align-items-center mt-2 border border-1 rounded-1">
                    <div class="col-auto mb-3">
                        <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" placeholder="Todo title" name="title" value={input.title} onChange={handleChange}/>
                    </div>
                    <div class="col-auto mb-3">
                        <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" placeholder="Description" name="des" value={input.des} onChange={handleChange}/>
                    </div>
                    <div className="col-auto mb-3">
                      <button type="button" class="btn btn-primary" onClick={ ()=> handleSubmit()}>Edit</button>
                    </div>
                </div>
        </div>
    )
}
export default Edit;