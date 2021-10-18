// import React from "react"
// import { maxLengthCreator, required } from "../../../utils/validators/validators"
// import { Textarea } from "../../Common/FormsControls/FormsControls"
// import {Field, reduxForm} from "redux-form"

// const maxLength50 = maxLengthCreator(50)
// const AddMessageForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field component={Textarea}
//                 validate={[required, maxLength50]}
//                 name='newMessageBody' placeholder='Enter your message'/>
//             </div>
//             <div><button>Send</button></div>
//         </form>
//     )
// }

// export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)



import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       placeholder='Enter your message' name="newMessageBody" />
            </div>
            <div>
                <button>Send222</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);

