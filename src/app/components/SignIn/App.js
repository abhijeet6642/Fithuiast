import React from "react";
import * as Components from './Components';
import "./signIn.css";


function App() {
    const [ signIn, toggle] = React.useState(true);
    return(
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input type='text' placeholder='Name'/>
                    <Components.Input type='email' placeholder='Email'/>
                    <Components.Input type='password' placeholder='Password'/>
                    <Components.Button>Sign Up </Components.Button>

                </Components.Form>
            </Components.SignUpContainer>
            <Components.SignInContainer signIn={signIn}>
                <Components.Form>
                    <Components.Title>Sign In</Components.Title>
                    <Components.Input type='email' placeholder='Email'/>
                    <Components.Input type='password' placeholder='Password'/>
                    <Components.Anchor href='#'>Forgot your password</Components.Anchor>
                    <Components.Button> Sign In</Components.Button>
                </Components.Form>
                <Components.SignInContainer>

                    <Components.OverlayContainer signIn={signIn}>
                        <Components.Overlay signIn = {signIn}>
                            <Components.LeftOverlayPanel signIn={signIn}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To Keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton Onclick = {() => toggle(true)}>
                                Sign In
                            </Components.GhostButton>
                            </Components.LeftOverlayPanel>

                            <Components.RightOverlayPanel signIn= {signIn}>
                                <Components.Title>Hello Friend!</Components.Title>
                                <Components.Paragraph>
                                    Enter Your Personal details and start journey with us
                                </Components.Paragraph>
                                    <Components.GhostButton OnClick={()=> toggle(false)}>
                                        Sign Up
                                    </Components.GhostButton>
                                
                            </Components.RightOverlayPanel>
                        </Components.Overlay>
                    </Components.OverlayContainer>
                </Components.SignInContainer>

            </Components.SignInContainer>
        </Components.Container>
    )
}

export default App;