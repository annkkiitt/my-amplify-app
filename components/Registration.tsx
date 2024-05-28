import { signOut } from "aws-amplify/auth"
import { Button } from '@aws-amplify/ui-react';
import TodoCreateForm from '../ui-components/TodoCreateForm';

export const Registration = () =>{

    async function handleSignOut() {
        await signOut()
      }

    return (
    <div className="h-screen w-full bg-slate-50">
        <div className="flex justify-end m-2">
            <Button type="button" onClick={handleSignOut}>
                Sign out
            </Button>
        </div>

       <div className="w-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center font-semibold text-4xl text-slate-700 bg-white p-10 backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-md">
                <div>
                    User Registration Form
                </div>
                <div>
                    <TodoCreateForm/>
                </div>
            </div>

           
       </div>
    </div>
    )
}