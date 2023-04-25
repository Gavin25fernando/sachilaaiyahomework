import { useState } from "react"
import CategoryView from "../components/CategoryView"
import { CategoryData } from "../data/CategotyData"
import { CategoryModel} from "../interfaces/CategoryModel"

function SecondPage(){

    const [categoryData,setCategoryData] = useState (CategoryData)

    const findAndDeleteById =(data:CategoryModel[],id:string) => {
            
        data.forEach((row,index)=>{
            if(row.id ===id){
                data.splice(index,1)
            }
            else if (row.children.length){
               findAndDeleteById(row.children,id) 
            }
        })
    }

    const findAndAddById =(data:CategoryModel[],id:string) => {
            
        data.forEach((row)=>{
            if(row.id ===id){
                const categoryId = row.id + '.' + (row.children.length+1);
                row.children[row.children.length] = {id:categoryId,children:[],value:''}
                
            }else
             findAndDeleteById(row.children,id) 
            }
                
        )
    }

    
    const handleDelete = (id:string) => {

        const newData = [...categoryData]
        findAndDeleteById(newData,id)
        setCategoryData(newData)
            
    }
    const handleAdd = (id:string) => {

        const newData = [...categoryData]
        findAndAddById(newData,id)
        setCategoryData(newData)
            
    }

    return <CategoryView data={categoryData} handleDelete={handleDelete} handleAdd={handleAdd}/>
}

export default SecondPage



