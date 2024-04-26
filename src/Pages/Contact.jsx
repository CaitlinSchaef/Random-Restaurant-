import { Link } from "react-router-dom"
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../assets/Logo4.png'
import Info from '../assets/SquareLogo.png'



const Body = () => {
  return (

    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
  minBreakpoint="xs">
  <div>
    <Container className="mt-3 mb-3">
      <Row className="justify-content-md-center menuBody">
        <Col className="justify-content-center text-center mb-3" md="auto">
        <img
             alt="Contact Information"
             src={Info}
             width="auto"
             height="auto"
             className="d-inline-block align-top mt-2"
             ></img>
            <br></br>
            <br></br>
              <h3><strong>Contact</strong></h3>
                <p>
                348 E Main St, Lexington, KY 40507 <br></br>
                (555)555-5555 <br></br>
                Open: <br></br>
                Wednesday-Sunday <br></br>
                11:30am-2pm & 6pm-11pm
                </p>
              
        </Col>
      </Row>
    </Container>
  </div>
</ThemeProvider>
  )
}



function Contact() {
  return (
    <div className="p-5">
      <Body />
    </div>
  )
}



export default Contact