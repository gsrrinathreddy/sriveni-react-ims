import { useSelector } from "react-redux";
export default function Cart(){
    let cakesordered = useSelector((state)=>state.cake.noOfordered);
    let orderedChocolates = useSelector((state)=>state.Chocolates.noOfordered);
    let s2 = useSelector((state)=>state.Flower.noOfordered);

    
    return(
        <>
        <h2> ORDER</h2>
        <h4> ORDER CAKES={cakesordered}</h4>
        <h4> ORDER CHOCOLATES={orderedChocolates}</h4>
        <h4> ORDER FLOWERS={s2}</h4>
        

        </>
    )
    
}