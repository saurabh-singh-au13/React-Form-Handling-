import React from 'react'
import FacebookLogin from 'react-facebook-login';


const responseFacebook = (response) => {
    console.log(response)

}
const componentClicked = (data) => {
    console.warn(data)


} 

export class Facebook extends React.Component {
    render() {
        return (
            <div>
                <FacebookLogin
                appId="163374465791796"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
                />
            </div>
        )
    }
}

export default Facebook





