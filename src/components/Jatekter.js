import { LISTA } from ".src/components/Adat.js";

export default function Jatekter(props){
    return(
        <>
        {
            props.LISTA.map((elem,index)=>{
                return(<Elem jel={elem}/>)
            })
        }

        </>
    )
}