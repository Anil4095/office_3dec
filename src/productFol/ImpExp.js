import React from 'react'
import add,{sub,mult,div} from './Exp';

function ImpExp() {
    return (
        <div>
            <ol>
                <li>Sum = {add(40,4)}</li>
                <li>Sub = {sub(40,4)}</li>
                <li>Mul = {mult(40,4)}</li>
                <li>Div = {div(40,6)}</li>





                {/* <li>Anil</li>
                <li>Our teamLeader Sir is : {imp.teamLeader}</li>
                <li>our coligue is :{imp.coligue}</li>
                <li>My Name is: {imp.myFname()}</li>
                <li>My Name is: {imp.myLname()}</li> */}
            </ol>
        </div>
    )
}
export default ImpExp;
