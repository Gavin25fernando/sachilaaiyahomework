import {CategoryModel} from "../interfaces/CategoryModel"
interface Props {
    data: CategoryModel[],
    handleDelete:(id:string) => void
    handleAdd:(id:string)=> void,
}

function CategoryView ({data,handleDelete,handleAdd}:Props) {
    console.log(data)

    return <>
        {
            data.map (row =><div>
                    
                    <span>{row.value}</span> 
                    <input></input> <> </>
                    <button onClick={() => {handleAdd(row.id)}}>Add Items</button>
                    <button onClick={() => handleDelete(row.id)}>Delete Items</button>
                   <div style={{paddingLeft:20}}><CategoryView data={row.children} handleDelete={handleDelete} handleAdd={handleAdd}/></div>

                </div>
            )
        }
    
    </>
}

export default CategoryView