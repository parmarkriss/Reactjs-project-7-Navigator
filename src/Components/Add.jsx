import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
    const navigate = useNavigate();
    const [input,setInput] = useState({
        title : '',
        des : ''
    })
    const [record,setRecord] = useState([]);
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setInput({
            ...input,[name] : value
        })
    }
    const handleSubmit = () =>{
        const {id,title,des} = input;
        let obj ={
            id : Math.floor(Math.random() * 10000),
            title : title,
            des : des 
        }
        let data = [...record,obj];
        setRecord(data);
        localStorage.setItem('crud',JSON.stringify(data));
        setInput({
            title : '',
            des : ''
        })
    }
    const deleteData = (id) =>{
        let all = record.filter((item)=>{
            return item.id !== id;
        })
        setRecord(all);
        localStorage.setItem('crud',JSON.stringify(all));
        alert("Record is Successfully delete");
        
    }
    useEffect(()=>{
        let ans = JSON.parse(localStorage.getItem('crud'));
        if(ans === null){
            setRecord([]);
        }else{
            setRecord(ans);
        }
    },[])

    return (
        <>
            <div className="container">
                <h2 className="mt-2">Todo Application</h2>
                <div class="row g-3 align-items-center mt-2 border border-1 rounded-1">
                    <div class="col-auto mb-3">
                        <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" placeholder="Todo title" name="title" value={input.title} onChange={handleChange}/>
                    </div>
                    <div class="col-auto mb-3">
                        <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" placeholder="Description" name="des" value={input.des} onChange={handleChange}/>
                    </div>
                    <div className="col-auto mb-3">
                      <button type="button" class="btn btn-primary" onClick={ ()=> handleSubmit()}>Create Todo</button>
                    </div>
                </div>
                <br />
                <br />

                <table class="table table-striped border border-1">
                      <thead>
                         <tr>
                            <td>Name</td>
                            <td>Description</td>
                            <td>Action</td>
                         </tr>
                      </thead>
                      <tbody>
                        {
                            record.map((item)=>{
                                const {id,title,des} = item;
                                return(
                                    <tr key={id}>
                                        <td>{title}</td>
                                        <td>{des}</td>
                                        <td>
                                        <button type="button" class="btn  btn-primary" ><Link to={`/editdata/${id}`} style={{color:"white"}}>Edit</Link></button>
                                        <button type="button" class="btn btn-danger ms-2" onClick={ ()=> deleteData(id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                      </tbody>
                </table>
            </div>

        </>
    )
}
export default Add;