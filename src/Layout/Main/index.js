import React from "react"
import Background from '../../Components/Background';
import FormLayout from '../../Layout/Form'
import Header from "../../Layout/Header"
import FormWithTitle from "../../Layout/FormWithTitle"
import Footer from "../../Components/Footer"
import {Container} from 'react-bootstrap'



const main = () => (
  <Container fluid style={{padding: 0}}>
    <Background>
      <Header/>
      <FormLayout>
        <FormWithTitle title="APPLICATION FOR MONTHLY CHARGE ACCOUNT"/>
      </FormLayout>
    </Background>
    <Footer/>
  </Container>
)

export default main